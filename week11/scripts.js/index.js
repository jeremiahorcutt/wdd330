


/* function createTable(){
    for(let i = 0; i < 126; i++){
        let number = i + 1;
        let li = document.createElement("li");
        let element = "element" + number;
        if(number > 1 && number < 18){
            li.setAttribute("id", element);
        }else{
            li.setAttribute("id", element);
        }; 
    }
} */

fetch("https://periodic-table-of-elements.p.rapidapi.com/elements", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eb6e5ab689mshc4df250f16a2797p141cc9jsnf79302459340",
		"x-rapidapi-host": "periodic-table-of-elements.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});