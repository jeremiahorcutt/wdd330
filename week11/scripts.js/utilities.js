//gets the id of the selected element if it has one
function getBlockId(e){
    const elementNumber = e.target.dataset.id;
    if(elementNumber){
    return elementNumber;
    }
}

//checks the display divs to verify that they are empty
function elementCheck(){
  let element1 = document.getElementById("element1Sym");
  let element2 = document.getElementById("element2Sym");
  if (element1 && element2){
      return 2;
  }else if(!element1 && element2){
      return 0;
  }else if(element1 && !element2){
      return 1;
  }
};

//creates the display for the display div elements
function elementDisplay(data, num, blockId){
  let newElement = document.getElementById('elementDiv' + num);
  let array = data['elements'];
  let symbol = document.createElement('h4');
  symbol.setAttribute("id", "element" + num + "Sym");
  symbol.innerHTML = array.symbol[blockId];
  let name = document.createElement('h5');
  name.innerHTML = array.name[blockId];
  let number = document.createElement('p');
  number.innerHTML = array.number[blockId];
  let weight = document.createElement('p');
  weight.innerHTML = array.weight[blockId];
  let discovered = document.createElement('p');
  discovered.innerHTML = array.discovered_by[blockId];
  newElement.appendChildren(symbol,name,number,weight,discovered);
  if(array.metallic_state == "metal"){
     newElement.style.backgroundImage = "linear-gradient(180deg, rgba(106,4,15,1.00) 0%, rgba(55,6,23,1.00) 100%)";
  }else if(array.metallic_state == "nonmetal"){
    newElement.style.backgroundImage = "linear-gradient(180deg, rgba(220,47,2,1.00) 0%, rgba(208,0,0,1.00) 100%)";
  }else if(array.metallic_state == "metalloid"){
    newElement.style.backgroundImage = "linear-gradient(180deg, rgba(255,186,8,1.00) 0%, rgba(250,163,7,1.00) 100%)";
  }
};

//primary function that calls secondary functions and orginizes the data
function elementSelect(data){
    let blockId = getBlockId();
    let elementCheck = elementCheck();
    if (elementCheck == 0){
     elementDisplay(data, 1, blockId);
    }else if(elementCheck == 1){
     elementDisplay(data, 2, blockId);
    }else if (elementCheck == 2){
     alert('Please remove one of the elements from the display.')
    };
}

export default{
    elementSelect
};