import * as React from 'react';
import { Query } from 'react-apollo';
import {
  ILatestMatchQuery,
  ILatestMatchQueryVariables,
  IMatch
} from '../../models/matches';
import { LATEST_MATCH_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { MatchInfo } from '../../components/Matches/MatchInfo';

interface ILatestMatchProps {
  id: number;
}

export const LatestMatch: React.FC<ILatestMatchProps> = ({ id }) => {
  const getLatestMatch = (matches: IMatch[]) => matches[matches.length - 1];

  return (
    <Query<ILatestMatchQuery, ILatestMatchQueryVariables>
      query={LATEST_MATCH_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <div className='latest-match'>
            <span>Latest match</span>
            <MatchInfo match={getLatestMatch(data.latestMatch.matches)} />
          </div>
        );
      }}
    </Query>
  );
};
