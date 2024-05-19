const data = require('../data')

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        console.log(body);
    });
}