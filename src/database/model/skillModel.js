
const skillModel = (id, dice, effect, bonus) =>  {
    class skill extends Model {}

    skill.init({
        id: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        dice: {
            type: DataTypes.STRING,
            allowNull : false
        },
        effect: {
            type: DataTypes.STRINGS,
            allowNull : false
        },
        bonus: {
            type: DataTypes.STRINGS,
            allowNull : false
        },
    },

        {
            sequelize,
            modelName: "Skill",
            tablename:"Skills"
        })
        return skill
    }

    export default skillModel;