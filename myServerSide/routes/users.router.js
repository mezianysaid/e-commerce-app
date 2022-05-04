const mongoose = require('mongoose');
const passport = require('passport');
const Users = require('../models/user.model');
const Comment = require('../models/comments.model')
const express = require('express');
var router = express.Router();
var JwtHelper = require('../config/Jwthelper');
const auth = require('../config/middleware/auth')

////// GET USER DETAILS
router.get('/users', JwtHelper.verifyJwtToken, (req, res, next) => {
    Users.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found' });
            else {
                return res.status(200).json({ status: true, user: _.pick(user, ['_id', 'username', 'email', 'role']) });
            }
        })
});
// list of  users
router.get('/ListUsers', async(req, res, next) => {
    try {
        const Userss = await Users.find()
        res.status(200).send(Userss);
        // console.log('your users are:', Users);
    } catch (err) {
        res.send(err);
        return res.status(404).json({ status: false, message: "there is an Error in fetching your users:" + err });
    }
});

// add Comment  
router.post('/addcomment',async(req, res) => {
    const { id,comment} =req.body
    // console.log('comment',comment);
    try {        
        
        Users.findById(id)
        .then(user => {
               const cmt =new Comment({
                   comment:comment,
                   user:user
               })         
               cmt.save();
               user.comments.push(cmt);
               user.save();
        })
        .then(() => {res.json('the comment added')})
    } catch (error) {
        return res.status(404).json({ status: false, message: "there is an Error in adding this comment:" + err });        
    }
});
//  fetch list of comments 
router.get('/listComment',async(req, res) => {
    Comment.find().populate({path:'user'})
    .then(comments => {
        // console.log(comments);
        res.json(comments)
    })
    .catch(()=> {
        return res.status(404).json({ status: false, message: "there is an Error in fetching comments" });
    })
})
module.exports = router;
