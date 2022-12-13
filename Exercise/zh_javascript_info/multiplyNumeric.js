// 将对象的每个数值属性值都乘以2
// typeof() 返回值为 string 类型
function multiplyNumeric(obj){
    for (let objKey in obj) {
        if(typeof(obj[objKey]) === "number"){
            obj[objKey] *= 2;
        }
    }
}
