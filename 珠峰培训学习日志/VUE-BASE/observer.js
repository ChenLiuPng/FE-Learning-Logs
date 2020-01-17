// 观察一个数据Vue2.0 defineProperty ,针对数组 length

// 只针对对象 数组没有使用defineProperty的


function observer(value) {
    if(typeof value=== 'object'|| type == null){
        return value;
    }
    for(let key in value) {
        defineReactive(value,key,value[key]);
    }
}


let data  = {name:'tail'}

observer(data)