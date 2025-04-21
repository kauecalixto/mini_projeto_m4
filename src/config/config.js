// Application configuration
module.exports = {
  // Server setting's
  server: {
    port: process.env.PORT || 3000,
  },

  // API setting's
  api: {
    name: "Environmental Data API",
    version: "1.0.0",
    baseUrl: "/api",
  },

  // Data source setting's
  dataSources: {
    deforestation: "INPE - National Institute for Space Research",
    airQuality: "Qualidade do Ar Brasil",
  },
};
