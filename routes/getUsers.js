let data = require('../data');

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(data.getUsers());
    res.end();
}