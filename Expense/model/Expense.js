
const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true,
        allowNull:false
    },
    choose:{
        type:Sequelize.STRING,
        allowNull:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:true

    },
});
module.exports=Expense;