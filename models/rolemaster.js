const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolemaster', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    RoleID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    RoleDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rolemaster',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleID" },
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
