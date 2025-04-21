// View to format deforestation data
class DeforestationView {
    // Format data for API response
    static formatResponse(data, source) {
      return {
        data: data,
        total_records: data.length,
        source: source,
        timestamp: new Date().toISOString(),
        status: "success",
      }
    }
  
    // Format error
    static formatError(message) {
      return {
        error: message,
        timestamp: new Date().toISOString(),
        status: "error",
      }
    }
}

module.exports = DeforestationView;
