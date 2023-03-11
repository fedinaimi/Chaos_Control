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
const AccessToMeta = () => {
  const [firstname,setFirstName] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [cemail,setcemail] = useState('')
  const [modal] = useGlobalState('access')
const handleSubmit = (e)=>{
  e.preventDefault()
  axios.post('http://localhost:5000/api/automatedAccount',{
    firstName:firstname,
    lastName:lastname,
    email:email
})
.then(res => {
  if (res.status === 201) {
    console.log('creating...')
    setAlert('an email send to you ...', 'green')
    resetForm()
  }
})
.catch(err=>{
  console.log('your account already exist')
  setAlert('your account already exist...', 'red')
  resetForm()
  console.log(err)})
  

}
const resetForm = ()=>{
  setFirstName('')
  setLastname('')
  setEmail('')
  setcemail('')
  closeModal()
}
  const closeModal = () => {
    setGlobalState('access', 'scale-0')
  
  }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center bg-black bg-opacity-50 transform
    transition-transform duration-300 ${modal}`}>
      <div className="bg-[#151C25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5
      h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center  text-gray-400 "
          ><p className="font-semibold">complete this form and take your access !! </p>
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
          placeholder='first name'
          name='firstname'
          onChange={(e)=>setFirstName(e.target.value)}
          value={firstname}
          required/>
          </div>
          <div className='flex justify-between items-center bg-gray-800 rounded-2xl mt-5'>
          <input type="text"
          className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
          placeholder='last name'
          name='lastname'
          onChange={(e)=>setLastname(e.target.value)}
          value={lastname}
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
            <div className='flex justify-between items-center bg-gray-800 rounded-2xl mt-5'>
          <input type="text"
          className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' 
          placeholder='confirm your email'
          name='cemail'
          onChange={(e)=>setcemail(e.target.value)}
          value={cemail}

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
              send
            </button>
        </form>
      </div>
    </div>
  )
}

export default AccessToMeta