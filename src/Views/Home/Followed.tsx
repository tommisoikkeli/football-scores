import * as React from 'react';
import { getLocalStorageItems } from '../../utils/utils';
import { ITeam } from '../../models/team';
import { FollowedTeam } from '../../components/Team/FollowedTeam';

export const Followed: React.FC = () => {
  const followedTeams = getLocalStorageItems('teams');
  const [active, setActive] = React.useState<string>('');

  const onItemClick = (name: string): void => {
    const isActive = (): boolean => active === name;
    if (isActive()) {
      setActive(''); // Close item on click if it is currently active.
    } else {
      setActive(name);
    }
  }

  return followedTeams.map((t: ITeam) => (
    <div key={t.id} className='followed-teams-container'>
      <FollowedTeam
        team={t}
        isActive={active === t.name}
        onClick={() => onItemClick(t.name)}
      />
    </div>
  ));
};
