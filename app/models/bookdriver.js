module.exports = (sequelize, Sequelize) => {
    const BookDriver = sequelize.define("bookdrivers", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      from: {
        type: Sequelize.STRING
      },
      to: {
          type: Sequelize.STRING
      },
      vehicleType: {
          type: Sequelize.STRING
      }
    });
    return BookDriver;
  };