import React,{useEffect,useRef,useState} from "react";
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance'; // Import the axios instance file
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import sewing_machine from '../img/sewing_machine.png';
import logo from '../img/logo_cropped.png'; // Import your logo image
import { ThemeProvider } from "@mui/material/styles";
import Theme from '../Theme'; // Import your custom theme
import { Button, Typography, FormControl, FormLabel, Input, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';

const LoginTailor=()=>{
    const { authState, setAuthInfo } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    let response =null;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
             response = await axiosInstance.post('http://localhost:8080/tailor/login', { email, password });
            console.log(response);
            const { accessToken } = response.data;
            setAuthInfo({accessToken},email);
            

           
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
            navigate("/tailor/Dashboard");
        }
    }, [authState, navigate]);
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
                        <img src={sewing_machine} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Sewing Machine" />
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
                    <main style={{}} >
                        <Box
                            sx={{
                                // border:"solid black",
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
                                borderRadius:'16px'
                            }}
                            variant="outlined"
                        >
                            <div sx={{ mb:'10px' }}>
                                <Typography variant="h4" component="h1">
                                    <b>Log in  <img src={logo} style={{width:'100px', m:'0px'}}/></b>
                                </Typography>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <FormControl sx={{ mb:'20px' }}>
                            <FormLabel sx={{ textAlign: "left" }}>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={e=>setEmail(e.target.value)}
                                />
                            </FormControl>

                            <FormControl sx={{ mb:'10px' }} >
                            <FormLabel sx={{ textAlign: "left" }}>Passsword</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={e=>setPassword(e.target.value)}
                                />
                            </FormControl>
                            
                            <Button sx={{ mt: 1 }} type="submit">Log in</Button>
                            </form>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Don&apos;t have an account? 
                                <Link href="/tailor/signup">Sign up</Link>
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

export default LoginTailor;