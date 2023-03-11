
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
const signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [modal] = useGlobalState('login')
const handleSubmit = (e)=>{
  e.preventDefault()
  axios.post('http://localhost:5000/api/signin',{
    email:email,
    password:password
   

   
})

.then(res => {
  if (res.status === 200) {
    console.log(res)
    localStorage.setItem('token', res.data.token);
    setAlert('connect with success...', 'green')

    resetForm()
    window.location.reload(); // or navigate to the login page
  }
})
.catch(err=>{
    setAlert('verify your email or your password...', 'red')
    resetForm()
  console.log(err)})
  

}
const resetForm = ()=>{
  
  
  setEmail('')
  setPassword('')
  closeModal()
}
  const closeModal = () => {
    setGlobalState('login', 'scale-0')
  
  }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center bg-black bg-opacity-50 transform
    transition-transform duration-300 ${modal}`}>
      <div className="bg-[#151C25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5
      h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center  text-gray-400 "
          ><p className="font-semibold">Sign-in</p>
          <button type="button" className="border-0 bg-transparent focus:outline-none"  onClick={closeModal}>
            <FaTimes/>
            </button>
            </div>
            <div className='flex justify-center items-center rounded-xl mt-5'>
              <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                  < img className='h-full w-full object-cover cursor-pointer' src={meta} alt="meta" />
              </div>
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
             <div className='flex justify-between items-center bg-gray-800 rounded-2xl mt-5'>
          
          <input type="password"
          className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
          placeholder='your password'
          name='password'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}

          required/>
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
              Sign-in
            </button>
            <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center'>
          
     
        </div>
        </form>
      </div>
    </div>
  )
}

export default signin