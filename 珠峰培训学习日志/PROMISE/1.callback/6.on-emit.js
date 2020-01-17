// 发布订阅模式
let e = {
    arr:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn=>fn())
    }
}

e.on(()=>{
    console.log('执行了')
})
e.on(()=>{
    if(Object.keys(school).length==2){
        console.log(school)
    }
})
fs.readFile('name.txt', 'utf8',(err,data)=>{
    school['name'] = data
    e.emit()
    
});

fs.readFile('age.txt', 'utf8',(err,data)=>{
    school['age'] = data
    e.emit()
});
