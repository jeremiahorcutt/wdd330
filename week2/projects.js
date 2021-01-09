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
}