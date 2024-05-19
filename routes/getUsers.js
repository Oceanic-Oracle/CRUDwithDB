let data = require('../data');

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(data.getUsers());
}