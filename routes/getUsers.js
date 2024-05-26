let data = require('../data');

module.exports = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(await data.getUsers());
}