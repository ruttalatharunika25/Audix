import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"
import geminiResponse from "./gemini.js"





const app = express()
app.use(cors({
  origin:"https://audix-virtual-assistant.onrender.com",
  credentials:true
}))
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


  

app.listen(port,()=>{
  connectDb()
  console.log("server started")
})
