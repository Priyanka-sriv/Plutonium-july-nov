const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required:true 
    }, 
    authorName: String,
    price:{
        indianPrice: String, 
        europianPrice:String 
    },
    year:{
        type:Number,
        default:"2021"
    },
    tags:[ String ],
    totalPages: Number,
    stockAvailable:{
        type:Boolean
    }

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)
// Question:mongo/session-2
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field),
//  price containing Indian and european price, year ( should be 2021 if no year is provided) ,
//  tags array, authorName, totalPages , stockAvailable ( true false) 
