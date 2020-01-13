const express = require('express')
const router =express.Router()
const jwt = require('../../utils/jwt')
const roots = require('./rootList')
const articleadd = require('../../db/model/articleadd.js')
const article = require('../../control/article')




router.post('/addarticle',(req,res)=>{

    
 let {title,nei} = req.body 

  articleadd.insertMany({title,nei})
  .then((db)=>{

    res.send({err:0,msg:'添加 ok'})
  })
  .catch(()=>{
      res.send({err:"错"})
  })
})


router.post('/list',(req,res)=>{
  let page=Number(req.body.page)
  let pageSize=Number(req.body.pageSize)
 
  article.get(page,pageSize)
  .then((db)=>{
    console.log(db)

    res.send({err:0,msg:'search ok',list:db})
  })
})

router.post('/delarticle',(req,res)=>{
  let  {foodId}=req.body
  article.del(foodId)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})

// 关键字查询
router.post('/getguanarticle',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||3
  let kw = req.body.val
  // let kw ="qwqw"
  article.getByKw(kw,page,pageSize)
  .then((db)=>{
    if(db){
        res.json( {err:1,  errMsg: "", data: { info:  "搜索ok",status: 2,list:db}})
    }else{
        res.json({ err:0 , errMsg: "",   data: {  info: "无数据",  status: 1,list:db  }})
    }
   
  })
})
module.exports=router