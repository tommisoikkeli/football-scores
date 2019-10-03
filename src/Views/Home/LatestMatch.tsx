import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  ILatestMatchQuery,
  ILatestMatchQueryVariables,
  IMatch
} from '../../models/matches';
import { LATEST_MATCH_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { MatchInfo } from '../../components/Matches/MatchInfo';
import { Error } from '../../components/Error/Error';

interface ILatestMatchProps {
  id: number;
  activeTeam: string;
}

export const LatestMatch: React.FC<ILatestMatchProps> = ({
  id,
  activeTeam
}) => {
  const getLatestMatch = (matches: IMatch[]) => matches[matches.length - 1];

  const { loading, error, data } = useQuery<
    ILatestMatchQuery,
    ILatestMatchQueryVariables
  >(LATEST_MATCH_QUERY, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className='latest-match'>
      <span>Latest match</span>
      <MatchInfo
        match={getLatestMatch(data.latestMatch.matches)}
        activeTeam={activeTeam}
      />
    </div>
  );
};
