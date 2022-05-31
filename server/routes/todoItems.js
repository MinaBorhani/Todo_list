const router = require('express').Router();
//import todo model
const todoItemsModel = require('../models/todoItems');



// Lest create our first route -- We will add Todo Item to our datebabase
router.post('/api/item', async (req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item : req.body.item
        })
        // save this item datebase
        const saveItem = await newItem.save()
        res.status(200).json('Item Added Successfully .')
    }catch (err){
        res.json(err);
    }
})
