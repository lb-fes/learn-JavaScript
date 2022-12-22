// 对象必须先声明才能调用，要写在调用前面
let calculator = {
    // 提示输入两个值，并将其保存为对象属性
    read(){
        this.a = Number(prompt("Please enter a", ''));  // prompt() 返回值为字符串类型
        this.b = Number(prompt("Please enter b", ''));
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    },

};