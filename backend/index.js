const express=require('express')
const cors=require('cors')
const conn=require('./connection/conn')
const user=require('./models/users')
const app=express()

app.use(cors())
app.use(express.json())

app.post('/register',async(req,res)=>{
    let {email,password,confirmpassword}=req.body
    let data=await user.create({email,password,confirmpassword})
    await data.save()
    res.json(data)
})

app.post('/login',async(req,res)=>{
    let {email,password}=req.body
    let data=await user.find({email,password}).select('-password')
    if(data.length){
        res.json(data)
    }
    else{
        res.status(400).json({message:"no user exists"})
    }
})

app.listen(5000)