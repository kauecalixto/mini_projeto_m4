const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Set the port to use (either from environment variable or default to 3000)
const HomeView = require('./src/views/homeView'); // Import the Home view for formatting responses
const loggerMiddleware = require('./src/middlewares/loggerMiddleware'); // Import the logger middleware
const Logger = require('./src/utils/logger'); // Import the logger utility

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins to access the API
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow certain headers
  next(); // Proceed to the next middleware or route handler
});

// Apply the logger middleware to log requests and responses
app.use(loggerMiddleware);

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Import API routes
const routes = require('./src/routes/index');

// Use the imported routes under the '/api' path
app.use('/api', routes);

// Main route (root)
app.get('/', (req, res) => {
  const homeData = {
    message: 'Welcome to the Environmental Data API',
    endpoints: [
      '/api/deforestation', // Endpoint for deforestation data
      '/api/air-quality',   // Endpoint for air quality data
      '/api/carbon-footprint' // Endpoint for carbon footprint data
    ],
    documentation: '/api/docs' // Link to API documentation
  };
  
  // Use the HomeView to format the response data
  const formattedResponse = HomeView.formatResponse(homeData);
  
  // Send the formatted response as JSON
  res.json(formattedResponse);
});

// Error handling middleware for the application
app.use((err, req, res, next) => {
  // Log the error details
  Logger.error('Application error', err, { 
    url: req.originalUrl, 
    method: req.method,
    requestId: req.requestId // Include request ID for tracing
  });
  
  // Send a JSON response with the error details
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : err.message,
    timestamp: new Date().toISOString(),
    status: "error",
    requestId: req.requestId // Include the request ID in the error response
  });
});

// Middleware for handling undefined routes (404)
app.use((req, res) => {
  // Log the missing route warning
  Logger.warn(`Route not found: ${req.method} ${req.originalUrl}`, {
    requestId: req.requestId
  });
  
  // Send a 404 error response
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist in this API`,
    timestamp: new Date().toISOString(),
    status: "error",
    requestId: req.requestId // Include the request ID in the 404 response
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  Logger.info(`Server running on port ${PORT}`); // Log server startup
});

// Handle uncaught exceptions (errors that were not caught by try/catch blocks)
process.on('uncaughtException', (err) => {
  Logger.error('Uncaught exception', err); // Log the uncaught exception
  process.exit(1); // Exit the process with an error code
});

// Handle unhandled promise rejections (promises that were rejected but not handled)
process.on('unhandledRejection', (reason, promise) => {
  Logger.error('Unhandled promise rejection', { reason, promise }); // Log the rejection
});

module.exports = app; // Export the app for testing or use in other modules
