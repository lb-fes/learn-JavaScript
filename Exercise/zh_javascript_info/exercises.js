"use strict";

let num = prompt("Please input a number greater than 100: ", '');

while(num <= 100){
    
    if(num == '' || num == null) break;
    num = prompt("Please try again: ", '');
}
alert(num);