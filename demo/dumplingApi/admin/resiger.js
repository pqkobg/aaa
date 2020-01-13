const express = require('express')
const router =express.Router()


const sigter = require('./adminRouter/resiter')

router.use('/reigter',sigter)

module.exports=router