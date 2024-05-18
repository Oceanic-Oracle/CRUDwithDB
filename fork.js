let createUser = require('./routes/createUser');
let deleteUser = require('./routes/deleteUser');
let getUser    = require('./routes/getUser'); 
let getUsers   = require('./routes/getUsers');

let fork = (req, res) => {
    let url    = req.url;
    let method = req.method;
    if (url === '/user' && method === 'GET') {
        createUser(req, res);
    } else if (url === '/user' && method === 'DELETE') {
        deleteUser(req, res);
    } else if (url === '/user' && method === 'GET') {
        getUser(req, res);
    } else if (url === '/' && method === 'GET') {
        getUsers(req, res);
    } else {
        res.end('404');
    }
}

module.exports = fork;