let users = [
    {name: 'houssein'},
    {name: 'faizah'},
    {name: 'Abil'}
]

const findUser = users.find((user) => {
    return user.name === 'faizah';
});

console.log(findUser);