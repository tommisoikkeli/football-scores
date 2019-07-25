import React from 'react';
import { Link } from 'react-router-dom';
import { ICompetition } from '../../models/competitions';

interface ICompetitionCardProps {
  competition: ICompetition;
}

export const CompetitionCard: React.FC<ICompetitionCardProps> = ({
  competition
}) => (
  <div className='competition-card'>
    <Link to={`/competition/${competition.id}`}>
      <img
        className='competition-image'
        src={`/images/${competition.code}.png`}
        alt={`${competition.name}`}
      />
      <div className='competition-card-footer'>
        <div className='competition-name'>{competition.name}</div>
        <div className='competition-area'>{competition.area.name}</div>
      </div>
    </Link>
  </div>
);
