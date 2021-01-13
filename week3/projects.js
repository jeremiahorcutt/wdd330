function this_calculator(){
let calculator = {
    read(){
        this.numberOne = +prompt('First Number?', 0);
        this.numberTwo = +prompt('Second Number?', 0);
    },
    sum(){
        return this.numberOne + this.numberTwo;
    },
    mul(){
        return this.numberOne * this.numberTwo;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
}