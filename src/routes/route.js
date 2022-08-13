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
// 1.	Create an API for GET /movies that returns a list of movies.
//  Define an array of movies in your code and return the value in response.
router.get('/GET-movies',function(req,res){
    let moviesList = ["Partner","Don","Holiday",]
    res.send(moviesList)

})	
// problem 2 And 3 

router.get('/GET-movies/:indexNumber',function(req,res){
    const  moviesList=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let findMovieIndex = req.params.indexNumber
    if(findMovieIndex<0||findMovieIndex>=moviesList.length){
        return res.send("index value does not exist in your array list")
    }
    let indexList = moviesList[findMovieIndex]
    res.send(indexList)

})
// problem4
router.get('/films',function(req,res){
 
   const moviesArrayList= [ {
       "id":1,
       "name":"The Shining"
       }, {
        "id":2,
        "name":"Incendies"
      
       }, {
        "id":3,
        "name":"Rang de Basanti"
     
       }, {
        "id":4,
        "name":"Finding Nemo"
       }]
       res.send(moviesArrayList)
      
})
// problem 5
router.get('/GET/films/:flimId',function(req,res){
    const arrayList= [ {
        "id":1,
        "name":"The Shining"
        }, {
         "id":2,
         "name":"Incendies"
       
        }, {
         "id":3,
         "name":"Rang de Basanti"
      
        }, {
         "id":4,
         "name":"Finding Nemo"
        }]
        // lets take filmid in req.params
        let moviesId = req.params.flimId
        for(let i=0;i<arrayList.length; i++){
            let myFilms = arrayList[i]
            if(myFilms.id == moviesId){
               return res.send(myFilms)
            }   
        }
        res.send("No movie exists with this id")
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