import { Sequelize } from "sequelize";


const db = new Sequelize('aramLegendDB', 'godlonx', 'godlonx', {
    host: 'localhost',
    dialect: 'mariadb',
    port: '3306'
});

export {db};
