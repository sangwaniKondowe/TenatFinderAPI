const {DataTypes } = require('sequelize');
const databaseConnection = require('../databaseConnection')

const landlord = databaseConnection.define('Landlords', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phonenumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

}, {
timestamps:true
});

module.exports = landlord