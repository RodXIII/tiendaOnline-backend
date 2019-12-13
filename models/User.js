'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditardNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditcardType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Invoice);
    // associations can be defined here
  };


  return User;
  // User.hasOne()
};