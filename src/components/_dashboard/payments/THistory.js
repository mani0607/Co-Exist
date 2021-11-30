import React from 'react';
import { filter } from 'lodash';
import { useState } from 'react';
// material
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableContainer,
  TablePagination
} from '@mui/material';
import Scrollbar from '../../Scrollbar';
import PaymentsHead from './PaymentsHead';


import PAYMENTLIST from '../../../_mocks_/history';

// ----------------------------------------------


const TABLE_HEAD = [
    { id: 'date', label: 'Date', alignRight: false },
    { id: 'amount', label: 'Amount', alignRight: false },
    { id: 'description', label: 'Description', alignRight: false },
    { id: 'method', label: 'Method', alignRight: false }
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }


export default function THistory()
{

    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('date');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterName, setFilterName] = useState('');


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - PAYMENTLIST.length) : 0;

    const filteredPayments = applySortFilter(PAYMENTLIST, getComparator(order, orderBy), filterName);

    return(
      <div>
            <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
            <Table>

            <PaymentsHead
                        order={order}
                        orderBy={orderBy}
                        headLabel={TABLE_HEAD}
                        onRequestSort={handleRequestSort}
                        />


            <TableBody>
                  {filteredPayments
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { date,amount,description,method } = row;

                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                        >
                          <TableCell align="left">{date}</TableCell>
                          <TableCell align="left">{amount}</TableCell>
                          <TableCell align="left">{description}</TableCell>
                          <TableCell align="left">{method}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
            
            </Table>
            </TableContainer>
            </Scrollbar>    

            <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={PAYMENTLIST.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
      </div>

    );
}