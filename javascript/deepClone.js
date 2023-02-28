// const old = new Object({
//   person: {
//     name: 'joe',
//     age: 26
//   }
// });

const old = [{name: 'joe', age: 13}];

function isObject (target) {
  return typeof target === 'object' && target !== null;
}

function myDeepClone(target) {
  let result = null;
  const isArray = Array.isArray(target);
  result = isArray ? [] : {};

  Reflect.ownKeys(target).forEach(key => {
    console.log(key)
    const value =  target[key]
    debugger
    result[key] = isObject(value) ? myDeepClone(value) : value;
  })
  // 数组处理
  // 对象处理（深层递归）


  return result;

}

const renew = myDeepClone(old);
renew[0].name = 'elsie';
renew[0].age = 26;

console.log(old, renew)
