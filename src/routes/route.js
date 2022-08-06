const express = require('express');
const abc = require('../introduction/intro')
const Hi = require('../logger/logger.js')
const create = require('../validator/formatter.js')
const help = require('../util/helper.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    Hi.Welcome()
    help.presentDate()
    help.currentMonth()
    help.getBatchInfo()
    create.space()
    create.changeInSmall()
    create.changeInCapital()
    res.send('My second ever api!')
});

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason