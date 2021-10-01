const express = require('express');
const router = express.Router();
const ADMIN = process.env.ADMIN;
const eventController = require('../controller/eventController');
const {authUser,authRole} = require('../controller/authentication/auth');

router.get('/',eventController.getAllEventPost);
router.get('/getEventById/:id', eventController.getEventById);
router.post('/:id',authRole(ADMIN), eventController.postNewEvent);
router.delete('/:id',authRole(ADMIN), eventController.deleteEventPost);
router.put('/:id',authRole(ADMIN), eventController.updateEventPost);

module.exports = router;