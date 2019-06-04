import * as React from 'react';
import './standings.scss';
import { ITeamStanding } from './queries';

interface IStandingsTableProps {
  standings: ITeamStanding[];
}

export const StandingsTable: React.FC<IStandingsTableProps> = ({ standings }) => {
  function getTableHeaders(): JSX.Element {
    return (
      <tr>
        <th title='Position'>Pos</th>
        <th title='Club'>Club</th>
        <th title='Games played'>P</th>
        <th title='Won'>W</th>
        <th title='Drew'>D</th>
        <th title='Lost'>L</th>
        <th title='Goals for'>GF</th>
        <th title='Goals against'>GA</th>
        <th title='Goal difference'>GD</th>
        <th title='Points'>P</th>
      </tr>
    );
  }

  function getTableStandings(table: ITeamStanding[]): JSX.Element[] {
    return table.map((s: ITeamStanding) => (
      <tr key={s.team.id}>
        <td>{s.position}</td>
        <td>
          <div className='team-name-block'>
            {<img src={getTeamCrest(s.team.crestUrl)} alt='crest' />}{' '}
            {s.team.name}
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

  function getTeamCrest(crestUrl: string): string {
    if (!crestUrl) {
      return '/images/crest.png';
    }
    return crestUrl;
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
