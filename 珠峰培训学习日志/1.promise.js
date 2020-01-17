// 解决并发问题 (同步多个异步放的执行结果)
// 链式调用的问题（现获取name，通过name在获取age） 解决多个回调嵌套的问题

// Promise是一个类
// 1) 每次new 一个Promise都需要传递一个执行器，执行器是立即执行的
// 2) 执行器函数中有两个参数  resolve reject
// 3) 默认Promise 有三个状态 pendding =》 resolve 表示成功了 reject就是拒绝
// 4) 如果一旦成功了 不能变成失败 一旦失败 不能再成功了
// 5) 每个promise都有一个then方法
let p = new Promise((resolve,reject)=>{
    resolve('我有钱')
})
p.then(data=>{
    console.log('success::::'+data);
},err=>{
    console.log('error:::::'+err)
})
