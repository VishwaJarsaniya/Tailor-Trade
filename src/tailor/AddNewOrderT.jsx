import React, { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import SideBarNav from "./SideBarNav";
import Nav from "../Nav";
import AddNewOrder1 from "./AddNewOrder1";
import AddNewOrder2 from "./AddNewOrder2";
import Theme from "../Theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const AddNewOrderT = () => {
    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'));
    
    const [formData1, setFormData1] = useState({
        first_name: '',
        last_name: '',
        address: '',
        phoneno: '',
        gender: '',
        email: '', 
        pic:'' 
    });
    const [formData, setFormData] = useState({
        outfit_type: '',
        type: '',
        height: '',
        width: '',
        instructions: '',
        urgent: false,
        product_name: '',
        address: '',
        trial_date: '',
        delivery_date: '',
        total_amount: ''
    });

    // const FormData = new FormData();
    // Append all the fields from the existing formData1 object
    
    
    const onChange1 = (event) => {
        const { name, value } = event.target;
        setFormData1((prevData) => ({
            ...prevData,
            [name]: value
        }));
        // FormData.append(`${name}`,`${value}`)
    };

   
    const [step, setStep] = useState(1);

    const handleNext = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
   
    
    return(
        <CardContent style={{padding:'0px'}}>
            <Grid container>
                {isLargeScreen && (
                    <Grid item style={{width:'20%' }}>
                        <Card style={{height:'1085px'}}>
                            <SideBarNav />
                        </Card>
                    </Grid>
                )}
                
                <Card sx={{width:{xxs:'100%', lg:'80%'}, height:'auto', backgroundColor:'#F5F6FA'}}>
                    <Grid item>
                        <Nav />
                        <Typography style={{fontSize:'210%', fontWeight:700, marginTop:'20px', textAlign:'left', marginLeft:'30px', marginBottom:'30px'}}>Add New Order</Typography>
                        {step === 1 ? (
                            <AddNewOrder1 formData1={formData1} onNext={handleNext} onChange1={onChange1} />
                        ) : (
                            <AddNewOrder2 formData1={formData1} formData={formData} onBack={handleBack} onChange={handleChange} email={formData1.email} />
                        )}
                    </Grid>
                </Card>
            </Grid>
        </CardContent>
    );
}

export default AddNewOrderT;
