import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Snackbar, Alert, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const fields = [
  { name: 'username', label: 'Username', type: 'text', placeholder: 'John', required: true },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'password', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'johndoe@email.com', required: true },
  { name: 'mobileno', label: 'Mobile no.', type: 'text', placeholder: '7970859844', required: true },
  { name: 'serviceTypes', label: 'Service Types', type: 'text', placeholder: 'Tailoring, Alterations', required: true },
  { name: 'experienceYears', label: 'Experience Years', type: 'number', placeholder: '5', required: true },
  { name: 'portfolioUrl', label: 'Portfolio URL', type: 'url', placeholder: 'https://portfolio-woad-sigma-75.vercel.app/', required: true },
  { name: 'shopName', label: 'Shop Name', type: 'text', placeholder: 'Johns Tailoring', required: true },
  { name: 'location', label: 'Location', type: 'text', placeholder: 'Bhandup (West)', required: true },
  { name: 'productPriceRange', label: 'Product Price Range', type: 'text', placeholder: '50-200', required: true },
  { name: 'portfolioPhotos', label: 'Portfolio Photos', type: 'file', required: true },
  { name: 'skills', label: 'Skills', type: 'text', placeholder: 'Sewing, Pattern Making', required: true },
];

function CarouselForm() {
  const navigate =useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(fields.reduce((acc, field) => {
    acc[field.name] = field.type === 'file' ? [] : '';
    return acc;
  }, {}));
  const [showPrompt, setShowPrompt] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? Array.from(files) : value,
    });
  };

  const handleNext = () => {
    if (step < Math.ceil(fields.length / 3) - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSignUpClick = async() => {
    const allFieldsFilled = fields.every(field => {
      if (field.required) {
        return field.type === 'file' ? formData[field.name].length > 0 : formData[field.name].trim() !== '';
      }
      return true;
    });
    if (!allFieldsFilled) {
      setShowPrompt(true);
    } else {
      // Handle the login logic here
      console.log('All fields are filled. Proceed to login.');
      console.log(formData); // You can handle form submission here
      try{
        const response=await fetch("https://tailortradebackendweb.onrender.com/tailor/signup" ,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
        },
        body:JSON.stringify(formData),
        })
        const result = await response.json();
        console.log(result.success);
        if(result.success===true){
            navigate("/tailor/login");
        }
      }catch(error){
        console.log("Error Sending to backend",error);
      }
    }
  };

  const currentFields = fields.slice(step * 3, step * 3 + 3);

  return (
    <div>
      {currentFields.map((field) => (
        <FormControl sx={{ mb: '20px', m: '10px', width: '100%' }} key={field.name}>
          <FormLabel sx={{ textAlign: 'left' }}>{field.label}</FormLabel>
          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={field.type !== 'file' ? formData[field.name] : undefined}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
            inputProps={field.type === 'file' ? { multiple: true } : {}}
          />
        </FormControl>
      ))}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Button onClick={handlePrev} disabled={step === 0}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={step >= Math.ceil(fields.length / 3) - 1}>
            Next
          </Button>
        </Box>
        {step === Math.ceil(fields.length / 3) - 1 && (
          <Button onClick={handleSignUpClick}>
            Sign Up
          </Button>
        )}
      </Box>
      <Snackbar
        open={showPrompt}
        autoHideDuration={6000}
        onClose={() => setShowPrompt(false)}
      >
        <Alert onClose={() => setShowPrompt(false)} severity="warning" sx={{ width: '100%' }}>
          Please fill all required fields before proceeding.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CarouselForm;
