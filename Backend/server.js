console.clear();
const express = require('express');
const router = require('./routes');
const connectDB = require('./db/db');

const { PORT } = require('./config');

const app = express();

app.use(express.json({ limit: '8mb' }));
app.use(router);


const port = PORT || 8000;



connectDB();

app.listen(port, () => console.log(`server is running on port ${port}`));