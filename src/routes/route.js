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
router.get("/users/:userId",authMiddleware.checkAuthentication,authMiddleware.checkAutherization, userController.verifyParticularUser)
// // part4
router.put("/updateUser/:_id",authMiddleware.checkAuthentication,authMiddleware.checkAutherization,userController.updateUser)
// // part5
router.delete("/deleteUser/:_id",authMiddleware.checkAuthentication,authMiddleware.checkAutherization,userController.deleteUser)

module.exports = router;