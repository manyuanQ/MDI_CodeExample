import React from 'react';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ header: string; accessor: string }>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table role="table" aria-label="Data Table">
      <thead>
        <tr role="row">
          {columns.map((column, index) => (
            <th key={index} role="columnheader">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} role="row">
            {columns.map((column, colIndex) => (
              <td key={colIndex} role="cell">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;