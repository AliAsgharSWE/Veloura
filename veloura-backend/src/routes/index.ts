import { Router } from 'express';

const router = Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Welcome to the Veloura backend!');
});

export default router;
