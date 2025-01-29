import * as indexationRepository from "../../../src/database/repository/indexationRepository.js";

const CreateIndexation = async (req, res) => {
    try {
        let newindexation = await indexationRepository.CreateIndexation(req.body);
        newindexation = indexationRepository.toModel(newindexation);
        return res.status(201).json(newindexation);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const GetIndexations = async (req, res) => {
    try {
        let indexations = await indexationRepository.GetIndexations();
        indexations = indexations.map(indexationRepository.toModel);
        return res.status(200).json(indexations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const GetIndexationById = async (req, res) => {
    try {
        let indexation = await indexationRepository.GetIndexationById(req.params.id);
        indexation = indexationRepository.toModel(indexation);
        return res.status(200).json(indexation);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const UpdateIndexation = async (req, res) => {
    try {
        let updatedindexation = await indexationRepository.UpdateIndexation(req.params.id, req.body);
        updatedindexation = indexationRepository.toModel(updatedindexation);
        return res.status(200).json(updatedindexation);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteIndexation = async (req, res) => {
    try {
        await indexationRepository.DeleteIndexation(req.params.id);
        return res.status(200).json({message: "Indexation deleted"});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {CreateIndexation, GetIndexations, GetIndexationById, UpdateIndexation, DeleteIndexation};