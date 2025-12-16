import { HTTP_STATUS } from '../config/constants.js';

// Simplified error handler
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong';

  console.error(`Error: ${message}`);

  res.status(statusCode).json({
    success: false,
    error: message
  });
};

export default errorHandler;
