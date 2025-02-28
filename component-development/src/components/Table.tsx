import React from 'react';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ header: string; accessor: string }>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table className="table" aria-label="Data Table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} scope="col">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col.accessor}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
