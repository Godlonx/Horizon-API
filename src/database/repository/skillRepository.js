import { skillModel } from "../database.js";

const GetSkill = async () => {
    const skill = await skillModel.findAll();
    return skill
}

const createSkill = async (skill, ) => {
    try{
        return await skillModel.create(skill);
    } catch (error) {
        throw new Error(error);
    }
}

const GetSkillById = async (id) => {  
    const skill = await skillModel.findByPk(id);
    const newskill = {
        id: skill.id,
        dice: skill.dice,
        effect: skill.effect,
        bonus: skill.bonus,
    }
    if (!newskill) {
        throw new Error("skill was not found");
    } else {
        return newcharacter;
    }
}

const updateSkill = async(id, skills) => {
    const skill = await skillModel.findByPk(id)
    if (!skill) {
        throw new Error("skill not found");
    } else {
        try {
            await skill.update(skills);
            return skill
        } catch (err) {
            throw new Error(err);
        }
    }
}

const toModel = (skill) => {
    return {
        id: skill.id,
        dice: skill.dice,
        effect: skill.effect,
        bonus: skill.bonus,
    }
}

const deleteSkill = async (id) => {
    const skill = await skillModel.findByPk(id);
    if (!skill) {
        throw new Error("Skill was not found");
    } else {
        await skill.destroy();
    }
}

export {GetSkill, createSkill, GetSkillById, updateSkill, deleteSkill, toModel};