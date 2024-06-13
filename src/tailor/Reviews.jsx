import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography, Button, Link } from "@mui/material";
import SideBarNav from "./SideBarNav";
import Nav from "../Nav";
import stars from "../img/stars.png";
import star1 from "../img/1star.jpg"
import star2 from "../img/2star.jpg"
import star3 from "../img/3star.jpg"
import star4 from "../img/4star.jpg"
import star5 from "../img/5star.jpg"
import Review from "../data/reviews.json"
import { useAuth } from '../context/AuthContext';
import Theme from "../Theme";
import useMediaQuery from '@mui/material/useMediaQuery';

function Reviews() {

    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))


    const { authState } = useAuth();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("https://tailortradebackendweb.onrender.com/review/reviews", {
                    method: "GET",
                });
                const result = await response.json();
                console.log(result);
                setReviews(result);
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchReviews();
    }, []);

    // if (!authState.isAuthenticated) {
    //     return (
    //         <div>
    //             <h1>Please Login To view this page</h1>
    //             <Button href="/tailor/login">Login</Button>
    //         </div>
    //     );
    // }

    return (
        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{ padding: '0px' }}>
                <Grid container>
                {isLargeScreen && ( 
                <Grid item style={{width:'20%' }}>
                        <SideBarNav />
                    </Grid>
                )}
                    <Card sx={{ width:{xxs:'100%',lg:'80%'}, height: '100%', backgroundColor: '#F5F6FA' }}>
                        <Grid item>
                            <Nav />
                            <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Reviews</Typography>
                            {reviews.map((review) => (
                                <Card key={review.id} style={{ marginBottom: '30px', padding: '20px', marginLeft: '40px', marginRight: '40px', borderRadius: '15px', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <div>
                                            <Typography style={{ textAlign: 'left', fontSize: '120%', fontWeight: 600, marginBottom: '20px' }}>{review.name}</Typography>
                                        </div>
                                        <div>
                                            {
                                                (review.stars==1)?
                                                    <img src={star1} style={{ marginRight: '20px', width: '160px', marginTop: '0px' }} alt="stars" />
                                                :(review.stars==2)?
                                                    <img src={star2} style={{ marginRight: '20px', width: '160px', marginTop: '0px' }} alt="stars" />
                                                :(review.stars==3)?
                                                    <img src={star3} style={{ marginRight: '20px', width: '160px', marginTop: '0px' }} alt="stars" />
                                                :(review.stars==4)?
                                                    <img src={star4} style={{ marginRight: '20px', width: '160px', marginTop: '0px' }} alt="stars" />
                                                :<img src={star5} style={{ marginRight: '20px', width: '160px', marginTop: '0px' }} alt="stars" />
                                            }
                                            
                                        </div>
                                    </div>
                                    <Typography style={{ paddingLeft: '20%', paddingRight: '20%', marginBottom: '20px' }}>{review.description}</Typography>
                                
                                    <Typography style={{ textAlign: 'left' }}>{review.date.split('T')[0]}</Typography>
                                </Card>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
            </CardContent>
        </div>
    );
};

export default Reviews;
