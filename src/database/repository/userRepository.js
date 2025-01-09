

const createUser = async (body) => {
        try {
            const user = await userModel.create({
                username: body.username,
                permissionLevel: body.permissionLevel,
                hashword: body.hashword
            });
            return user
        } catch (error) {
             throw new Error(error)
        }

    }
    
    export {createUser}