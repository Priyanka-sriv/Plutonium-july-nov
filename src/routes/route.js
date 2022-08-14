const { json } = require('body-parser');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
// Missing Number Prolem 1
router.get('/sol1', function (req, res){
    let arr =[1,2,3,5,6,7]
    let sum =0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    let lastNumber =arr.pop()
    var total =Math.floor(lastNumber*(lastNumber+1)/2)
    let missingNumber = total-sum
    res.send({data:missingNumber})
})
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;