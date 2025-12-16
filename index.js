import express from 'express';
import userRoutes from './src/routes/user.routes.js';
import errorHandler from './src/middleware/errorHandler.js';
import { PORT, HTTP_STATUS } from './src/config/constants.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    error: 'Route not found'
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});