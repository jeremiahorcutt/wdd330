
//checks the display divs to verify that they are empty
function elementCheck(){
  let element1 = document.querySelector("#elementDiv1 div");
  let element2 = document.getElementById("#elementDiv2 div");
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
    elementCheck,
};