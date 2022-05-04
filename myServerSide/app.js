const express=require("express");
const router=express.Router();
const Connect=require("./config/db");
const cors=require('cors');
const bodyParser=require('body-parser');
var passport = require('passport');
// require('./config/passport');
require('dotenv').config();

const originpath=process.env.originPath
const port1 = process.env.PORT1
const port2 = process.env.PORT2

const app=express();
Connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: originpath ,credentials:true}));
app.use(express.json({ extended:false}))
app.use(passport.initialize());
app.use('/public/images', express.static('public/images'));

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valError = [];
        Object.keys(err.errors).forEach(key => valError.push(err.errors[key].message));
        res.status(422).send(valError);
    }
});

const router_product=require('./routes/product.router')
app.use('/api/product',router_product)

const router_user=require('./routes/users.router');
app.use('/api/user',router_user)


const router_auth=require('./routes/auth');
app.use('/api/auth',router_auth)

const router_email=require('./routes/email.router');
app.use('/api/email',router_email)

// const router_mailer=require('./routes/api/email')
// app.use('/api/email',router_mailer);
// const port=process.env.PORT || 8082;
app.listen(port1 || port2,()=> console.log("Server is running "));
