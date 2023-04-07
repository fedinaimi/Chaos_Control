import { useState } from "react";
import { Routes, Route, Link ,Outlet} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/index";
import Work from "./scenes/work/Index";
import Creatework from "./scenes/work/Creatework";
import InviteWorker from "./scenes/team/InviteWorker";
import Invoices from "./scenes/invoices"
import ApplicationsForm from "./scenes/applicationsForm/Index";
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
import LoginPage from "./LoginPage";
import Layout from "./Layout";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const isAuthenticated = !!localStorage.getItem('token');
  console.log(isAuthenticated)
  return (


        <div className="app">
      
            <Routes>
            {isAuthenticated
          
            
          ? <Route element ={ <Layout/>}>
            <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/work" element={<Work />} />
              <Route path="/creatework" element={<Creatework />} />
              <Route path="/invite" element={<InviteWorker />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/applications" element={<ApplicationsForm />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
               </Route>
              :   <Route path="/login" element={<LoginPage />} />
               
}
            </Routes>
          
        </div>
   
  );
}

export default App;
