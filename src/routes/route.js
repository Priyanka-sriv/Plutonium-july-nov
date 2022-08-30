const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMiddleware = require("../Middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// part1
router.post("/CreateUsers", userController.createUser)
// part2
router.post("/loginUser",userController.userLogin)
// part3
router.get("/users/:userId",authMiddleware.checkValidation, userController.verifyParticularUser)
// // part4
router.put("/updateUser/:_id",authMiddleware.checkValidation,userController.updateUser)
// // part5
router.delete("/deleteUser/:_id",authMiddleware.checkValidation,userController.deleteUser)

module.exports = router;