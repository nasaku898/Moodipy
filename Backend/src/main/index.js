// main
const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const spotifyAPI = require('./routes/SpotifyAPI');
const submissionRouter = require('../main/routes/submission_router');
const app = express();
const PORT = 8888;
const initialize_db = require('./helpers/db_init');

app.use(cors())

//Initialize json parser
app.use(express.json());

//Configure dotenv
dotenv.config();

app.use('/spotify', spotifyAPI);
app.use('/submission', submissionRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//initialize database
initialize_db();