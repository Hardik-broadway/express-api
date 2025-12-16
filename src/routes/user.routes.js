import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { validateUser, validateUserId } from '../middleware/validator.js';

const router = express.Router();

router.post('/', validateUser, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', validateUserId, userController.getUserById);

export default router;
