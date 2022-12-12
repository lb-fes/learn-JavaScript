"use strict";

alert("world");

// 执行 let i = 0; 后， i<0 条件为 false, 不执行 alert(i)
for (let i = 0; i < 0; i++) {
    alert(i);
}

alert("hello");