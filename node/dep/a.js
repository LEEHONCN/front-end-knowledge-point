/*
 * @Author: Li Hang
 * @Date: 2020-07-26 22:57:33
 * @LastEditTime: 2020-07-26 23:25:33
 */ 
const b = require('./b');
console.log('in A, before exports')
module.exports = {
  isDone: true,
  bIsDone: b.isDone
}
console.log('in A module.exports is', module.exports);
// console.log('in A module.exports is', JSON.stringify(module.exports));