// Simulated data about air quality
const airQualityData = [
  {
    city: "São Paulo",
    aqi: 65,
    category: "Moderate",
    main_pollutant: "PM2.5",
    updated_at: "2023-04-15T14:30:00Z",
  },
  {
    city: "Rio de Janeiro",
    aqi: 42,
    category: "Good",
    main_pollutant: "O3",
    updated_at: "2023-04-15T14:30:00Z",
  },
  {
    city: "Belo Horizonte",
    aqi: 58,
    category: "Moderate",
    main_pollutant: "PM10",
    updated_at: "2023-04-15T14:30:00Z",
  },
];

// Model for air quality data
class AirQualityModel {
  // Get all air quality data
  static getAllData() {
    return airQualityData;
  }

  // Get filtered data by city
  static getFilteredData(city) {
    let filteredData = [...airQualityData];

    // Apply city filter if provided
    if (city) {
      const normalizedCity = city.toLowerCase().replace(/-/g, ' ');
      filteredData = filteredData.filter(item =>
        item.city.toLowerCase().includes(normalizedCity)
      );
    }

    return filteredData;
  }
}

// Export the model for use in other modules
module.exports = AirQualityModel;
