import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Box, Radio, RadioGroup, Button,FormControlLabel, FormControl, FormLabel, TextField, TextareaAutosize, Switch } from "@mui/material";
import SideBarNav from "./SideBarNav";
import Nav from "../Nav";
import skirt from "../img/Skirt.png"
import pants from "../img/Pants.png"
import dress from "../img/Dress.png"
import blouse from "../img/Blause.png"
import Theme from "../Theme";
import useMediaQuery from '@mui/material/useMediaQuery';

function AddNewOrder2() {
    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))


    const handleClick = (outfitType) => {
        console.log(`Clicked on ${outfitType}`);
    };

    const [urgent, setUrgent] = useState(false);

    const handleUrgentChange = (event) => {
        setUrgent(event.target.checked);
    };
    return (
        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{ padding: '0px' }}>
                <Grid container>
                {isLargeScreen && ( 
                <Grid item style={{width:'20%' }}>
                    <Card style={{height:'1065px'}}>
                        <SideBarNav />
                    </Card>
                    </Grid>
                )}

                    <Card sx={{width:{xxs:'100%',lg:'80%'}, height: '100%', backgroundColor: '#f5f8fe' }}>
                        <Grid item>
                            <Nav />
                            <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Add New Orders</Typography>



                            {/*The main card */}
                            <Card
                                sx={{
                                    width: '95%',
                                    borderRadius: '15px',
                                    marginLeft: '2.4%',
                                    marginTop: '35px',
                                    marginBottom: '35px'
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        sx={{
                                            textAlign: 'left',
                                            fontSize: '145%',
                                            fontWeight: 600,
                                            marginTop: '5px',
                                            marginLeft: '10px'
                                        }}
                                    >
                                        Select Outfit Type
                                    </Typography>

                                    {/* DRESS  PICS*/}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', sm: 'row' },
                                            justifyContent: { xs: 'center', sm: 'space-evenly' },
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            borderBottom: '1px solid black'
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={dress}
                                            alt="Dress"
                                            onClick={() => handleClick('Dress')}
                                            sx={{
                                                width: { xs: '70%', sm: '15%' },
                                                height: { xs: '200px', sm: '150px' },
                                                border: '2px solid black',
                                                borderRadius: '15px',
                                                margin: '10px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: 6, // You can use other values like 3, 4, 5 for different shadow effects
                                                }
                                            }}
                                        />
                                        <Box
                                            component="img"
                                            src={blouse}
                                            alt="Blouse"
                                            onClick={() => handleClick('Blouse')}
                                            sx={{
                                                width: { xs: '70%', sm: '15%' },
                                                height: { xs: '200px', sm: '150px' },
                                                border: '2px solid black',
                                                borderRadius: '15px',
                                                margin: '10px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: 6,
                                                }
                                            }}
                                        />
                                        <Box
                                            component="img"
                                            src={skirt}
                                            alt="Skirt"
                                            onClick={() => handleClick('Skirt')}
                                            sx={{
                                                width: { xs: '70%', sm: '15%' },
                                                height: { xs: '200px', sm: '150px' },
                                                border: '2px solid black',
                                                borderRadius: '15px',
                                                margin: '10px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: 6,
                                                }
                                            }}
                                        />
                                        <Box
                                            component="img"
                                            src={pants}
                                            alt="Pants"
                                            onClick={() => handleClick('Pants')}
                                            sx={{
                                                width: { xs: '70%', sm: '15%' },
                                                height: { xs: '200px', sm: '150px' },
                                                border: '2px solid black',
                                                borderRadius: '15px',
                                                margin: '10px',
                                                marginY: { sm: '30px' },
                                                marginBottom: { xs: '30px' },
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: 6,
                                                }
                                            }}
                                        />
                                    </Box>

                                    {/* FORM */}
                                    <Box sx={{ display: 'flex' }}>
                                        {/* FORM Left */}
                                        <Box sx={{ borderRight: '1px solid black', width: '50%', padding: '20px', textAlign: 'left' }}>
                                            <FormControl component="fieldset" sx={{ width: '100%' }}>
                                                <Typography variant="body1">Type</Typography>
                                                <RadioGroup
                                                    aria-label="options"
                                                    defaultValue="option1"
                                                    name="radio-buttons-group"
                                                    sx={{ textAlign: 'left' }}
                                                >
                                                    <FormControlLabel value="option1" control={<Radio />} label="Stitching" />
                                                    <FormControlLabel value="option2" control={<Radio />} label="Alteration" />
                                                </RadioGroup>
                                            </FormControl>

                                            <Box sx={{ marginTop: '20px' }}>
                                                <Typography variant="body1">Measurement</Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Height"
                                                    variant="outlined"
                                                    type="number"
                                                    sx={{ marginBottom: '10px', marginTop: '10px' }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Width"
                                                    variant="outlined"
                                                    type="number"
                                                />
                                            </Box>

                                            <Box sx={{ marginTop: '20px' }}>
                                                <Typography variant="body1">Special Instruction</Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Enter any special instructions here..."
                                                    variant="outlined"
                                                    multiline
                                                    rows={4}
                                                    sx={{ marginTop: '10px' }}
                                                />
                                            </Box>

                                            <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                                                <Typography variant="body1">Mark as urgent</Typography>
                                                <Switch
                                                    checked={urgent}
                                                    onChange={handleUrgentChange}
                                                    color="primary"
                                                    sx={{ marginLeft: '10px' }}
                                                />
                                            </Box>
                                        </Box>
                                        {/* FORM Right */}
                                        <Box sx={{ width: '50%', padding: '20px', textAlign: 'left' }}>
                                            <Typography variant="body1">Dates</Typography>
                                            <TextField
                                                fullWidth
                                                label="Start Date"
                                                type="date"
                                                InputLabelProps={{ shrink: true }}
                                                sx={{ marginBottom: '20px', marginTop: '10px' }}
                                            />
                                            <TextField
                                                fullWidth
                                                label="End Date"
                                                type="date"
                                                InputLabelProps={{ shrink: true }}
                                                sx={{ marginBottom: '20px' }}
                                            />
                                            <Button type="submit" variant="contained" color="primary">
                                                Submit
                                            </Button>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Card>
                </Grid>
            </CardContent>
        </div>
    );
};

export default AddNewOrder2;

