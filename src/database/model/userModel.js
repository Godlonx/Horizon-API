import { DataTypes } from "sequelize"
import { db } from "../database";

const UserModel = (sequelize) => {
    class User extends Model {}
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false,           
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: false,
            validate: {
                notNull: {
                    msg : "Cant' be null"
                },
                notEmpty: {
                    msg: "Cant' be empty"
                },
                len: {
                    args: [1, 25],
                    msg: "length must be between 1 and 25 haracters"
                }               
            }

        },

        permissionLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
               notNull: {
                    msg: "no authorization level has been enter"
               } 
            }
        },

        hashword: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: false,
            validate: {
                notNull: {
                    msg : "Please enter a password"
                },
                notEmpty: {
                    msg: "No password has been enter"
                }
            } 
        },
    },

    {
        sequelize,
        modelName: "User",
        tableName: "users"
    })
    return User;
}

const userModel = UserModel(db);

export default userModel;