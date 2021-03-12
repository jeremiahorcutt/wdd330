
let requestURL = 'https://jeremiahorcutt.github.io/wdd330/week11/elements.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

window.onload = function() {
    //loadDoc();
    let data = request.response;
    createTable();
    groupRows();
    groupColumns();
    populateTable(data);
  };


 function createTable(){
    for(let i = 1; i < 127; i++){
        let li = document.createElement("li");
        if(i < 2){
            li.setAttribute("data-id", i);
            li.setAttribute("id", "element" + i);
        }else if (i >= 18 && i <= 20){
            let iMinus = i - 16;
            li.setAttribute("data-id", iMinus);
            li.setAttribute("id", "element" + i);
        }else if (i >= 31 && i <= 38){
            let iMinus2 = i - 26;
            li.setAttribute("data-id", iMinus2);
            li.setAttribute("id", "element" + i);
        }else if (i >= 49 && i <= 93){
            let iMinus3 = i - 36;
            li.setAttribute("data-id", iMinus3);
            li.setAttribute("id", "element" + i);
        }else if (i >= 94 && i <= 111){
            let iMinus4 = i - 22;
            li.setAttribute("data-id", iMinus4);
            li.setAttribute("id", "element" + i);
        }else if(i >= 112 && i <= 126){
            let iMinus5 = i - 8;
            li.setAttribute("data-id", iMinus5);
            li.setAttribute("id", "element" + i);
        }else if (i == 5){
            li.innerText = "Metal";
            li.setAttribute("class", "emptyBlock");
            li.setAttribute("id", "element" + i);
        }else if (i == 7){
            li.innerText = "Nonmetal";
            li.setAttribute("class", "emptyBlock");
            li.setAttribute("id", "element" + i);
        }else if (i == 9){
            li.innerText = "Metalloid";
            li.setAttribute("class", "emptyBlock");
            li.setAttribute("id", "element" + i);
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

function populateTable(data){
    let array = data['elements'];
    for(let i = 0; i < array.length; i++){
    let id = i + 1;
    let block = document.getElementById("element" + id);
    let blockId = block.getAttribute("data-id");
    if(blockId == array[i].number){
       let h1 = document.createElement("h1");
       let p = document.createElement("p");
       h1.classList.add("elementH1");
       p.classList.add("elementName");
       h1.innerHTML = array[i].symbol;
       p.innerHTML = array[i].name;
       block.appendChild(h1);
    }
    }
};