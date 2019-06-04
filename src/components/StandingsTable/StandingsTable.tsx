import * as React from 'react';
import './standings.scss';
import { ITeamStanding } from './queries';
import { TeamCrest } from './TeamCrest';

interface IStandingsTableProps {
  standings: ITeamStanding[];
}

export const StandingsTable: React.FC<IStandingsTableProps> = ({
  standings
}) => {
  function getTableHeaders(): JSX.Element {
    return (
      <tr>
        <th title='Position'>Pos</th>
        <th title='Club'>Club</th>
        <th title='Games played'>P</th>
        <th title='Wn'>W</th>
        <th title='Draw'>D</th>
        <th title='Loss'>L</th>
        <th title='Goals for'>GF</th>
        <th title='Goals against'>GA</th>
        <th title='Goal difference'>GD</th>
        <th title='Points'>P</th>
      </tr>
    );
  }

  function getTableStandings(standings: ITeamStanding[]): JSX.Element[] {
    return standings.map((s: ITeamStanding) => (
      <tr key={s.team.id}>
        <td>{s.position}</td>
        <td>
          <div className='team-name-block'>
            <TeamCrest crestUrl={s.team.crestUrl} /> {s.team.name}
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
        <thead>{getTableHeaders()}</thead>
        <tbody>{getTableStandings(standings)}</tbody>
      </table>
    </div>
  );
};
