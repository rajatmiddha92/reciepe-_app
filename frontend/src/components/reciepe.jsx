import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const Reciepe=()=>{
    return (<>
    <section className='ml-6'>        
    <div className='mt-4'>
           <LocalDiningIcon/>
           <span className='ml-5 text-2xl'>Reciepe App</span>
        </div>
        <div className='my-10 text-center'>
        <input className='border-2  px-2 w-1/3 py-2 bg-gray-500 text-white' type="text" placeholder='Search Here ... '/>
        </div>
        <div className='text-center mb-5' >
        <FoodBankIcon sx={{ fontSize: 40 }}/>
        </div>
        <div className='font-bold'>All Reciepes</div>
   </section>


    </>)
}
export default Reciepe;