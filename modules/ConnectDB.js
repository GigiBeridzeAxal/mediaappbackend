const mongoose = require('mongoose')


const ConnectDB = async() => {


    try{
    const connect = await mongoose.connect(process.env.DB)

    if(connect){
        console.log("Database Succesfully Connected ")
    }

    }catch(err){
        console.log("Database Cant Connect" , err)
    }



}

module.exports =  ConnectDB