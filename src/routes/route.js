const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const bookModel = require('../models/bookModel');
const myController =require('../controllers/bookController')

const router = express.Router();
router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

// create data
router.post('/createBook', myController.createBook)

// get data
router.get('/getBookList', myController.getBookData)
   




















router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason