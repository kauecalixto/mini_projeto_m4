// src/middlewares/loggerMiddleware.js

const Logger = require('../utils/logger'); // Import the custom logger utility

// Middleware to log incoming requests and responses
const loggerMiddleware = (req, res, next) => {
  // Capture the start time of the request
  const start = new Date();
  const requestId = generateRequestId(); // Generate a unique request ID
  
  // Basic information about the incoming request
  const requestInfo = {
    id: requestId,
    method: req.method, // HTTP method (GET, POST, etc.)
    url: req.originalUrl || req.url, // The requested URL
    ip: req.ip || req.connection.remoteAddress, // Client's IP address
    userAgent: req.headers['user-agent'], // User-Agent header (browser or client info)
    timestamp: start.toISOString() // Timestamp of when the request was received
  };
  
  // Log the incoming request
  Logger.info(`Request received: ${requestInfo.method} ${requestInfo.url}`, requestInfo);
  
  // Store the request ID for later use in the response
  req.requestId = requestId;
  
  // Intercept the res.send method to capture the response data
  const originalSend = res.send;
  res.send = function(body) {
    // Capture the end time of the response
    const end = new Date();
    const responseTime = end - start; // Calculate the response time in milliseconds
    
    // Information about the outgoing response
    const responseInfo = {
      id: requestId,
      method: req.method, // HTTP method (GET, POST, etc.)
      url: req.originalUrl || req.url, // The requested URL
      statusCode: res.statusCode, // HTTP status code of the response
      responseTime: `${responseTime}ms`, // Time taken to process the request
      timestamp: end.toISOString() // Timestamp of when the response was sent
    };
    
    // Log the response details
    Logger.info(`Request completed: ${responseInfo.method} ${responseInfo.url} - Status: ${responseInfo.statusCode} - Duration: ${responseInfo.responseTime}`, responseInfo);
    
    // Call the original res.send method to send the response
    originalSend.call(this, body);
    return this;
  };
  
  // Pass control to the next middleware in the stack
  next();
};

// Function to generate a unique request ID for each incoming request
const generateRequestId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5).toUpperCase(); // Combines timestamp and random string
};

module.exports = loggerMiddleware; // Export the logger middleware
