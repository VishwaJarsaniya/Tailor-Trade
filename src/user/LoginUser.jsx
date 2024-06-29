import React, { useState,useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance'; // Import the axios instance file


import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import logo from '../img/logo_cropped.png'; // Import your logo image
import { ThemeProvider } from "@mui/material/styles";
import Theme from '../Theme'; // Import your custom theme
import { Button, Typography, FormControl, FormLabel, Input, Link } from "@mui/material";
import user1 from '../img/user1.png';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { UserProvider,useUser } from '../context/UserContext';

const LoginUser=()=> {
    const { authState, setAuthInfo } = useAuth();
    const {username,setUsername}=useUser();
    const navigate = useNavigate();
    const [isLoading,setIsLoading]=useState(false)
    const [email, setEmail] = useState('');
    const [_ID,setID]=useState("");
    const [password, setPassword] = useState('');
    
    let response =null;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
             response = await axiosInstance.post('http://localhost:8080/user/login', { email, password });
                console.log(response);

            if(response.data=="Incorrect"){
                alert("Invalid Username/Password")
            }
            const { accessToken } = response.data;
            setUsername(response.data.u2.username);
            setAuthInfo({accessToken},email);
            setID(response.data.u2._id);

           
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
    useEffect(() => {
        // To check if the token is stored properly
        if (authState.isAuthenticated) {
            console.log("Auth State Updated", authState);
            const currentToken = sessionStorage.getItem('accessToken');
            console.log(currentToken);
            if(_ID!=null){
                navigate(`/user/${_ID}`);
            }
        }
    }, [authState, navigate]);
    if(isLoading){
        return <LoadingSpinner/>
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
                    bgcolor: {xs:'#79A8A9',sm:'white',md:'white'}  // corrected color name
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
                                bgcolor:'white',
                                // border:"solid black",
                                borderRadius:'16px'
                            }}
                            variant="outlined"
                        >
                            <div sx={{ mb:'10px' }}>
                                <Typography variant="h4" component="h1">
                                    <b>Log in  <img src={logo} style={{width:'100px', m:'0px'}}/></b>
                                </Typography>
                            </div>

                            <FormControl sx={{ mb:'20px' }}>
                            <FormLabel sx={{ textAlign: "left" }}>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                    placeholder="johndoe@email.com"
                                />
                            </FormControl>

                            <FormControl sx={{ mb:'10px' }} >
                            <FormLabel sx={{ textAlign: "left" }}>Passsword</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                    placeholder="password"
                                />
                            </FormControl>
                            
                            <Button sx={{ mt: 1 }} onClick={handleSubmit} >Log in</Button>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Don&apos;t have an account? 
                                <Link href="/user/signup">Sign up</Link>
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

export default LoginUser;
