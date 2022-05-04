const express =require('express');
const router=express.Router();
const Product = require('../models/product.model');
const multer = require('multer');
const Gallery=require('../models/gallery.model');
const Cartt = require('../models/carts.model');
const auth = require('../config/middleware/auth')
require('dotenv').config();
const uploadpath=process.env.uploadPath
var diskstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        const mimeType = file.mimetype.split('/');
        const fileType = mimeType[1];
        const fileName = file.originalname;
        cb(null, fileName);
        // cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
});

router.get('/list',(req,res) => {
    // console.log("hello")
    Product.find().populate({path:'similarImages'})
    .then(products => {res.json(products)})
    .catch(err => res.status(404).json({ nobooksfound: 'No Products Found'}));
    
});
// add new book 
var storage = multer({ storage: diskstorage }).single('image');
// const upload=multer()
router.post('/add',auth,storage,async(req,res) => {   
    
    const imagePath = uploadpath + req.file.originalname;
    try{
        let prod=new Product({
            name:req.body.name,
            price:req.body.price,            
            oldPrice:req.body.oldPrice,
            category:req.body.category,
            qtty:req.body.qtty,
            description:req.body.description,                   
            image:imagePath
        })
        await prod.save();
        return res.json({msg:'the Product added Successfully'});
    }catch(err){
        res.send(err)
    }
});
// update a book
router.put('/update/:id',async (req,res) => {
    Product.findByIdAndUpdate(req.params.id,req.body)
    .then(bk => res.json( { msg:"Updated successfully"}))
    .catch(err => res.status(400).json({ error:'Unable to update this ook'}));
});
//  Delete a book 
router.delete('/remove/:id',auth,async(req,res) => {
    Product.findByIdAndRemove(req.params.id)
    .then(() => res.json({ msg:'deleted successfully'}))
    .catch(err => res.status(404).json({ error:'No such a Product'}));
})
// get book's info
router.get('/fetchdetails/:id',async (req,res)=>{
    Product.findById(req.params.id).populate({path:'similarImages'})
    .then((product) => {res.json(product)})
    .catch(err => { res.status(404).json({ error:"Book with this id does not found !"})});
});

// add similar images to the product 
var storage2 = multer({ storage: diskstorage }).single('image');
router.post('/addImages',storage2,async(req,res) => {
     Product.findById({_id:req.body.id})
     .then(async(product) => {
            let galler= new Gallery({
                filename:uploadpath + req.file.originalname,
                idProduct:product
            });              
            try{                   
                await galler.save();
                product.similarImages.push(galler);
                await product.save();                
                return res.json({ status: 500, message: "the image has been added succesfully" });
            }catch(err){
                        res.status(404).send({error:'Can\'t find this product for some reasons !'}) 
                    }
     })         
     .catch(err => { res.status(404).send({error:'Can\'t add Image to this product to some reasons !'})})
})

// INCREMENTR LIKES 
router.get('/incrementLikes/:id',async(req,res) => {
    Product.findById(req.params.id)
  .then(async(product) => {
      product.likes=product.likes + 1
       await product.save()
  })
  .then((prod)=> {res.send(prod)})
  .catch(err => { res.status(404).send({error:"can not increment"})})
})

// COUNT  VISITORS
router.get('/countVisitors/:id',async(req,res) => {
    // console.log('liked',req.params.id)
  Product.findById(req.params.id)
  .then(async(product) => {
      product.views=product.views + 1
       await product.save()
  })
})


module.exports=router;