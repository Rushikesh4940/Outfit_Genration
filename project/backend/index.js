const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/Users')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://SubrahmanyamNaidu:Naidu_942@cluster0.gpxanf9.mongodb.net/test")

app.get('/getUsers',(req,res)=>{
    UserModel.find()
    .then(user=>{
        console.log(user)
        res.json(user)
    })
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running")
})