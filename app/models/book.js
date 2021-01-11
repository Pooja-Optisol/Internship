module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      // user_id: {
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      from: {
        type: Sequelize.STRING
      },
      to: {
          type: Sequelize.STRING
      },
      vehicleType: {
          type: Sequelize.STRING
      }
    }, {
      freezeTableName: true
    });
    return Book;
  };