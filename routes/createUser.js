const data = require('../data')

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const parsedBody = new URLSearchParams(body);
        let login    = '';
        let password = '';
        for (let pair of parsedBody) {
            login    = pair[0];
            password = pair[1];
        }
        console.log(login, password);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(await data.createUser(login.toString(), password.toString()));
    });
}