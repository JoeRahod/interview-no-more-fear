/**
 * 先微任务后宏任务
 * 异步任务队列  Promise 微任务 setTimeout 宏任务    --  网络请求api
 */

Promise.resolve('promise.resolve').then(res => {
  console.log(res)
  setTimeout(() => {
    console.log('setTimeout inside the promise resolve.then')
  }, 0)
});

setTimeout(() => {
  Promise.resolve('promise resolve inside the setTimeout').then(res => {
    console.log(res)
  })
}, 0);

console.log('console.log') // 同步