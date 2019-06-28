import * as React from 'react';
import { IMatch } from '../../models/matches';
import './matches.scss';
import { parseDate, parseTime, capitalize } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';
import { getResultClass } from './matchesHelpers';

interface IMatchInfoProps {
  match: IMatch;
  activeTeam: string;
}

export const MatchInfo: React.FC<IMatchInfoProps> = ({ match, activeTeam }) => {
  const {
    competition,
    utcDate,
    matchday,
    stage,
    homeTeam,
    awayTeam,
    score
  } = match;

  const renderMatchHeader = (): JSX.Element => (
    <div className='match-info-header'>
      <Link to={`/competition/${competition.id}`}>
        <span>{competition.name}</span>
      </Link>
      <Text>
        {parseDate(new Date(utcDate))} {parseTime(new Date(utcDate))}
      </Text>
      <div className='matchday'>
        {matchday ? (
          <Text>Matchday {matchday}</Text>
        ) : (
          <Text>{capitalize(stage.replace(/_/g, ' '))}</Text>
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
      className={`match-info-container ${getResultClass(match, activeTeam)}`}>
      {renderMatchHeader()}
      {renderMatchResult()}
    </div>
  );
};
