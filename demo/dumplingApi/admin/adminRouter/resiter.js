const express = require('express')
const router =express.Router()
const jwt = require('../../utils/jwt')
const adminModel = require('../../db/model/adminModel')
const roots = require('./rootList')
router.post('/reigter',(req,res)=>{
  let {userName,passWord} = req.body 
   let rootLevel= 1212 
    let token= ""
    let rootList=roots[0]
    let ctime= "2000"
  adminModel.findOne({userName})
  .then((db)=>{
    if(db){
        res.json( {err:1,  errMsg: "", data: { info:  "用户名1已存在",status: 2}})
    }else{
      adminModel.insertMany({userName,passWord,rootLevel,token,rootList,ctime})
      .then(()=>{
        res.json({ err:0 , errMsg: "",   data: {  info: "注册成功",  status: 1  }})
      })
    }
   
  })

  
})





module.exports=router