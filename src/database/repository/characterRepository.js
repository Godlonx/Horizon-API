import { characterModel } from "../database.js";

const GetCharacters = async () => {
    const characters = await characterModel.findAll();
    return characters
}

const CreateCharacter = async (character) => {
    try{
        return await characterModel.create(character);
    } catch (error) {
        throw new Error(error);
    }
}

const GetCharacterById = async (id) => {  
    const character = await characterModel.findByPk(id);
    const newcharacter = {
        id: character.id,
        userid: character.userId,
        name: character.name,
        ruleSetId: character.ruleSetId,
    }
    if (!newcharacter) {
        throw new Error("Character not found");
    } else {
        return newcharacter;
    }
}

const UpdateCharacter = async (id, characterbody) => {
    const character = await characterModel.findByPk(id);
    if (!character) {
        throw new Error("Character not found");
    } else {
        try {
            await character.update(characterbody);
            return character
        } catch (err) {
            throw new Error(err);
        }
    }
}

const DeleteCharacter = async (id) => {
    const character = await characterModel.findByPk(id);
    if (!character) {
        throw new Error("Character not found");
    } else {
        await character.destroy();
    }
}

const ToModel = (character) => {
    return {
        id: character.id,
        userId: character.userId,
        name: character.name,
        ruleSetId: character.ruleSetId
    }
}

export { GetCharacters, CreateCharacter, GetCharacterById, UpdateCharacter, DeleteCharacter, ToModel };
