import React, { useState, useEffect } from 'react';
import { ITeam, IPlayer } from '../../models/team';
import { TeamCrest } from './TeamCrest';
import './team.scss';
import { Text } from '../Text/Text';
import { Players } from './Players';
import {
  setLocalStorageItem,
  removeLocalStorageItem,
  isTeamSaved
} from '../../utils/localStorageUtils';
import { ColorBall } from './ColorBall';
import { Button, ButtonType } from '../Button/Button';
import { splitString } from '../../utils/stringUtils';

interface ITeamInfoProps {
  team: ITeam;
}

const LOCAL_STORAGE_KEY: string = 'teams';

export const TeamInfo: React.FC<ITeamInfoProps> = ({ team }) => {
  const isTeamFollowed: boolean = isTeamSaved(LOCAL_STORAGE_KEY, team.id);
  const [isFollowed, setIsFollowed] = useState<boolean>(isTeamFollowed);

  // Save or remove team on button click.
  // To avoid duplicates, it first checks if team is saved already
  useEffect(() => {
    const { id, name, crestUrl } = team;
    if (isFollowed && !isTeamFollowed) {
      setLocalStorageItem(LOCAL_STORAGE_KEY, { id, name, crestUrl });
    }
    if (!isFollowed && isTeamFollowed) {
      removeLocalStorageItem(LOCAL_STORAGE_KEY, { id, name, crestUrl });
    }
  }, [isFollowed, team, isTeamFollowed]);

  const getTeamColors = (): JSX.Element[] => {
    if (!team.clubColors) {
      return;
    }
    // Make an array from the team colors.
    const colors: string[] = splitString(team.clubColors, '/');

    // Map the colors and create color balls by using the color as background.
    // Color passed to the ColorBall component is converted to lowercase and spaces are removed.
    // For example: 'Sky Blue' -> 'skyblue'.
    return colors.map((c: string, i: number) => (
      <React.Fragment key={`color-${i}`}>
        <span>{c}</span>
        <ColorBall color={c.toLowerCase().replace(/\s/g, '')} />
      </React.Fragment>
    ));
  };

  const getTeamCoach = (): IPlayer =>
    team.squad.filter(p => p.role === 'COACH')[0];

  const renderTeamInfoTopRows = (): JSX.Element => (
    <React.Fragment>
      <Text>
        {team.name} ({team.tla})
      </Text>
      <TeamCrest crestUrl={team.crestUrl} />
      <Button
        onClick={() => setIsFollowed(!isFollowed)}
        text={`${!isFollowed ? 'Follow' : 'Unfollow'}`}
        type={ButtonType.FAVORITE}
        additionalClass={isFollowed && 'clicked'}
      />
    </React.Fragment>
  );

  const renderInfoRows = (): JSX.Element => (
    <React.Fragment>
      <div className='info-row'>
        <span className='info-text'>Country: </span>
        <span>{team.area.name}</span>
      </div>
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
      {!!getTeamCoach() && (
        <div className='info-row'>
          <span className='info-text'>Coach: </span>
          <span>{getTeamCoach().name}</span>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div className='team-info-container'>
      {renderTeamInfoTopRows()}
      {renderInfoRows()}
      {team.squad.length > 0 && <Players players={team.squad} />}
    </div>
  );
};
