const data = require('../data');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        let login = '';
        for (let pair of parsedBody) {
            login = pair[0];
        }
        res.end(data.deleteUser(login));
    });
}