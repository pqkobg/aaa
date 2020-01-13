const express = require('express')
const router =express.Router()

const Login = require('./adminRouter/adminUserRouter')
const Root = require('./adminRouter/adminRootRouter')
const Food = require('./adminRouter/adminFoodRouter')
const sigter = require('./adminRouter/adminaddarticle')
// 用户登录相关
router.use('/user',Login)
// router.use('/reigter',sigter)
// 权限管理相关
router.use('/root',Root)
router.use('/food',Food)
router.use('/article',sigter)

module.exports=router