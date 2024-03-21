const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
];

function getUserById( id, callback ){
    const user = users.find( function(user) {
        return user.id === id;
    });

    if (!user) {
        return callback(`User not found with id: ${id}`);
    }

    callback(null, user);
}

module.exports = {
    getUserById
}