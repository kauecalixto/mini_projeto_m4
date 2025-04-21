// 'Simulated data about deforestation'
const deforestationData = [
  {
    year: 2022,
    region: "norte",
    area_km2: 10100,
    percent_change: 8.5,
  },
  {
    year: 2022,
    region: "nordeste",
    area_km2: 3200,
    percent_change: 5.2,
  },
  {
    year: 2021,
    region: "norte",
    area_km2: 9300,
    percent_change: 7.1,
  },
  {
    year: 2021,
    region: "nordeste",
    area_km2: 3040,
    percent_change: 4.8,
  },
  {
    year: 2020,
    region: "norte",
    area_km2: 8680,
    percent_change: 6.5,
  },
];

// Model for deforestation data
class DeforestationModel {
// Retrieve all deforestation data
static getAllData() {
  return deforestationData;
}

// Retrieve filtered data based on year and/or region
static getFilteredData(year, region) {
  // Create a shallow copy of the data array
  let filteredData = [...deforestationData];

  // Apply year filter if provided
  if (year) {
    const yearNum = parseInt(year);
    filteredData = filteredData.filter(item => item.year === yearNum);
  }

  // Apply region filter if provided
  if (region) {
    filteredData = filteredData.filter(item => item.region === region.toLowerCase());
  }

  return filteredData;
}
}

// Export the model so it can be used in other modules
module.exports = DeforestationModel;
