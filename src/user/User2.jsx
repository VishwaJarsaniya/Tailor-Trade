import React , {useState} from "react";
import logo from "../img/logo.png";
import { Card, CardContent, Grid, Typography, Button, Box, useMediaQuery } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bell from "../img/bell.png";
import profile from "../img/profile.png";
import menu from "../img/menu.png";
import couturecraft from "../img/couturecraft.jpg";
import stars from "../img/stars.png";
import Nav from "../tailor/Nav";
import pp from "../img/woman.png";
import Theme from "../Theme"

function User2() {

    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return( 
         <div>
            {/*Navbar */}
            {isLargeScreen ? ( 
            <Box style={{borderRadius:'2px',borderColor:'grey', backgroundColor:'#f7fcfe', height:'80px'}}>
                <CardContent>
                <div style={{justifyContent:'space-between',display:'flex'}}>
                <div>
                <img src={logo} style={{ width: '170px' ,marginLeft:'40px', marginBottom: '10px',marginTop:'-20px'}} />
                </div>
                <div>
                    <Button style={{width:'150px'}}><Typography style={{fontSize:'15px'}}>Home</Typography></Button>
                    <Button><img src={bell} style={{width:'20px'}} /></Button>
                    <Button><img src={profile} style={{width:'25px',marginRight:'6px'}}/><Typography style={{fontSize:'15px'}}>Me</Typography></Button>
                </div>
                </div>
                </CardContent>
            </Box>

            ) : (
            <Box style={{borderRadius:'0.2px',borderColor:'grey', backgroundColor:'#f7fcfe', height:'70px'}}>
                <CardContent>
                <Grid container justifyContent="space-between">
                <Grid item>
                    <Button onClick={handleMenuClick}><img src={menu} style={{width:'20px'}} /></Button>
                    {isMenuOpen && (
                            <Card style={{ position: 'absolute', top: '70px', left: 0, width: '290px',height:'auto', zIndex: 999, backgroundColor:"#fff" }}>
                                <Grid item>
                                <Nav />
                                </Grid>
                            </Card>
                    )}
                </Grid>
                <Grid item>
                    <Button><img src={bell} style={{width:'20px'}} /></Button>
                    <Button><img src={profile} style={{width:'25px',marginRight:'6px'}}/><Typography style={{fontSize:'15px'}}>Me</Typography></Button>
                </Grid>
                </Grid>
                </CardContent>
            </Box>
            )}
           
           {/*Image and Description+Buttons Grid */}
           <Card style={{width:'100%',height:'100%'}}>
                <CardContent style={{marginLeft:'3.5%',marginRight:'3.5%'}}>
                        <Typography style={{fontSize:'210%',fontWeight:700,marginTop:'20px',textAlign:'left', marginBottom:'30px',fontFamily:'"Noto Serif", serif'}}>CoutureCraft</Typography>
                
                <Grid container>
                     <Grid item md={12} lg={7}>
                     <img src={couturecraft} style={{width:'100%',height:'85%'}} />
                     </Grid>
                     <Grid item md={12} lg={5}>
                     <Typography sx={{textAlign:'center',marginLeft:'4%',marginTop:{xxs:'-20px',xs:'-50px',lg:'50px'},fontSize:'105%'}}>CoutureCraft offers bespoke tailoring with a commitment to timeless elegance and precision. Our master tailors create custom garments that ensure exceptional quality. From classic suits to modern dresses, CoutureCraft brings your sartorial visions to life with unmatched craftsmanship.</Typography>
                    
                        <Box sx={{marginTop:{xxs:'45px',lg:'15%'}}}>
                            <Typography style={{fontSize:'120%',fontWeight:500}}>Average price: $32</Typography>
                            <Button sx={{backgroundColor:'#90c8c9',color:'#fff',marginTop:'15px',height:'36px',width:{xxs:'280px',xs:'350px'}}}><Typography style={{textTransform:'none'}}>Add Order</Typography></Button>
                            <br />
                            <Button  sx={{backgroundColor:'#f7fcfe',color:'#90c8c9',marginTop:'15px',height:'35px',width:{xxs:'280px',xs:'350px'},borderColor:'#90c8c9',border:'2px solid'}}><Typography style={{textTransform:'none'}}>Schedule an Appointment</Typography></Button>
                       
                        </Box>
                     </Grid>
                </Grid>
               
                <Grid container sx={{marginTop:{xxs:'80px',lg:'0px'}}}>
                    <Grid item style={{marginRight:'2%'}}>
                        <img src={pp} />
                    </Grid>
                    <Grid item style={{marginTop:'10px'}}>
                        <Typography style={{textAlign:'left',fontWeight:700}}>By Sonal Joshi</Typography>
                        <Typography style={{textAlign:'left'}}>With a passion for precision and an eye for detail, we specialize in creating bespoke garments that reflect your unique style.</Typography>
                    </Grid>
                </Grid>

                {/*About the tailor */}
                <Typography style={{textAlign:'left',fontSize:'155%',fontWeight:600,marginTop:'70px',marginBottom:'10px'}}>About The Tailor</Typography>
                <Typography style={{textAlign:'left',fontSize:'100%'}}>CoutureCraft is a premier tailoring boutique dedicated to delivering bespoke clothing of the 
                    highest quality. Our seasoned tailors blend traditional craftsmanship with modern techniques to create 
                    garments that are uniquely yours. From the initial consultation to the final fitting, we ensure a 
                    personalized experience that celebrates your individuality and style.</Typography>


                {/*Reviews */}
                <Typography style={{textAlign:'left',fontSize:'155%',fontWeight:600,marginTop:'70px'}}>936 reviews</Typography>
                <div style={{display:'flex'}}>
                    <div>
                    <img src={stars} style={{marginRight:'10px',width:'80px'}}  />
                    </div>
                    <div>
                    <Typography style={{fontWeight:500,fontSize:'90%',marginTop:'30px'}}>cmexpert</Typography>
                    </div>
                </div>
                <Typography style={{textAlign:'left',marginTop:'-25px'}}>"The attention to detail at CoutureCraft is unmatched! My suit fits perfectly."</Typography>
               
                <div style={{display:'flex'}}>
                    <div>
                    <img src={stars} style={{marginRight:'10px',width:'80px'}}  />
                    </div>
                    <div>
                    <Typography style={{fontWeight:500,fontSize:'90%',marginTop:'30px'}}>benitezwood65</Typography>
                    </div>
                </div>
                <Typography style={{textAlign:'left',marginTop:'-25px'}}>"I've never felt more confident in a dress. The custom fit is amazing!"</Typography>
                
                <div style={{display:'flex'}}>
                    <div>
                    <img src={stars} style={{marginRight:'10px',width:'80px'}}  />
                    </div>
                    <div>
                    <Typography style={{fontWeight:500,fontSize:'90%',marginTop:'30px'}}>oladiranmary</Typography>
                    </div>
                </div>
                <Typography style={{textAlign:'left',marginTop:'-25px'}}>"CoutureCraft transformed my wardrobe. Every piece feels made just for me."</Typography>
                
                <div style={{display:'flex'}}>
                    <div>
                    <img src={stars} style={{marginRight:'10px',width:'80px'}}  />
                    </div>
                    <div>
                    <Typography style={{fontWeight:500,fontSize:'90%',marginTop:'30px'}}>harrybosch187</Typography>
                    </div>
                </div>
                <Typography style={{textAlign:'left',marginTop:'-25px'}}>"Exceptional craftsmanship and top-notch service. Highly recommend!"</Typography>
                
                <Button style={{backgroundColor:'#fff',color:'#90c8c9',marginTop:'30px',height:'28px',width:'130px',display:'flex',border:'#90c8c9 solid 2px'}}><Typography style={{textTransform:'none'}}>View More</Typography></Button>

                
                {/*FAQs */}
                <Typography style={{fontSize:'155%',fontWeight:600,marginTop:'70px'}}>Frequently Asked Questions</Typography>
                <Grid container style={{textAlign:'left',marginTop:'20px'}}>
                    <Grid item  xxs={12} sm={6}  style={{padding:'25px'}}>
                        <Typography style={{fontWeight:600}}>What is the process for getting a custom garment made at CoutureCraft?</Typography>
                        <Typography style={{marginBottom:'30px'}}>The process begins with a consultation to discuss your style preferences.
                            Our tailors then proceed with fittings to ensure the perfect fit.</Typography>

                        <Typography style={{fontWeight:600}}>How long does it take to receive my custom garment?</Typography>
                        <Typography style={{marginBottom:'30px'}}>The time frame varies depending on the complexity of 
                            the garment, but typically it takes 4-6 weeks from the initial consultation to final delivery.</Typography>

                        <Typography style={{fontWeight:600}}>Can I provide my own fabric for a custom order?</Typography>
                        <Typography style={{marginBottom:'30px'}}>Yes, you can bring your own fabric, and our tailors will assess its suitability 
                            for your desired garment.</Typography>

                    </Grid>
                    <Grid item xxs={12} sm={6} style={{padding:'25px'}}>
                        <Typography style={{fontWeight:600}}>Do you offer alterations for existing clothing?</Typography>
                        <Typography style={{marginBottom:'30px'}}>Absolutely. We provide alteration services to adjust and enhance 
                            the fit of your existing wardrobe.</Typography>

                        <Typography style={{fontWeight:600}}>What types of garments do you specialize in?</Typography>
                        <Typography style={{marginBottom:'30px'}}>We specialize in a wide range of garments including suits, dresses, 
                            evening wear, and casual attire, all custom-made to your specifications.</Typography>

                        <Typography style={{fontWeight:600}}>Is there a consultation fee?</Typography>
                        <Typography style={{marginBottom:'30px'}}>The initial consultation is complimentary, allowing us to 
                            understand your needs and provide you with a personalized service plan.</Typography>

                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </div>
    );

};

export default User2;