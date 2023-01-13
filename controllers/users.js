export const getUsers = (req, res) => {
    res.send(users);


}

export const createUser = (req, res) => {
    const user = req.body;
    
    users.push({...user, id: uuidv4() });
    
    res.send(`${user.firstName} added to the database`);
}