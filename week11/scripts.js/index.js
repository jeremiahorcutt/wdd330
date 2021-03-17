import utils from './utilities.js';
import ls from './ls.js';
//JSON fetch
/* const requestURL = 'https://jeremiahorcutt.github.io/wdd330/week11/elements.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    populateTable(jsonObject);
      })
  .catch((err) => {
    console.error(err);
      }); */

async function getData(){
  let url = 'https://jeremiahorcutt.github.io/wdd330/week11/elements.json';
  try {
    let res = await fetch(url);
    return await res.json();
} catch (error) {
    console.log(error);
}
}

const table = document.getElementById('periodicContainer');
table.addEventListener('click', newElement);

window.onload = function() {
    createTable();
    groupRows();
    groupColumns();
    loadElements();
    populateTable();
  };
 
  //window.addEventListener('touchend', utils.getBlockId(data));
//function for creating the li elements of the periodic table and assigning them identifiers
 function createTable(){
    for(let i = 1; i < 127; i++){
        let li = document.createElement("li");
        if(i < 2){
            li.setAttribute("data-id", i);
            li.setAttribute("id", "element" + i);
            li.setAttribute("class", "block");
        }else if (i >= 18 && i <= 20){
            let iMinus = i - 16;
            li.setAttribute("data-id", iMinus);
            li.setAttribute("id", "element" + i);
            li.setAttribute("class", "block");
        }else if (i >= 31 && i <= 38){
            let iMinus2 = i - 26;
            li.setAttribute("data-id", iMinus2);
            li.setAttribute("id", "element" + i);
            li.setAttribute("class", "block");
        }else if (i >= 49 && i <= 93){
            let iMinus3 = i - 36;
            li.setAttribute("data-id", iMinus3);
            li.setAttribute("id", "element" + i);
            li.setAttribute("class", "block");
        }else if (i >= 94 && i <= 111){
            let iMinus4 = i - 22;
            li.setAttribute("data-id", iMinus4);
            li.setAttribute("id", "element" + i);
            li.setAttribute("class", "block");
        }else if(i >= 112 && i <= 126){
            let iMinus5 = i - 8;
            li.setAttribute("data-id", iMinus5);
            li.setAttribute("id", "element" + i);
            li.setAttribute("class", "block");
        }else if (i == 5){//this block sets an id to the metal guide block
            let h3 = document.createElement('h3');
            h3.innerText = "Metal";
            li.setAttribute("id", "element" + i);
            li.appendChild(h3);
        }else if (i == 7){//this block sets an id to the nonmetal guide block
            let h3 = document.createElement('h3');
            h3.innerText = "Nonmental";
            li.setAttribute("class", "emptyBlock");
            li.setAttribute("id", "element" + i);
            li.appendChild(h3);
        }else if (i == 9){//this block sets an id to the metalloid guide block
            let h3 = document.createElement('h3');
            h3.innerText = "Metalloid";
            li.setAttribute("class", "emptyBlock");
            li.setAttribute("id", "element" + i);
            li.appendChild(h3);
        }else{
            li.setAttribute("class", "emptyBlock");
            li.setAttribute("id", "element" + i);
        };
        let ul = document.querySelector("#periodicGrid");
        ul.appendChild(li); 
    }
} 

//function for sperating the li's into rows for easier css grid mapping
function groupRows(){
  for(let i = 1; i < 127; i++){
    let element = document.getElementById('element'+ i); 
    if(i <= 18){
         element.classList.add("row1");
      }else if(i >= 19 && i <= 36){
        element.classList.add("row2");
      }else if(i >= 37 && i <= 54){
        element.classList.add("row3");
      }else if(i >= 55 && i <= 72){ 
        element.classList.add("row4");
      }else if(i >= 73 && i <= 90){
        element.classList.add("row5");
      }else if(i >= 91 && i <= 108){
        element.classList.add("row6");
      }else if(i >= 109 && i <= 126){
        element.classList.add("row7");
      }
}
}

//function for sperating the li's into columns for easier css grid mapping
function groupColumns(){
let x1 = 1;
let x2 = 19;
let x3 = 37;
let x4 = 55;
let x5 = 73;
let x6 = 91;
let x7 = 109;
for(let i = 1; i <= 18; i++){
      let block1  = document.getElementById("element" + x1);
      block1.classList.add("column" + i);
      let block2  = document.getElementById("element" + x2);
      block2.classList.add("column" + i);
      let block3  = document.getElementById("element" + x3);
      block3.classList.add("column" + i);
      let block4  = document.getElementById("element" + x4);
      block4.classList.add("column" + i);
      let block5  = document.getElementById("element" + x5);
      block5.classList.add("column" + i);
      let block6  = document.getElementById("element" + x6);
      block6.classList.add("column" + i);
      let block7 = document.getElementById("element" + x7);
      block7.classList.add("column" + i);
      x1 += 1;
      x2 += 1;
      x3 += 1;
      x4 += 1;
      x5 += 1;
      x6 += 1;
      x7 += 1;
}
}

