const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}${config.db.dbName}`, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.get("/health", (req, res) => {
    res.status(200).send("Personal Note app working fine");
});

app.use('/api/v1/notes',routes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port "+port));