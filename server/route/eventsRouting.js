const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');
const {authUser,authRole} = require('../controller/authentication/auth');

router.get('/',eventController.getAllEventPost);
router.get('/getEventById', eventController.getEventById);
router.post('/:id',authRole("Staff"), eventController.postNewEvent);
router.delete('/:id',authRole("Staff"), eventController.deleteEventPost);
router.put('/:id',authRole("Staff"), eventController.updateEventPost);

module.exports = router;