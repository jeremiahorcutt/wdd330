

window.onload = function() {
    createTable();
    groupRows();
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
        }else{
            li.setAttribute("class", "emptBlock");
            li.setAttribute("id", "element" + i);
        };
        let ul = document.querySelector("#periodicGrid");
        ul.appendChild(li); 
    }
} 

function groupRows(){
  for(let i = 1; i < 127; i++){
    let element = document.getElementById('element'+ i); 
    if(i <= 18){
         element.setAttribute("class", "row1");
      }else if(i >= 19 && i <= 36){
        element.setAttribute("class", "row2");
      }else if(i >= 37 && i <= 54){
        element.setAttribute("class", "row3");
      }else if(i >= 55 && i <= 72){ 
        element.setAttribute("class", "row4");
      }else if(i >= 73 && i <= 90){
        element.setAttribute("class", "row5");
      }else if(i >= 91 && i <= 108){
        element.setAttribute("class", "row6");
      }else if(i >= 109 && i <= 126){
        element.setAttribute("class", "row7");
      }
}
} 