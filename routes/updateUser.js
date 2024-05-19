const data = require('../data');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        let login    = '';
        let password = '';
        for (let pair of parsedBody) {
            login    = pair[0];
            password = pair[1];
        }
        console.log(login);
        res.end(data.updateUser(login, password));
    });
}