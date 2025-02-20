const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")

router.post('/insert',userController.dataInsert)
router.get('/display',userController.display)

module.exports=router
