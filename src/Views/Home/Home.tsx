import * as React from 'react';
import { Competitions } from '../../components/Competitions/Competitions';
import { Text } from '../../components/Text/Text';
import { Header } from '../../components/Header/Header';

export const Home: React.FC = () => (
  <div className='home'>
    <Header />
    <Text>Welcome! Select your favorite team(s) from the leagues below.</Text>
    <Competitions />
  </div>
);
