// Retry exercise

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64


//OOP Practice
//Object literal
 const circle = {
   radius: 1,
   location:{
     x: 1,
     y: 2
   },
   draw: function(){
     console.log('draw');
   }
 };
// factory function
function createCircle(radius){
  return {
    radius,
    draw: function(){
      console.log('draw');
    }
  };
}

const circle0 = createCircle(1);
 circle.draw();

 //Counstructor function
 function Circle(radius){
   this.radius = radius;
   this.draw = function(){
     console.log('d');
   }
 }
const another = new Circle(1);

 Circle.name;
 Circle.length; //returns number of arguments
 Circle.constructor;
 const Circle1 = new Function('radius', `
 this.radius = radius;
 this.draw = function(){
   console.log('d');
 }
 `);

 const circle1 = new Circle1(1);
 Circle.call({}, 1);
 Circle.apply({}, [1]);

 let x = 10;
 let y = x;

 x = 20;// y = 10

 let x = {value: 10};
 let y = x;

 x.value = 20;//y = 20

 let number = 10
 function increase(number){
   number++;
 }
 increase(number);
 console.log(number);
//returns10


 let object = {value: 10}
 function increase1(object){
  object++;
}

increase1(object);
console.log(object);
//returns 11


 function Circle2(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('d');
  }
}
const circle2 = new Circle2(10);
circle2.location = { x: 1 };

delete circle2.location;

//iterating the properties of an object

function Circle3(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('d');
  }
}
const circle3 = new Circle3(10);

for(let key in circle){
  console.log(key, circle.key);
}