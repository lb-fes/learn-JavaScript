/*
该函数获取一个数组 arr，在其中查找数值大于或等于 a，且小于或等于 b 的元素，并将结果以数组的形式返回。
该函数不应该修改原数组。它应该返回新的数组。
 */
function filterRange(arr, a, b){
    return arr.filter(
        item => (a <= item && item <= b)
    );
}