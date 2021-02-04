function taskNum(list){
  let counter = 0;
  for(let i = 0; i < list.length; i++){
    if(list == false){
     counter += 1;
   };
  };
   document.getElementById('counter_span').innerHTML = counter;
};

function hideDisplay(list){
  document.getElementById(list).style.display = "none";
};

function showDisplay(list){
  document.getElementById(list).style.display = "flex";
};

function completeItem(content){
  document.getElementById(content).style.textDecorationLine = "line-through";

};

export default{
  taskNum,
  hideDisplay,
  showDisplay,
  completeItem
};
