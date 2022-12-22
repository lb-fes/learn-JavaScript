// 生成 [min, max] 区间内的随机整数，每个整数取值概率一样
function randomInteger(min, max){
    return Math.floor(min + Math.random()*(max - min + 1));     // 此处不能用 Math.round() ，否则会导致区间边界概率比其他值小一倍
}
