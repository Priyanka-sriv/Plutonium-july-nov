const userController= require("../controllers/userController")
const jwt = require('jsonwebtoken')

const checkAuthentication = function(req,res,next){
  let token = req.headers["x-auth-token"]
  if(!token){
    return res.send({status:false,msg:"token must be present"})
  }
  // if header is present ,header contain token
  let verifiedToken = jwt.verify(token,'functionUp-plutonium')
  if(!verifiedToken){
    return res.send({status:fasle,msg:"token is invalid"})
  }
  req.user= verifiedToken.userID
  
  
    next()
}
const checkAutherization = function(req,res,next){
  let userId = req.params.userId;
  let tokenId = req.user
  if(tokenId!=userId){
    return res.send({status:false,msg:"You are not authorrize "})
  }
  next()

}
module.exports.checkAuthentication=checkAuthentication
module.exports.checkAutherization=checkAutherization

