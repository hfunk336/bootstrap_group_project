///// API REQUEST /////
const data = null;

// makes a new request
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        // console.log(this.responseText);
        // makes the data from api more legible in the console
        const info = JSON.parse(this.responseText);
        console.log(info);

        ///// USING API INFO /////
        // var for the search button on the page
        var searchBtn = document.querySelector("#searchBtn");

        // adds an event for the search button when it is clicked
        searchBtn.onclick = function(){
            // a variable that stores the value of what the user inputed into the search bar
            const userInput = document.getElementById("search").value;
            // console.log(userInput);

            // runs a for loop that selects each cell in the match history table one by one and fills it in with data
            // i <= 9 since there are 10 rows to fill in
            for(var i = 0; i <= 9; i++){
                document.querySelectorAll(".placement")[i].innerHTML = info[userInput].pokemon_name;
                // info[userInput] uses the number the user put into the search bar to select the pokemon from the array of data
                document.querySelectorAll(".rank")[i].innerHTML = info[userInput].base_attack;
                document.querySelectorAll(".roster")[i].innerHTML = info[userInput].form;
            }
	    }
    }
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/pokemon_stats.json");
// request headers
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6e92b71d8emsha940bdb9ac1852ap13256fjsnf23466aa721f");

xhr.send(data);
