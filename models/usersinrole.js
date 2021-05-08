const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersinrole', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    RoleName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usersinrole',
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
        name: "fk_UserName_in_UserMaster_table",
        using: "BTREE",
        fields: [
          { name: "UserName" },
        ]
      },
    ]
  });
};
