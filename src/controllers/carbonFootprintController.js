const CarbonFootprintModel = require('../models/carbonFootprintModel');

// Controller for carbon footprint calculator
exports.calculateCarbonFootprint = (req, res) => {
  try {
    const { activity, value } = req.query;

    // Validate parameters
    if (!activity || !value) {
      return res.status(400).json({ 
        error: "'activity' and 'value' parameters are required" 
      });
    }

    const activityType = activity.toLowerCase();
    
    // Check if the activity is valid
    if (!CarbonFootprintModel.isValidActivity(activityType)) {
      return res.status(400).json({
        error: "Invalid activity",
        valid_activities: CarbonFootprintModel.getValidActivities(),
      });
    }

    // Convert value to a number
    const numValue = parseFloat(value);

    if (isNaN(numValue) || numValue <= 0) {
      return res.status(400).json({ 
        error: "Value must be a positive number" 
      });
    }

    // Calculate carbon footprint
    const result = CarbonFootprintModel.calculateFootprint(activityType, numValue);
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
