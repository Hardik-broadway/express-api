import * as userService from '../services/user.service.js';
import { HTTP_STATUS } from '../config/constants.js';

export const createUser = (req, res, next) => {
  const { name, email } = req.body;
  const result = userService.createUser({ name, email });

  if (!result.success) {
    const error = new Error(result.error);
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    return next(error);
  }

  res.status(HTTP_STATUS.CREATED).json({
    success: true,
    data: result.data
  });
};

export const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(HTTP_STATUS.OK).json({
    success: true,
    count: users.length,
    data: users
  });
};

export const getUserById = (req, res, next) => {
  const { id } = req.params;
  const user = userService.getUserById(id);

  if (!user) {
    const error = new Error('User not found');
    error.statusCode = HTTP_STATUS.NOT_FOUND;
    return next(error);
  }

  res.status(HTTP_STATUS.OK).json({
    success: true,
    data: user
  });
};
