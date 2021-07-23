'use strict';

// const { Sequelize } = require("sequelize/types");

const {DataTypes} = require("Sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Landlords', {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Landlords');
  }
};