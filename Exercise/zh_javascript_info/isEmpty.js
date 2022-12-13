// 可以放在 <head> 处，报错的时候看下 “ 是否没打全
function isEmpty(obj){
    for(let key in obj){
        return false;       // 如果进到循环里面，说明有属性
    }

    return true;
}