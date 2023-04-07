import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Work = () => {
  const [workData, setWorkData] = useState([]);
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();

  const navigateToApply = () => {
    navigate(`/creatework`);
  };
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

 
  useEffect(() => {
    
    axios.get(`http://localhost:5000/work/getworks/${userId}`)
      .then((response) => {
        const works = response.data.works;
        if (works) {
          const workData = works.map((works) => ({
            id: works._id,
            positionname: works.positionname,
            society: works.society,
            details: works.details,
            numberOfposition: works.numberOfposition,
          }));
          setWorkData(workData);
          console.log(workData)
        }
      })
      .catch((error) => {
        console.log("Error fetching worker data:", error);
      });
  }, [userId]);

  const columns = [
    {
      field: "positionname",
      headerName: "Position Name",
      flex: 1,
      headerClassName: "name-column--header",
    },
    {
      field: "society",
      headerName: "Society",
      flex: 1,
    },
    {
      field: "details",
      headerName: "Details",
      flex: 1,
    },
    {
      field: "numberOfposition",
      headerName: "Number of Positions",
      flex: 1,
    },
  
  ];
  
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Button
        onClick={navigateToApply}  
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        Create new Work
      </Button>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
      <DataGrid checkboxSelection rows={workData} columns={columns} />

      </Box>
    </Box>
  );
};

export default  Work;

 