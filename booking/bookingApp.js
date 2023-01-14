//const path=require('path');
const express=require('express');

const bodyParser=require('body-parser');
const app=express();
const router=require('./route/form');
const sequelize=require('./util/database');
//const User=require('./model/User');
const cors=require('cors');
app.use (bodyParser.json());
//app.use(express.static(path.join(__dirname, 'view')));
app.use(cors());
app.use(router);
//app.use(sequelize);
//app.use(User);
sequelize
.sync()
.then(result=>{
    console.log(result);
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
});


