import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signin=()=>{
    
    const Navigate=useNavigate()
    const [data,setdata]=useState({email:'',password:''})
    const [error,setError]=useState('')

   const handlelogin=async()=>{
      let verify=data.email.length && data.password.length
      console.log(data)
      try{
      if(verify)
      {
         let res=await axios.post('http://localhost:5000/login',data)
         if(res){ 
         setError('')
         Navigate('/reciepe')
         setdata({email:'',password:''})
         }
      }
      else{
        setError('details are missing')
      }}
      catch(err){
        setError(err.response.data.message)
      }
      
   }

    return(<>
     <div className="flex justify-center">
     <section className="border-2 w-1/3 pl-10 rounded-lg">
        <h1 className="mt-3 text-center mb-3 font-bold text-xl">Sign in</h1>
        <label className="text-base font-bold">Email address</label>
        <div className="mt-2 mb-2">
        <input className="border-2 py-1 w-5/6" onChange={(e)=>{setdata({...data,email:e.target.value})}} type="email" placeholder="Enter Email"/>
        </div>
        <label className="text-base font-bold">Password</label>
        <div className="mt-2 mb-2">
        <input className="border-2 py-1 w-5/6" onChange={(e)=>{setdata({...data,password:e.target.value})}} type="password" placeholder="Enter password"/>
        </div>
        <input className="mr-2 mb-3" type='checkbox'/>
        <span>Remember me</span>
        <div>
        <div>{error}</div>
        <button onClick={handlelogin} className="w-5/6 text-xl text-white
         bg-blue-500 py-2 mb-2">Sumbit</button>
        <h3 className="text-right mr-20 mb-3">Forgot <span className="text-blue-300 font-bold">password?</span></h3>
        </div>
        </section>
        </div>

    </>)
}
export default Signin;