import express, { Application } from 'express';
import routes from './routes';
import { rateLimitConfig } from './middleware';
import cors from 'cors';

const app: Application = express();

const PORT = process.env.PORT;

// request limit config
app.use(rateLimitConfig);

// Restrict access to resources from web browsers
app.use(cors());

// endpoints
app.use(routes);

// when the server starts
app.listen(PORT, () => {
     console.log(`Server listening on port http://localhost:${PORT}/`);
});
