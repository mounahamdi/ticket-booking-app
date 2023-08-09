const express = require('express');
const router = express.Router();
const trip= require('../controllers/trips.js');



router.get('/',trip.getTrips)
router.post('/new', trip.addNewTrip);
router.put('/:id', trip.updateTrip);
router.delete('/:id', trip.deleteTrip);
module.exports = router;
