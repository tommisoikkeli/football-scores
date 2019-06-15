import * as React from 'react';
import { Query } from 'react-apollo';
import { CompetitionCard } from '../../components/Competitions/CompetitionCard';
import { Loading } from '../../components/Loading/Loading';
import '../../components/Competitions/competitions.scss';
import { ICompetition, ICompetitionsQuery } from '../../models/competitions';
import { COMPETITIONS_QUERY } from './queries';

export const Competitions: React.FC = () => {
  const getCompetitionCards = (competitions: ICompetition[]): JSX.Element[] => {
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
