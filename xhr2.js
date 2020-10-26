var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

function getRandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        // console.log(this.responseText);
        const info = JSON.parse(this.responseText);
        console.log(info);

        ///// USING API INFO /////
        for(var i = 0; i <= 51; i++){
            document.querySelectorAll("#item")[i].onclick = function(){
                var randmon = info[getRandInt(1163)]
                document.getElementById("i1").innerHTML= randmon.pokemon_id;
                document.getElementById("d1").innerHTML= randmon.pokemon_name;
            }
        }
    }
});




xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "dd6e9b9299msha11da738e3ac895p18fe4ejsne01d83563c9b");

xhr.send(data);

