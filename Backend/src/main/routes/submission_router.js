const express = require("express");
const insertResult = require('../dao/SubmissionDAO');
const router = express();

//Post submission result into database table
router.post("/result", (req, res) => {
    insertResult(
        req.body.initial_emotion,
        req.body.api_emotion,
        req.body.user_feedback
    ).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(error).send(error);
    });
});

module.exports = router;