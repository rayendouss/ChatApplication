const express=require("express")
require("dotenv").config()
const config=require("./config/app")
const app = express()
const router=require("./router")
const bodyParser = require("body-parser")
const cors = require("cors")
const port=config.appPort
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use(express.static(__dirname + "/public"))

app.listen(port,()=>{
    console.log(`server on ${port}`)
})