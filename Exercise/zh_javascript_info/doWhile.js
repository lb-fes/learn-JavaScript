"use strict";

/*
编写一个提示用户输入大于 100 的数字的循环。如果用户输入其他数值 —— 请他重新输入。
循环一直在请求一个数字，直到用户输入了一个大于 100 的数字、取消输入或输入了一个空行为止。
在这我们假设用户只会输入数字。在本题目中，不需要对非数值输入进行特殊处理。
*/

let num;
do{
    num = prompt("Enter a number greater than 100:", '');
}
while(num <= 100 && num)

alert(num);