const updateUser = require('./data');
const createUser = require('./routes/createUser');
const deleteUser = require('./routes/deleteUser');
const getUser    = require('./routes/getUser'); 
const getUsers   = require('./routes/getUsers');

let fork = (req, res) => {
    const url    = req.url;
    const method = req.method;
    if (url === '/user' && method === 'POST') {
        createUser(req, res);
    } else if (url === '/user' && method === 'DELETE') {
        deleteUser(req, res);
    } else if (url === '/user' && method === 'PUT') {
        updateUser(req, res);
    } else if (url === '/user' && method === 'GET') {
        getUser(req, res);
    } else if (url === '/' && method === 'GET') {
        getUsers(req, res);
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('404');
    }
}

module.exports = fork;