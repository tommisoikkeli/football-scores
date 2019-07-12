import * as React from 'react';
import { IMatch, MatchStatus } from '../../models/matches';
import './matches.scss';
import { capitalize, removeUnderScores } from '../../utils/stringUtils';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';
import { getResultClass, getMatchStatusClass } from './matchesHelpers';
import { ICompetition } from '../../models/competitions';
import { parseDate, parseTime } from '../../utils/dateUtils';

interface IMatchInfoProps {
  match: IMatch;
  activeTeam?: string;
  competition?: ICompetition;
}

export const MatchInfo: React.FC<IMatchInfoProps> = ({
  match,
  activeTeam,
  competition
}) => {
  if (!match) {
    return (
      <div className='no-matches-container'>
        <Text>No matches found</Text>
      </div>
    );
  }

  const { utcDate, matchday, stage, homeTeam, awayTeam, score } = match;
  const competitionToShow = competition ? competition : match.competition;

  const renderMatchHeader = (): JSX.Element => (
    <div className='match-info-header'>
      <Link to={`/competition/${competitionToShow.id}`}>
        <span>{competitionToShow.name}</span>
      </Link>
      <Text>
        {parseDate(new Date(utcDate))} {parseTime(new Date(utcDate))}
      </Text>
      <div className='matchday'>
        {matchday ? (
          <Text>Matchday {matchday}</Text>
        ) : (
          <Text>{capitalize(removeUnderScores(stage))}</Text>
        )}
      </div>
    </div>
  );

  const renderMatchResult = (): JSX.Element => (
    <div className='match-result'>
      <Link to={`/team/${homeTeam.id}`}>
        <span
          className={`team-name ${
            score.winner === 'HOME_TEAM' ? 'winner' : ''
          }`}>
          {homeTeam.name}
        </span>
      </Link>
      <div className='score-block'>
        <span className='score'>{score.fullTime.homeTeam}</span>
        <span className='score'>-</span>
        <span className='score'>{score.fullTime.awayTeam}</span>
      </div>
      <Link to={`/team/${awayTeam.id}`}>
        <span
          className={`team-name ${
            score.winner === 'AWAY_TEAM' ? 'winner' : ''
          }`}>
          {awayTeam.name}
        </span>
      </Link>
    </div>
  );

  return (
    <div
      className={`match-info-container ${
        activeTeam ? getResultClass(match, activeTeam) : ''
      }`}>
      <span
        className={`match-status ${getMatchStatusClass(
          MatchStatus[match.status as keyof typeof MatchStatus]
        )}`}>
        {removeUnderScores(match.status)}
      </span>
      {renderMatchHeader()}
      {renderMatchResult()}
    </div>
  );
};
