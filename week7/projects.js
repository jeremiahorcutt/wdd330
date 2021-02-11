//Flatten
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays){
console.log(arrays.reduce((first, second) => first.concat(second), []));
};
flatten(arrays);

//Your Own Loop
function loop(value, test, update, show){
  for(let i = value; test(i); i = update(i)){
     show(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);