const mongoose=require('mongoose')

var gallery=new mongoose.Schema({
    filename:{
        type:String,
    },
    idProduct:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }
})

module.exports = Gallery = mongoose.model('gallery',gallery);