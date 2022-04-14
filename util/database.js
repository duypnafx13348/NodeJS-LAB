const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'poeietiiup', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;
