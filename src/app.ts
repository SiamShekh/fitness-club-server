import express, { Application } from 'express';
import envoroments from './config/_ENV';
import httpStatus from 'http-status';
const app: Application = express();

app.get('/', async (req, res) => {
    res.send({
        msg: 'Server is running perfectly...',
        status: httpStatus.OK,
        data: []
    })
})

export default app;