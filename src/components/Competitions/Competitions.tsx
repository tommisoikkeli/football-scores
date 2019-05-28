import * as React from 'react';
import { Query } from 'react-apollo';
import {
  ICompetition,
  ICompetitionsQuery,
  COMPETITIONS_QUERY
} from './queries';

export const Competitions: React.FC = () => {
  function mapCompetitions(competitions: ICompetition[]) {
    return competitions.map((c: ICompetition) => (
      <div key={c.id} className='competition'>
        <span>{c.name}</span>
      </div>
    ));
  }

  return (
    <Query<ICompetitionsQuery> query={COMPETITIONS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading..</div>;
        if (error) return <div>Error</div>;
        return (
          <div className='competitions'>
            {data && mapCompetitions(data.competitions.competitions)}
          </div>
        );
      }}
    </Query>
  );
};
