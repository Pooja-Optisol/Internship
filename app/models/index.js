const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: "mysql",
    // operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.role = require("./role.js")(sequelize, Sequelize);
db.book = require("./book.js")(sequelize, Sequelize);
db.register = require("./register.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.register.belongsToMany(db.book,{
  through: "user_drivers",
  foreignKey: "driverID",
  otherKey: "userId"
});
db.book.belongsToMany(db.register,{
  through: "user_drivers",
  foreignKey: "userId",
  otherKey: "driverID"
});

db.user.hasOne(db.register,{
  through: "user_register",
  foreignKey: "userID",
  otherKey: "driverId"
});

db.register.hasOne(db.user,{
  through: "user_register",
  foreignKey: "driverId",
  otherKey: "userID"
});

db.ROLES = ["user", "admin", "driver"];

module.exports = db;