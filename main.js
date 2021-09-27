"use strict"
console.log('veikia');
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("https://egidijusadzgauskas.github.io/webpage/portfolio.json", function(text){
    var data = JSON.parse(text);
    
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        console.log(data[i].description);
        console.log(data[i].link);

      }
    
});

