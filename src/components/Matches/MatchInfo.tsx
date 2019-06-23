import * as React from 'react';
import { IMatch } from '../../models/matches';
import './matches.scss';
import { parseDate, parseTime, capitalize } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';
import {
  isHomeTeamWin,
  isAwayTeamWin,
  isDraw,
  isHomeTeamActiveTeam,
  isAwayTeamActiveTeam
} from './matchesHelpers';

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

  const getResultClass = (): string => {
    if (isHomeTeamWin(match) && isHomeTeamActiveTeam(match, activeTeam)) {
      return 'win';
    } else if (isAwayTeamWin(match) && isAwayTeamActiveTeam(match, activeTeam)) {
      return 'win';
    } else if (isHomeTeamWin(match) && !isHomeTeamActiveTeam(match, activeTeam)) {
      return 'loss';
    } else if (isAwayTeamWin(match) && !isAwayTeamActiveTeam(match, activeTeam)) {
      return 'loss';
    } else if (isDraw(match)) {
      return 'draw';
    } else {
      return 'scheduled';
    }
  };

  const renderMatchHeader = (): JSX.Element => (
    <div className='match-info-header'>
      <Link
        to={{
          pathname: `/competition/${competition.id}`,
          state: { competition }
        }}>
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
    <div className={`match-info-container ${getResultClass()}`}>
      {renderMatchHeader()}
      {renderMatchResult()}
    </div>
  );
};
