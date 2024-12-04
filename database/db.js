const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('test', 'user', 'root', { //db credantials
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;