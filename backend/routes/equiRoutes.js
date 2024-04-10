const express= require('express');
const Router = express.Router();
// const { loginController, registerController, fetchAllUsersController } = require('../controllers/userController');
// const { equicontroller,getAllEquips,updateEquip, deleteEquip} = require('../controllers/equipMain.js');
const { equicontroller,getAllEquips} = require('../controllers/equipMain.js');


// const { protect } = require("../middleware/authMiddleware");
//  const Router = express.Router();

Router.post('/equip',equicontroller);
Router.get('/allequip',getAllEquips);
// Router.put('/update',updateEquip);
// Router.delete('/delete',deleteEquip);
//  Router.get('/fetchUsers',fetchAllUsersController);

module.exports= Router;