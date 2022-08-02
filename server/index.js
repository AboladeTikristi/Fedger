const express=require('express')
const app =express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
app.use(bodyParser.json({limit:"50mb"}))
const cors=require('cors')
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
// const URI="mongodb+srv://AboladeTikristi:tikristi@cluster0.8i7iv.mongodb.net/Ecommerce?retryWrites=true&w=majority"
const URI=process.env.MONGO_URI;
mongoose.connect(URI,(err)=>{
      if (err) {
        console.log("mongoose not connected yet")
        console.log(err)    
      }
      else{console.log('mongoose connected successfully')}
})

const PORT=process.env.PORT||5003

const userRouter=require("./routes/user.route")
app.use(userRouter)
app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})