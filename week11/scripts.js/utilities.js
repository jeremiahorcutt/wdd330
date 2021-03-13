
function elementSelect(e){
    const elementNumber = e.target.dataset.id;
    if(elementNumber){
    return elementNumber;
    }
}

export default{
    elementSelect
};