

const express=require('express')
const route=express.Router()
const empController=require('../controllers/empController')


route.post("/registration",empController.userResgister)
route.post("/login",empController.userLogin)

module.exports=route