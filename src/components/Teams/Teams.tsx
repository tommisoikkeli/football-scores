import * as React from 'react';
import { Query } from 'react-apollo';
import { TEAMS_QUERY, ITeamsQuery, ITeamsQueryVariables } from './queries';
import { Loading } from '../Loading/Loading';
import { RouteComponentProps } from 'react-router';

interface ITeamsProps extends RouteComponentProps<{ id: string }> {}

export const Teams: React.FC<ITeamsProps> = props => {
  return (
    <Query<ITeamsQuery, ITeamsQueryVariables>
      query={TEAMS_QUERY}
      variables={{ id: parseInt(props.match.params.id) }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;
        return <div>{data && data.teams.teams.map(team => team.name)}</div>;
      }}
    </Query>
  );
};
