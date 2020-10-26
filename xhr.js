///// API REQUEST /////
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        // console.log(this.responseText);
        const info = JSON.parse(this.responseText);
        console.log(info);

        ///// USING API INFO /////
        var searchBtn = document.querySelector("#searchBtn");

        searchBtn.onclick = function(){
            const userInput = document.getElementById("search").value;
            console.log(userInput);

            for(var i = 0; i <= 9; i++){
                document.querySelectorAll(".placement")[i].innerHTML = info[userInput].pokemon_name;
                document.querySelectorAll(".rank")[i].innerHTML = info[userInput].base_attack;
                document.querySelectorAll(".roster")[i].innerHTML = info[userInput].form;
            }
	    }
    }
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6e92b71d8emsha940bdb9ac1852ap13256fjsnf23466aa721f");

xhr.send(data);

