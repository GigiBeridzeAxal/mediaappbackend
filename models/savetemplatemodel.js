const mongoose = require('mongoose')



const savetempalteSchema = mongoose.Schema({


    selectedchanels:{
        type:Array
    },
    
    message:{
        type:String
    },
    
    date:{
        type:String
    },
        
    uploadedfiles:{
        type:Array
    },






}, {timestamps:true})


module.exports = mongoose.model("savetemplate" , savetempalteSchema)