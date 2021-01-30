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

const circle = createCircle(1);
 circle.draw();

 //Counstructor function
 function Circle(radius){
   this.radius = radius;
   this.draw = function(){
     console.log('d');
   }
 }
const another = new Circle(1);
