const router=require("express").Router()

router.get("/home",(req,res)=>{
    return res.send("Welcome Home")
})

router.use("/",require("./auth"))
module.exports = router