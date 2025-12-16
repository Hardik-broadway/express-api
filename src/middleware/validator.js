import { HTTP_STATUS } from '../config/constants.js';

export const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  const errors = [];

  // Name validation
  if (!name || name.trim().length < 2 || name.trim().length > 50) {
    errors.push('Name must be between 2-50 characters');
  }

  // Email validation
  if (!email || !email.includes('@')) {
    errors.push('Valid email is required');
  }

  if (errors.length > 0) {
    const error = new Error(errors.join(', '));
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    return next(error);
  }

  next();
};

export const validateUserId = (req, res, next) => {
  const { id } = req.params;
  
  if (!id || isNaN(parseInt(id))) {
    const error = new Error('Invalid user ID');
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    return next(error);
  }

  next();
};
