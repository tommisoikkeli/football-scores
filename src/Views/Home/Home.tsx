import * as React from 'react';
import { Text } from '../../components/Text/Text';
import { Competitions } from './Competitions';

export const Home: React.FC = () => (
  <div className='home'>
    <Text>Welcome! Select your favorite team(s) from the leagues below.</Text>
    <Competitions />
  </div>
);
