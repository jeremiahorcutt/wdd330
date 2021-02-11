
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays){
console.log(arrays.reduce((old, add) => old.concat(add), []));

}
flatten(arrays);
// → [1, 2, 3, 4, 5, 6]