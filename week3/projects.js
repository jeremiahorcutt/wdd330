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

function get_number1(){
   let a = parseFloat(document.getElementById("number_1").value);
}
function get_number2(){
    let b = parseFloat(document.getElementById("number_2").value);
 }
 function add(a, b){
     return a + b;
 }
 function sub(a,b){
     return a - b;
 }
 function mul(a, b){
     return a * b;
 }
 function calculator(fun){
     fun(
         get_number1(),
         get_number2()
     );
 }