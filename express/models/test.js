'use strict';

// Define a model for skill table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('test', {
    empCode: {
      type: DataTypes.STRING,
      primaryKey: true,
      // autoIncrement: true
    },
    // employeeId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, {
    tableName: 'test'
  });
  // Adding a class level method.
  // Model.associate = function (models) {
  //   this.employeeId = this.belongsTo(models.employee);

  // };
  return Model;
};