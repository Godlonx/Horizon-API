import userRepository from "../../database/repository/userRepository.js";

const CreateUser = async (req, res) => {
    try {
        const user = req.body;
        let newUser = await userRepository.Create(user);
        newUser = userRepository.ToModel(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const GetAllUsers = async (req, res) => {
    try {
        let users = await userRepository.GetAllUsers();
        users = users.map(userRepository.ToModel);
        return res.status(200).json(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const GetUserById = async (req, res) => {
    try {
        const id = req.params.id;
        let user = await userRepository.GetUserById(id);
        user = userRepository.ToModel(user);
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        let user = await userRepository.UpdateUser(id, req.body);
        user = userRepository.ToModel(user);
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userRepository.DeleteUser(id);
        return res.status(204).send();
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const userController = {
    CreateUser,
    GetAllUsers,
    GetUserById,
    UpdateUser,
    DeleteUser
}

export default userController;