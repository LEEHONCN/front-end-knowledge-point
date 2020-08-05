/*
 * @Author: Li Hang
 * @Date: 2020-08-05 22:43:06
 * @LastEditTime: 2020-08-05 23:21:01
 */ 
setImmediate(() => {
  setImmediate(() => {
    console.log('setImmediate')
  });
  
  setTimeout(() => {
    console.log('setTimeout')
  }, 0);
});