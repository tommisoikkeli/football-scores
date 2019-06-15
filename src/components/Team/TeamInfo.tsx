import * as React from 'react';
import { ITeam } from '../../models/team';
import { TeamCrest } from './TeamCrest';
import './team.scss';
import { Text } from '../Text/Text';

interface ITeamInfoProps {
  team: ITeam;
}

export const TeamInfo: React.FC<ITeamInfoProps> = ({ team }) => {
  return (
    <div className='team-info-container'>
      <Text>
        {team.name} ({team.tla})
      </Text>
      <TeamCrest crestUrl={team.crestUrl} />
      <div className='info-row'>
        <span className='info-text'>Founded: </span>
        <span>{team.founded}</span>
      </div>
      <div className='info-row'>
        <span className='info-text'>Venue: </span>
        <span>{team.venue}</span>
      </div>
    </div>
  );
};
