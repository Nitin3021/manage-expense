// Arguments object is no longer bound in ES6

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// console.log(add(55, 1, 1001));

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Nitin',
    cities: ['Mumbai', 'KL', 'Jakarta'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());