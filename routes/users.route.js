const express = require('express')
const { usersController } = require('../controllers/users.controllers')
const router = express.Router()

/* Add user */
router.post("/users", usersController.Create)
/* Find users */
router.get("/users", usersController.FindAll)
/* Update user */
router.put("/users/:id", usersController.Update)
/* Delete user */
router.delete("/users/:id", usersController.Delete)



module.exports.usersRouters = router