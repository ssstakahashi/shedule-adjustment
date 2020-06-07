import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const createBody = ( day:String, A:string, B:string, C:string, D:string, E:string) =>(
  { day, A, B, C, D, E }
  )
  const rows: { day:String; A: string; B: string; C: string; D: string; E: string;}[] = [
    createBody( "5/19", "OK", "NO", "OK", "NO", "OK"),
    createBody( "5/20", "OK", "NO", "OK", "NO", "OK"),
    createBody( "5/21", "OK", "NO", "OK", "NO", "OK"),
    createBody( "5/22", "OK", "NO", "OK", "NO", "OK"),
    createBody( "5/23", "OK", "NO", "OK", "NO", "OK"),
  ];

    const tableHeader: String[] = ["day","A","B","C","D","E"]

const ScheduleTable:FC = () => {

  const classes = useStyles();
  const history = useHistory();
  const onClickNew = () => history.push('/new');

  const bodyCell = (row:any) => {
    return (
    <>
      {tableHeader.map((x) => (
        <TableCell>{row[`${x}`]}</TableCell>
      ))}
    </>
    )
  }

  const tableArea = () =>(
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          {tableHeader.map( x =>(
            <TableCell>{x}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <TableRow>
            {bodyCell(row)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return (
    <>
      {tableArea()}
      <Button variant="contained" color="secondary" onClick={onClickNew}>
        Secondary
      </Button>
    </>
  );
}

export default ScheduleTable;
