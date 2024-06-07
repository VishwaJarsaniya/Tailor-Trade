import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import sewing_machine from '../img/sewing_machine.png';
import logo from '../img/logo_cropped.png'; // Import your logo image
import { ThemeProvider } from "@mui/material/styles";
import Theme from '../Theme'; // Import your custom theme
import { Typography, Link } from "@mui/material";
import CarouselForm from "./CarouselFormTailor"; // Ensure this path is correct

function SignUpTailor() {
    return (
        <ThemeProvider theme={Theme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh' // Set height to match the viewport height
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
                    bgcolor: '#79A8A9',
                }}>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
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
                    bgcolor: { xs: '#79A8A9', sm: 'white', md: 'white' }
                }}>
                    <main>
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
                                    <b>Sign Up <img src={logo} style={{ width: '100px', margin: '0px' }} alt="Logo" /></b>
                                </Typography>
                            </div>

                            <CarouselForm />

                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                You already have an account? <Link href="/tailor/login">Log in</Link>
                            </Typography>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Go back to Home Page <Link href="/">Home</Link>
                            </Typography>
                        </Box>
                    </main>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default SignUpTailor;