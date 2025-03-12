import * as spellRepository from "../../../src/database/repository/spellRepository.js";

const CreateSpell = async (req, res) => {
    try {
        let newspell = await spellRepository.CreateSpell(req.body);
        newspell = spellRepository.ToModel(newspell);
        return res.status(201).json(newspell);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const GetSpells = async (req, res) => {
    try {
        let spells = await spellRepository.GetSpells();
        spells = spells.map(spellRepository.ToModel);
        return res.status(200).json(spells);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const GetSpellById = async (req, res) => {
    try {
        let spell = await spellRepository.GetSpellById(req.params.id);
        spell = spellRepository.ToModel(spell);
        return res.status(200).json(spell);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const UpdateSpell = async (req, res) => {
    try {
        let updatedspell = await spellRepository.UpdateSpell(req.params.id, req.body);
        updatedspell = spellRepository.ToModel(updatedspell);
        return res.status(200).json(updatedspell);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteSpell = async (req, res) => {
    try {
        await spellRepository.DeleteSpell(req.params.id);
        return res.status(200).json({message: "Spell deleted"});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {CreateSpell, GetSpells, GetSpellById, UpdateSpell, DeleteSpell};