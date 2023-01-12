import express from "express";

const router = express.Router();

const users = [ 

    {
        firstname: "armel",
        lastname: "cedric",
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send(users);



});

export default router;