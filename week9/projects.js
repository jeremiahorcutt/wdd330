let array = [1, 3, 5, 7, 11, 13, 17, 19]
console.log("Foreach loop 1")
array.forEach(function(arrayItem){
    let total = arrayItem * 10;
    console.log(total);
});
console.log(" ")
console.log("Foreach loop 2")
array.forEach(twenty);

function twenty(arrayItem){
    let total = arrayItem * 20;
    console.log("outcome 20: " + total);
}
console.log(" ")
console.log("Do While Loop")
let number = 0;


 do{
    number = Math.round(Math.random() * 10);
    console.log(number);
}
while (number > 5); 
console.log(" ")
console.log("ForIn loop")
for(arr in array){
    console.log(array[arr]);
};
console.log(" ")
console.log("Cookies")
document.cookie = 'name=Batman';
document.cookie = 'city=Gotham';

document.cookie;
const cookies = document.cookie.split("; ");
for (crumb of cookies){
    const [key,value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}

console.log(" ")
console.log("Cookie Removal");
document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';
document.cookie;

const squareElement = document.getElementById('square');
let angle = 0;
setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

const squareElement2 = document.getElementById('square2');
let angle2 = 0;

function rotate() {
    angle2 = (angle2 + 2)%360;
    squareElement2.style.transform = `rotate(${angle2}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

