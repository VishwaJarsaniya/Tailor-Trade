import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Button, Box, useMediaQuery } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bell from "./img/bell.png";
import profile from "./img/profile.png";
import menu from "./img/menu.png";
import SideBarNav from "./tailor/SideBarNav";
import Theme from "./Theme"

function Nav() {

    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(

        <div>
            {isLargeScreen ? ( 
            <Box style={{borderRadius:'0.2px',borderColor:'grey', backgroundColor:'#fff', height:'70px'}}>
                <CardContent>
                <Grid container justifyContent="flex-end">
                    <Button><img src={bell} style={{width:'20px'}} /></Button>
                    <Button><img src={profile} style={{width:'25px',marginRight:'6px'}}/><Typography style={{fontSize:'15px'}}>Joy Tailors</Typography></Button>
                </Grid>
                </CardContent>
            </Box>

            ) : (
            <Box style={{borderRadius:'0.2px',borderColor:'grey', backgroundColor:'#fff', height:'70px'}}>
                <CardContent>
                <Grid container justifyContent="space-between">
                <Grid item>
                    <Button onClick={handleMenuClick}><img src={menu} style={{width:'20px'}} /></Button>
                    {isMenuOpen && (
                            <Card style={{ position: 'absolute', top: '70px', left: 0, width: '290px',height:'auto', zIndex: 999, backgroundColor:"#fff" }}>
                                <Grid item>
                                <SideBarNav />
                                </Grid>
                            </Card>
                    )}
                </Grid>
                <Grid item>
                    <Button><img src={bell} style={{width:'20px'}} /></Button>
                   <Button><img src={profile} style={{width:'25px',marginRight:'6px'}}/><Typography style={{fontSize:'15px'}}>Joy Tailors</Typography></Button>
                </Grid>
                </Grid>
                </CardContent>
            </Box>
            )}
           
        </div>

    );
};

export default Nav;