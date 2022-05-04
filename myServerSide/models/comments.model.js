const mongoose = require('mongoose');
// const Schema = mongoose.Schema();

const CommentSchema =new mongoose.Schema({
    comment :{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
})

module.exports = Comment = mongoose.model('comments',CommentSchema);