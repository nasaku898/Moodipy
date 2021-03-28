const db = require('../helpers/db');

insertResult = (initial_emotion, api_emotion, user_feedback) => {
    return new Promise((resolve, reject) => {
        const insert =
            "INSERT INTO `result` (`initial_emotion`, `api_emotion`, `user_feedback`) VALUES ('" +
            initial_emotion +
            "', '" +
            api_emotion +
            "', '" +
            user_feedback +
            "');";
        console.log(insert);
        db.query(insert, (err) => {
            if (err) {
                reject(err);
            }
            resolve("Record inserted succesfully.");
        });
    });
}

module.exports = insertResult;