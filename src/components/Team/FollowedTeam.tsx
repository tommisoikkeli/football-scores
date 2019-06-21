import * as React from 'react';
import { ITeam } from '../../models/team';
import { TeamCrest } from './TeamCrest';

interface IFollowedTeamProps {
  team: ITeam;
}

export const FollowedTeam: React.FC<IFollowedTeamProps> = ({ team }) => (
  <div className="followed-team">
    <TeamCrest crestUrl={team.crestUrl} />
    {team.name}
    <i className="material-icons-outlined">keyboard_arrow_down</i>
  </div>
);
