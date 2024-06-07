import React , {useState} from "react";
import { Card, Grid, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation} from "react-router-dom";
import logo from "../img/logo.png";
import dashboard from "../img/dashboard.png";
import review from "../img/reviews.png";
import client from "../img/clients.png";
import track from "../img/checklist.png"
import order from "../img/orders.png";
import { ThemeProvider } from "@emotion/react";
import Theme from "../Theme";

function SideBarNav() {

    const [selectedButton, setSelectedButton] = useState('dashboard');
    const navigate = useNavigate();
   
    const handleButtonClick = (buttonname, path) => {
        if (selectedButton !== buttonname){
        setSelectedButton(buttonname);
        navigate(path);
        }
    }

    return (
        <ThemeProvider theme={Theme}>
        <div style={{ textAlign: 'left' }}>
            <img src={logo} style={{ width: '190px', marginLeft:'12%' ,marginRight:'15%', marginBottom: '10px', marginTop: '25px' }} />
            <hr />
            <nav>
                <ul style={{ listStyle: 'none', marginTop: '40px' }}>
                    <li>
                        <Button onClick={() => handleButtonClick('dashboard',"/tailor/Dashboard")} style={{ backgroundColor: selectedButton === 'dashboard' ? "#90c8c9" : '#fff', color: '#000', width: '80%',padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                 <img src={dashboard} style={{ width: '20px' }} />
                                <Typography style={{ fontSize: '112%', marginLeft: '15px',textTransform: 'none' }}>Dashboard</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('addneworders',"/tailor/AddNewOrder1")} style={{ backgroundColor: selectedButton === 'addneworders' ? "#90c8c9" : '#fff', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                <img src={order} style={{ width: '20px', marginTop: '3px' }} />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px',textTransform: 'none' }}>Add New Order</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('reviews',"/tailor/Reviews")} style={{ backgroundColor: selectedButton === 'reviews' ? "#90c8c9" : '#fff', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                <img src={review} style={{ width: '20px', marginTop: '3px' }} alt="Review Icon" />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px', textAlign: 'left',textTransform: 'none' }}>Reviews</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('trackorders',"/tailor/TrackOrders")} style={{ backgroundColor: selectedButton === 'trackorders' ? "#90c8c9" : '#fff', color: '#000', width: '80%', padding: '5px', textAlign: 'left', marginLeft: '1px' ,justifyContent:'flex-start',paddingLeft:'5%'}}>
                                <img src={track} style={{ width: '20px', marginTop: '3px' }} />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px',textTransform: 'none' }}>Track Orders</Typography>
                       </Button>
                    </li>
                </ul>
            </nav>
        </div>
        </ThemeProvider>
    );
};

export default SideBarNav;
