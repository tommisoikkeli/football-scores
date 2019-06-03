import * as React from 'react';
import { Query } from 'react-apollo';
import {
  ICompetition,
  ICompetitionsQuery,
  COMPETITIONS_QUERY
} from './queries';
import './competitions.scss';
import { CompetitionCard } from './CompetitionCard';
import { Loading } from '../Loading/Loading';

export const Competitions: React.FC = () => {
  function getCompetitionCards(competitions: ICompetition[]): JSX.Element[] {
    return competitions.map((c: ICompetition) => (
      <React.Fragment key={c.id}>
        <CompetitionCard competition={c} />
      </React.Fragment>
    ));
  }

  return (
    <Query<ICompetitionsQuery> query={COMPETITIONS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;
        return (
          <div className='competitions'>
            {data && getCompetitionCards(data.competitions.competitions)}
          </div>
        );
      }}
    </Query>
  );
};
