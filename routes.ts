import * as path from 'path';
import * as express from 'express';
//import * as dotenv from 'dotenv';
import { dbPool } from './db';

export const plantRouter = express.Router();
plantRouter.use(express.json());
//dotenv.config({ path: path.resolve(__dirname, './env') });


// ********************** GET **********************************************
plantRouter.get('/', async (req, res) => {
    res.json({ message: "Welcome" })
    console.log("welcome to landing page");
});

plantRouter.get('/all-plants', async (req, res) => {
    dbPool.query('SELECT * FROM plant', function (err, response) {
        if (err) throw err;
        res.send(response);
    });
});

plantRouter.get('/plantnames', async (req, res) => {
    dbPool.query('SELECT plant.name FROM plant', function (err, response) {
        console.log(response);
        if (err) throw err;
        res.send(response);
    });
});

plantRouter.get('/plant/:name', async (req, res) => {
    const sqlQuery = 'SELECT * FROM plant WHERE name LIKE ?';
    dbPool.query(sqlQuery, [req.params.name], function (err, response) {
        if (err) throw err;
        res.send(response);
    })
});

plantRouter.get('/my-plants/:user_id', async (req, res) => {
    const sqlQuery = 'SELECT * FROM plant, userplants WHERE userplants.user_id LIKE ? AND plant.plant_id = userplants.plant_id';
    dbPool.query(sqlQuery, [req.params.user_id], function (err, response) {
        if (err) throw err;
        res.send(response);
    })
});

plantRouter.get('/user/:name/:password', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM user WHERE name LIKE ? AND password LIKE ?';
        dbPool.query(sqlQuery, [req.params.name, req.params.password], function (err, response) {
            if (err) throw err;
            res.send(response);
        })
    } catch (err) {
        res.send('Failed to log in');
    }

});

plantRouter.get('/userexist/:name/:mail', async (req, res) => {
    const sqlQuery = 'SELECT * FROM user WHERE name LIKE ? OR mail LIKE ?';
    dbPool.query(sqlQuery, [req.params.name, req.params.mail], function (err, response) {
        if (err) throw err;
        res.send(response);
    })
});

plantRouter.get('/userevents/:user_id', async (req, res) => {
    const sqlQuery = 'SELECT plant_id, nextWateringDay, ownName, DAYOFWEEK(nextWateringDay) As weekday from userplants where DATE(nextWateringDay) >= CURDATE() And DATE(nextWateringDay) < (CURDATE() + INTERVAL 8 DAY) and user_id LIKE ? Order by nextWateringDay;';
    dbPool.query(sqlQuery, [req.params.user_id], function (err, response) {
        if (err) throw err;
        res.send(response);
        console.log(response);
    })
});
// ********************** POST **********************************************

plantRouter.post('/plant/newplant', async (req, res) => {
    const sqlQuery = 'INSERT INTO userplants (plant_id, user_id, ownName, nextWateringDay) VALUES (?, ?, ?, ?)';
        dbPool.query(sqlQuery, [req.body.plant_id, req.body.user_id, req.body.ownname, new Date(req.body.startdate)], function (err, result) {
            if (err?.errno == 1062) {
                res.send(err.message);
            } else if(err) {
                throw err;
            }
            res.send(result);
        });

})

plantRouter.post('/user/newuser', async (req, res) => {
    const sqlQuery = 'INSERT INTO user (name, mail, password) VALUES (?, ?, ?)';
    dbPool.query(sqlQuery, [req.body.nameUser, req.body.emailUser, req.body.passwordUser], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

// ********************** PUT (UPDATE) **********************************************

plantRouter.put('/plant', function (req, res) {
    const sqlQuery = 'UPDATE userplants SET ownName = ?, nextWateringDay = ? WHERE user_id = ? AND ownName = ?';
    dbPool.query(sqlQuery, [req.body.ownName, new Date(req.body.startDate), req.body.user_id, req.body.plantName], function (err, result) {
        if (err?.errno == 1062) {
            res.send(err);
        } else if(err) {
            throw err;
        }
        res.send(result);
    })
})

plantRouter.put('/plant/date', function (req, res) {
    const sqlQuery = 'UPDATE userplants SET nextWateringDay = ? WHERE user_id = ? AND ownName = ? AND plant_id = ?';
    dbPool.query(sqlQuery, [new Date(req.body.startDate), req.body.user_id, req.body.plantName, req.body.plant_id], function (err, result) {
        if (err?.errno == 1062) {
            res.send(err);
        } else if(err) {
            throw err;
        }
        res.send(result);
    })
})

// ********************** DELETE **********************************************

// delete plant from user
plantRouter.delete('/:plantName/:user_id', async (req, res) => {
    const sqlQuery = 'DELETE FROM userplants WHERE user_id = ? AND ownName = ?';
    dbPool.query(sqlQuery, [req.params.user_id, req.params.plantName], function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})