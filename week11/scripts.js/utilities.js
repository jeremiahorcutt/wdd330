
//gets the id of the selected element if it has one
function getBlockId(e){
  const elementNumber = e.target.dataset.id;
  if(elementNumber){
    console.log(elementNumber);
  return elementNumber;
  
  }
}

//checks the display divs to verify that they are empty
function elementCheck(){
  let element1 = document.getElementById("element1Sym");
  let element2 = document.getElementById("element2Sym");
  if(element1 && element2){
    console.log(2)
    return 2;
  }else if(!element1 && element2){
    console.log(0)
      return 0;
  }else if(element1 && !element2){
    console.log(1)
      return 1;
  }else if(!element1 && !element2){
    console.log(0);
    return 0;
  };
};

export default{
    getBlockId,
    elementCheck
};