import * as React from 'react';
import { IMatch } from '../../models/matches';
import './matches.scss';
import { parseDate } from '../../utils/utils';

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
    if (score.winner === 'HOME_TEAM' && homeTeam.name === activeTeam) {
      return 'win';
    } else if (score.winner === 'AWAY_TEAM' && awayTeam.name === activeTeam) {
      return 'win';
    } else if (score.winner === 'HOME_TEAM' && homeTeam.name !== activeTeam) {
      return 'loss';
    } else if (score.winner === 'AWAY_TEAM' && awayTeam.name !== activeTeam) {
      return 'loss';
    } else {
      return 'draw';
    }
  };

  return (
    <div className={`match-info-container ${getResultClass()}`}>
      <div className='match-info-header'>
        <span>{competition.name}</span>
        <span>{parseDate(new Date(utcDate))}</span>
        {matchday ? (
          <span>Matchday {matchday}</span>
        ) : (
          <span>{stage.replace(/_/g, ' ')}</span>
        )}
      </div>
      <div className='match-result'>
        <span
          className={`team-name ${
            score.winner === 'HOME_TEAM' ? 'winner' : ''
          }`}>
          {homeTeam.name}
        </span>
        <span>{score.fullTime.homeTeam}</span>
        <span>-</span>
        <span>{score.fullTime.awayTeam}</span>
        <span
          className={`team-name ${
            score.winner === 'AWAY_TEAM' ? 'winner' : ''
          }`}>
          {awayTeam.name}
        </span>
      </div>
    </div>
  );
};
