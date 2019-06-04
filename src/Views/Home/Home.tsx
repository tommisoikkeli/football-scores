import * as React from 'react';
import { Competitions } from '../../components/Competitions/Competitions';
import { Text } from '../../components/Text/Text';

export const Home: React.FC = () => (
  <div className='home'>
    <Text>Welcome! Select your favorite team(s) from the leagues below.</Text>
    <Competitions />
  </div>
);
