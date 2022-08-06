import * as path from 'path';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { dbPool } from './db';

export const plantRouter = express.Router();
plantRouter.use(express.json());

dotenv.config({ path: path.resolve(__dirname, './env') });


// ********************** GET `**********************************************
plantRouter.get('/', async (req, res) => {
    res.json({ message: "Welcome" })
    console.log("welcome to landing page");
});

plantRouter.get('/all-plants', async (req, res) => {
    dbPool.query('SELECT * FROM plant', function (err, response) {
        if(err) throw err;
        res.send(response);
    });
});

plantRouter.get('/plant/:name', async (req, res) => {
    const sqlQuery = 'SELECT * FROM plant WHERE name LIKE ?';
    dbPool.query(sqlQuery, [req.params.name], function(err, response) {
        if(err) throw err;
        res.send(response);
    })
});

plantRouter.get('/my-plants/:user_id', async (req, res) => {
    const sqlQuery = 'SELECT * FROM plant, userplants WHERE userplants.user_id LIKE ? AND plant.plant_id = userplants.plant_id';
    dbPool.query(sqlQuery, [req.params.user_id], function(err, response) {
        if(err) throw err;
        res.send(response);
    })
});

// ********************** POST **********************************************

plantRouter.post('/plant/newplant', async (req, res) => {
    const sqlQuery = 'INSERT INTO userplants (plant_id, user_id, ownName, nextWateringDay) VALUES (?, ?, ?, ?)';
    dbPool.query(sqlQuery, [req.body.plant_id, req.body.user_id, req.body.ownname, new Date(req.body.startdate)], function(err, result) {
        if(err) throw err;
        res.send(result);
    });
})

// ********************** PUT (UPDATE) **********************************************

plantRouter.put('/plant', function(req, res){
    const sqlQuery = 'UPDATE userplants SET ownName = ? AND nextWateringDay = ? WHERE user_id LIKE ? AND plant_id LIKE ?';
    dbPool.query(sqlQuery, [req.body.ownName, req.body.nextWateringDay, req.body.user_id, req.body.plant_id], function(err, result) {
        if(err) throw err;
        res.send(result);
    })
})

// ********************** DELETE **********************************************

plantRouter.delete('/:ownName/:user_id', async (req, res) => {
    const sqlQuery = 'DELETE FROM userplants WHERE user_id = 1 AND ownName = ?';
    dbPool.query(sqlQuery, [req.params.ownName], function(err, result) {
        if(err) throw err;
        res.send(result);
    })
})


/*
pool.connect((err: { message: any; }) => {
    if(err){
        console.log(err.message);
    }
    console.log('db', pool.state);
})*/