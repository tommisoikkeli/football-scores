import * as React from 'react';
import { Query } from 'react-apollo';
import { SCORERS_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import {
  IScorersQuery,
  IScorersQueryVariables,
  IScorer
} from '../../models/scorers';
import { ScorersTable } from '../../components/Scorers/ScorersTable';

interface IScorersProps {
  id: number;
}

export const Scorers: React.FC<IScorersProps> = ({ id }) => {
  return (
    <Query<IScorersQuery, IScorersQueryVariables>
      query={SCORERS_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <div className='scorers'>
            <ScorersTable scorers={data.scorers.scorers} />
          </div>
        );
      }}
    </Query>
  );
};
