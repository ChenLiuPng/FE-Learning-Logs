// 柯里化： 将一个函数拆分成多个函数

// 判断类型 Object.prototype.toString.call
// 高阶函数中包含 柯里化 可以保留参数 bind
// const checkType = (content, type) => {
//   return Object.prototype.toString.call(content) === `[object ${type}]`;
// };
// const b = checkType(123, "Number");
// console.log(b);

const checkType = type => {
  return content => {
    return Object.prototype.toString.call(content) === `[object ${type}]`;
  };
};
let types = ["Number", "String", "Boolean"];
let utils = {};
types.forEach(type => {
  utils["is" + type] = checkType(type);
});

console.log(utils.isNumber(123));

// 函数柯里化怎么实现

// 通用柯里化
const add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

const curring = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args);
    if (arr.length < len) {
      return curring(fn, arr);
    }
    return fn(...arr);
  };
};

let r = curring(add)(1)(2)(3)(4)(5)
console.log(r);




const checkType = (type,content) => {
    return Object.prototype.toString.call(content) === `[object ${type}]`;
};

const curring = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args);
    if (arr.length < len) {
      return curring(fn, arr);
    }
    return fn(...arr);
  };
};

let types = ["Number", "String", "Boolean"];
let utils = {};
types.forEach(type => {
  utils["is" + type] = curring(checkType)(type);
});

console.log(utils.isNumber(123))

