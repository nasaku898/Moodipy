// main
const express = require('express')
const cors = require("cors")
const spotifyAPI = require('./routes/SpotifyAPI')
const app = express()
const PORT = 8888;
app.use(cors())

//Initialize json parser
app.use(express.json());

app.use('/spotify', spotifyAPI)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))