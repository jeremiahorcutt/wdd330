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
  try{
      primitiveMultiply(a, b);
  } catch(error){
      primitiveMultiply(a, b);
  }
};

console.log(reliableMultiply(8, 8));
// → 64

//The Locked Box Exercise