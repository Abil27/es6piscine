//l'avantage avec map est qu'il cree une new array
let numbers = [1, 2, 3, 4, 5];

let double = numbers.map((number) => {
    return number * 2;
});

console.log(double);