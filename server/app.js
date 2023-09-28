require('dotenv').config()
const {enviroment, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const catRoutes = require('./Routes/cats');

const app = express();

// middleware setup
app.use(morgan(enviroment));
app.use(bodyParser.json());
app.use('/cats', catRoutes)

app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));