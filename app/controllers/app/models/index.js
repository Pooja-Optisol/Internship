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
db.bookdriver = require("./bookdriver.js")(sequelize, Sequelize);
db.registerdriver = require("./registerdriver.js")(sequelize, Sequelize);


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

db.user.belongsToMany(db.bookdriver,{
  through: "user_drivers",
  foreignKey: "driverID",
  otherKey: "userId"
});
db.bookdriver.belongsToMany(db.user,{
  through: "user_drivers",
  foreignKey: "userId",
  otherKey: "driverID"
});

db.ROLES = ["user", "admin", "driver"];

module.exports = db;