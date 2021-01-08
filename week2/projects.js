function looping(){
let loop = "";
for(let i = 0; i < 8; i++){
loop += "#"
console.log(loop)
}
}

function fizzbuzz(){
    for(let j = 0; j < 101; j++){
    if(j % 3 == 0){
        console.log("Fizz")
    }
    else if(j % 5 == 0){
        console.log("Buzz")
    }
    else if(j % 3 == 0 && j % 5 == 0){
        console.log("FizzBuzz")
    }
    else{
        console.log(j)
    }
    }
}