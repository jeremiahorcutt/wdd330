var array = [1, 3, 5, 7, 11, 13, 17, 19]

array.forEach(function(arrayItem){
    let total = arrayItem * 10;
    console.log(total);
});

array.forEach(twenty);

function twenty(arrayItem){
    let total = arrayItem * 20;
    console.log("outcome 20: " + total);
}

let number = 0;

/* do{
    number = Math.round(Math.random() * 10);
    console.log(number);
}
while (number < 70 && number > 50); */