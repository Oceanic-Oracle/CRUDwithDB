let data = new Map();

module.exports = {
    getUsers: () => {
        return JSON.stringify(Array.from(data));
    },
    getUser: (login) => {
        if (data.has(login)) {
            let password = data.get(login);
            return JSON.stringify({[login]: password})
        } else {
            return JSON.stringify({'error': 'undefined'});
        }
    },
    createUser: (login, password) => {
        if (!data.has(login) && password !== '') {
            data.set(login, password)
            return JSON.stringify('Success');
        } else {
            return JSON.stringify({'error': 'Login is busy'});
        }
    },
    updateUser: (login, password) => {
        if (data.has(login) && password !== '') {
            data.set(login, password);
            return JSON.stringify('Success');
        } else {
            return JSON.stringify({'error': 'undefined'});
        }
    },
    deleteUser: (login) => {
        if (data.has(login)) {
            data.delete(login);
            return JSON.stringify('Success');
        } else {
            return JSON.stringify({'error': 'login does not exist'});
        }
    },
}