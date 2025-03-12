import * as characterRepository from "../../../src/database/repository/characterRepository.js";

const CreateCharacter = async (req, res) => {
    try {
        let newcharacter = await characterRepository.createCharacter(req.body);
        newcharacter = characterRepository.toModel(newcharacter);
        return res.status(201).json(newcharacter);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const GetCharacters = async (req, res) => {
    try {
        let characters = await characterRepository.GetCharacters();
        characters = characters.map(characterRepository.ToModel);
        return res.status(200).json(characters);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const GetCharacterById = async (req, res) => {
    try {
        let character = await characterRepository.GetCharacterById(req.params.id);
        character = characterRepository.toModel(character);
        return res.status(200).json(character);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const UpdateCharacter = async (req, res) => {
    try {
        let updatedcharacter = await characterRepository.updateCharacter(req.params.id, req.body);
        updatedcharacter = characterRepository.toModel(updatedcharacter);
        return res.status(200).json(updatedcharacter);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteCharacter = async (req, res) => {
    try {
        await characterRepository.deleteCharacter(req.params.id);
        return res.status(200).json({message: "Character deleted"});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {CreateCharacter, GetCharacters, GetCharacterById, UpdateCharacter, DeleteCharacter};