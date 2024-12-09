const express = require('express')
const savetemplatemodel = require('../models/savetemplatemodel')
const router = express.Router()



router.post('/update' , async(req,res) => {

    const {selectedchanels , message , uploadedfiles , allpath , date, id} = req.body

    const update = await savetemplatemodel.updateOne({_id:id}, {$set:{message:message , selectedchanels:selectedchanels , uploadedfiles:uploadedfiles , allpath:allpath , date:date }})

})

router.post('/getuserbyid' , async(req,res) => {

    const {id} = req.body

    const find = await savetemplatemodel.find({_id:id})

    res.json(find)

})

router.get('/gettemplates' , async(req,res) => {

    const find = await savetemplatemodel.find().sort({timestamp:-1})

    res.json(find)

})

router.post('/savetemplate' , async(req,res) => {

    const {selectedchanels , message , uploadedfiles , allpath , date} = req.body


    const create = await savetemplatemodel.create({selectedchanels , message , uploadedfiles , allpath , date})

    if(create){
        res.json("Succesfully Saved Template")
        console.log("Succesfuly Create New Tempalte")
    }

 


})



module.exports = router