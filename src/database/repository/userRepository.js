const createUser = async (userBody) => {
    try {
        const user = await userModel.create(userBody);
        return user
    } catch (error) {
        throw new Error(error)
    }
}
    
export {createUser}