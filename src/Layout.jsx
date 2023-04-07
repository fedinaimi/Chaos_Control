import React from 'react'
import { useState } from "react";
import { Routes, Route, Link ,Outlet} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/index";
import InviteWorker from "./scenes/team/InviteWorker";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
const Layout = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
  
<ThemeProvider theme={theme}>
  <CssBaseline />
  <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
      
      <Topbar setIsSidebar={setIsSidebar} />
     <Outlet/>
       
       
        
     
    </main>
  </div>
 
</ThemeProvider>
</ColorModeContext.Provider>
);
}


export default Layout