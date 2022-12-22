// 生成 [min, max) 区间内的随机浮点数
function randomFloat(min, max){
    return min + Math.random()*(max - min);
}