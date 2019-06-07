import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Query } from 'react-apollo';
import { Loading } from '../../components/Loading/Loading';
import { StandingsTable } from '../../components/StandingsTable/StandingsTable';
import { Text } from '../../components/Text/Text';
import { GroupsTable } from '../../components/StandingsTable/GroupsTable';
import { IStandings, IStandingsQuery, IStandingsQueryVariables } from '../../models/standings';
import { STANDINGS_QUERY } from './queries';

interface IStandingsProps extends RouteComponentProps<{ id: string }> {}

export const Standings: React.FC<IStandingsProps> = props => {
  const { competition } = props.location.state;

  const hasGroups = (standings: IStandings[]) => standings.length > 1;

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
            {data && !hasGroups(data.standings.standings) ? (
              <StandingsTable standings={data.standings.standings[0].table} />
            ) : (
              data && <GroupsTable groups={data.standings.standings} />
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
