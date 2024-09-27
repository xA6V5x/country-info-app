import axios from 'axios';
import { Router, Request, Response } from 'express';
import { getCountryDetails } from '../controllers';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

const GET_AVAILABLE_COUNTRIES = process.env.GET_AVAILABLE_COUNTRIES || '';

// response with all the available countries
router.get('/', async (req: Request, res: Response) => {
     try {
          const response = await axios.get(GET_AVAILABLE_COUNTRIES);
          res.status(200).json(response.data);
     } catch (error) {
          res.status(500).json({
               error: 'There was an error getting available countries',
          });
     }
});

// response with detailed information about a specific country {Name, List of Border Countries, Population Data, Flag URL}
router.get('/:id', async (req: Request, res: Response) => {
     // id is the country code
     const { id } = req.params as { id: string };

     try {
          const response = await getCountryDetails({ id });
          res.status(200).json(response);
     } catch (error) {
          error
               ? res.status(404).json({ error })
               : res.status(404).json({
                      error: `There was an error getting the countrie ${id}, make sure that country code exists`,
                 });
     }
});

export default router;
