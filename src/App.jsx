import MainLayout from './components/MainLayout'
import Showworkdetail from './components/Showworkdetail'
import { Route, Routes } from 'react-router-dom';
import Apply from './components/Apply';
import  Dashboard from './components/Dashboard'


const App = () => {


  return (
    <Routes>
    <Route >
    <Route path="/" element={<MainLayout />} />
    <Route path="/Apply/:id" element={<Apply />} />
    <Route path = "/dashboard" element={<Dashboard/>}/>

   
    </Route>
   
    
  </Routes>
  
    )
}

export default App