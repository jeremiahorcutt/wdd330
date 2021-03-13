
function elementSelect(e){
    const elementNumber = e.target.dataset.id;
    if(elementNumber){
        console.log(elementNumber);
    }
}

export default{
    elementSelect
};