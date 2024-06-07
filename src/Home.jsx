import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import user1 from './img/user1.png';
import sewing_machine from './img/sewing_machine.png';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'; 

function Home() {
    const storeUser=()=>{
        sessionStorage.setItem('role', "user");
    }
    const storeTailor=()=>{
        sessionStorage.setItem('role', "tailor");
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {
                xs: 'column',
                sm: 'column',  // for extra small screens
                md: 'row',  // for small screens
            },
            height: '100vh'  // Set height to match the viewport height
        }}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '50%'
                },
                height: {
                    xs:'50%',
                    md: '100%',
                    sm: '50%'
                },
                bgcolor: '#AACFD0'  // corrected color name
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
                    <img src={sewing_machine} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                    <Link to="/tailor/login" style={{ textDecoration: 'none' }}> {/* Use Link component */}
                        <Button variant="contained" sx={{ bgcolor: '#1F4E5F', maxWidth: { md:'80%',sm:'50%',xs:'50%'} }} onClick={storeTailor} >Tailor</Button>
                    </Link>   
                    </Container>            
            </Container>

            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '50%'
                },
                height: {
                    xs:'50%',
                    md: '100%',
                    sm: '50%'
                },
                bgcolor: '#79A8A9'  // corrected color name
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
                    <img src={user1} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                    <Link to="/user/login" style={{ textDecoration: 'none' }}> {/* Use Link component */}
                        <Button variant="contained" sx={{ bgcolor: '#1F4E5F', maxWidth: { md:'80%',sm:'50%',xs:'50%'} }} onClick={storeUser}>User</Button>
                    </Link>                  
                     </Container>
            </Container>
        </Box>
    );
};

export default Home;
