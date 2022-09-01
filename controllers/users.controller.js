const getUsers = (req, res) => {
    res.status(200).send("welcome to woode server");
};

const createUser = (req, res) => {
    res.status(201).send("your data has been saved");
};

const updateUser = (req, res) => {
    res.status(200).send("your data has been updated");
};

const deleteUser = (req, res) => {
    res.status(200).send("your data has been deleted");
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};