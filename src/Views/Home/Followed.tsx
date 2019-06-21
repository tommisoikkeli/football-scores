import * as React from 'react';
import { getLocalStorageItems } from '../../utils/utils';
import { ITeam } from '../../models/team';
import { FollowedTeam } from '../../components/Team/FollowedTeam';

export const Followed: React.FC = () => {
  const followedTeams = getLocalStorageItems('teams');

  return followedTeams.map((t: ITeam) => (
    <div key={t.id} className="followed-teams-container">
      <FollowedTeam team={t} />
    </div>
  ));
};
