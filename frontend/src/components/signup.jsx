import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
   const Navigate=useNavigate()

    const [data,setdata]=useState({email:'',password:'',confirmpassword:''})
    const [error,setError]=useState('')
    const [check,setChecked]=useState(false)
    
    const handleregister=async()=>{
          let verify=data.email.length && data.password.length && data.confirmpassword.length
          if(verify && data.password!=data.confirmpassword){
            setError("Password do not match")
          }
          else if(verify && !check){
            setError("Please Check the box")
          }
          else if(verify && check && data.password==data.confirmpassword){
            let res=await axios.post("http://localhost:5000/register",data)
            if(res){
               setError('')
               setdata({email:'',password:'',confirmpassword:''})
               Navigate('/signin')
            }
          }
    }

    return (<>
    <div className='flex justify-center'>
    <section className="border-2 w-1/3 pl-10 rounded-lg">
    <div className='mt-5 mb-16'>
    <ArrowBackIosIcon/>
    <span className="text-center mb-3 tracking-widest text-xl">SIGN UP</span>
    </div>
    <div className='mb-4'>
    <input className='border-b-2 py-1 w-5/6' type='email' onChange={(e)=>{setdata({...data,email:e.target.value})}} placeholder='EMAIL'/>
    </div>
    <div className='mb-4'>
    <input className='border-b-2 py-1 w-5/6' type='password' onChange={(e)=>{setdata({...data,password:e.target.value})}} placeholder='PASSWORD'/>
    </div>
    <div className='mb-10'>
    <input className='border-b-2 py-1 w-5/6' type='password' onChange={(e)=>{setdata({...data,confirmpassword:e.target.value})}} placeholder='REPEAT PASSWORD'/>
    </div>
    <div className='mb-8'>
    <input className='mr-2' onChange={(e)=>setChecked(e.target.checked)} type='checkbox'/>
    <span>I agree with <span className='underline decoration-1'>TERMS & CONDITIONS</span></span>
    </div>
    <div className='text-center mr-10'>
    <div>{error}</div>
    <button onClick={handleregister} className='mb-8 bg-orange-400 text-white tracking-widest text-2xl rounded-xl px-5 py-2'>CONTINUE</button>
    </div>

    </section>
    </div>

    

           
    </>)
}
export default Signup