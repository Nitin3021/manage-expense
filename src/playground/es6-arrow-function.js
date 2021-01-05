// const square = function (x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(5));

const getFirstName = function(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Nitin Pillai'));

const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getLastName('Nitin Pillai'));