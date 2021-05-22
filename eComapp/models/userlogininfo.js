const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userlogininfo', {
    RowID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "UserName"
    },
    LoginDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LogoutDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'userlogininfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RowID" },
        ]
      },
      {
        name: "UserName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserName" },
        ]
      },
    ]
  });
};
