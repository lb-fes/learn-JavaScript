/*
该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

该函数应该只修改数组。它不应该返回任何东西。
 */
function filterRangeInPlace(arr, a, b){
    arr.forEach(
        (item, index) => {
            if(item < a || item >b) arr.splice(index, 1);
        }
    )
}