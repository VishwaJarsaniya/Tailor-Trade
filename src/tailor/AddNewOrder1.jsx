import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, TextField, Select, MenuItem, Button, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import SideBarNav from "./SideBarNav";
import Nav from "../Nav";
import camera from "../img/camera.png"
import Theme from "../Theme";
import useMediaQuery from '@mui/material/useMediaQuery';


function AddNewOrder1() {

    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    {isLargeScreen && ( 
        <Grid item style={{width:'20%' }}>
            <Card style={{height:'1085px'}}>
                <SideBarNav />
            </Card>
            </Grid>
        )}

    return(

        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{padding:'0px'}}>
            <Grid container>

            {isLargeScreen && ( 
                <Grid item style={{width:'20%' }}>
                    <Card style={{height:'780px'}}>
                        <SideBarNav />
                    </Card>
                    </Grid>
                )}
                
                <Card sx={{width:{xxs:'100%',lg:'80%'},height:'auto', backgroundColor:'#F5F6FA'}}>
                <Grid item>
                <Nav />
                <Typography style={{fontSize:'210%',fontWeight:700,marginTop:'20px',textAlign:'left',marginLeft:'30px', marginBottom:'30px'}}>Add New Order</Typography>
                <Card style={{width:'95%',borderRadius:'15px', marginLeft:'2.4%', marginTop:'35px', marginBottom:'40px'}}>
                    <CardContent>
                        <Button><img src={camera} style={{width:'60px'}}/></Button>
                        <Typography style={{marginBottom:'30px'}}>Upload Photo</Typography>
                        <Grid container spacing={4}>
                            <Grid item xxs={12} md={6}>
                                <Typography style={{textAlign:'left',marginLeft:'13%',marginBottom:'6px'}}>First Name</Typography>
                                <TextField id="filled-basic" label="Enter your first name" variant="filled" value={name}  style={{marginBottom:'30px', width:'75%'}}/>

                                <Typography style={{textAlign:'left',marginLeft:'13%',marginBottom:'6px'}}>Last Name</Typography>
                                <TextField id="filled-basic" label="Enter your last name" variant="filled" value={name}  style={{marginBottom:'30px', width:'75%'}}/>

                                <Typography style={{textAlign:'left',marginLeft:'13%',marginBottom:'6px'}}>Your email</Typography>
                                <TextField id="filled-basic" label="Enter your email" variant="filled" value={name}  style={{marginBottom:'30px', width:'75%'}}/>

                            </Grid>
                            <Grid item  xxs={12} md={6}>
                                <Typography style={{textAlign:'left',marginLeft:'13%',marginBottom:'6px'}}>Address</Typography>
                                <TextField id="filled-basic" label="Enter your address" variant="filled" value={name}  style={{marginBottom:'30px', width:'75%'}}/>

                                <Typography style={{textAlign:'left',marginLeft:'13%',marginBottom:'6px'}}>Phone Number</Typography>
                                <TextField id="filled-basic" label="Enter your phone number" variant="filled" value={name}  style={{marginBottom:'30px', width:'75%'}}/>

                                <Typography style={{textAlign:'left',marginLeft:'13%',marginBottom:'6px'}}>Gender</Typography>
                               <FormControl style={{width:'75%'}}>
                                <Select variant="filled" value={gender} onChange={handleGenderChange} >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="transgender">Transgender</MenuItem>
                                    <MenuItem value="others">Non-binary, genderqueer, or gender non-conforming</MenuItem>
                                    <MenuItem value="prefernottosay">Prefer not to say</MenuItem>
                                </Select>
                                </FormControl>
                               
                            </Grid>
                        </Grid>
                        <Link to="/tailor/AddNewOrder2"><Button sx={{backgroundColor:'#90c8c9',color:'#000',marginTop:'15px',height:'36px',width:{xxs:'180px',xs:'250px'}}}>Next</Button></Link>
                    </CardContent>
                </Card>
               
                </Grid>
               
                </Card>
            </Grid>
            </CardContent>
        </div>
    );

};

export default AddNewOrder1;