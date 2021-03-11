

window.onload = function() {
    createTable();
  };


 function createTable(){
    for(let i = 0; i < 126; i++){
        let number = i + 1;
        let li = document.createElement("li");

        if(number < 2){
            li.setAttribute("data-id", number);
            li.setAttribute("id", "element" + number);
        }else if (number >= 18 && number <= 20){
            let numberMinus = number - 16;
            li.setAttribute("data-id", numberMinus);
            li.setAttribute("id", "element" + numberMinus);
        }else if (number >= 31 && number <= 38){
            let numberMinus2 = number - 26;
            li.setAttribute("data-id", numberMinus2);
            li.setAttribute("id", "element" + numberMinus2);
        }else if (number >= 49 && number <= 93){
            let numberMinus3 = number - 36;
            li.setAttribute("data-id", numberMinus3);
            li.setAttribute("id", "element" + numberMinus3);
        }else if (number >= 94 && number <= 111){
            let numberMinus4 = number - 22;
            li.setAttribute("data-id", numberMinus4);
            li.setAttribute("id", "element" + numberMinus4);
        }else if(number >= 112 && number <= 126){
            let numberMinus5 = number - 8;
            li.setAttribute("data-id", numberMinus5);
            li.setAttribute("id", "element" + numberMinus5);
        }else{
            li.setAttribute("class", "emptBlock");
        }; 
    }
} 

