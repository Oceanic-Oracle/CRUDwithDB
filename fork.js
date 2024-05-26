const updateUser = require('./routes/updateUser');
const createUser = require('./routes/createUser');
const deleteUser = require('./routes/deleteUser');
const getUser    = require('./routes/getUser'); 
const getUsers   = require('./routes/getUsers');

let fork = async (req, res) => {
    const url    = req.url;
    const method = req.method;
    if (url === '/user' && method === 'POST') {
        await createUser(req, res);
    } else if (url === '/user' && method === 'DELETE') {
        await deleteUser(req, res);
    } else if (url === '/user' && method === 'PUT') {
        await updateUser(req, res);
    } else if (url === '/user' && method === 'GET') {
        await getUser(req, res);
    } else if (url === '/' && method === 'GET') {
        await getUsers(req, res);
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('404');
    }
}

module.exports = fork;