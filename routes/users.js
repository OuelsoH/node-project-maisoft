import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [ ];

//     {
//         firstName: "armel",
//         lastName: "cedric",
//         age: 25
//     },

//     {
//         firstName: "Ben",
//         lastName: "dino",
//         age: 28
//     }
   

router.get('/', (req, res) => {
    res.send(users);




});


router.post ('/', (req, res) => {
    console.log('user added to the database' );
    const user = req.body

    const userId = uuidv4(); // ⇨ format type of the id ref site'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    
    const userWithId = {...user, id: userId};

     // console.log(req.body) = users  information
    users.push(userWithId);

    //forme simplifie users.push({...user, id: uuidv4() });


    res.send(`${user.firstName} added to the database`);



});


// users/2 (id) => req.params {id:2}
router.get ('/:id', (req, res) =>{

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);



});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send (`user ${id}  deleted`);


}) ;

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id = id);

    // if(firstName){
    //     user.firstName = firstName;
    // }
    // if(lastName){
    //     user.lastName = lastName;
    // }
    // if(age){
    //     user.age = age;
    // }


     //clean code
     if(firstName) user.firstName = firstName;
     if(lastName) user.lastName = lastName;
     if(age) user.age = age ;
     
     
     res.send(`user ${id} updated`);
    


})

export default router;