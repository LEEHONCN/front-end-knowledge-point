/*
 * @Author: Li Hang
 * @Date: 2020-06-27 10:28:37
 * @LastEditTime: 2020-06-27 15:10:32
 */ 

 import Promise from '../Promise';
 
test('new Promise', (done) => {
  new Promise((resolve, reject) => {
    resolve(111)
  }).then((value) => {
    expect(value).toBe(111);
    done();
  }, (e) => {
    console.log(e)
    done()
  })
})
 // case 1: