
import metalogo from '../assets/images/logowhite.png'

import token from '../assets/images/token.png'
import { connectWallet } from '../Blockchain.services'
import { setGlobalState, useGlobalState, truncate } from '../store'
import { Route, Redirect , useNavigate} from 'react-router-dom';
import axios from 'axios'

import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
const Header = () => {


  const navigate = useNavigate();

  const navigateToDashboard = () => {
    // 👇️ navigate to /contacts
    navigate(`/dashboard`);
  };
  const [connectedAccount] = useGlobalState('connectedAccount')
  const balance = useGlobalState('balance')
  console.log(balance)
  const isAuthenticated = !!localStorage.getItem('token');
  const handleLogout = () => {
    axios.get('http://localhost:5000/api/signout').then(() => {
      localStorage.removeItem('token');
      window.location.reload(); // or navigate to the login page
    });
  };
  const login = () => {
    setGlobalState('login', 'scale-100')
  }
 
  return (
    <div className='w-4/5 flex justify-between md:justify-start items-start py-4 mx-auto'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img className='w-10 cursor-pointer' src={metalogo} alt="Logo"/>
      
    </div>
    <ul className='md:flex-[0.4] text-white md:flex hidden list-none flex-row justify-between items-center flex-initial '>
        <HashLink smooth to='#artworks' > Market place </HashLink>
        
        <HashLink smooth to='#Work' > Work Opportunity </HashLink>

        <HashLink smooth to='#Apply' > About-us </HashLink>

    </ul>
    <div className='flex justify-between mx-auto gap-2'>
     
{isAuthenticated
   ? <div className='flex justify-between mx-auto gap-2'>
    
    <button className='shadow-xl shadow-black text-white bg-[#bd255f] md:text-xs p-2 rounded-full' onClick={navigateToDashboard}>
    dashboard
</button>
<button className='shadow-xl shadow-black text-white bg-[#bd255f] md:text-xs p-2 rounded-full' onClick={handleLogout}>
        logout
    </button> 

     </div> 
  
    :<button className='shadow-xl shadow-black text-white bg-[#bd255f] md:text-xs p-2 rounded-full' onClick={login}>
    Sing-in
</button>

}
{connectedAccount
           ? <div className='flex justify-between mx-auto gap-2 items-center'>
          
           </div>
    :<button className='shadow-xl shadow-black text-white bg-[#bd255f] md:text-xs p-2 rounded-full' onClick={connectWallet}>
    Connect Wallet
</button>
}
    </div>
    </div>
  )
}

export default Header