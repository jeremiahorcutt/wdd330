
function elementSelect(e){
    const elementNumber = e.target.dataset.id;
    if(elementNumber != 'undefined'){
        console.log(elementNumber);
    }
}

export default{
    elementSelect
};