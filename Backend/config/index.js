require('dotenv').config();


const DB_HOST = '';
const DB_USER = '';
const DB_PASS = '';
const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT;


module.exports = {
    PORT,
    DB_URL
}