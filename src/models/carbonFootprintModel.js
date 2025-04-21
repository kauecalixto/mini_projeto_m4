// Carbon emission factors by activity (kg CO2 per unit)
const emissionFactors = {
  car: 0.225, // kg CO2 per km
  bus: 0.105, // kg CO2 per km
  flight: 0.255, // kg CO2 per km
  electricity: 0.5, // kg CO2 per kWh
  meat: 13.3, // kg CO2 per kg of beef
  vegetables: 2.0, // kg CO2 per kg of vegetables
};

// Units per activity
const units = {
  car: "km",
  bus: "km",
  flight: "km",
  electricity: "kWh",
  meat: "kg",
  vegetables: "kg",
};

// Tips to reduce carbon footprint
const tips = {
  car: [
    "Consider using public transport to reduce your carbon footprint",
    "Electric cars emit significantly less CO2",
    "Carpool to reduce per-person emissions",
  ],
  bus: [
    "Buses are more efficient than individual cars", 
    "Consider biking for short trips",
  ],
  flight: [
    "Direct flights emit less carbon than connecting flights",
    "Consider offsetting your emissions through reforestation projects",
  ],
  electricity: [
    "Use LED bulbs to reduce energy consumption",
    "Consider installing solar panels at home",
  ],
  meat: [
    "Reducing red meat consumption greatly impacts emission reduction",
    "Try replacing some meals with vegetarian options",
  ],
  vegetables: [
    "Local and seasonal foods usually have a lower carbon footprint",
    "Avoid food waste to reduce unnecessary emissions",
  ],
};

// Model for carbon footprint calculator
class CarbonFootprintModel {
  // Check if the activity is valid
  static isValidActivity(activity) {
    return Object.keys(emissionFactors).includes(activity);
  }

  // Get all valid activities
  static getValidActivities() {
    return Object.keys(emissionFactors);
  }

  // Calculate the carbon footprint
  static calculateFootprint(activity, value) {
    // Calculate carbon emissions
    const carbonKg = value * emissionFactors[activity];

    // Estimate tree equivalent (approx. 21kg CO2 per tree per year)
    const equivalentTrees = carbonKg / 21;

    return {
      activity: activity,
      value: value,
      unit: units[activity],
      carbon_kg: carbonKg,
      equivalent_trees: parseFloat(equivalentTrees.toFixed(1)),
      tips: tips[activity],
    };
  }
}

// Export the model so it can be used in other modules
module.exports = CarbonFootprintModel;
