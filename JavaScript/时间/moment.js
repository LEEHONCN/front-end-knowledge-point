const Moment = require('moment');
const timeStamp = new Date().getTime();
console.log(timeStamp)
let date = Moment(timeStamp).format('YYYY/MM/DD HH:mm')
console.log(date)
date = Moment(timeStamp).local().format('YYYY/MM/DD HH:mm')
console.log(date)
