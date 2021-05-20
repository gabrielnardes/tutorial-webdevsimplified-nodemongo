require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', erro => console.error(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());
app.use('/subscribers', require('./routes/subscribers'));

app.listen(3000, () => console.log('Server started'));