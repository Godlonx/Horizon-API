import { Sequelize } from "sequelize";
import process from "node:process";
import CharactersModel from "./model/characterModel.js";
import UserModel from "./model/userModel.js";
import SpellsModel from "./model/spellModel.js";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: process.env.DB_PORT
});

const spellModel = SpellsModel(db);
const userModel = UserModel(db);
const characterModel = CharactersModel(db);


userModel.hasMany(characterModel ,{foreignKey: "userId"})
characterModel.belongsTo(userModel, {foreignKey: "userId"})

db.sync();

export {characterModel, userModel,spellModel};
