import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import meta from '../assets/images/metatheme.jpg'
import {
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
  setAlert,
} from '../store'
import axios from 'axios'
import {Routes, Route, useNavigate} from 'react-router-dom';

   
const Apply = () => {
    const [FirstName,setFirstName] = useState('')
    const [LastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [Cv,setCv] =  useState(null)
    const [MotivationLetter,setMotivationLetter] = useState('')
    const [work] = useGlobalState('work')  

     const handleFileChange = (event) => {
    setCv(event.target.files[0]);

 

  };
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate(`/`);
  };

    const handleSubmit = (e)=>{
        e.preventDefault()
        const Cvi = new FormData();
        Cvi.append('Cv', Cv,Cv.name);
   


         
        axios.post(`http://localhost:5000/work/applyNow/${work?._id}`,{
            FirstName:FirstName,
            LastName:LastName,
            Email:email,
            Cv:Cv.name,
            
             MotivationLetter:MotivationLetter,
         
      
         
      } ,
      console.log(Cv.name))
      .then(res => {
        if (res.status === 200) {
          console.log(res)
          localStorage.setItem('_id', res.data._id);
          setAlert('connect with success...', 'green')
          

          //resetForm()
          navigateToHome(); // or navigate to the login page
        }
      })
      .catch(err=>{
          setAlert('verify your email or your password...', 'red')
          resetForm()
        console.log(err)})
        
      
      }
      const resetForm = ()=>{
        
        
        setFirstName('')
        setLastName('')
        setEmail('')
        
        setMotivationLetter('')

      }
       
  return (
   
      
<div className="fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center gradient-bg-hero bg-opacity-50 transform
    transition-transform duration-300 ">
           

           <div className="bg-[#151C25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5
      h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center  text-gray-400 "
          ><p className="font-semibold ">Apply Now </p>
         
            </div>
            <div className='flex justify-center items-center rounded-xl mt-5'>
         
            </div>
            <div className='flex justify-between items-center bg-gray-800 rounded-2xl mt-5'>
          
          <input type="text"
          className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
          placeholder='First Name'
          name='FirstName'
          onChange={(e)=>setFirstName(e.target.value)}
          value={FirstName}

          required/>
          
       </div>
       <div className='flex justify-between items-center bg-gray-800 rounded-2xl mt-5'>
          
          <input type="text"
          className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
          placeholder='Last Name'
          name='LastName'
          onChange={(e)=>setLastName(e.target.value)}
          value={LastName}

          required/>
       
          
       </div>
         
            <div className='flex justify-between items-center bg-gray-800 rounded-2xl mt-5'>
          
                <input type="text"
                className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
                placeholder='your email'
                name='email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}

                required/>
             </div>
             <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
              <textarea
                className="block w-full text-sm resize-none
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0 h-20"
                type="text"
                name="MotivationLetter"
                placeholder="Cover Letter"
                onChange={(e) => setMotivationLetter(e.target.value)}
                value={MotivationLetter}
                required
              ></textarea>
            </div>
              <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
              <label className="block">
                <span className="sr-only">Choose your Cv </span>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg, image/webp,image/pdf"
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#19212c] file:text-gray-400
                    hover:file:bg-[#1d2631]
                    cursor-pointer focus:ring-0 focus:outline-none"
                    onChange={handleFileChange}
                  required
                />
              </label>
            </div>
     

          <button
              type="submit"
              
              className="flex flex-row justify-center items-center
                w-full text-white text-md bg-[#e32970]
                hover:bg-[#bd255f] py-2 px-5 rounded-full
                drop-shadow-xl border border-transparent
                hover:bg-transparent hover:text-[#e32970]
                hover:border hover:border-[#bd255f]
                focus:outline-none focus:ring mt-5"
            >
                Apply
            </button>
            <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center'>
          
     
        </div>
        </form>
      </div>
    </div>
  )
}

export default Apply