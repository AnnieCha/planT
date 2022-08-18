import * as express from "express";
import { plantRouter } from "./server";
const serverless = require('serverless-http');

const app = express();
const apiRoute = '/.netlify/functions/server/plant';
const port = 5200; // default port to listen
const cors = require('cors');

//const dotenv = require('dotenv');
//dotenv.config({ path: path.resolve(__dirname, './env') });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use(plantRouter);
//app.use(apiRoute,plantRouter);

//const PORT = process.env.PORT || 5200;
app.listen(port, () => {
    console.log('Server started on port ' + port);
})

module.exports = app;
//module.exports.handler = serverless(app);