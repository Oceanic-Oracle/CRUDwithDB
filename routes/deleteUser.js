const data = require('../data');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const parsedBody = new URLSearchParams(body);
        let login = '';
        for (let pair of parsedBody) {
            login = pair[0];
        }
        console.log(login);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(await data.deleteUser(login.toString()));
    });
}