// 首字母大写
// str.slice(1) 从 str 索引 1 处开始，一直截取到最后

function firstUpperCase(str){
    if(!str) return str;    // 如果 str 是 '' , 返回 ''
    return str[0].toUpperCase() + str.slice(1);
}