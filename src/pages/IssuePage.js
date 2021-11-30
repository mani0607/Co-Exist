import React from 'react';
import { filter } from 'lodash';
import { useState } from 'react';
// material
import {
  Card,
  Container,
  Link,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import IssuesHead from '../components/_dashboard/issues/IssuesHead';
import IssueDetail from '../components/_dashboard/issues/Issue_detail'


import ISSUES from '../_mocks_/issues';

// ----------------------------------------------

const useStyles = makeStyles((theme) => ({
  marTop: {
    marginTop: theme.spacing(9),
  },
}));


const TABLE_HEAD = [
    { id: 'id', label: 'Issue-Id', alignRight: false },
    { id: 'desc', label: 'Description', alignRight: false },
    { id: 'by', label: 'Reported By', alignRight: false },
    { id: 'on', label: 'Reported On', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false }
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


export default function IssuePage()
{

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterName, setFilterName] = useState('');

    const [modalOpen, setModalOpen] = React.useState(false)  

    const modalOpens = () => {
          setModalOpen(true);
    }

    const modalClose = () => {
      setModalOpen(false);
    } 


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
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ISSUES.length) : 0;

    const filteredIssues = applySortFilter(ISSUES, getComparator(order, orderBy), filterName);

    return(
      <div>
      <Page title="Issues | Minimal-UI">
      <Container>
        <Card className={classes.marTop}>
            <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
            <Table>

            <IssuesHead
                        order={order}
                        orderBy={orderBy}
                        headLabel={TABLE_HEAD}
                        onRequestSort={handleRequestSort}
                        />


            <TableBody>
                  {filteredIssues
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id,desc,by,on,status } = row;

                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                        >
                          <TableCell align="left">
                          <Link onClick={modalOpens} href="#">
                            {id}
                          </Link>
                          </TableCell>
                          <TableCell align="left">{desc}</TableCell>
                          <TableCell align="left">{by}</TableCell>
                          <TableCell align="left">{on}</TableCell>
                          <TableCell align="left">{status}</TableCell>
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
                    count={ISSUES.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
      </Card>
      <IssueDetail open={modalOpen} onModalClose={modalClose} />
      </Container>
      </Page>
      </div>
    );
}