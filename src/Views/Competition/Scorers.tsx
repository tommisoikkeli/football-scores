import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SCORERS_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { IScorersQuery, IScorersQueryVariables } from '../../models/scorers';
import { ScorersTable } from '../../components/Scorers/ScorersTable';
import { Error } from '../../components/Error/Error';

interface IScorersProps {
  id: number;
}

export const Scorers: React.FC<IScorersProps> = ({ id }) => {
  const { loading, error, data } = useQuery<
    IScorersQuery,
    IScorersQueryVariables
  >(SCORERS_QUERY, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className='scorers'>
      <ScorersTable scorers={data.scorers.scorers} />
    </div>
  );
};
