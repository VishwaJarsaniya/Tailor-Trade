import React from "react";
import fontcolorTheme from "../Theme";
import { Button, Card, CardContent, Grid, Typography, Link } from "@mui/material";
import SideBarNav from "./SideBarNav";
import increase from "../img/increase.png";
import decrease from "../img/decrease.png";
import users from "../img/users.png";
import sales from "../img/sales.png";
import order from "../img/order.png";
import pending from "../img/pending.png";
import DealsDetails from "./DealsDetails";
import graph from "../img/graph.png";
import Nav from "../Nav";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAuth } from '../context/AuthContext';
import Theme from "../Theme";

function Dashboard() {

    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'));

    const { authState, logout } = useAuth();

    if (!authState.isAuthenticated) {
        return (
            <>
                <h1>Please Login To view this page</h1>
                <Button><Link href="/tailor/login">Login</Link></Button>
            </>
        );
    }

    return (
        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{ padding: '0px' }}>
                <Grid container>
                    {isLargeScreen && (
                        <Grid item lg={2.4}>
                            <SideBarNav />
                        </Grid>
                    )}
                    <Grid item lg={isLargeScreen ? 9.6 : 12}>
                    <Card style={{width:'100%',height:'100%', backgroundColor:'#f5f8fe'}}>
                        <Nav />
                        <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Dashboard</Typography>
                        
                        <Grid container spacing={1} style={{marginLeft:'25px',marginRight:'25px'}}>
                            <Grid item xxs={12} sm={5.6} md={2.85}>
                                <Card style={{ borderRadius: '15px',width:'100%' }}>
                                   <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Users</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>409</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={users} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={decrease} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'red',fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'#00B69B',fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div>
                        </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xxs={12} sm={5.6} md={2.85}>
                                <Card style={{ borderRadius: '15px' ,width:'100%' }}>
                                <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Orders</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>1029</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={sales} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'#00B69B' ,fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'#00B69B' ,fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div>
                        </CardContent>
                                </Card>
                            </Grid>


                            <Grid item xxs={12} sm={5.6} md={2.85}>
                                <Card style={{ borderRadius: '15px',width:'100%'  }}>
                                <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Sales</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>$9000</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={order} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'#00B69B',fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'#00B69B',fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div>
                        </CardContent>
                                </Card>
                            </Grid>


                            <Grid item xxs={12} sm={5.6} md={2.85}>
                                <Card style={{ borderRadius: '15px',width:'100%' }}>
                                    <CardContent>
                                    <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',paddingBottom:'12px'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Users</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>24</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={pending} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* Sales Details */}
                        <Card style={{ width: '95%', borderRadius: '15px', marginLeft: '35px', marginTop: '35px',marginBottom: '40px' }}>
                            <CardContent>
                                <Typography style={{ textAlign: 'left', fontSize: '145%', fontWeight: 600, marginTop: '5px', marginLeft: '10px' }}>Sales Details</Typography>
                                <img src={graph} style={{ width: '90%' }} />
                            </CardContent>
                        </Card>
                        
                        {/*     
                        //Deal details
                        <Card style={{ width: '95%', borderRadius: '15px', marginLeft: '2.4%', marginTop: '35px', marginBottom: '40px' }}>
                            <CardContent>
                                <Typography style={{ textAlign: 'left', fontSize: '145%', fontWeight: 600, marginTop: '5px', marginLeft: '10px', marginBottom: '20px' }}>Deals Details</Typography>
                                <DealsDetails />
                            </CardContent>
                        </Card> */}
                        
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    );
}

export default Dashboard;
