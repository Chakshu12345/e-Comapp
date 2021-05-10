const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderitem', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    OrderItemId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Product_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    tax_calculated: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Total_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orderitem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderItemId" },
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
        name: "fk_ProductId_in_Product_table",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
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
