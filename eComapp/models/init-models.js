var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _customer = require("./customer");
var _dispatch = require("./dispatch");
var _errormessage = require("./errormessage");
var _imgepath = require("./imgepath");
var _manufacturer = require("./manufacturer");
var _orderitem = require("./orderitem");
var _orders = require("./orders");
var _payments = require("./payments");
var _product = require("./product");
var _rolemaster = require("./rolemaster");
var _subcategories = require("./subcategories");
var _userlogininfo = require("./userlogininfo");
var _usermaster = require("./usermaster");
var _usersinrole = require("./usersinrole");
var _vendor = require("./vendor");

 

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var dispatch = _dispatch(sequelize, DataTypes);
  var errormessage = _errormessage(sequelize, DataTypes);
  var imgepath = _imgepath(sequelize, DataTypes);
  var manufacturer = _manufacturer(sequelize, DataTypes);
  var orderitem = _orderitem(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var rolemaster = _rolemaster(sequelize, DataTypes);
  var subcategories = _subcategories(sequelize, DataTypes);
  var userlogininfo = _userlogininfo(sequelize, DataTypes);
  var usermaster = _usermaster(sequelize, DataTypes);
  var usersinrole = _usersinrole(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);


  return {
    category,
    customer,
    dispatch,
    errormessage,
    imgepath,
    manufacturer,
    orderitem,
    orders,
    payments,
    product,
    rolemaster,
    subcategories,
    userlogininfo,
    usermaster,
    usersinrole,
    vendor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
