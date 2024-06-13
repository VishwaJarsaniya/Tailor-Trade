import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, TextField, Select, MenuItem, Button, FormControl } from "@mui/material";
import camera from "../img/camera.png";

const AddNewOrder1 = ({ formData1, onNext, onChange1 }) => {
    const [imagePreview, setImagePreview] = useState(camera);
  
    const handleImageChange = async (event) => {
      const file = event.target.files[0];
      console.log(event.target.files[0]);
  
      // const file = event.target.files[0];
      const formData = new FormData();
      formData.append('pic', file);
    
      try {
        const upload = await fetch("http://localhost:8080/api/upload", {
          method: "POST",
          body: formData,
        });
        const result = await upload.json();
        console.log(result.fileUrl);
        onChange1({
          target:{
              name:'pic',
              value:result.fileUrl
          }
        })
      } catch (e) {
        console.log("Error Uploading Files", e);
      }
   
      console.log(formData1);
      // handleAvatarChange(event);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
       
      }
    };
  
    return (
      <div style={{ overflowY: "auto" }}>
        <form onSubmit={onNext}>
          <Card
            style={{
              width: "95%",
              borderRadius: "15px",
              marginLeft: "2.4%",
              marginTop: "35px",
              marginBottom: "40px",
            }}
          >
            <CardContent>
              <Button component="label">
                <img src={imagePreview} style={{ width: "60px" }} alt="Upload" />
                <input
                  type="file"
                  id="avatar"
                  name="pic"
                  accept="image/*"
                  className="sr-only"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Button>
              <Typography style={{ marginBottom: "30px" }}>Upload Photo</Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography
                    style={{ textAlign: "left", marginLeft: "13%", marginBottom: "6px" }}
                  >
                    First Name
                  </Typography>
                  <TextField
                    id="filled-basic"
                    label="Enter your first name"
                    variant="filled"
                    name="first_name"
                    value={formData1.first_name}
                    onChange={onChange1}
                    style={{ marginBottom: "30px", width: "75%" }}
                  />
  
                  <Typography
                    style={{ textAlign: "left", marginLeft: "13%", marginBottom: "6px" }}
                  >
                    Last Name
                  </Typography>
                  <TextField
                    id="filled-basic"
                    label="Enter your last name"
                    variant="filled"
                    name="last_name"
                    value={formData1.last_name}
                    onChange={onChange1}
                    style={{ marginBottom: "30px", width: "75%" }}
                  />
  
                  <Typography
                    style={{ textAlign: "left", marginLeft: "13%", marginBottom: "6px" }}
                  >
                    Your email
                  </Typography>
                  <TextField
                    id="filled-basic"
                    label="Enter your email"
                    variant="filled"
                    name="email"
                    value={formData1.email}
                    onChange={onChange1}
                    style={{ marginBottom: "30px", width: "75%" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    style={{ textAlign: "left", marginLeft: "13%", marginBottom: "6px" }}
                  >
                    Address
                  </Typography>
                  <TextField
                    id="filled-basic"
                    label="Enter your address"
                    variant="filled"
                    name="address"
                    value={formData1.address}
                    onChange={onChange1}
                    style={{ marginBottom: "30px", width: "75%" }}
                  />
  
                  <Typography
                    style={{ textAlign: "left", marginLeft: "13%", marginBottom: "6px" }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    id="filled-basic"
                    label="Enter your phone number"
                    variant="filled"
                    name="phoneno"
                    value={formData1.phoneno}
                    onChange={onChange1}
                    style={{ marginBottom: "30px", width: "75%" }}
                  />
  
                  <Typography
                    style={{ textAlign: "left", marginLeft: "13%", marginBottom: "6px" }}
                  >
                    Gender
                  </Typography>
                  <FormControl style={{ width: "75%" }}>
                    <Select
                      variant="filled"
                      name="gender"
                      value={formData1.gender}
                      onChange={onChange1}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="transgender">Transgender</MenuItem>
                      <MenuItem value="others">
                        Non-binary, genderqueer, or gender non-conforming
                      </MenuItem>
                      <MenuItem value="prefernottosay">Prefer not to say</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                sx={{
                  backgroundColor: "#90c8c9",
                  color: "#000",
                  marginTop: "15px",
                  height: "36px",
                  width: { xs: "180px", sm: "250px" },
                }}
                type="submit"
              >
                Next
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    );
  };
  
  export default AddNewOrder1;
