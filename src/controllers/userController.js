const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel.js")
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
  let uniqueId = req.body._id
  let data = await userModel.findOne({emailId:takeEmailData,password:takePasswordData})
  if(!data){
    return res.send({status:false,msg:"user does not exist"})
  }
  // login successfull then create token
  let token = jwt.sign({userID:uniqueId},'functionUp-plutonium')
  res.send({status:true,msg:token}) 
}
// part3
const verifyParticularUser = async function(req,res){
  let userId = req.params.userId
  if(!userId){
    return res.send({status:false,msg:"Id is invaild"})
  }
  let token = req.headers["x-auth-token"]
  if(!token){
    return res.send({status:false,msg:"header must be present"})
  }
  // if header is present ,header contain token
  let verifiedToken = jwt.verify(token,'functionUp-plutonium')
  if(!verifiedToken){
    return res.send({status:fasle,msg:"token is invalid"})
  }
  let getUserDetails = await userModel.findById(userId)
  if(!getUserDetails){
    return res.send({status:false,msg:"do not match the userId"})
  }
  res.send({status:true,msg:getUserDetails})

}
// part4
const updateUser = async function(req,res){
  let userId = req.params._id
  let updateData = req.body
  // mid
  if(!userId){
    return res.send({status:false,msg:"Id is invaild"})
  }
  let token = req.headers["x-auth-token"]
  if(!token){
    return res.send({status:false,msg:"header must be present"})
  }
  let verifiedToken = jwt.verify(token,'functionUp-plutonium')
  if(!verifiedToken){
    return res.send({status:fasle,msg:"token is invalid"})
  }
  let getUserDetails = await userModel.findById(userId)
  if(!getUserDetails){
    return res.send({status:false,msg:"do not match the userId"})
  }
  // mid
  let updateDetails = await userModel.findOneAndUpdate({_id:userId},updateData )
  res.send({status:true,msg:updateDetails})

  
}
// part5
const  deleteUser = async function(req,res){
  let userId = req.params._id
  if(!userId){
    return res.send({status:false,msg:"Id is invaild"})
  }
  let token = req.headers["x-auth-token"]
  if(!token){
    return res.send({status:false,msg:"header must be present"})
  }
  let verifiedToken = jwt.verify(token,'functionUp-plutonium')
  if(!verifiedToken){
    return res.send({status:fasle,msg:"token is invalid"})
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





