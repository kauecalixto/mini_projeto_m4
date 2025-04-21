// src/utils/logger.js ''

// Utilitário para logging
class Logger {
  static info(message, data = {}) {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`, data ? JSON.stringify(data) : '');
  }

  static error(message, error = null, data = {}) {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, 
      error ? error.stack || error.message || error : '',
      data ? JSON.stringify(data) : '');
  }

  static warn(message, data = {}) {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`, data ? JSON.stringify(data) : '');
  }
  
  static debug(message, data = {}) {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`, data ? JSON.stringify(data) : '');
    }
  }
}

module.exports = Logger;