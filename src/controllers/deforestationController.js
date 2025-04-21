const DeforestationModel = require("../models/deforestationModel");
const DeforestationView = require("../views/deforestationView");
const config = require("../config/config");

// Controller for deforestation data
exports.getDeforestationData = (req, res) => {
  try {
    const { year, region } = req.query;
    const deforestationData = DeforestationModel.getFilteredData(year, region);

    // Use the view to format the response
    const formattedResponse = DeforestationView.formatResponse(
      deforestationData, 
      config.dataSources.deforestation
    );

    res.json(formattedResponse);
  } catch (error) {
    // Use the view to format the error
    const errorResponse = DeforestationView.formatError(error.message);
    res.status(500).json(errorResponse);
  }
};
