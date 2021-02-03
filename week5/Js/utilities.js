function taskNum(){
   
};

function hideDisplay(list){
  document.getElementById(list).style.display = "none";
};

function showDisplay(list){
  document.getElementById(list).style.display = "flex";
};

function completeItem(content){
  document.getElementById(content).style.textDecoration = line-through;

};

export default{
  taskNum,
  hideDisplay,
  showDisplay,
  completeItem
};
