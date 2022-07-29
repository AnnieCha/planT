import * as express from "express";
import { plantRouter } from "./server";

const app = express();
const port = 5200; // default port to listen
const cors = require('cors');

//const dotenv = require('dotenv');
//dotenv.config({ path: path.resolve(__dirname, './env') });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//const PORT = process.env.PORT || 5200;
app.listen(port, () => {
    console.log('Server started on port ' + port);
})

app.use(plantRouter);

module.exports = app;
