import { Router } from 'express';
import home from './home';
import countries from './countries';

const router = Router();

router.use('/', home);
router.use('/countries', countries);

export default router;
