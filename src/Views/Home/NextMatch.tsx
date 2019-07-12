import * as React from 'react';
import { Query } from 'react-apollo';
import { INextMatchQuery, INextMatchQueryVariables } from '../../models/matches';
import { NEXT_MATCH_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { MatchInfo } from '../../components/Matches/MatchInfo';

interface INextMatchProps {
  id: number;
}

export const NextMatch: React.FC<INextMatchProps> = ({ id }) => {
  return (
    <Query<INextMatchQuery, INextMatchQueryVariables>
      query={NEXT_MATCH_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <div className='next-match'>
            <span>Next match</span>
            <MatchInfo match={data.nextMatch.matches[0]} />
          </div>
        );
      }}
    </Query>
  );
};
