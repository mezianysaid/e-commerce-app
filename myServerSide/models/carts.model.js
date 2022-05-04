const mongoose=require('mongoose')

var cart=new mongoose.Schema({   
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    }
})

module.exports = Cartt = mongoose.model('cart',cart);