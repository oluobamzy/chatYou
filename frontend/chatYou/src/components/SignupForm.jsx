import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import { Paper, Typography, TextField, Button } from '@mui/material';

const RootPaper = styled(Paper)(({ theme }) => ({
  maxWidth: "400px",
  margin: "0 auto",
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px", // Adjust the gap as needed
});

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
const SignupForm = ()=> {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <RootPaper elevation={3}>
      <Typography variant="h5" align="center">
        Sign Up
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          type="text"
          name="firstName"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          label="last Name"
          type="text"
          name="lastName"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
         <TextField
          label="email"
          type="email"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
        />
          <TextField
          label="password"
          type="password"
          name="password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* Other form fields */}
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign Up
        </SubmitButton>
      </Form>
    </RootPaper>
  );
}

export default SignupForm;
