import * as React from 'react';
import { Text } from '../../components/Text/Text';
import { Competitions } from './Competitions';
import { Tabs } from '../../components/Tabs/Tabs';
import { Tab } from '../../components/Tabs/Tab';
import { Followed } from './Followed';

enum HomeTabs {
  HOME = 'Home',
  FOLLOWED = 'Followed teams'
}

export const Home: React.FC = () => {
  const [active, setActive] = React.useState<HomeTabs>(HomeTabs.HOME);

  const renderTabs = (): JSX.Element => (
    <Tabs>
      <Tab
        isActive={active === HomeTabs.HOME}
        label={HomeTabs.HOME}
        onClick={() => setActive(HomeTabs.HOME)}
        icon='home'
      />
      <Tab
        isActive={active === HomeTabs.FOLLOWED}
        label={HomeTabs.FOLLOWED}
        onClick={() => setActive(HomeTabs.FOLLOWED)}
        icon='favorite_border'
      />
    </Tabs>
  );

  const renderContent = (): JSX.Element => {
    if (active === HomeTabs.HOME) {
      return (
        <React.Fragment>
          <Text>
            Welcome! Select a competition to see teams, standings and results.
          </Text>
          <Competitions />
        </React.Fragment>
      );
    }
    return <Followed />;
  };

  return (
    <div className='home'>
      {renderTabs()}
      {renderContent()}
    </div>
  );
};
