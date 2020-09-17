// const fs = require('fs');
// const path = require('path');

// fs.readFile(path.join(__dirname, './message.json'), (err, content) => {
//   if (err) {
//     return null;
//   }
//   console.log(content.toString());
// });

const Worker = require('worker_threads');

type WorkerCallback = (err: any, result?: any) => any;

export function runWorker(path: string, cb: WorkerCallback, workerData: object | null = null) {
 const worker = new Worker(path, { workerData });
 worker.on('message', cb.bind(null, null));
 worker.on('error', cb);
 worker.on('exit', (exitCode) => {
   if (exitCode === 0) {
     return null;
   }
   return cb(new Error(`Worker has stopped with code ${exitCode}`));
 });
 return worker;
}
