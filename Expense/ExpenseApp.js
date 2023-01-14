const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const ExpenseApp=express();
const sequelize=require('./util/database');
const routerApi=require('./route/route');
ExpenseApp.use(bodyParser.json());
ExpenseApp.use(cors());
ExpenseApp.use(routerApi);
sequelize
.sync()
.then(result=>{
    console.log(result);
    ExpenseApp.listen(3000);
})
.catch(err =>{
console.log(err);
})
