import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Standings } from './Standings';
import { Tabs } from '../../components/Tabs/Tabs';
import { Tab } from '../../components/Tabs/Tab';
import { Fixtures } from './Fixtures';
import { Scorers } from './Scorers';

interface ICompetitionProps extends RouteComponentProps<{ id: string }> {}

enum CompetitionTabs {
  STANDINGS = 'Standings',
  FIXTURES = 'Fixtures',
  SCORERS = 'Scorers'
}

export const Competition: React.FC<ICompetitionProps> = props => {
  const [activeTab, setActiveTab] = useState<CompetitionTabs>(
    CompetitionTabs.STANDINGS
  );

  const renderTabs = (): JSX.Element => (
    <Tabs>
      <Tab
        isActive={activeTab === CompetitionTabs.STANDINGS}
        label={CompetitionTabs.STANDINGS}
        onClick={() => setActiveTab(CompetitionTabs.STANDINGS)}
        icon='table_chart'
      />
      <Tab
        isActive={activeTab === CompetitionTabs.FIXTURES}
        label={CompetitionTabs.FIXTURES}
        onClick={() => setActiveTab(CompetitionTabs.FIXTURES)}
        icon='calendar_today'
      />
      <Tab
        isActive={activeTab === CompetitionTabs.SCORERS}
        label={CompetitionTabs.SCORERS}
        onClick={() => setActiveTab(CompetitionTabs.SCORERS)}
        icon='people'
      />
    </Tabs>
  );

  const renderContent = (): JSX.Element => {
    if (activeTab === CompetitionTabs.STANDINGS) {
      return <Standings id={parseInt(props.match.params.id)} />;
    }
    if (activeTab === CompetitionTabs.FIXTURES) {
      return <Fixtures id={parseInt(props.match.params.id)} />;
    }
    return <Scorers id={parseInt(props.match.params.id)} />;
  };

  return (
    <div className='competition'>
      {renderTabs()}
      {renderContent()}
    </div>
  );
};
