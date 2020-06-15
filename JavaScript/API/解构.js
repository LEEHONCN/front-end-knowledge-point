/*
 * @Author: Li Hang
 * @Date: 2020-04-27 13:35:18
 * @LastEditTime: 2020-04-27 15:07:14
 */
const [a, b = '', c] = [true, '1'];
console.log(a, b, c);




// 下面两种结构 aa 和 cc 等效
const { aa } = { aa: '1' };
console.log(aa);

const { bb: cc } = { bb: '2'};
console.log(cc);