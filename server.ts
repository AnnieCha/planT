import * as path from 'path';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { dbPool } from './db';

export const plantRouter = express.Router();
plantRouter.use(express.json());

dotenv.config({ path: path.resolve(__dirname, './env') });

plantRouter.get('/', async (req, res) => {
    res.json({ message: "Welcome" })
    console.log("welcome to landing page");
});

plantRouter.get('/all-plants', async (req, res) => {
    console.log('connection to pool');
    dbPool.query('SELECT * FROM plant', function (err, response) {
        if(err) throw err;
        res.json(response);
        console.log(response);
    });
});

/*
pool.connect((err: { message: any; }) => {
    if(err){
        console.log(err.message);
    }
    console.log('db', pool.state);
})*/