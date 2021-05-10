const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    OrderId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    GrandTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    OrderDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ExpectedDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ActualDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paid_by: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderId" },
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
        name: "fk_CustomerId_in_Customer_table",
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
