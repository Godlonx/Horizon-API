import { userModel } from "../database.js";

const Create = async (user) => {
    try{
        return await userModel.create(user);
    } catch (error) {
        throw new Error(error);
    }
}

const GetAllUsers = async () => {
    try {
        return await userModel.findAll();
    } catch (error) {
        throw new Error(error);
    }
}

const GetUserById = async (id) => {
    try {
        const user = await userModel.findByPk(id);
        if (user === null) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

const UpdateUser = async (id, user) => {
    try {
        await userModel.update(user, {
            where: {
                id: id
            }
        });
        
        const updatedUser = await GetUserById(id);

        return updatedUser;
    } catch (error) {
        throw new Error(error);
    }
}

const DeleteUser = async (id) => {
    try {
        const user = await GetUserById(id);

        await userModel.destroy({
            where: {
                id: id
            }
        });
        
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

const ToModel = (user) => {
    return {
        id: user.id,
        email: user.email,
        username: user.username,
    }
}

const userRepository = {
    Create,
    GetAllUsers,
    GetUserById,
    UpdateUser,
    DeleteUser,
    ToModel
}

export default userRepository;