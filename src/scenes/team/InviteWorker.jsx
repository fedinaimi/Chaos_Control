import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from 'axios'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

const InviteWorker = () => {
  const navigate = useNavigate();

  const navigateToTeam = () => {
    navigate(`/team`);
  };

  // 👇️ declare state variables for form input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');

  // 👇️ useMediaQuery hook to determine screen size
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (event) => {
    // prevent default form submission behavior
    event.preventDefault();

    // 👇️ create a worker object to send to the server
    const worker = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber:mobileNumber
      
    };

    // 👇️ send a POST request to the server to add a new worker
    axios.post('http://localhost:5000/worker/addWorker', worker)
      .then(res => {
        // if worker is successfully added, navigate to the team page
        if (res.status === 200) {
          navigateToTeam();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const resetForm = () => {
    // reset form input fields to empty strings
    setFirstName('');
    setLastName('');
    setEmail('');
    setmobileNumber('');
  };

  return (
    <Box m="20px">
      <Header title="Invite Worker" subtitle="Create a New Worker Profile" />

      <form onSubmit={handleFormSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            name="firstName"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            name="lastName"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            name="email"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            onChange={(event) => setmobileNumber(event.target.value)}
            value={mobileNumber}
            name="mobileNumber"
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
            </Box>
          </form>
        
    
    </Box>
  );
};



export default InviteWorker;
