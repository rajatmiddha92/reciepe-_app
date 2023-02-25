const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/reciepe',(err)=>{
    if(err){
        console.log("Error")
    }
    else{
        console.log('connected to DB successfully')
    }
})