//takes information from the JSON file and populates the periodic table
async function populateTable(){
    let data = await getData();
    let array = data['elements'];
    for(let i = 0; i < 126; i++){
      let id = i + 1;
      let block = document.getElementById("element" + id);
      let blockId = block.getAttribute("data-id");
    for(let j = 0; j < array.length; j++){
      if(blockId == array[j].number){
       let h2 = document.createElement("h2");
       let p = document.createElement("p");
       h2.classList.add("elementH2");
       h2.setAttribute('data-id', blockId);
       p.classList.add("elementName");
       p.setAttribute('data-id', blockId);
       h2.innerHTML = array[j].symbol;
       p.innerHTML = array[j].name;
       block.appendChild(h2);
       block.appendChild(p);
      }
    }
    }
};

function newElement(e){
  const elementNumber = e.target.dataset.id;
  const element = createElement(elementNumber);
  const elementDiv = elementDisplay(element);
  elementSelect(elementDiv, elementNumber);
  ls.saveElements(element);
}

function createElement(dataId){
  const newElement = {id: Date.now(), dataid: dataId - 1};
  return newElement;
}

//creates the display for the display div elements
async function elementDisplay(el){
  let newElement = document.createElement("div");
  let data = await getData();
  let array = data['elements'];
  let symbol = document.createElement('h4');
  symbol.innerHTML = array[el.dataid].symbol;
  let name = document.createElement('h5');
  name.innerHTML = array[el.dataid].name;
  let number = document.createElement('p');
  number.innerHTML = array[el.dataid].number;
  number.setAttribute("class", "elnumber");
  number.setAttribute('data-id', el.dataid);
  let weight = document.createElement('p');
  weight.innerHTML = `Atomic Mass: ${array[el.dataid].atomic_mass}`;
  let boil = document.createElement('p');
  boil.innerHTML = `Boiling Point: ${array[el.dataid].boil}`;
  let melt = document.createElement('p');
  melt.innerHTML = `Melting Point: ${array[el.dataid].melt}`;
  let deleteBtn = document.createElement('input');
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("class", `deleteBtn`);
  deleteBtn.setAttribute("value", "X");
  deleteBtn.onclick = removeElement;
  newElement.append(symbol,name,number,weight,boil,melt,deleteBtn);
  if(array[el.dataid].metallic_state == "metal"){
     newElement.style.backgroundImage = "linear-gradient(180deg, rgba(106,4,15,1.00) 0%, rgba(55,6,23,1.00) 100%)";
  }else if(array[el.dataid].metallic_state == "nonmetal"){
    newElement.style.backgroundImage = "linear-gradient(180deg, rgba(220,47,2,1.00) 0%, rgba(208,0,0,1.00) 100%)";
  }else if(array[el.dataid].metallic_state == "metalloid"){
    newElement.style.backgroundImage = "linear-gradient(180deg, rgba(255,186,8,1.00) 0%, rgba(250,163,7,1.00) 100%)";
  }
  return newElement;
};

//primary function that calls secondary functions and orginizes the data
async function elementSelect(elem, dataId){
    let element = await elem;
    let elementCh = utils.elementCheck();
    const container1 = document.getElementById('elementDiv1');
    const container2 = document.getElementById('elementDiv2');
    if (elementCh == 0){
       container1.appendChild(element);
       bondDisplay(dataId);
    }else if(elementCh == 1){
       container2.appendChild(element);
       bondDisplay(dataId);
    }else if (elementCh == 2){
     alert('Please remove one of the elements from the display.')
    };
}

//removes elements from the display divs
function removeElement(newElement){
    console.log(newElement);
    newElement.remove();
};

function loadElements(){
  const elementList = ls.getElementList();
  elementList.forEach(element => {
    const el = createElementDiv(element);
    
  })
}

function createElementDiv(element){
    const div = document.createElement('div');
    div.setAttribute('id', element.id + 'div')
};

async function bondDisplay(dataid){
    let elementCh = utils.elementCheck();
    let data = await getData();
    let array = data['elements'];
    if (elementCh == 2){
      let element1 = document.querySelector('#elementDiv1 div p.elnumber');
      let idStr = element1.getAttribute("data-id");
      let idInt = parseInt(idStr);
      let element2 = document.querySelector('#elementDiv2 div p.elnumber');
      let id2Str = element2.getAttribute('data-id');
      let id2Int = parseInt(id2Str);
      let type1 = array[idInt].metallic_state;
      let type2 = array[id2Int].metallic_state;
      let bond = document.createElement("h4");
       if (type1  == "Metal"){
          if(type2 == "Metal"){
            bond.innerHTML = "Metallic Bond";
          }else if(type2 == "Nonmetal"){
            bond.innerHTML = "Ionic Bond";
          }else if(type2 == "Metalloid"){
            bond.innerHTML = "Metallic Bond";
          }
      }else if(type1 == "Nonmental"){
          if(type2 == "Metal"){
            bond.innerHTML = "Metalloid";
          }else if(type2 == "Nonmetal"){
            bond.innerHTML = "Covalent Bond";
          }else if(type2 == "Metalloid"){
            bond.innerHTML = "Covalent Bond";
        } 
      }else if(type1 == "Metalloid"){
          if(type2 == "Metal"){
            bond.innerHTML = "Metallic Bond";
          }else if(type2 == "Nonmetal"){
            bond.innerHTML = "Covalent Bond";
          }else if(type2 == "Metalloid"){
            bond.innerHTML = "Metallic Bond";
        }
      }
      let bondDiv = document.getElementById("bondDiv");
      bondDiv.appendChild(bond);
    } 
}