const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel.js")
const { get } = require('../routes/route.js')
// part1
// create user registeration
const createUser = async function(req,res){
  let createUserDetails = req.body 

  let saveUserDetails = await userModel.create(createUserDetails)
  res.send({status:true,msg:saveUserDetails})

}
// part2
const userLogin = async function(req,res){
  let takeEmailData =req.body. emailId
  let takePasswordData = req.body.password

  let data = await userModel.findOne({emailId:takeEmailData,password:takePasswordData})
  if(!data){
    return res.send({status:false,msg:"user does not exist"})
  }
  let uniqueId = data._id
  // login successfull then create token
  let token = jwt.sign({userID:uniqueId},'functionUp-plutonium')
  res.send({status:true,msg:token}) 
}

// part3
const verifyParticularUser = async function(req,res){
  let userId = req.params.userId;
  if(!userId){
    return res.send({status:false,msg:"Id is invaild"})
  }
  let getUserDetails = await userModel.findById(userId)
  if(!getUserDetails){
    return res.send({status:false,msg:"invalid Person"})
  }
 
  res.send({status:true,msg:getUserDetails})
}
// part4
const updateUser = async function(req,res){
  let userId = req.params._id
  let updateData = req.body
  if(!userId){
    return res.send({status:false,msg:"Id is invaild"})
  }
  let getUserDetails = await userModel.findById(userId)
  if(!getUserDetails){
    return res.send({status:false,msg:"do not match the userId"})
  }
  let updateDetails = await userModel.findOneAndUpdate({_id:userId},updateData,{new:true} )
  res.send({status:true,msg:updateDetails}) 
}

// part5
const  deleteUser = async function(req,res){
  let userId = req.params._id
  if(!userId){
    return res.send({status:false,msg:"Id is invaild"})
  }
  let getUserDetails = await userModel.findById(userId)
  if(!getUserDetails){
    return res.send({status:false,msg:"do not match the userId"})
  }
  let userDeleted = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
  res.send({ status: true, msg: userDeleted })
}

module.exports.createUser=createUser
module.exports.userLogin=userLogin
module.exports.verifyParticularUser=verifyParticularUser
module.exports.updateUser=updateUser
module.exports. deleteUser= deleteUser 







