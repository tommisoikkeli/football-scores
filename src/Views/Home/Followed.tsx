import * as React from 'react';
import { getLocalStorageItems } from '../../utils/localStorageUtils';
import { ITeam } from '../../models/team';
import { FollowedTeam } from '../../components/Team/FollowedTeam';
import { LatestMatch } from './LatestMatch';
import { NextMatch } from './NextMatch';
import { Link } from 'react-router-dom';

export const Followed: React.FC = () => {
  const followedTeams = getLocalStorageItems('teams');
  const [active, setActive] = React.useState<string>('');

  const onItemClick = (name: string): void => {
    if (active === name) {
      setActive(''); // Close item on click if it is currently active.
    } else {
      setActive(name);
    }
  };

  const getFollowedTeams = (): JSX.Element[] => {
    return followedTeams.map((t: ITeam) => (
      <div key={t.id} className='followed-teams-container'>
        <FollowedTeam
          team={t}
          isActive={active === t.name}
          onClick={() => onItemClick(t.name)}>
          <LatestMatch id={t.id} activeTeam={t.name} />
          <NextMatch id={t.id} activeTeam={t.name} />
          <Link className='followed-team-link' to={`/team/${t.id}`}>
            Go to team page ⟶
          </Link>
        </FollowedTeam>
      </div>
    ));
  };

  return <React.Fragment>{getFollowedTeams()}</React.Fragment>;
};
