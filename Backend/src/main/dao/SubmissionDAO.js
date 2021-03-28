const db = require('../helpers/db');

insertResult = (initial_emotion, api_emotion, user_feedback) => {
    return new Promise((resolve, reject) => {

        //insert statement
        const insert =
            "INSERT INTO `result` (`initial_emotion`, `api_emotion`, `user_feedback`) VALUES ('" +
            initial_emotion +
            "', '" +
            api_emotion +
            "', '" +
            user_feedback +
            "');";

        //insert result into table
        db.query(insert, (err) => {
            if (err) {
                reject(err);
            }
            resolve("Record inserted succesfully.");
        });
    });
}

module.exports = insertResult;