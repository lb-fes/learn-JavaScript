"use strict";

/*写一个函数 pow(x,n)，返回 x 的 n 次方。换句话说，将 x 与自身相乘 n 次，返回最终结果。

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
创建一个 web 页面，提示输入 x 和 n，然后返回 pow(x,n) 的运算结果。

P.S. 在这个任务中，函数应该只支持自然数 n：从 1 开始的整数。*/

let x;
do{
    x = prompt("Please enter x that a Integer greater than 1", '');
}while(x<1 && x)

let n;
do{
    n = prompt("Please enter n that a Integer greater than 1", '');
}while(n<1 && n)

alert(pow(x, n));

function pow(x, n){
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}