// Controller for API documentation
exports.getDocumentation = (req, res) => {
  const documentation = {
    api_name: "Environmental Data API",
    description: "API that provides data on environmental issues such as deforestation, air quality, and carbon footprint.",
    base_url: "/api",
    endpoints: [
      {
        path: "/deforestation",
        method: "GET",
        description: "Returns data on deforestation in the Amazon.",
        parameters: [
          {
            name: "year",
            type: "number",
            required: false,
            description: "Filters data by year (e.g., 2022)"
          },
          {
            name: "region",
            type: "string",
            required: false,
            description: "Filters data by region (e.g., north, northeast)"
          }
        ],
        response_example: {
          data: [
            {
              year: 2022,
              region: "north",
              area_km2: 10100,
              percent_change: 8.5
            }
          ],
          total_records: 1,
          source: "INPE - National Institute for Space Research"
        }
      },
      {
        path: "/air-quality",
        method: "GET",
        description: "Returns air quality indexes in major cities.",
        parameters: [
          {
            name: "city",
            type: "string",
            required: false,
            description: "Filters data by city (e.g., sao-paulo, rio-de-janeiro)"
          }
        ],
        response_example: {
          data: [
            {
              city: "São Paulo",
              aqi: 65,
              category: "Moderate",
              main_pollutant: "PM2.5",
              updated_at: "2023-04-15T14:30:00Z"
            }
          ],
          total_records: 1,
          source: "Qualidade do Ar Brasil"
        }
      },
      {
        path: "/carbon-footprint",
        method: "GET",
        description: "Calculates the carbon footprint by activity.",
        parameters: [
          {
            name: "activity",
            type: "string",
            required: true,
            description: "Type of activity (e.g., car, flight, electricity)"
          },
          {
            name: "value",
            type: "number",
            required: true,
            description: "Numeric value (e.g., 100 for 100km or 100kWh)"
          }
        ],
        response_example: {
          activity: "car",
          value: 100,
          unit: "km",
          carbon_kg: 22.5,
          equivalent_trees: 1.2,
          tips: [
            "Consider using public transportation to reduce your carbon footprint",
            "Electric cars emit significantly less CO2"
          ]
        }
      }
    ],
    error_codes: [
      {
        code: 200,
        description: "Success"
      },
      {
        code: 400,
        description: "Invalid parameters"
      },
      {
        code: 404,
        description: "Resource not found"
      },
      {
        code: 500,
        description: "Internal server error"
      }
    ]
  };

  res.json(documentation);
};
