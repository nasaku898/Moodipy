const db = require('../helpers/db');

insertResult = (initial_emotion, api_emotion, user_feedback) => {

    function isEmpty(str) {
        return (!str || str.length === 0);
    }

    return new Promise((resolve, reject) => {

        //insert statement
        if (isEmpty(initial_emotion) || isEmpty(api_emotion) || isEmpty(user_feedback)) {
            reject("Missing input parameter.");
        }
        else {
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
        }
    });
}

module.exports = insertResult;