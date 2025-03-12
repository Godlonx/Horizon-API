import { Model, DataTypes, INTEGER, VARCHAR } from "sequelize";

const ruleSet = (sequelize) => {
    class Character extends Model {}

    Character.init({
        id: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.VARCHAR,
            allowNull: false,
            notEmpty: false,
            unique: true,
            validate: {
                len: {
                    args:[1,25],
                }
            }
        },

        description: {
            type: DataTypes.VARCHAR,
            allowNull: false,
            notEmpty: true,
        }
    },

    {
        sequelize,
        modelName: "Character",
        tablename:"characters"
    })
    return Character
}

export default ruleSetModel;