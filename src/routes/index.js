const express = require('express');
const router = express.Router();

// Import controllers
const deforestationController = require('../controllers/deforestationController');
const airQualityController = require('../controllers/airQualityController');
const carbonFootprintController = require('../controllers/carbonFootprintController');
const docsController = require('../controllers/docsController');

// Deforestation routes
router.get('/deforestation', deforestationController.getDeforestationData);

// Air quality routes
router.get('/air-quality', airQualityController.getAirQualityData);

// Carbon footprint routes
router.get('/carbon-footprint', carbonFootprintController.calculateCarbonFootprint);

// Documentation route
router.get('/docs', docsController.getDocumentation);

module.exports = router;
