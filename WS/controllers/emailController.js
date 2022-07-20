const emailSchema = require('../models/email');
 

const createEmail = (req,res)=>{
    const secretPassword = req.body.secretPassword;
    if(secretPassword == process.env.EMAIL_SECRET_KEY ){
        const newEmail = new emailSchema({email:req.body.email})
        newEmail.save()
        .then(() =>{res.status(200).json("New Email Created")})
        .catch(err => res.status(404).json({message:err.message}))
    }else{
        res.status(403).json({message:'Secret Password Incorrect'})
    }
}

const getEmail = (req,res) =>{
     emailSchema.findOne({email:req.body.email}).then((email)=>{
        res.status(200).json(email)
    }).catch((err)=>{
        res.status(404).json({message:err.message})
    })
}

const deleteEmail =  (req,res) =>{
    const secretPassword = req.body.secretPassword;
    if(secretPassword == process.env.EMAIL_SECRET_KEY ){
        emailSchema.findOneAndDelete({email:req.body.email})
        .then(() =>{
            res.status(200).json("Email Deleted")
        }).catch(err => res.status(404).json({message:err.message}))
    }else{
        res.status(403).json({message:'Secret Password Incorrect'})
    }
}

module.exports = {deleteEmail,createEmail,getEmail}
