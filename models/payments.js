const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    PaymentID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Transaction_Date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Transaction_Status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    paid_by: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PaymentID" },
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
        name: "fk_OrderId_in_orders_table",
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
    ]
  });
};
