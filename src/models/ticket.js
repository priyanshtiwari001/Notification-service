'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const {Enums}= require('../utils/common');
  const {FAILED,PENDING,SUCCESS} = Enums.TICKET_STATUS;
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: 
    {
      type:DataTypes.STRING,
      allowNull:false
      },
    content: 
    {
      type:DataTypes.STRING,
      },
    receipentEmail: 
    {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
      },
    status: 
    {
      type:DataTypes.ENUM,
      values:[FAILED,PENDING,SUCCESS],
      defaultValue:PENDING,
      allowNull:false

    }   
 }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};