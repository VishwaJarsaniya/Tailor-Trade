import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Box, Radio, RadioGroup, Link,Button,FormControlLabel, FormControl, FormLabel, TextField, TextareaAutosize, Switch } from "@mui/material";
import SideBarNav from "./SideBarNav";
import Nav from "../Nav";
import skirt from "../img/Skirt.png"
import pants from "../img/Pants.png"
import dress from "../img/Dress.png"
import blouse from "../img/Blause.png"
import Theme from "../Theme";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const AddNewOrder2=({formData ,formData1,onBack,onChange})=> {
    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))
    // console.log(formData1);
    const navigate=useNavigate();
    const { authState, logout } = useAuth();
    const [amount, setAmount] = useState(0);
    const [tailor,setTailor]=useState(null);
    const [urgentNeed, setUrgentNeed] = useState(false);
    

    // if (!authState.isAuthenticated) {
    //     return (
    //         <>
    //             <h1>Please Login To view this page</h1>
    //             <Button><Link href="/tailor/login">Login</Link></Button>
    //         </>
    //     );
    // }

    
    const handleRadioChange = (e) => {
        onChange(e);
    };

    const handleClick = async (outfitType) => {
        try {
            const response = await fetch('https://tailortradebackendweb.onrender.com/tailor/getTailorByEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: authState.email }),
            });
            const result = await response.json();
            setTailor(result);
            onChange({
                target: {
                    name: 'outfit_type',
                    value: outfitType
                }
            });
            setAmount(result[outfitType]);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUrgentChange = (event) => {
        setUrgentNeed(event.target.checked);
        onChange({
            target: {
                name: 'urgent',
                value: event.target.checked
            }
        });
        
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tailor);
    console.log(formData1);
    formData.urgent=urgentNeed;
    formData.total_amount=amount;
    let client;

    
    try {

        const response = await fetch('https://tailortradebackendweb.onrender.com/client/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData1),
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        client = await response.json();
        console.log("Backend response:", client);
    } catch (e) {
        console.log("Error Creating client", e);
    }
    const dataToSubmit = { tailor,...formData,client };
    console.log("Submitting data:", dataToSubmit);
    e.preventDefault();
        
if(client){
    try {
        const response = await fetch('https://tailortradebackendweb.onrender.com/order/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSubmit),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Backend response:", result);
        if (result.success === true) {
            const paymentInfo={
                outfit_type:formData.outfit_type,
                total_amount:amount,
                first_name:formData.first_name,
                type:formData.type
            }
            try{
                const payment=await fetch("https://tailortradebackendweb.onrender.com/payment/checkout",{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentInfo),
                })
                console.log(payment)
                const Paymentresult=await payment.json();
                console.log(Paymentresult);
                if(Paymentresult.url){
                    window.location=Paymentresult.url
                }
            }catch(e){
                console.log("Payment Error",e);
            }
        }
    } catch (e) {
        console.log("Error Sending Data to Backend:", e);
    }
}
}
    return (
        <div style={{ overflowY: 'auto' }}>
                            {/*The main card */}
                            <form onSubmit={handleSubmit}>
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
                                                    // defaultValue="option1"
                                                    name="type"
                                                    value={formData.type}
                                                    onChange={handleRadioChange}
                                                    sx={{ textAlign: 'left' }}
                                                >
                                                    <FormControlLabel value="Stitching" control={<Radio />} label="Stitching" />
                                                    <FormControlLabel value="Alteration" control={<Radio />} label="Alteration" />
                                                </RadioGroup>
                                            </FormControl>

                                            <Box sx={{ marginTop: '20px' }}>
                                                <Typography variant="body1">Measurement</Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Height"
                                                    variant="outlined"
                                                    name="height"
                                                    value={formData.height}
                                                    onChange={onChange}
                                                    
                                                    type="number"
                                                    sx={{ marginBottom: '10px', marginTop: '10px' }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Width"
                                                    variant="outlined"
                                                    name="width"
                                                    onChange={onChange}
                                                    value={formData.width}
                                                    type="number"
                                                />
                                            </Box>

                                            <Box sx={{ marginTop: '20px' }}>
                                                <Typography variant="body1">Special Instruction</Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Enter any special instructions here..."
                                                    variant="outlined"
                                                    name="instructions"
                                                    value={formData.instructions}
                                                    onChange={onChange}
                                                    multiline
                                                    rows={4}
                                                    sx={{ marginTop: '10px' }}
                                                />
                                            </Box>

                                            <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                                                <Typography variant="body1">Mark as urgent</Typography>
                                                <Switch
                                                    checked={urgentNeed}
                                                    name="urgent"
                                                    value={formData.urgent}
                                                    onChange={handleUrgentChange}
                                                    color="primary"
                                                    sx={{ marginLeft: '10px' }}
                                                />
                                            </Box>
                                        </Box>
                                        {/* FORM Right */}
                                        <Box sx={{ width: '50%', padding: '20px', textAlign: 'left' }}>
                                        <Typography variant="body1">Product Name</Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Enter Product Name"
                                                    name="product_name"
                                                    variant="outlined"
                                                    type="text"
                                                    value={formData.product_name}
                                                    onChange={onChange}
                                                    
                                                    sx={{ marginBottom: '10px', marginTop: '10px' }}
                                                />
                                                
                                            <Typography variant="body1">Dates</Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Trial Date"
                                                    type="date"
                                                    name="trial_date"
                                                    onChange={onChange}
                                                    value={formData.trial_date}
                                                    InputLabelProps={{ shrink: true }}
                                                    sx={{ marginBottom: '20px', marginTop: '10px' }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Delivery Date"
                                                    type="date"
                                                    name="delivery_date"
                                                    onChange={onChange}
                                                    value={formData.delivery_date}
                                                    InputLabelProps={{ shrink: true }}
                                                    sx={{ marginBottom: '20px', marginTop: '10px' }}
                                                />
                                                <Typography variant="body1">AMOUNT = {amount}</Typography>
                                                {/* <Button variant="contained" onClick={onBack} color="primary" sx={{ marginTop: '10px' }}> Back </Button>
                                                <Button variant="contained" type="submit" color="primary" sx={{ marginTop: '10px' }}>
                                                    Submit
                                                </Button> */}
                                                <Button onClick={onBack} sx={{backgroundColor:'#90c8c9',color:'#000',marginTop:'15px',marginRight:'10px',height:'36px',width:{xxs:'180px',xs:'250px'}}}>Back</Button>
                                                <Button sx={{backgroundColor:'#90c8c9',color:'#000',marginTop:'15px',height:'36px',width:{xxs:'180px',xs:'250px'}}} type="submit">Submit</Button>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                            </form>
                        
        </div>
    );
};

export default AddNewOrder2;

