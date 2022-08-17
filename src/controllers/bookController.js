const bookModel= require("../models/bookModel")
const createBook= async function (req, res) {
    let createData = req.body
    let saveData = await bookModel.create(createData)
    res.send({msg:saveData})
}

const getBookData= async function (req, res) {
    let getBookData = await bookModel.find()
    res.send({msg:getBookData})
}  
module.exports.createBook=createBook
module.exports.getBookData=getBookData