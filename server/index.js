const keys = require('./keys');

//Express Application setup

const express = require('express');
const bodeParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodeParser.json());


// Postgres client setup

const { Pool } = require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on('connect', (client) => {
    client.query('Create Table if not exists values (number int)')
        .catch(err => console.log("PG ERROR", err));
});

// Express route def

app.get('/', (req, res) => {
    res.send("Hi");
});

// get the values
app.get('/values/all', async (req, res) => {
    const values = await pgClient.query("SELECT * From values");
    res.send(values);
});

// insert value
app.post("/values", async (req, res) => {

    if (!req.body.value) res.send({ working: false });

    pgClient.query("Insert into values(numbers) Values($1)", [req.body.value]);

    res.send({ working: true });
});

app.listen(5000, err => {
    console.log("Listening");

})


