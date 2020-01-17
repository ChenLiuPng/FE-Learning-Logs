// 我们希望 读取数据 node 异步 会等待同步代码都执行完成后在执行

const fs = require('fs');
let school = {};
const after = (times, fn) => { // after可以生成新的函数 等待函数执行次数达到我的预期时执行
    return () => {
      if (--times === 0) {
        fn();
      }
    };
  };
  
  let newAfter = after(2, () => {
    console.log(school);
  });


fs.readFile('name.txt', 'utf8',(err,data)=>{
    school['name'] = data
    newAfter()
    
});

fs.readFile('age.txt', 'utf8',(err,data)=>{
    school['age'] = data
    newAfter()
});




