const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const Data = sequelize.define('dummy',{
        text: {
            type: DataTypes.STRING,
            allowNull:false
        } 
    });
    return Data;
}