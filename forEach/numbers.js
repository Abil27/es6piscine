let numbers = [1, 2, 3, 4, 5];

let sum = 0;

// numbers.forEach((number) => {
//     sum += number;
// });

function addTo(number) {
    return sum += number;
}

numbers.forEach(addTo);
 console.log(sum);