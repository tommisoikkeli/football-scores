import React from 'react';
import { IPlayer } from '../../models/team';
import { Text } from '../Text/Text';
import { checkPlayerAndAddGoatIfNeeded } from '../../utils/goatUtils';

interface IPlayersProps {
  players: IPlayer[];
}

type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Attacker';

export const Players: React.FC<IPlayersProps> = ({ players }) => {
  const filterPlayersByPosition = (position: Position): IPlayer[] =>
    players.filter((p: IPlayer) => p.position === position);

  const getPlayers = (players: IPlayer[]): JSX.Element[] =>
    players.map((p: IPlayer) => (
      <div className='player-info' key={p.id}>
        <span>{checkPlayerAndAddGoatIfNeeded(p.name)}</span>
        {p.shirtNumber ? (
          <span className='shirt-number'>{p.shirtNumber}</span>
        ) : null}
      </div>
    ));

  return (
    <div className='squad'>
      <div className='position-divider'>
        <Text>Goalkeepers</Text>
        {getPlayers(filterPlayersByPosition('Goalkeeper'))}
      </div>
      <div className='position-divider'>
        <Text>Defenders</Text>
        {getPlayers(filterPlayersByPosition('Defender'))}
      </div>
      <div className='position-divider'>
        <Text>Midfielders</Text>
        {getPlayers(filterPlayersByPosition('Midfielder'))}
      </div>
      <div className='position-divider'>
        <Text>Attackers</Text>
        {getPlayers(filterPlayersByPosition('Attacker'))}
      </div>
    </div>
  );
};
