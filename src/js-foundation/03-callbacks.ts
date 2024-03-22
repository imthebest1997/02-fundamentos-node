interface User {
    id: number;
    name: string;
}

export const users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
];

export function getUserById( id: number, callback: (err?: string, user?: User) => void ){
    const user = users.find( function(user) {
        return user.id === id;
    });

    if (!user) {
        return callback(`User not found with id: ${id}`);
    }

    callback(undefined, user);
}

