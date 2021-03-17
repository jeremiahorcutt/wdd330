function saveElements(element){
    const elementList = getElementList();
    elementList.push(element);
    localStorage.setItem('elementList', JSON.stringify(elementList));
  };
  
  function deleteElement(id){
      const elementList = getElementList();
      const updatedElements = elementList.filter( element => element.dataid != id)
      localStorage.setItem('elementList', JSON.stringify(updatedElements));
  };
  
  function getElementList(){
      const elementString = localStorage.getItem('elementList');
      let elementList = [];
  
      if (elementString) {
        elementList = JSON.parse(elementString);
      }
      return elementList;
  }
  
  export default{
    saveElements,
    getElementList,
    deleteElement
  }