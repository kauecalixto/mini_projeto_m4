// Application configuration
module.exports = {
  // Server settings
  server: {
    port: process.env.PORT || 3000,
  },

  // API settings
  api: {
    name: "Environmental Data API",
    version: "1.0.0",
    baseUrl: "/api",
  },

  // Data source settings
  dataSources: {
    deforestation: "INPE - National Institute for Space Research",
    airQuality: "Qualidade do Ar Brasil",
  },
};
