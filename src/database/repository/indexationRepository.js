import { indexationModel } from "../database.js";

const GetIndexations = async () => {
    const indexations = await indexationModel.findAll();
    return indexations
}

const CreateIndexation = async (indexation) => {
    try{
        return await indexationModel.create(indexation);
    } catch (error) {
        throw new Error(error);
    }
}

const GetIndexationById = async (id) => {  
    const indexation = await indexationModel.findByPk(id);
    if (!indexation) {
        throw new Error("Indexation not found");
    } else {
        return indexation;
    }
}

const UpdateIndexation = async (id, indexationbody) => {
    const indexation = await indexationModel.findByPk(id);
    if (!indexation) {
        throw new Error("Indexation not found");
    } else {
        try {
            await indexation.update(indexationbody);
            return indexation
        } catch (err) {
            throw new Error(err);
        }
    }
}

const DeleteIndexation = async (id) => {
    const indexation = await indexationModel.findByPk(id);
    if (!indexation) {
        throw new Error("Indexation not found");
    } else {
        await indexation.destroy();
    }
}

const toModel = (indexation) => {
    return {
        id: indexation.id,
        url: indexation.url,
        name: indexation.name,
        description: indexation.description,
        keywords: indexation.keywords,
    }
}

export { GetIndexations, CreateIndexation, GetIndexationById, UpdateIndexation, DeleteIndexation, toModel };
