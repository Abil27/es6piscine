let products = [
    {name: 'banana', type: 'fruit'},
    {name: 'gboma', type: 'vegetable'},
    {name: 'ademe', type: 'vegetable'},
    {name: 'orange', type: 'fruit'},
];

const filterProducts = products.filter((product) => {
    return product.type === 'vegetable';
});

console.log(filterProducts);