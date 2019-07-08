import * as React from 'react';
import { IMatch } from '../../models/matches';
import './matches.scss';
import { parseDate, parseTime, capitalize, removeUnderScores } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';
import { getResultClass } from './matchesHelpers';
import { ICompetition } from '../../models/competitions';

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
      <span
        className={`team-name ${score.winner === 'HOME_TEAM' ? 'winner' : ''}`}>
        {homeTeam.name}
      </span>
      <div className='score-block'>
        <span className='score'>{score.fullTime.homeTeam}</span>
        <span className='score'>-</span>
        <span className='score'>{score.fullTime.awayTeam}</span>
      </div>
      <span
        className={`team-name ${score.winner === 'AWAY_TEAM' ? 'winner' : ''}`}>
        {awayTeam.name}
      </span>
    </div>
  );

  return (
    <div
      className={`match-info-container ${
        activeTeam ? getResultClass(match, activeTeam) : ''
      }`}>
      {renderMatchHeader()}
      {renderMatchResult()}
    </div>
  );
};
