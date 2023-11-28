import { Router } from 'express';

import demoController from '@controllers/demo/demo.controller';

const router = Router();
router.get('/demos', demoController);

export default router;
