const path=require('path');
const express=require('express');
const router=express.Router();
const User=require('../model/User');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','form.html'));
})
router.post('/insert-user',async(req,res,next)=>{
    try{
        if(!req.body.phonenumber){
        throw new Error('phone number is maindatory');
        }
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;
    //console.log('123',name);
     const data=await User.create({name:name,email:email,phonenumber:phonenumber});
     res.status(201).json({newUserDetail:data});
    
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
        error:err
        })
    }

});
router.get('/get-user', async(req,res,next)=>{
    try{
 const users= await User.findAll();
 res.status(201).json({allUser:users});
    }
    catch(err){
     res.status(500).json({
        error:err
     })
    }
});

router.delete('/delete-user/:id', async(req,res,next)=>{
    try{
        if(req.params.id=='undefined'){
            res.status(400).json({err:'Id is missing'})
        }
        const uId= req.params.id;
        await User.destroy({where:{id:uId}})
        res.sendStatus(200);
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }

});
module.exports=router;
