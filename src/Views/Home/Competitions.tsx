import * as React from 'react';
import { Query } from 'react-apollo';
import { CompetitionCard } from '../../components/Competitions/CompetitionCard';
import { Loading } from '../../components/Loading/Loading';
import '../../components/Competitions/competitions.scss';
import { ICompetition, ICompetitionsQuery } from '../../models/competitions';
import { COMPETITIONS_QUERY } from './queries';
import { Error } from '../../components/Error/Error';

export const Competitions: React.FC = () => {
  const getCompetitionCards = (competitions: ICompetition[]): JSX.Element[] => {
    return competitions.map((c: ICompetition) => (
      <React.Fragment key={c.id}>
        <CompetitionCard competition={c} />
      </React.Fragment>
    ));
  };

  return (
    <Query<ICompetitionsQuery> query={COMPETITIONS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <Error />;
        return (
          <div className='competitions'>
            {getCompetitionCards(data.competitions.competitions)}
          </div>
        );
      }}
    </Query>
  );
};
