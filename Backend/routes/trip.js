const express = require('express');
const router = express.Router();
const { addNewTrip, updateTrip, deleteTrip } = require('../controllers/trips.js');

router.post('/new', addNewTrip);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);
module.exports = router;
