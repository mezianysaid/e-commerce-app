const express = require('express')
const nodemailer=require('nodemailer')
const router=express.Router()
require('dotenv').config()
Email=process.env.EMAIL
Pass=process.env.PASS
// module.exports={
    // Email:Email,
    // Pass:Pass
// }

router.post('/send',async(req,res)=>{
    let user=req.body
    // console.log(req.body);
    sendMail(user,info=>{
        res.send({message:'the message has been sended successfully'});
    })
})

async function sendMail(user,callback){
   const smtpConfig={
    //    pool:true,
       host:'smtp.gmail.com',
       port:465,
       domain:'gmail.com',
       auth:{
           user:Email,
           pass:Pass
       },
       authentication:'plain',    
   };
   let transportor=nodemailer.createTransport(smtpConfig)
   let mailOptions={
       from:user.email,
       to:Email,
       subject:user.fullname,
       text:user.message
   }
   let info= await transportor.sendMail(mailOptions);
   callback(info);
};

module.exports=router;