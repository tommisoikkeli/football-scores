import * as React from 'react';
import './standings.scss';
import { TeamCrest } from '../Team/TeamCrest';
import { ITeamStanding } from '../../models/standings';
import { Link } from 'react-router-dom';

interface IStandingsTableProps {
  standings: ITeamStanding[];
  groupIdentifier?: string;
}

export const StandingsTable: React.FC<IStandingsTableProps> = ({
  standings,
  groupIdentifier
}) => {
  const getTableHeaders = (): JSX.Element => {
    return (
      <thead>
        {groupIdentifier && (
          <tr>
            <th className='group-identifier'>{groupIdentifier}</th>
          </tr>
        )}
        <tr>
          <th title='Position'>Pos</th>
          <th title='Club'>Club</th>
          <th title='Games played'>G</th>
          <th title='Win'>W</th>
          <th title='Draw'>D</th>
          <th title='Lost'>L</th>
          <th title='Goals for'>GF</th>
          <th title='Goals against'>GA</th>
          <th title='Goal difference'>GD</th>
          <th title='Points'>P</th>
        </tr>
      </thead>
    );
  }

  const getTableStandings = (standings: ITeamStanding[]): JSX.Element[] => {
    return standings.map((s: ITeamStanding) => (
      <tr key={s.team.id}>
        <td>{s.position}</td>
        <td>
          <div className='team-name-block'>
            <TeamCrest crestUrl={s.team.crestUrl} />{' '}
            <Link to={`/team/${s.team.id}`}>{s.team.name}</Link>
          </div>
        </td>
        <td>{s.playedGames}</td>
        <td>{s.won}</td>
        <td>{s.draw}</td>
        <td>{s.lost}</td>
        <td>{s.goalsFor}</td>
        <td>{s.goalsAgainst}</td>
        <td>{s.goalDifference}</td>
        <td>{s.points}</td>
      </tr>
    ));
  }

  return (
    <div className='standings-table-wrapper'>
      <table className='standings-table'>
        {getTableHeaders()}
        <tbody>{getTableStandings(standings)}</tbody>
      </table>
    </div>
  );
};
