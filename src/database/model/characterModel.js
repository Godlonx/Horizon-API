import { Model, DataTypes, INTEGER, STRING } from "sequelize";
import { userModel } from "../database.js";

const CharactersModel = (sequelize) => {
    class Character extends Model {}

    Character.init({
        id: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type : DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:userModel,
                key:"id",
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: false,
            unique: true,
            validate: {
                len: {
                    args:[1,25],
                }
            }
        },
        ruleSetId: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false
        },
    },

    {
        sequelize,
        modelName: "Character",
        tablename:"characters"
    })
    return Character
}

export default CharactersModel;