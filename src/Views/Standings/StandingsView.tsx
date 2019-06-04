import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Query } from 'react-apollo';
import {
  IStandingsQuery,
  IStandingsQueryVariables,
  STANDINGS_QUERY
} from '../../components/StandingsTable/queries';
import { Loading } from '../../components/Loading/Loading';
import { StandingsTable } from '../../components/StandingsTable/StandingsTable';
import { Header } from '../../components/Header/Header';

interface IStandingsProps extends RouteComponentProps<{ id: string }> {}

export const StandingsView: React.FC<IStandingsProps> = props => {
  return (
    <Query<IStandingsQuery, IStandingsQueryVariables>
      query={STANDINGS_QUERY}
      variables={{ id: parseInt(props.match.params.id) }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;
        return (
          <React.Fragment>
            <Header />
            {data && (
              <StandingsTable standings={data.standings.standings[0].table} />
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
