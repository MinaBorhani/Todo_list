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


// Lets create  Second route -- get date from datebase
router.get('/api/item' , async(req,res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})


// Let's update item
router.put('/api/item/:id' , async(req,res)=>{
    try{
        // find the item by id and update it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id , {$set: req.body});
        res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }
})

// Let's Delete item from date base
router.delete('/api/item/:id' , async (req, res)=>{
    try{
        // find the item by its id and delete it
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err) {
        res.json(err);
    }
})

// export router 
module.exports = router;