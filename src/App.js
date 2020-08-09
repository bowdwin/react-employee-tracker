// https://github.com/tannerlinsley/react-table github for react table,
// followed some examples in there
import React, { useState } from 'react';
// destructure react-table to use 3 functions
import { useTable, useSortBy, useFilters } from 'react-table';
import data from './data/data.json';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// assign accessor to the column title from data
// header is what is displayed on the page
// accessor property is property name thats in data.json
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
        Header: 'Name',
        accessor: 'name',
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

// destructure columns and data from props
const Table = ({ columns, data }) => {
  // sets variables to useSate on change
  const [filterInput, setFilterInput] = useState('');
  // declares
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    //
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  // function that will filter based off of the name
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter('name', value);
    setFilterInput(value);
  };

  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search by Name'}
      />
      {/* // use material UI to style table and map over header */}
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </>
  );
};

export default function App() {
  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );
}
