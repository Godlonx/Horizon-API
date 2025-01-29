const createUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        console.log(user);
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export {createUser}