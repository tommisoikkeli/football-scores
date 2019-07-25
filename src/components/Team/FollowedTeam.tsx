import React from 'react';
import { ITeam } from '../../models/team';
import { TeamCrest } from './TeamCrest';

interface IFollowedTeamProps {
  team: ITeam;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const FollowedTeam: React.FC<IFollowedTeamProps> = ({
  team,
  isActive,
  onClick,
  children
}) => (
  <div
    className={`followed-team ${isActive ? 'active' : ''}`}
    onClick={onClick}>
    <div className='followed-team-header'>
      <TeamCrest crestUrl={team.crestUrl} />
      {team.name}
      <i className='material-icons-outlined'>keyboard_arrow_down</i>
    </div>
    <div className='followed-team-content'>{children}</div>
  </div>
);
