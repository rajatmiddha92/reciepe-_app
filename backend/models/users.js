const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    email:{type:String, unique:true},
    password:{type:String},
    confirmpassword:{type:String}
})

const user=mongoose.model('users',schema)

module.exports=user