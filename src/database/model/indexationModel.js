import { Model, DataTypes, INTEGER, STRING } from "sequelize";

const IndexationModel = (sequelize) => {
    class Indexation extends Model {}

    Indexation.init({
        id: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        url: {
            type : DataTypes.STRING,
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
            allowNull: false
        },
        keywords: {
            type: DataTypes.STRING,
        },
    },

    {
        sequelize,
        modelName: "Indexation",
        tablename:"indexation"
    })
    return Indexation
}

export default IndexationModel;