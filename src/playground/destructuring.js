//
// Object destructuring
//
// const person = {
//     name: 'Nitin',
//     age: 30,
//     location: {
//         city: 'Jakarta',
//         temp: 32
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature)
// {
//     console.log(`It's ${temperature} in ${city}.`);
// }

//
// Array destructuring
//

const address = ['1299 Wow street', 'Jakarta', 'Indonesia', '12389'];
const [street, city, state = 'Bali', zip] = address;
// console.log(`You are in ${address[1]}, ${address[2]}.`);
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, small, medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}.`);