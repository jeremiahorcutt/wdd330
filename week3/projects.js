//this calculator
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
//callback calculator
function call_back(){
    calculator(add);
    calculator(sub);
    calculator(mul);
}
function get_number1(){
   let a = parseFloat(document.getElementById("number_1").value);
   return a;
}
function get_number2(){
    let b = parseFloat(document.getElementById("number_2").value);
    return b;
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
     const results = fun(get_number1(), get_number2());
     console.log(results);
 }

 //14.1 Build a Table
 function tablebuilder(){
 const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  let table = document.createElement('table');
  let tr1 = document.createElement('tr');
  let thname = document.createElement('th');
  let thheight = document.createElement('th');
  let thplace = document.createElement('th');
  thname.textContent = 'name';
  thheight.textContent = 'height';
  thplace.textContent = 'place';
  table.appendChild(tr1);
  tr1.appendChild(thname);
  tr1.appendChild(thheight);
  tr1.appendChild(thplace);
  for(let i = 0; i < MOUNTAINS.length; i++){
    let newtr = document.createElement('tr');
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');
    let col3 = document.createElement('td');
    col1.textContent = MOUNTAINS[i].name;
    col2.textContent = MOUNTAINS[i].height;
    col3.textContent = MOUNTAINS[i].place;
    newtr.appendChild(col1);
    newtr.appendChild(col2);
    newtr.appendChild(col3);
    table.appendChild(newtr);
  };
  let print = document.getElementById('mountains');
  print.appendChild(table);
 };