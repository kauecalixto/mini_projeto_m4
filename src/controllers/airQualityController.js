const AirQualityModel = require('../models/airQualityModel');

// Controller for air quality data
exports.getAirQualityData = (req, res) => {
  try {
    const { city } = req.query;
    const airQualityData = AirQualityModel.getFilteredData(city);
    
    res.json({
      data: airQualityData,
      total_records: airQualityData.length,
      source: "Air Quality Brazil"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
