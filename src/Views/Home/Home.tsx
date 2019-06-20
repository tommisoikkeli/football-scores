import * as React from 'react';
import { Text } from '../../components/Text/Text';
import { Competitions } from './Competitions';
import { Tabs } from '../../components/Tabs/Tabs';
import { Tab } from '../../components/Tabs/Tab';

enum HomeTabs {
  HOME = 'Home',
  SAVED = 'Saved'
}

export const Home: React.FC = () => {
  const [active, setActive] = React.useState<HomeTabs>(HomeTabs.HOME);

  return (
    <div className='home'>
      <Tabs>
        <Tab
          isActive={active === HomeTabs.HOME}
          label={'Home'}
          onClick={() => setActive(HomeTabs.HOME)}
        />
        <Tab
          isActive={active === HomeTabs.SAVED}
          label='Saved'
          onClick={() => setActive(HomeTabs.SAVED)}
        />
      </Tabs>
      <Text>
        Welcome! Select a competition to see teams, standings and results.
      </Text>
      <Competitions />
    </div>
  );
};
