import { Sequelize } from "sequelize";
import process from "node:process";
import CharactersModel from "./model/characterModel.js";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: process.env.DB_PORT
});

const characterModel = CharactersModel(db);

db.sync();

export {db, characterModel};
