const express = require('express')
const { findById } = require('../model/officer')
const router = express.Router() //routing function
const officerData = require('../model/officer') // DB of student



router.get('/officerlist',(req,res)=>{
    try{
        officerData.find().then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error)
    }
})

//TODO: get single data from db  
router.get('/officerlist/:id',(req,res)=>{
    try{
        officerData.findById({"_id":req.params.id}).then(function(data){
            res.send(data);
            })
    }
   
    catch(error){
        console.log(error);
    } 
})
    
 // send data from db
 router.post('/officer',async(req,res)=>{
    try{
    

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            contact_number: req.body.contact_number,
            email_id:req.body.email_id,
            address:req.body.address,
            location:req.body. location
        }
        const user = new officerData(item)
        const savedUser = await user.save();
        console.log('saved data :',savedUser);
        res.send();
    }
    catch(error){
        console.log(error);
    }   
  })

//TODO: delete a data from db

router.delete('/officerlist/:id',async(req,res)=>{
    try{
        let id = req.params.id
        const deleteBook = await officerData.findByIdAndDelete(id)
        res.send(deleteBook)
    }
    
        catch(error){
            console.log(error);
        }   
    
})

//TODO: Update  a  data from db 
router.put('/officerlist',async(req,res)=>{

    try{

        console.log(req.body);
        await officerData.findByIdAndUpdate(req.body._id, {$set:req.body})
         .then(function(data){
              res.send(data);
      })  
    }
    catch(error){
        console.log(error);
    } 
 
}) 


module.exports = router