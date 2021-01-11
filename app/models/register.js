module.exports = (sequelize, Sequelize) => {
    const Register = sequelize.define("register", {
      // user_id: {
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      currentLocation: {
        type: Sequelize.STRING
      },
      vehicleType: {
          type: Sequelize.STRING
      }
    },{
      freezeTableName: true
    });
    return Register;
  };