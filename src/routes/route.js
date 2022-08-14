const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
   
// Write a POST /players api that creates a new player 
// ( i.e. that saves a player’s details and doesn’t allow saving the data
//  of a player with a name that already exists in the data)

   router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
    let addNewArray = req.body
    let newPlayerName = req.body.name
    for(let i=0;i<players.length;i++){
        if(players[i].name == newPlayerName){
            return res.send("does not allowed same name data")
        }
    }
    let myValue = players.push(addNewArray)
    res.send(players)
})



   










router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;