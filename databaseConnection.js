const {Sequelize} = require("sequelize")
const connectionDB = new Sequelize("postgres","postgres","sangwa1997",{
    host:'LocalHost',
    dialect:"postgres",
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }

})
module.exports = connectionDB;