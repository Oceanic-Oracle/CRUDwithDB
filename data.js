let data = new Map();

module.exports = {
    getUsers: () => {
        return JSON.stringify(data);
    },
    getUser: (login) => {
        const password = data.get(login);
        if (data.has(login) && password !== undefined) {
            return JSON.stringify({login: password})
        } else {
            return JSON.stringify({'error': 'undefined'});
        }
    },
    createUser: (login, password) => {
        if (!data.has(login)) {
            data[login] = password;
            return JSON.stringify('Success');
        } else {
            return JSON.stringify({'error': 'Login is busy'});
        }
    },
    updateUser: (login, password) => {
        if (data.has(login)) {
            data[login] = password;
            return JSON.stringify('Success');
        } else {
            return JSON.stringify({'error': 'undefined'});
        }
    },
    deleteUser: () => {
        if (data.has(login)) {
            data.delete(login);
            return JSON.stringify('Success');
        } else {
            return JSON.stringify({'error': 'login does not exist'});
        }
    },
}