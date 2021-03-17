
//checks the display divs to verify that they are empty
function elementCheck(){
  let element1 = document.querySelector("#elementDiv1 div");
  let element2 = document.querySelector("#elementDiv2 div");
  if(element1 && element2){
    return 2;
  }else if(!element1 && element2){
      return 0;
  }else if(element1 && !element2){
      return 1;
  }else if(!element1 && !element2){
    return 0;
  };
};

export default{
    elementCheck,
};