import * as skillRepository from "../../../src/database/repository/skillRepository.js";

const createSkill = async (req, res) => {
    try {
        let newskill = await skillRepository.createSkill(req.body);
        newskill = skillRepository.toModel(newskill);
        return res.status(201).json(newskill);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const GetSkills = async (req, res) => {
    try {
        let skills = await skillRepository.GetSkills();
        skills = skills.map(skillRepository.toModel);
        return res.status(200).json(skills);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const GetSkillById = async (req, res) => {
    try {
        let skill = await skillRepository.GetSkillById(req.params.id);
        skill = skillRepository.toModel(skill);
        return res.status(200).json(skill);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateSkill = async (req, res) => {
    try {
        let updatedskill = await skillRepository.updateSkill(req.params.id, req.body);
        updatedskill = skillRepository.toModel(updatedskill);
        return res.status(200).json(updatedskill);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteSkill = async (req, res) => {
    try {
        await skillRepository.deleteSkill(req.params.id);
        return res.status(200).json({message: "skill deleted"});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {createSkill, GetSkills, GetSkillById, updateSkill, deleteSkill};