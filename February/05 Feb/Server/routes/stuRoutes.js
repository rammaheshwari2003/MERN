
const express=require("express")
const router=express.Router()
const stuController=require("../controllers/stuControllers")

router.post('/data',stuController.datasave)
router.get('/data',stuController.getdata)
router.post('/getdata',stuController.dataSearch)
router.get('/dataupdate',stuController.getdata)
router.post('/deletedata',stuController.deleteData)
router.post('/editdata',stuController.editData)
router.post('/updatedata',stuController.editSave)

module.exports=router
