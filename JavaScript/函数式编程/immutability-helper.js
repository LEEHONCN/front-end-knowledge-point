const update = require('immutability-helper');

const state1 = ['x'];
const state2 = update(state1, {$push: ['y']}); // ['x', 'y']

console.log(state1);
console.log(state2);