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
   console.log(min(a, b));
};