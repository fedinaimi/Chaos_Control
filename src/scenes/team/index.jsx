import { Box,Button, Typography, useTheme } from "@mui/material";
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
import { boolean } from "yup";





const Team = () => {
  const [workerData, setWorkerData] = useState([]);
  const navigate = useNavigate();

  const navigateToApply = () => {
    // 👇️ navigate to /contacts
    navigate(`/invite`);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleDeleteRow = (id) => {
    const updatedTeamData = workerData.filter((row) => row._id !== id);
    setWorkerData(updatedTeamData);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/worker/getWorker")
      .then((response) => {
        if (response.data && response.data.worker) {
          const workerData = response.data.worker.map((worker) => {
            console.log(response.data.worker)
            return {
              id: worker._id,
              name: `${worker.firstName} ${worker.lastName}`,
              email: worker.email,
              phone: worker.mobileNumber,
              entreprise: worker.entreprise,
              type : worker.usertype,
              status : worker.verified
            };
            
          });
     
          setWorkerData(workerData);
       
        }
      }
      )
      .catch((error) => {
        console.log(error);
      });
  },
 
   []);

  const columns = [
   
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
   
   
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "entreprise",
      headerName: "Entreprise",
      flex: 1,
    },

     {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "verified",
      headerName: "Status",
      type : boolean,
      flex: 1,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 80,
      renderCell: ({ row }) => {
        return (
          <button 
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 10px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
          }}
           onClick={() => handleDeleteRow(row._id)}>Delete</button>
        );
      },
    },
    

    /*{
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },*/
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
           
            Invite new Worker
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
      <DataGrid checkboxSelection rows={workerData} columns={columns} />

      </Box>
    </Box>
  );
};

export default Team;
