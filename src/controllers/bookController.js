const { trusted } = require("mongoose")
const bookModel= require("../models/bookModel") //reqiure schema file and saved it into new variable
// Part:1
const createBook= async function (req, res) {
    let createData = req.body
    let saveData = await bookModel.create(createData)
    res.send({msg:saveData})
}
// Part:2

const getBookData= async function (req, res) {
    let getBookData = await bookModel.find().select({bookName: 1,authorName :1, _id:0})
    res.send({msg:getBookData})
}  
// Part:3
const  getBooksInYear = async function (req, res) {
    let getYearData = await bookModel.find({year:{$eq:req.body.year}})
    res.send({msg:getYearData})

}   
// part:4
const  getParticularBooks = async function(req,res){
    let data = req.body
    let saveData = await bookModel.find(data)
    res.send({msg:saveData}) 

}

// part5
const getXINRBooks = async function(req,res){
    let allBook = await bookModel.find({"price.indianPrice":{$in:[300,400,500]}})
    res.send({msg:allBook})

}
// part6
const getRandomBooks = async function(req,res){
    let allBook = await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:800}}],})
    res.send({msg:allBook})

}
// ya to wo stock me true ho ya phir
// totalpages uske 500 se jada ho
module.exports.createBook=createBook
module.exports.getBookData=getBookData
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks =getRandomBooks 
module.exports. getParticularBooks = getParticularBooks 

