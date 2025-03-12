import { Model, DataTypes, INTEGER, STRING } from "sequelize";

const SpellsModel = (sequelize) => {
    class Spell extends Model {}

    Spell.init({
        id: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: false,
            unique: true,
            validate: {
                len: {
                    args:[1,100],
                }
            }
        },
        concentration: {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        skill: {
            type : DataTypes.INTEGER,
            allowNull: false,
            // references:{
            //     model:skillModel,
            //     key:"id",
            // }
        },
    },

    {
        sequelize,
        modelName: "Spell",
        tablename:"spells"
    })
    return Spell
}

export default SpellsModel;