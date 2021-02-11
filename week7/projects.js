//Flatten
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log('Flatten')
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
console.log('Your Own Loop')
loop(3, n => n > 0, n => n - 1, console.log);

//Everything
function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

console.log('Everything')
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//Marvel Mashup

let requestURL = 'https://jeremiahorcutt.github.io/wdd330/text.JSON';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

window.onload = function() {
 let heroes = request.response;
 buildTable(heroes);
};

function buildTable(heroes){
  let array = heroes['heroes'];
  console.log(array);
  for(let i = 0; i < array.length; i++){
    let tr = document.createElement('tr');
    let alias = document.createElement("td");
    let realName = document.createElement("td");
    let bio = document.createElement("td");

    alias.textContent = array[i].name;
    realName.textContent = array[i].realname;
    bio.textContent = array[i].bio;
     tr.appendChild(alias);
     tr.appendChild(realName);
     tr.appendChild(bio);
     let table = document.querySelector('#marvel');
     table.appendChild(tr);
  }
}
