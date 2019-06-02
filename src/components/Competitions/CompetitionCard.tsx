import * as React from 'react';
import { ICompetition } from './queries';

interface ICompetitionCardProps {
  competition: ICompetition;
  onClick?: () => void;
}

export const CompetitionCard: React.FC<ICompetitionCardProps> = ({
  competition,
  onClick
}) => (
  <div className='competition-card' onClick={onClick}>
    <img
      className='competition-image'
      src={`/images/${competition.code}.png`}
      alt={`${competition.name}`}
    />
    <div className='competition-card-footer'>
      <div className='competition-name'>{competition.name}</div>
      <div className='competition-area'>{competition.area.name}</div>
    </div>
  </div>
);
