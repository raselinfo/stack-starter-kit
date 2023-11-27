import express from 'express';

import demoController from '../../controllers/demo/demo.controller';

const router = express.Router();
router.get('/demos', demoController);

export default router;
