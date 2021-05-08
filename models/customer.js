const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    CustomerId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    CustomerName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerPhone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerEmail: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerAddress: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
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
    ]
  });
};
