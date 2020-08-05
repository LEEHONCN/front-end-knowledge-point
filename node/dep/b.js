/*
 * @Author: Li Hang
 * @Date: 2020-07-26 22:57:38
 * @LastEditTime: 2020-07-26 23:25:24
 */ 
const a = require('./a');
console.log('in B, before exports')
module.exports = {
  isDone: true,
  aIsDone: a.isDone,
}
console.log('in B module.exports is', module.exports);
// console.log('in B module.exports is', JSON.stringify(module.exports));