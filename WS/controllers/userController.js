require('dotenv').config();
const userSchema = require('../models/user') ;
const emailSchema = require('../models/email') ;
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const user = require('../models/user');


const login = (req,res) =>{
    userSchema.findOne({username:req.body.username})
    .then((user) =>{
        return bcrypt.compare(req.body.password,user.password)
    }).then((isValid) =>{
        if(isValid){
            const token = jwt.sign({
                username:user.username,
            },process.env.ACCESS_TOKEN_SECRET)
            res.status(200).json({status:'ok',token:token})
        }else{
            res.status(401).json({status:'Wrong Password'})
        }
    }).catch((err)=>{
        res.status(404).json({message:err.message})
    })
}

const register =  (req,res) =>{
    emailSchema.findOne({email:req.body.email})
    .then((email) =>{
        if(email){
           return bcrypt.hash(req.body.password,10)
        }else{
            res.status(404).json({status:'email not in the system'})
        }
    })
    .then((password) =>{
        const userObj = {
            username:req.body.username,
            email:req.body.email,
            password:password
        }
        const newUser = new userSchema(userObj);
        return newUser.save()
    }).then(()=>{
        res.status(200).json({status:'ok'})
    })
    .catch((err)=>{
        res.status(404).json({message:err.message})
    })
}

const deleteUser = (req,res) =>{
    userSchema.findOne({username:req.body.username})
    .then((user) =>{
        return bcrypt.compare(req.body.password,user.password)
    }).then(async(isValid) =>{
        if(isValid){
            await userSchema.findOneAndDelete({username:req.body.username})
            res.status(200).json('User Deleted')
        }else{
            res.status(401).json({status:'Wrong Password'})
        }
    }).catch((err)=>{
        res.status(404).json({message:err.message})
    })
}

module.exports  = {deleteUser,login,register}