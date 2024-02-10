const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const usermodel=require('./models/Users')

const app=express()
app.use(cors())


app.use(express.json())

app.get('/getUsers',(req,resp)=>{
    usermodel.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err))
})

mongoose.connect("mongodb://127.0.0.1:27017/Hackfusion_NeverSelected")
app.listen(3001,()=>{
    console.log("Server is running")
})