const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usermaster', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    UserName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    Pass: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmailAddress: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "EmailAddress"
    }
  }, {
    sequelize,
    tableName: 'usermaster',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserName" },
        ]
      },
      {
        name: "RowId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RowId" },
        ]
      },
      {
        name: "EmailAddress",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EmailAddress" },
        ]
      },
    ]
  });
};
