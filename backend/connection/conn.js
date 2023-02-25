const mongoose=require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://rajat:reciepe@cluster0.z9sad4e.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log("Error")
    }
    else{
        console.log('connected to DB successfully')
    }
})