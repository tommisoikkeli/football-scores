import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  INextMatchQuery,
  INextMatchQueryVariables
} from '../../models/matches';
import { NEXT_MATCH_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { MatchInfo } from '../../components/Matches/MatchInfo';

interface INextMatchProps {
  id: number;
  activeTeam: string;
}

export const NextMatch: React.FC<INextMatchProps> = ({ id, activeTeam }) => {
  const { loading, error, data } = useQuery<
    INextMatchQuery,
    INextMatchQueryVariables
  >(NEXT_MATCH_QUERY, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <div className='next-match'>
      <span>Next match</span>
      <MatchInfo match={data.nextMatch.matches[0]} activeTeam={activeTeam} />
    </div>
  );
};
