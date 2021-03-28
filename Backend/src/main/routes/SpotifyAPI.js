const SpotifyWebApi = require('spotify-web-api-node')
const express = require('express');
require('dotenv').config();

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];

// Instantiating the Spotify API module
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
})

const router = express();

// Must login before accessing API endpoint
router.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

// Callback function called after the application has logged in and generates access_token
router.get('/callback', (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
        console.error('Callback Error:', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            const access_token = data.body['access_token'];
            const refresh_token = data.body['refresh_token'];
            const expires_in = data.body['expires_in'];

            spotifyApi.setAccessToken(access_token);
            spotifyApi.setRefreshToken(refresh_token);

            console.log('access_token:', access_token);
            console.log('refresh_token:', refresh_token);

            console.log(
                `Sucessfully retreived access token. Expires in ${expires_in} s.`
            );
            res.send('Success! You can now close the window.');

            setInterval(async () => {
                const data = await spotifyApi.refreshAccessToken();
                const access_token = data.body['access_token'];

                console.log('The access token has been refreshed!');
                console.log('access_token:', access_token);
                spotifyApi.setAccessToken(access_token);
            }, expires_in / 2 * 1000);
        })
        .catch(error => {
            console.error('Error getting Tokens:', error);
            res.send(`Error getting Tokens: ${error}`);
        });
});

// Route to fetch the playlist by emotion
router.get('/playlist/emotion', (req, res) => {
    // Defining search words for different emotions
    const searchKeysByEmotion =
    {
        "anger": "anger emotion",
        "contempt": "feeling contempt",
        "disgust": "feeling disgusting",
        "fear": "frightening",
        "happiness": "happiness",
        "neutral": "feeling neutral",
        "sadness": "sadness",
        "surprise": "astonishing"
    }

    // Storing emotions and percentages in seperate arrays
    const emotions = Object.keys(req.body)
    const percentages = Object.values(req.body)

    // Finding the max value for the percentage
    const maxPercentage = Math.max(...percentages)

    if (maxPercentage >= 0.6) {
        // Getting the index in the array of the max percentage
        const indexOfMaxInPercentageArr = percentages.indexOf(maxPercentage)

        // Finding the emotion from the enotion array 
        const emotionOfMax = emotions[indexOfMaxInPercentageArr]

        // Finding the search words for the emotion
        let searchKey = searchKeysByEmotion[emotionOfMax];

        //Searching for a playlist
        spotifyApi.search(searchKey, ['playlist'], { limit: 10, offset: 0 }).then(response => {
            if (response.body.playlists.items.length === 0) {
                res.status(404).send("No playlist were found for " + emotionOfMax + ".")
            } else {
                res.status(200).send(response)
            }
        }).catch((error) => {
            res.status(400).send(error.message)
        })
    } else {
        res.status(400).send('Uncertain about the emotion. Please upload another picture.');
    }

})

module.exports = router