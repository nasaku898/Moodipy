// main
const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const spotifyAPI = require('./routes/SpotifyAPI');
const app = express();
// const PORT = 8888;

app.use(cors())

//Initialize json parser
app.use(express.json());

//Configure dotenv
dotenv.config();

app.use('/spotify', spotifyAPI);

app.listen(process.env.PORT || 8888, () => console.log(`Server started on ${process.env.PORT}`));