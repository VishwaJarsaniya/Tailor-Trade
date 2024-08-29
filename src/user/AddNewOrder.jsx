import React, { useState ,useEffect} from "react";
import { Card, CardContent, Grid, Typography, Box, Radio, RadioGroup, Button,FormControlLabel, FormControl, FormLabel, TextField, TextareaAutosize, Switch } from "@mui/material";
// import SideBarNav from "./SideBarNav";
import { useParams } from "react-router-dom";
import NewOrder1 from "./NewOrder1";
import NewOrder2 from "./NewOrder2";
import NavBar1 from "./navBar";
import { useAuth } from "../context/AuthContext";

function AddNewOrder() {
    const { _id } = useParams();
    
    const { authState, logout } = useAuth();
    const {_ID}=useParams();
    const [user,setUser]=useState(null);
    console.log(_ID);
    const [formData1, setFormData1] = useState({
        first_name:  '',
        last_name:  '',
        address: '',
        phoneno:  '',
        gender:  "",
        email:  '' , 
        pic: '', 
    });
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch(`https://tailortradebackendweb.onrender.com/user/${_ID}`, {
              method: "GET",
            });
            const result = await response.json();
            setUser(result);
            console.log(result);
          } catch (error) {
            console.log(error);
          }
        };
        fetchUsers();
      }, []);
      useEffect(() => {
        if (user) {
          setFormData1({
            first_name: user.first_name || '',
            last_name: user.last_name || '',
            address: user.address || '',
            phoneno: user.mobileno || '',
            gender: user.gender || "male",
            email: user.email || '',
            pic: user.pic || '',
          });
        
        }
      }, [user]);
    
  
    const [formData, setFormData] = useState({
        outfit_type: [],
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
    
    const onChange1 = (event) => {
        const { name, value } = event.target;
        setFormData1((prevData) => ({
            ...prevData,
            [name]: value
        }));
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
  



    return (
        <div style={{ overflowY: 'auto' }}>
            <NavBar1/>
            <CardContent style={{ padding: '0px' }}>
                <Grid container>
                    <Card sx={{width:{xxs:'100%',lg:'100%'}, height: '100%', backgroundColor: '#f5f8fe' }}>
                        <Grid item>
                            <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '0px', textAlign: 'left', marginLeft: '80px', marginBottom: '0px' }}>Add New Order</Typography>
                            {step === 1 ? (
                            <NewOrder1 formData1={formData1} onNext={handleNext} onChange1={onChange1} />
                        ) : (
                            <NewOrder2 formData1={formData1} formData={formData} onBack={handleBack} onChange={handleChange} email={formData1.email} />
                        )}
                        </Grid>
                    </Card>
                </Grid>
            </CardContent>
        </div>
    );
};

export default AddNewOrder;

