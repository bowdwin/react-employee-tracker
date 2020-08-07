import React from 'react';
import { useTable } from 'react-table';
import data from './data/data.json';

const columns = [
  {
    Header: 'Employee Directory',
    columns: [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Office Number',
        accessor: 'officeNumber',
      },
    ],
  },
];

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );
}
