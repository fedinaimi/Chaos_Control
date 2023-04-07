import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from 'axios'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
const Creatework = () => {
    const navigate = useNavigate();

    const navigateToTeam = () => {
      navigate(`/work`);
    };
  
    // 👇️ declare state variables for form input fields
    const [positionname, setpositionname] = useState('');
    const [society, setsociety] = useState('');
    const [details, setdetails] = useState('');
   
    const [numberOfposition, setnumberOfposition] = useState('');
    const [image, setimage] = useState('');
    const [user, setUser] = useState('');

  
    // 👇️ useMediaQuery hook to determine screen size
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFileChange = (event) => {
        setimage(event.target.files[0]);
    
     
    
      };
    const handleFormSubmit = (event) => {
      // prevent default form submission behavior
      event.preventDefault();
      const userId = localStorage.getItem('id')
      // 👇️ create a worker object to send to the server
      const worker = {
        positionname: positionname,
        society: society,
        details: details,
        user:userId,
        numberOfposition :numberOfposition,
       
        
      };

      // 👇️ send a POST request to the server to add a new worker
      axios.post(`http://localhost:5000/api/createWork/${userId}`, worker)
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
      setpositionname('');
      setsociety('');
      setdetails('');
    
      setnumberOfposition('');
    


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
              label="Position Title"
              onChange={(event) => setpositionname(event.target.value)}
              value={positionname}
              name="positionname"
              sx={{ gridColumn: "span 2" }}
            />
             <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Society"
              onChange={(event) => setsociety(event.target.value)}
              value={society}
              name="society"
              sx={{ gridColumn: "span 2" }}
            />
              <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Details"
              onChange={(event) => setdetails(event.target.value)}
              value={details}
              name="details"
              sx={{ gridColumn: "span 2" }}
            />
    
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Candidate number"
              onChange={(event) => setnumberOfposition(event.target.value)}
              value={numberOfposition}
              name="numberOfposition"
              sx={{ gridColumn: "span 2" }}
            />

           
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New Work
            </Button>
              </Box>
            </form>
          
      
      </Box>
    );
  };

export default Creatework