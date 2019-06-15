import * as React from 'react';
import { IPlayer } from '../../models/team';
import { Text } from '../Text/Text';

interface IPlayersProps {
  players: IPlayer[];
}

type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Attacker';

export const Players: React.FC<IPlayersProps> = ({ players }) => {
  const filterPlayersByPosition = (
    players: IPlayer[],
    position: Position
  ): IPlayer[] => players.filter((p: IPlayer) => p.position === position);

  const getPlayers = (players: IPlayer[]): JSX.Element[] =>
    players.map((p: IPlayer) => (
      <div className='player-info' key={p.id}>
        {p.name}
      </div>
    ));

  return (
    <div className='squad'>
      <div className='position-divider'>
        <Text>Goalkeepers</Text>
        {getPlayers(filterPlayersByPosition(players, 'Goalkeeper'))}
      </div>
      <div className='position-divider'>
        <Text>Defenders</Text>
        {getPlayers(filterPlayersByPosition(players, 'Defender'))}
      </div>
      <div className='position-divider'>
        <Text>Midfielders</Text>
        {getPlayers(filterPlayersByPosition(players, 'Midfielder'))}
      </div>
      <div className='position-divider'>
        <Text>Attackers</Text>
        {getPlayers(filterPlayersByPosition(players, 'Attacker'))}
      </div>
    </div>
  );
};
