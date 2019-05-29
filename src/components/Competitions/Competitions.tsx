import * as React from 'react';
import { Query } from 'react-apollo';
import {
  ICompetition,
  ICompetitionsQuery,
  COMPETITIONS_QUERY
} from './queries';
import './competitions.scss';
import { CompetitionCard } from './CompetitionCard';

export const Competitions: React.FC = () => {
  function mapCompetitions(competitions: ICompetition[]): JSX.Element[] {
    return competitions.map((c: ICompetition) => (
      <React.Fragment key={c.id}>
        <CompetitionCard competition={c}/>
      </React.Fragment>
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
