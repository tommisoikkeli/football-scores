import React from 'react';
import { StandingsTable } from './StandingsTable';
import { IStandings } from '../../models/standings';
import { removeUnderScores } from '../../utils/stringUtils';

interface IGroupsTableProps {
  groups: IStandings[];
}

export const GroupsTable: React.FC<IGroupsTableProps> = ({ groups }) => {
  const getGroupTables = (standings: IStandings[]): JSX.Element[] => {
    return standings.map((group: IStandings, i: number) => (
      <React.Fragment key={`standing-${i}`}>
        <StandingsTable
          standings={group.table}
          groupIdentifier={removeUnderScores(group.group)}
        />
      </React.Fragment>
    ));
  };

  return <div className='multi-group-table'>{getGroupTables(groups)}</div>;
};
