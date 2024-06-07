import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dealsData from "../data/deals.json";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function DealsDetails() {

  const getBgColor = (status) => {
    if(status === "Delivered")
    {
      return {backgroundColor : '#BCFFBC'}
    }
    else if(status === "Pending")
    {
      return {backgroundColor : '#ffc5af'}
    }
    else
    {
      return {backgroundColor : '#C9B1FF'}
    }
  }


  return (
    // <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#F1F4F9'}}>
            <TableCell style={{justifyContent:'space-evenly'}}><Typography style={{fontWeight:600}}>Product Name</Typography></TableCell>
            <TableCell style={{justifyContent:'space-evenly'}} ><Typography style={{fontWeight:600}}>Location</Typography></TableCell>
            <TableCell style={{justifyContent:'space-evenly'}}><Typography style={{fontWeight:600,marginLeft:'15px'}}>Date</Typography></TableCell>
            <TableCell style={{justifyContent:'space-evenly'}}><Typography style={{fontWeight:600,marginLeft:'8px'}}>Time</Typography></TableCell>
            <TableCell style={{justifyContent:'space-evenly'}}><Typography style={{fontWeight:600}}>Items</Typography></TableCell>
            <TableCell style={{justifyContent:'space-evenly'}}><Typography style={{fontWeight:600}}>Amount</Typography></TableCell>
            <TableCell style={{justifyContent:'space-evenly'}}><Typography style={{fontWeight:600,marginLeft:'20px'}}>Status</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dealsData.map((deal) => (
            <TableRow
              key={deal.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {deal.productName}
              </TableCell>
              <TableCell style={{justifyContent:'space-evenly'}}>{deal.location}</TableCell>
              <TableCell style={{justifyContent:'space-evenly'}}>{deal.date}</TableCell>
              <TableCell style={{justifyContent:'space-evenly'}}>{deal.time}</TableCell>
              <TableCell style={{justifyContent:'space-evenly',marginLeft:'20px'}}>{deal.numberOfItems}</TableCell>
              <TableCell style={{justifyContent:'space-evenly'}}>Rs. {deal.amount}</TableCell>
              <TableCell style={{justifyContent:'space-evenly',textAlign:'center'}}><Card style={{width:'85px',padding:'4px',...getBgColor(deal.status)}}><Typography style={{color:'#000',fontSize:'13px'}}>{deal.status}</Typography></Card></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    // </TableContainer>
  );
}
