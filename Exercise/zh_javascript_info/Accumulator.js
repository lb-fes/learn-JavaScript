function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function (){
        this.value += +prompt("Please enter a number", '0');
    }
}