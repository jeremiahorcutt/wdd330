function looping(){
let loop = "";
for(let i = 0; i < 8; i++){
loop += "#"
console.log(loop)
}
};

function fizzbuzz(){
    for(let j = 0; j < 101; j++){
    if(j % 3 == 0){
        if(j % 5 == 0){
            console.log("FizzBuzz")
        }
        else{
        console.log("Fizz")
        }
    }
    else if(j % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(j)
    }
    }
};

function minimum(){
   let a = document.getElementById("a").value;
   let b = document.getElementById("b").value;
   console.log(Math.min(a, b));
};
function countBRun(){
let bstring = document.getElementById("c").value;
countBs(bstring);
}
function countBs(c){
   let counter = 0;
   for(let k = 0; k < c.length; k++){
     if(c[k] == "B"){
         counter += 1;
     }
     else{
       counter += 0;
     }
   }
   console.log(counter);
}
function countCharRun(){
let string = document.getElementById("d").value;
let char = document.getElementById("e").value;
countChar(string, char);
}
function countChar(d, e){
    let counter = 0;
    for(let l = 0; l < d.length; l++){
        if(d[l] == e){
           counter += 1;
        }
        else{
            counter += 0;
        }
    }
    console.log(counter);
};

function rangeRun(){
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    range(start, end);
};
function range(st, en){
    var arr = [];
    for(let m = st; m <= en; m++){
        console.log(m)
        arr.push(m);
    }
    console.log(arr);
};

function reverseArrayRun(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;
    numArr = [num1, num2, num3];
    reverseArray(numArr);
    reverseArrayInPlace(numArr);
};
function reverseArray(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
       newArr.unshift(arr[i]);
  }
  console.log("Reverse Array");
  console.log(newArr);
};
function reverseArrayInPlace(arr){
    let a = 0;
    let b = 0;
   for(let i = 0; i < Math.floor(arr.length / 2); i++){
       a = arr[i];
       b = arr[arr.length - 1 - i];
       arr.splice(i, 1, b);
       arr.splice(arr.length-1-i, 1, a);
   }
   console.log("Reverse Array in place");
   console.log(arr);
};