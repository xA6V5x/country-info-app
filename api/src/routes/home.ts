import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
     try {
          res.json('Welcome to country info api');
     } catch (error) {
          res.send('Error');
     }
});

export default router;
