import * as React from 'react';
import { IScorer } from '../../models/scorers';
import './scorers.scss';
import { Link } from 'react-router-dom';

interface IScorersTableProps {
  scorers: IScorer[];
}

export const ScorersTable: React.FC<IScorersTableProps> = ({ scorers }) => {
  const renderTableHeader = (): JSX.Element => (
    <thead>
      <tr>
        <th>Player</th>
        <th>Team</th>
        <th>Position</th>
        <th>Number of goals</th>
      </tr>
    </thead>
  );

  const renderTableData = (): JSX.Element[] => {
    return scorers.map((s: IScorer) => (
      <tr key={s.player.id}>
        <td>{s.player.name}</td>
        <td>
          <Link to={`/team/${s.team.id}`}>{s.team.name}</Link>
        </td>
        <td>{s.player.position}</td>
        <td>{s.numberOfGoals}</td>
      </tr>
    ));
  };

  return (
    <div className='scorers-table-wrapper'>
      <table className='scorers-table'>
        {renderTableHeader()}
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};
