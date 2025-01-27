
const express=require('express')
const router=express.Router()
const stuController=require('../controller/stuController')

router.post('/datasave',stuController.datasave)

router.get('/datadisplay',stuController.datadisplay)

router.post('/datasearch',stuController.datasearch)

    
module.exports=router