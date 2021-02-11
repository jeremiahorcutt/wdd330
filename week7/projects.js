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
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    buildTable(this);
    }
  };
  xhttp.open("GET", "https://jeremiahorcutt.github.io/wdd330/text.JSON", true);
  xhttp.send();
}

function buildTable(heroes){
  for(let i = 0; i < heroes.length; i++){
    let tr = document.createElement('tr');
    let alias = document.createElement("th");
    let realName = document.createElement("td");
    let bio = document.createElement("td");

    alias.textContent = heroes[i].name;
    realName.textConent = heroes[i].realName;
    bio.textConent = heroes[i].bio;
     tr.append(alias, realName, bio);
     let table = document.querySelector('#marvel');
     table.appendChild(tr);
  }
}
window.onload = function() {
loadDoc();
};