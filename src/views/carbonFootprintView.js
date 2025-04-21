// View to format carbon footprint data
class CarbonFootprintView {
    // Format data for API response'
    static formatResponse(data) {
      return {
        ...data,
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

module.exports = CarbonFootprintView;
