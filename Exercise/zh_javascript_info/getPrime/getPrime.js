"use strict";

/*
大于 1 且不能被除了 1 和它本身以外的任何数整除的整数叫做素数。

换句话说，n > 1 且不能被 1 和 n 以外的任何数整除的整数，被称为素数。

例如，5 是素数，因为它不能被 2、3 和 4 整除，会产生余数。

写一个可以输出 2 到 n 之间的所有素数的代码。

当 n = 10，结果输出 2、3、5、7。

P.S. 代码应适用于任何 n，而不是对任何固定值进行硬性调整。*/

let num;

do{
    num = prompt("Enter a Integer greater than 1:", '');
}while(num <= 1 && num)

nextPrime:
for (let i = 2; i <= num; i++) { // 对每个自然数 i

    for (let j = 2; j <= i/2; j++) { // 寻找一个除数……
        if (i % j === 0) continue nextPrime; // 不是素数，则继续检查下一个
    }

    alert( i ); // 输出素数
}

