import * as React from 'react';
import { Query } from 'react-apollo';
import { ITeamQuery, ITeamQueryVariables } from '../../models/team';
import { TEAM_QUERY } from './queries';
import { RouteComponentProps } from 'react-router';
import { Loading } from '../../components/Loading/Loading';
import { TeamInfo } from '../../components/Team/TeamInfo';

interface ITeamProps extends RouteComponentProps<{ id: string }> {}

export const Team: React.FC<ITeamProps> = props => {
  return (
    <Query<ITeamQuery, ITeamQueryVariables>
      query={TEAM_QUERY}
      variables={{ id: parseInt(props.match.params.id) }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <React.Fragment>
            {data && <TeamInfo team={data.team} />}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
