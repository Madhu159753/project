const path=require('path');
const express=require('express');
const app=express.Router();
const Expense =require('../model/Expense');

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','expense.html'));
});
app.post('/insert-user',async(req,res,next)=>{
    try{
  const choose=req.body.choose;
  const description=req.body.description;
  const amount=req.body.amount;
  const data=await Expense.create({choose:choose,description:description,amount:amount});
  res.status(201).json({Details:data});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            error:err
        })
    }
});
app.get('/get-data',async(req,res,next)=>{
try{
    const user=await Expense.findAll();
    res.status(201).json({allData:user});
}
catch(err){
    res.status(500).json({
        error:err
    })
}
});
app.delete('/delete-user/:id', async(req,res,next)=>{
    try{
        if(req.params.id=='undefined'){
          return  res.status(400).json({err:'Id is missing'})
        }
        const uId= req.params.id;
        await Expense.destroy({where:{id:uId}})
        res.sendStatus(200);
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }

});


module.exports=app;