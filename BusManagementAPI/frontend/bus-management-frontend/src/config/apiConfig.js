/**
 * API Configuration
 * 
 * This file centralizes all API endpoint configuration
 * making it easy to switch between development, staging, and production environments
 */

const API_CONFIG = {
  // Development environment
  development: {
    baseURL: 'http://localhost:5231/api',
    timeout: 30000, // 30 seconds
  },
  
  // Production environment
  production: {
    baseURL: process.env.REACT_APP_API_URL || 'https://api.busmanagement.com/api',
    timeout: 30000,
  },
  
  // Staging environment
  staging: {
    baseURL: process.env.REACT_APP_API_URL || 'https://staging-api.busmanagement.com/api',
    timeout: 30000,
  }
};

// Determine current environment
const getCurrentEnvironment = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  } else if (process.env.REACT_APP_ENV === 'staging') {
    return 'staging';
  }
  return 'development';
};

// Get current config
const environment = getCurrentEnvironment();
const config = API_CONFIG[environment];

/**
 * ENDPOINTS
 */
export const ENDPOINTS = {
  // Buses
  BUSES: '/buses',
  BUS_BY_ID: (id) => `/buses/${id}`,
  
  // Routes
  ROUTES: '/routes',
  ROUTE_BY_ID: (id) => `/routes/${id}`,
  
  // Schedules
  SCHEDULES: '/schedules',
  SCHEDULE_BY_ID: (id) => `/schedules/${id}`,
  
  // Reservations
  RESERVATIONS: '/reservations',
  RESERVATION_BY_ID: (id) => `/reservations/${id}`,
};

/**
 * Get properly formatted API URL
 */
export const getApiUrl = (endpoint) => {
  return `${config.baseURL}${endpoint}`;
};

/**
 * Get full configuration
 */
export const getConfig = () => ({
  ...config,
  environment,
});

/**
 * Default Axios configuration
 */
export const axiosConfig = {
  baseURL: config.baseURL,
  timeout: config.timeout,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

export default config;
