function taskNum(){
   
};

function hideDisplay(list){
  console.log(list);
  document.getElementById(list).style.display = "none";
};

function showDisplay(list){
  console.log(list);
  document.getElementById(list).style.display = "flex";
};

function completeItem(){

};

export default{
  taskNum,
  hideDisplay,
  showDisplay,
  completeItem
};
