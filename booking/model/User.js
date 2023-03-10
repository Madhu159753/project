const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
        
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    phonenumber:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
});
module.exports=User;