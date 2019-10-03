import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CompetitionCard } from '../../components/Competitions/CompetitionCard';
import { Loading } from '../../components/Loading/Loading';
import '../../components/Competitions/competitions.scss';
import { ICompetition, ICompetitionsQuery } from '../../models/competitions';
import { COMPETITIONS_QUERY } from './queries';
import { Error } from '../../components/Error/Error';

export const Competitions: React.FC = () => {
  const getCompetitionCards = (competitions: ICompetition[]): JSX.Element[] => {
    return competitions.map((c: ICompetition) => (
      <React.Fragment key={c.id}>
        <CompetitionCard competition={c} />
      </React.Fragment>
    ));
  };

  const { loading, error, data } = useQuery<ICompetitionsQuery>(
    COMPETITIONS_QUERY
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className='competitions'>
      {getCompetitionCards(data.competitions.competitions)}
    </div>
  );
};
