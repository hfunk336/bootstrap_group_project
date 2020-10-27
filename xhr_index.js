///// API Request /////
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
    
        ////// USING API INFO /////
        // selects a random pokemon using a random number 0-1163 since there are 1164 objects in the array of data from the api
        var randMon = info[getRandInt(1163)];
        var battleMon1 = info[getRandInt(1163)];
        var battleMon2 = info[getRandInt(1163)];;
        // console.log(randMon);
        // names a random pokemon and its form randomly in the first card on the page
        document.querySelector("#randMon").innerHTML = randMon.pokemon_name;
        document.querySelector("#formMon").innerHTML = "Form is: " + randMon.form;
        // names two random pokemon and compares who has the higher attack
        document.querySelector("#compMon").innerHTML = "Who has higher attack? " + battleMon1.pokemon_name + " or " + battleMon2.pokemon_name;
        // runs a function that compares the base_attack from the two battleMon vars and displays who had the higher atk
        document.querySelector("#winnerMon").innerHTML = "The winner is: " + battle();


        //////// function to see who has higher attack ///////
        function battle(){
            if(battleMon1.base_attack > battleMon2.base_attack){
                var winner = battleMon1.pokemon_name;
            }else if (battleMon2.base_attack > battleMon1.base_attack){
                var winner = battleMon2.pokemon_name
            }else if (battleMon1.base_attack = battleMon2.base_attack){
                var winner = "They are tied"
            }
            return winner;
        }

    }
});
       
xhr.open("GET", "https://rapidapi.p.rapidapi.com/pokemon_stats.json");
// request headers
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6e92b71d8emsha940bdb9ac1852ap13256fjsnf23466aa721f");
        
xhr.send(data);

//////// function for random mon ///////
function getRandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
