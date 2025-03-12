import { ruleSetModel } from "../database.js";

const GetRuleSet = async () => {
    const ruleSet = await ruleSetModel.findAll();
    return ruleSet
}

const createRuleSet = async (ruleSet) => {
    try{
        return await ruleSetModel.create(ruleSet);
    } catch (error) {
        throw new Error(error);
    }
}

const GetRuleSetById = async (id) => {  
    const ruleSet= await ruleSetModel.findByPk(id);
    const newRuleSet = {
        id: ruleSet.id,
        name: ruleSet.name,
        description: ruleSet.description
    }
    if (!newRuleSet) {
        throw new Error("New rule set was not found");
    } else {
        return newRuleSet;
    }
}

const updateRuleSet = async (id, ruleSetBody) => {
    const ruleSet = await ruleSetModel.findByPk(id);
    if (!ruleSet) {
        throw new Error("Rule set was not found");
    } else {
        try {
            await ruleSet.update(ruleSetBody);
            return ruleSet
        } catch (err) {
            throw new Error(err);
        }
    }
}

const deleteRuleSet = async (id) => {
    const ruleSet = await ruleSetModel.findByPk(id);
    if (!ruleSet) {
        throw new Error("Rule set was not found");
    } else {
        await ruleSet.destroy();
    }
}

const toModel = (ruleSet) => {
    return {
        id: ruleSet.id,
        name: ruleSet.name,
        description: ruleSet.description
    }
}

export { GetRuleSet, createRuleSet, GetRuleSetById, updateRuleSet, deleteRuleSet, toModel };
