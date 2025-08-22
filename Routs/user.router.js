const express = require('express');
// const app = express();
const router = express.Router();
const userController = require('../controller/users.controller')

router.get('/',userController.displayAllContacts)

router.get('/show-contact/:id',userController.displaySingleData)

router.get('/add-contact',userController.displayForm)

router.post('/add-contact',userController.saveData)

router.get('/update-contact/:id',userController.update)

router.post('/update-contact/:id',userController.updateData)

router.get('/delete-contact/:id',userController.data)

module.exports = router;