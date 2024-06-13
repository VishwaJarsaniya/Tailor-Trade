import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, Typography } from "@mui/material";

export default function DealsDetails() {
  const getBgColor = (status) => {
    if (status === "Delivered") {
      return { backgroundColor: '#BCFFBC' };
    } else if (status === "Pending") {
      return { backgroundColor: '#ffc5af' };
    } else {
      return { backgroundColor: '#C9B1FF' };
    }
  };

  const [orders, setOrders] = useState([]);
  const [completeOrders, setCompleteOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/orders", {
          method: "GET",
        });
        const result = await response.json();
        setOrders(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      const clientsPromises = orders.map(async (order) => {
        try {
          const clientResponse = await fetch(`http://localhost:8080/client/orders/${order.client}`, {
            method: "GET",
          });
          const clientData = await clientResponse.json();
          const orderWithClient = { ...order, client: clientData };
          return orderWithClient;
        } catch (error) {
          console.log("Error fetching client for order", order._id, ":", error);
          return order;
        }
      });

      const ordersWithClients = await Promise.all(clientsPromises);
      setCompleteOrders(ordersWithClients);
    };

    if (orders.length > 0) {
      fetchClients();
    }
  }, [orders]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#F1F4F9' }}>
            <TableCell><Typography style={{ fontWeight: 600 }}>Product Name</Typography></TableCell>
            <TableCell><Typography style={{ fontWeight: 600 }}>Address</Typography></TableCell>
            <TableCell><Typography style={{ fontWeight: 600 }}>Date</Typography></TableCell>
            <TableCell><Typography style={{ fontWeight: 600 }}>Type</Typography></TableCell>
            <TableCell><Typography style={{ fontWeight: 600 }}>Amount</Typography></TableCell>
            <TableCell><Typography style={{ fontWeight: 600 }}>Status</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completeOrders.map((deal) => (
            <TableRow key={deal._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {deal.product_name}
              </TableCell>
              <TableCell>{deal.client && deal.client.address}</TableCell>
              <TableCell>{deal.delivery_date.split('T')[0]}</TableCell>
              <TableCell>{deal.type}</TableCell>
              <TableCell>Rs. {deal.total_amount}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <Card style={{ width: '85px', padding: '4px', ...getBgColor(deal.status) }}>
                  <Typography style={{ color: '#000', fontSize: '13px' }}>{deal.status}</Typography>
                </Card>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
