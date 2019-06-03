import * as React from 'react';
import { ICompetition } from './queries';
import { Link } from 'react-router-dom';

interface ICompetitionCardProps {
  competition: ICompetition;
}

export const CompetitionCard: React.FC<ICompetitionCardProps> = ({
  competition
}) => (
  <div className='competition-card'>
    <Link
      to={{
        pathname: `/competition/${competition.id}`,
        state: { competition }
      }}>
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