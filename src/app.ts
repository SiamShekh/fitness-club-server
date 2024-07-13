import express, { Application, Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import Routes from './routes/route';
import no_routes from './config/no_route';
import globalError from './config/global_error';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', Routes);

app.get('/', async (req, res) => {
    res.send({
        msg: 'Server is running perfectly...',
        status: httpStatus.OK,
        data: []
    })
})

app.use(no_routes);
app.use(globalError);

export default app;