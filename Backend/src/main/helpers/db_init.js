const db = require('./db');

//initialize tables in database if database is empty
const initialize_db = () => {

    //create table statement
    const createResultsTable = `
    CREATE TABLE IF NOT EXISTS result(
        submissionID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        initial_emotion TINYTEXT NOT NULL,
        api_emotion TINYTEXT NOT NULL,
        user_feedback TINYTEXT NOT NULL
    );`;

    db.query(createResultsTable, (err, result) => {
        if (err) throw err;
    });
};

module.exports = initialize_db;