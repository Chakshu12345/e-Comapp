const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgepath', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fieldname: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    originalname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    encoding: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mimetype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    img_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'imgepath',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
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
    ]
  });
};
