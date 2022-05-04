var mongoose = require('mongoose')


var Product = new mongoose.Schema({
    name : {
        type:String,
        require: true
    },
    price: {
        type:Number,
        require:true
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    oldPrice:{ 
        type:Number,
    },
    likes:{
        type:Number,
        default:0
    },
    views:{
        type:Number,
        default:0
    },
    image :{
        type:String,
        require: true
    },
    similarImages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'gallery'
    }],
    qtty:{
        type:Number,
        default:0
    },   

})
module.exports = Product = mongoose.model('products',Product)