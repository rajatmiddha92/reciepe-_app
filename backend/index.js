const express=require('express')
const cors=require('cors')
const conn=require('./connection/conn')
const user=require('./models/users')
const Recipe=require('./models/reciepe')
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

app.post('/reciepe/:userid',async(req,res)=>{
    try{
  let {userid}=req.params
  console.log(userid)
  let {title,author,ingredients,directions}=req.body
  let {url,type}=req.body.image
  console.log(url,type)
 let data=await Recipe.create({title,author,image:{url,type},type,ingredients,directions,user:userid})
 await data.save() 
 res.json({data})}
  catch(err){
    res.status(400).json({message:err.message})
  }
})

app.get('/reciepe/:userid',async(req,res)=>{
    let {userid}=req.params
    let data=await Recipe.find({user:userid})
    if(data.length){
        res.json({data})
    }
    else{
        res.status(400).json({message:"no record found"})
    }
})

app.get('/find/:userid/:search',async(req,res)=>{
    try {
        let userid=req.params.userid
        let key = `^${req.params.search}`;
        let result = await Recipe.find({user:userid,
          $or: [
            { title: { $regex: key, $options: "i" } },
          ],
        });
        if (result) {
          res.status(200).json({ result });
        }
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

app.listen(5000)