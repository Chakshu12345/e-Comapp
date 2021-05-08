const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispatch', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    DispatchId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DispatchDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DelivaryAgentName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AgentContactNo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ActualDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DispatchStatus: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dispatch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DispatchId" },
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
