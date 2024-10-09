const mysql = require('mysql2');
const config = require('../config');

const connection = mysql.createConnection(config.database);

const Candidate = {
    create: (candidate, callback) => {
        const sql = `INSERT INTO candidates (first_name, last_name, email, user_id) VALUES (?, ?, ?, ?)`;
        connection.execute(sql, [candidate.first_name, candidate.last_name, candidate.email, candidate.user_id], callback);
    },
    findByUserId: (user_id, callback) => {
        const sql = `SELECT * FROM candidates WHERE user_id = ?`;
        connection.execute(sql, [user_id], callback);
    }
};

module.exports = Candidate;
