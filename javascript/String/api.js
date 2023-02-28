let str = 'learn string api';

let result = str.charAt(2);
console.log(result);

result = str.charCodeAt(2)
console.log(result);

result = str.concat('+concat');
console.log(`concat -- ${str} -- ${result}`); // concat返回新串儿

result = str.endsWith('pi')
console.log(`endsWith-- ${result}`);
result = str.endsWith('p', 15)
console.log(result);
result = str.endsWith('i', 16)
console.log(result);

result = str.includes('ap');
console.log(`includes ${result}`)
result = str.includes('a', 13);
console.log(`includes-position ${result}`)

result = str.indexOf('str');
console.log(`indexOf ${result}`);

result = str.lastIndexOf('a');
console.log(`lastIndexOf ${result}`);

result = str.length;
console.log(`String Object length ${result}`)

result = str.normalize(); // Unicode字符串值形式 -- 没太懂
console.log(`normalize ${result} ${str}`);

result = str.padEnd(20, 'padEnd');// 第一个入参代表返回的长度（包含拼接前的）
console.log(`padEnd() -- ${result} -- ${str}`);

result = str.repeat(2);
console.log(`repeat() -- ${result} -- ${str}`);

result = str.replace(/a/g, 'b');
console.log(`replace() -- ${result} -- ${str}`);

// result = str.replaceAll('a', 'b'); // 报错 估计需要垫片pollyfill (es2021 ES12加入的)
// console.log(`replaceAll() -- ${result} -- ${str}`);

result = str.search('a');
console.log(`search() -- ${result}`);

/**
 * 那么问题来了，search()方法也是同样返回目标自字符串索引值的。indexOf()和search()有什么区别呢？为什么时候该使用它，什么时候该使用search()这个方法呢？

首先要明确search()的参数必须是正则表达式，而indexOf()的参数只是普通字符串。indexOf()是比search()更加底层的方法。

如果只是对一个具体字符串来查找，那么使用indexOf()的系统资源消耗更小，效率更高；如果是查找具有某些特征的字符串（比如查找以a开头，后面是数字的字符串），那么indexOf()就无能为力，必须要使用正则表达式和search()方法了。

很多时候用indexOf()不是为了真的想知道子字符串的位置，而是想知道长字符串中没有包含这个子字符串。如果返回索引值是-1，那么说明没有：不等于-1，那么就是有。

所以一般情况下indexOf比search更省资源。
 */

result = str.slice(2,4);
console.log(`slice() -- ${result} -- ${str}`);

result = str.split(' ')
console.log(`split() ${result} -- ${str}`);

result = str.substring(0,5);
console.log(`substring()  ${result} -- ${str}`);

result = str.trim(); // 去两头空格
console.log(`trim()  ${result} -- ${str}`);


