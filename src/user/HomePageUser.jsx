import React, { useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Link } from "@mui/material";
import NavUser from "../NavUser";
import data from "../data/products.json" // Import your JSON data here

function HomePageUser() {
  const [filters, setFilters] = useState({
    city: '',
    rating: '',
    experience: ''
  });

  const filteredData = data.filter(shop => {
    // Filter by city
    if (filters.city && shop.location !== filters.city) return false;

    // Filter by average rating
    if (filters.rating) {
      if (filters.rating === '>4' && shop.avg_rating <= 4) return false;
      if (filters.rating === '>3' && shop.avg_rating <= 3) return false;
      if (filters.rating === '>2' && shop.avg_rating <= 2) return false;
      if (filters.rating === '>1' && shop.avg_rating <= 1) return false;
      if (filters.rating === '5' && Math.floor(shop.avg_rating) !== 5) return false;
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

  return (
    <div style={{ overflowY: 'auto' }}>
      <CardContent style={{ padding: '0px' }}>
        <NavUser />
        <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Filters</Typography>
        <Grid container spacing={2} style={{padding:'10px'}}>
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
        </Grid>
        <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Tailors</Typography>
        <Grid container spacing={2}>
          {filteredData.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4} sx={{ minWidth: 0, width: '100%' }}>
              <Link href={shop.portfolioUrl} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card
                  style={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', transition: 'box-shadow 0.3s' }}
                  sx={{ '&:hover': { boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)' } }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={shop.portfolioPhotos}
                    alt="Shop Portfolio"
                    style={{ borderRadius: '10px 10px 0 0' }}
                  />
                  <CardContent>
                    <Typography variant="h6">{shop.shopName}</Typography>
                    <Typography variant="subtitle1">{shop.location}</Typography>
                    <Typography variant="body1">{shop.serviceTypes}</Typography>
                    <Typography variant="body1">Average Rating: ${shop.avg_rating}</Typography>
                    <Typography variant="body1">Number of Reviews: ${shop.num_reviews}</Typography>
                    <Typography variant="body1">Experience Years: ${shop.experienceYears}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </div>
  );
};

export default HomePageUser;