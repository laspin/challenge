import React from 'react';
import { memo } from 'react';
import { TableContainer } from './Table.styles';
import { SkeleLoader } from '../loader-comp';

const Table = ({ teams, loading }) => {
  if (loading) {
    return <SkeleLoader />;
  }
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>
            No
            <span className="resize-handle"></span>
          </th>
          <th>
            Score
            <span className="resize-handle"></span>
          </th>
          <th>
            Wins
            <span className="resize-handle"></span>
          </th>
          <th>
            Losses
            <span className="resize-handle"></span>
          </th>
          <th>
            Draws
            <span className="resize-handle"></span>
          </th>
        </tr>
      </thead>

      <tbody>
        {teams.map((itm) => (
          <tr key={itm._id}>
            <td>{itm?.teamNo}</td>
            <td>{itm?.score}</td>
            <td>{itm?.wins}</td>
            <td>{itm?.losses}</td>
            <td>{itm?.draws}</td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};
export default memo(Table);
