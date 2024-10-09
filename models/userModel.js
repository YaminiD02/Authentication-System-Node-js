const mysql = require('mysql2');
const config = require('../config');

const connection = mysql.createConnection(config.database);

const User = {
    create: (user, callback) => {
        const sql = `INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)`;
        connection.execute(sql, [user.first_name, user.last_name, user.email, user.password_hash], callback);
    },
    findByEmail: (email, callback) => {
        const sql = `SELECT * FROM users WHERE email = ?`;
        connection.execute(sql, [email], callback);
    },
    findById: (id, callback) => {
        const sql = `SELECT * FROM users WHERE id = ?`;
        connection.execute(sql, [id], callback);
    }
};

module.exports = User;
