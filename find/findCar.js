function Car(model){
    this.model = model;
}

let cars = [
    new Car('Benz'),
    new Car('toyota'),
    new Car('Bentley')
]

const findCar = cars.find((car) =>{
    return car.model === 'toyota';
});

console.log(findCar);