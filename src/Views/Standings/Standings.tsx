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
import { Text } from '../../components/Text/Text';

interface IStandingsProps extends RouteComponentProps<{ id: string }> {}

export const Standings: React.FC<IStandingsProps> = props => {
  const { competition } = props.location.state;

  return (
    <Query<IStandingsQuery, IStandingsQueryVariables>
      query={STANDINGS_QUERY}
      variables={{ id: parseInt(props.match.params.id) }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;
        return (
          <React.Fragment>
            <Text>{competition.name}</Text>
            {data && (
              <StandingsTable standings={data.standings.standings[0].table} />
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
