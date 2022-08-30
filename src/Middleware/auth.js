const userController= require("../controllers/userController")
const jwt = require('jsonwebtoken')

const checkValidation = function(req,res,next){
  let token = req.headers["x-auth-token"]
  if(!token){
    return res.send({status:false,msg:"token must be present"})
  }
  // if header is present ,header contain token
  let verifiedToken = jwt.verify(token,'functionUp-plutonium')
  if(!verifiedToken){
    return res.send({status:fasle,msg:"token is invalid"})
  }
 
    next()
}
module.exports.checkValidation=checkValidation
