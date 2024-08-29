import React, { useState,useEffect } from "react";
import { Card, Menu,Input,CardContent, CardMedia, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Button,Box, useMediaQuery } from "@mui/material";
import NavUser from "../Nav";
import data from "../data/products.json"
import bell from "../img/bell.png";
import profile from "../img/profile.png";
import menu from "../img/menu.png";
import couturecraft from "../img/couturecraft.jpg";
import stars from "../img/stars.png";
import Nav from "../Nav";
import pp from "../img/woman.png";
import logo from "../img/logo.png";
import LoadingSpinner from "../LoadingSpinner";
import Theme from "../Theme";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import navBar1 from "./navBar";
import NavBar1 from "./navBar";

const UserPage1=()=> {
  const { authState, logout } = useAuth();
  
  const [tailors, setTailors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const {username,setUsername}=useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate=useNavigate();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const response = await fetch("https://tailortradebackendweb.onrender.com/tailor/getAllTailors", {
          method: "GET",
        });
        const result = await response.json();
        setTailors(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(()=>{
      fetchTailors();
      setIsLoading(false);
    },2000)
    
  }, []);
  

  const handleClick=(_id)=>{
    console.log(_id);
    navigate(`${_id}`)
  }
  const [filters, setFilters] = useState({
    city: '',
    rating: '',
    experience: ''
  });

  const isLargeScreen = useMediaQuery(Theme.breakpoints.up('sm'))
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  const filteredData = tailors.filter(shop => {
    // Filter by city
    if (filters.city && shop.location !== filters.city) return false;

    // Filter by average rating
    if (filters.rating) {
      if (filters.rating === '>4' && shop.averageRating <= 4) return false;
      if (filters.rating === '>3' && shop.averageRating <= 3) return false;
      if (filters.rating === '>2' && shop.averageRating <= 2) return false;
      if (filters.rating === '>1' && shop.averageRating <= 1) return false;
      if (filters.rating === '5' && Math.floor(shop.averageRating) !== 5) return false;
    }

    // Filter by years of experience
    if (filters.experience) {
      const expYears = shop.experienceYears;
      if (filters.experience === '>15' && expYears <= 15) return false;
      if (filters.experience === '>10' && expYears <= 10) return false;
      if (filters.experience === '>5' && expYears <= 5) return false;
      if (filters.experience === '>3' && expYears <= 3) return false;
    }

    return true;
  });

  if(isLoading){
    return <LoadingSpinner/>
  }
  if (!authState.isAuthenticated) {
    return (
        <>
            <h1>Please Login To view this page</h1>
            <Button>
              <Link href="/user/login">Login</Link>
            </Button>
        </>
    );
}
  return (
    <div style={{ overflowY: 'auto' }}>
      <NavBar1/>

      <CardContent style={{ padding: '0px',marginLeft:'3.5%',marginRight:'3.5%' }}>

        <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '40px', textAlign: 'left', marginLeft: '30px', marginBottom: '10px' }}>Filters</Typography>
        <Grid container spacing={2} style={{padding:'25px'}}>
          <Grid item xs={12} sm={6} md={4}>
          
            <FormControl fullWidth>
              <InputLabel id="city-filter-label">City</InputLabel>
              <Select
                labelId="city-filter-label"
                id="city-filter"
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="rating-filter-label">Average Rating</InputLabel>
              <Select
                labelId="rating-filter-label"
                id="rating-filter"
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value=">4">More than 4</MenuItem>
                <MenuItem value=">3">More than 3</MenuItem>
                <MenuItem value=">2">More than 2</MenuItem>
                <MenuItem value=">1">More than 1</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="experience-filter-label">Years of Experience</InputLabel>
              <Select
                labelId="experience-filter-label"
                id="experience-filter"
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value=">15">More than 15</MenuItem>
                <MenuItem value=">10">More than 10</MenuItem>
                <MenuItem value=">5">More than 5</MenuItem>
                <MenuItem value=">3">More than 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={2}>
          
          <FormControl fullWidth>
            {/* <InputLabel id="city-filter-label">Serach...</InputLabel> */}
            {/* <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`px-3 py-1 border border-gray-400 rounded-lg mx-1 w-96`}
              /> */}
              
          {/* </FormControl> */}
        {/* </Grid> */} 
        </Grid>
        <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Tailors</Typography>
        <Grid container spacing={2} style={{padding:'10px'}}>
          {filteredData.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4} sx={{ minWidth: 0, width: '95%' }}>
              {/* <Link to="/user/UserPage2" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}> */}
              <Card
  sx={{
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
    },
  }}
  onClick={() => handleClick(shop._id)}
>
  <CardMedia
    component="img"
    height="400"
    image={shop.portfolioPhotos}
    alt="Shop Portfolio"
    style={{
      borderRadius: '10px 10px 0 0',
      objectFit: 'cover',
      objectPosition: 'top',  // This will display the top portion of the image
    }}
  />
  <CardContent>
    <Typography variant="h6">{shop.shopName}</Typography>
    <Typography variant="subtitle1">{shop.location}</Typography>
    <Typography variant="body1">{shop.serviceTypes}</Typography>
    <Typography variant="body1">Average Rating: {shop.averageRating}</Typography>  {/* Removed $ sign */}
    <Typography variant="body1">Number of Reviews: {shop.num_reviews}</Typography>  {/* Removed $ sign */}
    <Typography variant="body1">Experience Years: {shop.experienceYears}</Typography>  {/* Removed $ sign */}
  </CardContent>
</Card>

              {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </div>
  );
};

export default UserPage1;