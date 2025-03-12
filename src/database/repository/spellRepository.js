import { spellModel } from "../database.js";

const GetSpells = async () => {
    const spells = await spellModel.findAll();
    return spells
}

const CreateSpell = async (spell) => {
    try{
        return await spellModel.create(spell);
    } catch (error) {
        throw new Error(error);
    }
}

const GetSpellById = async (id) => {  
    const spell = await spellModel.findByPk(id);
    const newspell = {
        id: spell.id,
        name: spell.name,
        description: spell.description,
        concentration: spell.concentration,
        skill: spell.skill,
    }
    if (!newspell) {
        throw new Error("spell not found");
    } else {
        return newspell;
    }
}

const UpdateSpell = async (id, spellbody) => {
    const spell = await spellModel.findByPk(id);
    if (!spell) {
        throw new Error("spell not found");
    } else {
        try {
            await spell.update(spellbody);
            return spell
        } catch (err) {
            throw new Error(err);
        }
    }
}

const DeleteSpell = async (id) => {
    const spell = await spellModel.findByPk(id);
    if (!spell) {
        throw new Error("spell not found");
    } else {
        await spell.destroy();
    }
}

const ToModel = (spell) => {
    return {
        id: spell.id,
        name: spell.name,
        description: spell.description,
        concentration: spell.concentration,
        skill: spell.skill,
    }
}

export { GetSpells,CreateSpell, GetSpellById, UpdateSpell, DeleteSpell, ToModel };
