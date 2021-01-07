module.exports = (sequelize, Sequelize) => {
    const RegisterDriver = sequelize.define("registerdrivers", {
      // user_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      currentLocation: {
        type: Sequelize.STRING
      },
      vehicleType: {
          type: Sequelize.STRING
      }
    });
    return RegisterDriver;
  };