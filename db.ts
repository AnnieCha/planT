import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';

export const dbCon = mysql.createConnection({
    host: '195.37.176.178',
    port: 20133,
    user: '22_AWD_Grp_2',
    password: 'fo58i]HI7KNp7kTSyU0Y',
    database: '22_AWD_Gruppe2'
})

//connetion to database
export const dbPool = mysql.createPool({
    // host: process.env.HOST,
     host: '195.37.176.178',
     port: 20133,
     user: '22_AWD_Grp_2',
     password: 'fo58i]HI7KNp7kTSyU0Y',
     database: '22_AWD_Gruppe2',
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0
 });