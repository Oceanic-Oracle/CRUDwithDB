const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'Mail',
    password: '241265',
    port: 5432,
});
client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Error connecting to the database', err));

module.exports = {
    getUsers: async () => {
        const result = await client.query('SELECT * FROM users');
        return JSON.stringify(result.rows);
    },
    getUser: async (login) => {
        const result = await client.query('SELECT * FROM users WHERE login = $1', [login]);
        return JSON.stringify(result.rows);
    },
    createUser: async (login, password) => {
        const result = await client.query('INSERT INTO users (login, password) VALUES ($1, $2)', [login, password]);
        return JSON.stringify(result.rows);
    },
    updateUser: async (login, password) => {
        const result = await client.query('UPDATE users SET password = $1 WHERE login = $2', [password, login]);
        return JSON.stringify(result.rows);
    },
    deleteUser: async (login) => {
        const result = await client.query('DELETE FROM users WHERE login = $1', [login]); 
        return JSON.stringify(result.rows);
    },
}