const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    ProductId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ProducName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ProductPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ProductDescription: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    SubCategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ManufacturerId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    VendorId: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductId" },
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
        name: "fk_CategoryId_in_Category_table",
        using: "BTREE",
        fields: [
          { name: "CategoryId" },
        ]
      },
      {
        name: "fk_SubCategoryId_in_subcategories_table",
        using: "BTREE",
        fields: [
          { name: "SubCategoryId" },
        ]
      },
      {
        name: "fk_ManufacturerId_in_manufacturer_table",
        using: "BTREE",
        fields: [
          { name: "ManufacturerId" },
        ]
      },
      {
        name: "fk_VendorId_in_vendor_table",
        using: "BTREE",
        fields: [
          { name: "VendorId" },
        ]
      },
    ]
  });
};
