let cars = [
    {model: 'toyota', price: 'cheap'},
    {model: 'Benz', price: 'medium'},
    {model: 'Bentley', price: 'expensive'}
];

let prices = cars.map((car) => {
    return car.price;
})

console.log(prices);