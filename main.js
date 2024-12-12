
const express = require('express')
const app = express()
const cors = require('cors')
const apiId = 24133604;  // Replace with your API ID
const apiHash = 'cd7f73456f742ba988c0794f569b260b';  // Replace with your API Hash
const phoneNumber = '+995593484636';  // Replace with your phone number
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const input = require('input'); // npm install input
const fs = require('fs');
const { fileURLToPath } = require('url');
const cheerio = require('cheerio');

const crypto = require('crypto')
const env = require('dotenv').config()





const path = require('path');
const ConnectDB = require('./modules/ConnectDB.js');
const { exec } = require('child_process');


ConnectDB()
app.use(express.json({ limit: '250mb' })); // for JSON payloads
app.use(express.urlencoded({ limit: '250mb', extended: true })); // for URL-encoded form data




app.use(cors({
  origin:'*'
}))

app.use(express.json())

const getcode = async() => {



}


app.post('/' , async(req,res) => {

  const {phone , countiniue} = req.body


  
let verifycode = 0

app.post('/code' , async(req,res) => {
  const {code} = req.body


  if(!code){
    res.json("Code Not FOund")
  }else{
      verifycode = code
      res.json({verifycode , code})
  }



  





})


// Your api_id and api_hash from https://my.telegram.org/auth

const stringSession = new StringSession(await new Promise((resolve , reject) => {

  if(countiniue == true){
    fs.readFile('./session.txt' , 'utf-8' , (err , data) => {
      if(err){
        resolve('')
      }
      if(data){
        if(data.length > 5)
        resolve(data.toString())
      }else{
        resolve('')
      }
    }) 
  }else{
    resolve('')
  }


})); 



// Empty string will initialize a new session
const testphone = 9996621234


// Initialize the Telegram client
const client = new TelegramClient(stringSession, apiId, apiHash, {
  connectionRetries: 5,  // Retry connections 5 times in case of failures
        testServers:true,
})







async function main() {
  console.log('Starting Telegram Userbot...');

  
  await client.start({
    phoneNumber: phone,
    password: async () => {
      const password = await input.text('Please enter your 2FA password: ');
      return password;
    },
    phoneCode: async() => {
      const promise =  await new Promise((resolve , reject) => {


        const interval = setInterval(() => {
          
          if(verifycode > 0){
            clearInterval(interval)
            resolve(verifycode)
  
          }
  
        }, 500);
  
      })
      return String(promise)
    },
    onError: (err) => verifycode = 0 | console.log(err),
  });

  console.log('Userbot is now authenticated!');

  if(client.session.save()){
    fs.writeFileSync('./session.txt' , client.session.save())
  }

  

  res.status(201).send("User Succesfuly Authenticated")
  // Example: Send a message
  const chat = await client.getEntity('username_or_chat_id'); // Replace with the username or chat ID
  await client.sendMessage(chat, { message: 'Hello from the userbot!' });

  

  console.log('Message sent successfully!');
}




app.get('/checkclient' , async(req,res) => {


 try{

    const me = await client.getMe()

    return res.status(200).send("User is Authenticated")
  }catch(err){
    console.log(err)
    return res.status(400).send("User is Not Authenticated")
  }

})

app.post('/sendmessages' , async(req,res) => {


  const {selectedchanels , messagei, uploadedfiles , allpath , date} = req.body


  let done = 0



  const message = messagei.replace(/<\/p>/g, '</p>\n')




  selectedchanels.forEach(async(senddata, id) => {

    if(message && uploadedfiles.length == 0){
      if(!date ){

               const send = await client.sendMessage(senddata[1]  , {message , parseMode:"html" })
      }else{

        const datmin = new Date(date)
        const send = await client.sendMessage(senddata[1]  , {message , schedule:datmin / 1000 , parseMode:"html"})

      }

    }





 await uploadedfiles.forEach((data, id) => {
    const sendfile = async(base64String, filePath) =>  {
      // Remove base64 header (if present)
      const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
      // Decode the base64 string into a buffer
      const buffer = Buffer.from(base64Data, 'base64');




   
        if(fs.existsSync('./uploading')){

        }else{
          fs.mkdirSync('./uploading')
        }
    


      // Write the buffer to a file

    
          fs.writeFileSync(filePath, buffer, (err) => {
          if (err) {
              console.error('Error writing the file:', err);
          } else {
              console.log(`File saved to ${filePath}`);
          }
      });


  const pathsend = `./uploading/${id}.png`


  if(date !== undefined){
    const datmin = new Date(date)
    if(messagei){
      const message = messagei.replace(/<\/p>/g, '</p>\n')
      const send = await client.sendFile(senddata[1]  , {file:pathsend, scheduleDate:datmin / 1000 , caption:message , parseMode:"html"})
    }else{
    const send = await client.sendFile(senddata[1]  , {file:pathsend, scheduleDate:datmin / 1000 , parseMode:"html"})
  }

  }else{
    if(messagei){
      const message = messagei.replace(/<\/p>/g, '</p>\n')
      const send = await client.sendFile(senddata[1]  , {file:pathsend , caption:message , parseMode:"html"})
    }else{
    
    const send = await client.sendFile(senddata[1]  , {file:pathsend , parseMode:"html"})
  }

  }



   

  
    


    }

  
  // Example base64 image (replace this with your actual base64 string)
  const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...';
  
  // Specify the path to save the image (e.g., "image.png")
  const random = crypto.randomBytes(16)
  const filePath = path.join("./uploading", `${id}.png`);
  
  // Convert base64 image to file and save it
   sendfile(data, filePath);

   done++

  })
  
  


})

}

)
app.get('/getchanel' , async(req,res) => {


    // Fetch all dialogs (chats) including channels, groups, and private messages
    const result = await client.getDialogs()
    let chanellist = []
    // Filter only channels
    console.log(result )
    result.filter(data => data.dialog.peer && data.dialog.peer.channelId && data.entity.creator).forEach(data => chanellist = [...chanellist , [data.title , data.dialog.peer.channelId]])
    result.filter(data => data.dialog.peer && data.dialog.peer.channelId).forEach(data => console.log(data.entity.creator))
    console.log(chanellist)
    

    res.json(chanellist)

   

  
})

app.post('/createchanel' , async(req,res) => {
  
  


  
  console.log(req.body)

  const {chanelname} = req.body

  if(!chanelname){
    res.json("Chanel Name Required")
  }else{
     const channel = await client.invoke(
      
    new Api.channels.CreateChannel({
      title:chanelname,
      about:"gigi",
      
            
    })
  )

  }

  

})



// Run the script
main().catch(console.error);




  const Mainpromise = await new Promise((resolve , reject) => {

   
    

  


  }).then(value => console.log(value))

  console.log("Wazaaa")



  



})

app.use('/' , require('./routes/mainroute.js'))

 app.listen(4000)






