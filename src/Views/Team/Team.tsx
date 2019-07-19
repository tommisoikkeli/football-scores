import * as React from 'react';
import { Query } from 'react-apollo';
import { ITeamQuery, ITeamQueryVariables, ITeam } from '../../models/team';
import { TEAM_QUERY } from './queries';
import { RouteComponentProps } from 'react-router';
import { Loading } from '../../components/Loading/Loading';
import { TeamInfo } from '../../components/Team/TeamInfo';
import { Tabs } from '../../components/Tabs/Tabs';
import { Tab } from '../../components/Tabs/Tab';
import { Matches } from './Matches';
import { Error } from '../../components/Error/Error';

interface ITeamProps extends RouteComponentProps<{ id: string }> {}

enum TeamTabs {
  OVERVIEW = 'Overview',
  MATCHES = 'Matches'
}

export const Team: React.FC<ITeamProps> = props => {
  const [activeTab, setActiveTab] = React.useState<TeamTabs>(TeamTabs.OVERVIEW);

  const renderTabs = (): JSX.Element => (
    <Tabs>
      <Tab
        isActive={activeTab === TeamTabs.OVERVIEW}
        onClick={() => setActiveTab(TeamTabs.OVERVIEW)}
        label={TeamTabs.OVERVIEW}
        icon='info'
      />
      <Tab
        isActive={activeTab === TeamTabs.MATCHES}
        onClick={() => setActiveTab(TeamTabs.MATCHES)}
        label={TeamTabs.MATCHES}
        icon='schedule'
      />
    </Tabs>
  );

  const renderContent = (team: ITeam): JSX.Element => {
    if (activeTab === TeamTabs.OVERVIEW) {
      return (
        <React.Fragment>
          <TeamInfo team={team} />
        </React.Fragment>
      );
    }
    return (
      <div className='matches-container'>
        <Matches id={team.id} activeTeam={team.name} />
      </div>
    );
  };

  return (
    <Query<ITeamQuery, ITeamQueryVariables>
      query={TEAM_QUERY}
      variables={{ id: parseInt(props.match.params.id) }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <Error />;

        return (
          <React.Fragment>
            {renderTabs()}
            {renderContent(data.team)}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
