import * as React from 'react';
import { ITeam } from '../../models/team';
import { TeamCrest } from './TeamCrest';
import './team.scss';
import { Text } from '../Text/Text';
import { Players } from './Players';
import { splitString } from '../../utils/utils';
import { ColorBall } from './ColorBall';

interface ITeamInfoProps {
  team: ITeam;
}

export const TeamInfo: React.FC<ITeamInfoProps> = ({ team }) => {
  const getTeamColors = (): JSX.Element[] => {
    const colors: string[] = splitString(team.clubColors, '/');
    return colors.map((c: string, i: number) => (
      <React.Fragment key={`color-${i}`}>
        <span>{c}</span>
        <ColorBall color={c.toLowerCase().replace(/\s/g, '')} />
      </React.Fragment>
    ));
  };

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
      <div className='info-row'>
        <span className='info-text'>Colors: </span>
        {getTeamColors()}
      </div>
      {team.squad.length > 0 && (
        <div className='info-row'>
          <span className='info-text'>Coach: </span>
          <span>{team.squad.filter(p => p.role === 'COACH')[0].name}</span>
        </div>
      )}
      {team.squad.length > 0 && <Players players={team.squad} />}
    </div>
  );
};
