const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    CategoryName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    RowID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowID"
    },
    CategoryId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CategoryId" },
        ]
      },
      {
        name: "RowID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RowID" },
        ]
      },
    ]
  });
};
