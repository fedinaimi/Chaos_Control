import { useState } from 'react'
import meta from '../assets/images/metatheme.jpg'

import {FaTimes} from 'react-icons/fa'
import metalogo from '../assets/images/logowhite.png'
import Identicon from 'react-identicons'
import { buyNFT } from '../Blockchain.services'
import {Routes, Route, useNavigate} from 'react-router-dom';


import { useGlobalState, setGlobalState, truncate, setAlert } from '../store'

function Showworkdetail() {
    const navigate = useNavigate();

    const navigateToApply = () => {
      // 👇️ navigate to /contacts
      navigate(`/Apply/${work?._id}`);
    };
    const [ShowWork] = useGlobalState('ShowWork')
    const [connectedAccount] = useGlobalState('connectedAccount')
    const [work] = useGlobalState('work')  
 
   
  

  
    return (
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center
            justify-center bg-black bg-opacity-50 transform
            transition-transform duration-300 ${ShowWork}`}
      >
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-gray-400">Apply Now</p>
             
              
              <button
                type="button"
                onClick={() => setGlobalState('ShowWork', 'scale-0')}
                className="border-0 bg-transparent focus:outline-none"
              >
                <FaTimes className="text-gray-400" />
              </button>
            </div>
  
            <div className="flex flex-row justify-center items-center rounded-xl mt-5">
              <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
                <img
                  className="h-full w-full object-cover cursor-pointer"
                  src={`http://localhost:5000/images/${work?.image}`}
                  alt={work?.positionname}
                />
              </div>
            </div>
  
            <div className="flex flex-col justify-start rounded-xl mt-5">
                
              <h4 className="text-white font-semibold">{work?.positionname}</h4>
              <p className="text-gray-400 text-xs my-1">{work?.details}</p>
              <p className="text-gray-400 text-xs my-1">{work?._id}</p>
  
              <div className="flex justify-between items-center mt-3 text-white">
                <div className="flex justify-start items-center">
                
                 
                </div>
  
                <div className="flex flex-col">
                  <small className="text-xs">number of position</small>
                  <p className="text-sm font-semibold">{work?.numberOfposition} Candidate</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-2">
            <button
          className="flex flex-row justify-center items-center
          w-full text-[#e32970] text-md border-[#e32970]
          py-2 px-5 rounded-full bg-transparent 
          drop-shadow-xl border hover:bg-[#bd255f]
          hover:bg-transparent hover:text-white
          hover:border hover:border-[#bd255f]
          focus:outline-none focus:ring mt-5"
onClick={navigateToApply}        >
          Apply now
        </button>
       
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default Showworkdetail