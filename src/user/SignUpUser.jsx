import React ,{useState,useEffect} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import logo from '../img/logo_cropped.png'; 
import { ThemeProvider } from "@mui/material/styles";
import Theme from '../Theme';
import { Button, Typography, FormControl, FormLabel, Input, Link } from "@mui/material";
import user1 from '../img/user1.png';

const SignUpUser=()=> {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        username:'',
        password:'',
        email:'',
        mobileno:''
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        try{
            const response=await fetch('https://tailortradebackendweb.onrender.com/user/signup',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header
                },
                body:JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result.success);
            if(result.success===true){
                navigate("/user/login");
            }
           
        }catch(error){
            console.log("Error sending data to backend");
            console.log(error);
        }
    };
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    return (
        <ThemeProvider theme={Theme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh'  // Set height to match the viewport height
            }}>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: {
                        xs: '0%',
                        sm: '40%',
                        md: '40%'
                    },
                    height: {
                        xs: '0%',
                        sm: '100%',
                        md: '100%'
                    },
                    p: {
                        xs: '0%'
                    },
                    bgcolor: '#79A8A9',  // corrected color name
                }}>

                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%', // Ensure the container takes up the full width
                        height: '100%', // Ensure the container takes up the full height
                        overflow: 'hidden' // Hide any overflow content      
                    }}>
                        <img src={user1} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Sewing Machine" />
                    </Container>
                </Container>

                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: {
                        xs: '100%',
                        sm: '60%',
                    },
                    height: {
                        xs: '100%',
                        sm: '100%'
                    },
                    bgcolor: { xs: '#79A8A9', sm: 'white', md: 'white' }  // corrected color name
                }}>
                    <main >
                       
                        <Box
                            sx={{
                                width: 320,
                                mx: 'auto', // margin left & right
                                my: 4, // margin top & bottom
                                py: 3, // padding top & bottom
                                px: 2, // padding left & right
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                boxShadow: 'md',
                                bgcolor: 'white',
                                // border:"solid black",
                                borderRadius: '16px'
                            }}
                            variant="outlined"
                        >
                            <div sx={{ mb: '10px' }}>
                                <Typography variant="h4" component="h1">
                                    <b>Sign Up  <img src={logo} style={{ width: '100px', m: '0px' }} /></b>
                                </Typography>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <Box sx={{ 
                                display: 'flex',
                                flexDirection: 'row'}}>
                                <FormControl sx={{ m: '10px' }} >
                                    <FormLabel sx={{ textAlign: "left" }}>Username</FormLabel>
                                    <Input
                                        name="username"
                                        type="text"
                                        placeholder="Name"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </FormControl>

                                <FormControl sx={{ m: '10px' }} >
                                    <FormLabel sx={{ textAlign: "left" }}>Password</FormLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                       
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ 
                                display: 'flex',
                                flexDirection: 'row'}}>                                
                                <FormControl sx={{ m: '10px' }}>
                                    <FormLabel sx={{ textAlign: "left" }}>Email</FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </FormControl>

                                <FormControl sx={{ m: '10px' }}>
                                    <FormLabel sx={{ textAlign: "left" }}>Phone</FormLabel>
                                    <Input
                                        name="mobileno"
                                        type="number"
                                        placeholder="mobileNo"
                                       
                                        value={formData.mobileno}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Box>
                            <Button sx={{ mt: 1 }} type="submit">SignUp</Button>
                            </form>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Already have an account?
                                <Link href="/user/login">Log in</Link>
                            </Typography>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Go back to Home Page
                                <Link href="/">Home</Link>
                            </Typography>
                        </Box>
                    </main>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default SignUpUser;
