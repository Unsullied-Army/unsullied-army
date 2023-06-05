const express= require("express");
const  multer=require("multer");

const router=express.Router();

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "public/images");
    },
    filename: (req,file,cb)=>{
        cb(null, req.body.name)
    }
})
const upload= multer({storage:storage})

router.post("/", upload.single("image"),(req,res)=>{
    try{
        res.status(200).json("File uploaded Successfully")
    }catch(error){
        console.log(error)
    }
})
module.exports= router
