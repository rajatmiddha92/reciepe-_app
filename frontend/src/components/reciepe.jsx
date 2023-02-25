import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reciepe=()=>{
  const Navigate=useNavigate()
    const [arr,setArr]=useState([])
    const [error,setError]=useState('')
    const [search,setsearch]=useState('')

    useEffect(()=>{
         fetchData()
    },[])
    const fetchData=async()=>{
        let userid=JSON.parse(localStorage.getItem("userdetails"))[0]._id
         try{
        let data=await axios.get(`http://localhost:5000/reciepe/${userid}`)
       if(data){
        setError('')
        setArr(data.data.data)
       }
    }
    catch(err){
        setError(err.data.message)
    }
    }

   useEffect(()=>{
    let userid=JSON.parse(localStorage.getItem('userdetails'))[0]._id
   
    let res=axios.get(`http://localhost:5000/find/${userid}/${search}`).then(res=>{
        setArr(res.data.result)
    })

    
   },[search])
   if(search==''){
    fetchData()
   }

    const handlelogout=()=>{
        localStorage.removeItem('userdetails')
        Navigate('/signin')
    }
    
    return (<>
    <section className='ml-6'>        
    <div className='mt-4'>
           <LocalDiningIcon/>
           <span className='ml-5 text-2xl'>Reciepe App</span>
           <button className='float-right mr-6' onClick={handlelogout}>Logout</button>
        </div>
        <div className='my-10 text-center'>
        <input onChange={(e)=>setsearch(e.target.value)} className='border-2  px-2 w-1/3 py-2 bg-gray-500 text-white' type="text" placeholder='Search Here ... '/>
        </div>
        <div className='text-center mb-5' >
        <FoodBankIcon onClick={()=>Navigate('/form')} sx={{ fontSize: 40 }}/>
        </div>
        <div className='font-bold'>All Reciepes</div>
   </section>
   <div className='flex flex-auto justify-evenly mt-10 flex-wrap'>
   {arr.map((data,index)=>{
    return (<div className="relative cursor-pointer mb-10" key={index}>
        <img className='w-80 h-96 rounded-xl opacity-50' src={data.image.url} />
        <h2 className='text-white text-2xl absolute top-16 left-20 font-bold'>{data.title}</h2>
    </div>)

   
   })}
   </div>



    </>)
}
export default Reciepe;