import * as React from 'react';
import { Text } from '../../components/Text/Text';
import { Competitions } from './Competitions';

export const Home: React.FC = () => (
  <div className='home'>
    <Text>Welcome! Select a competition to see teams, standings and results.</Text>
    <Competitions />
  </div>
);
