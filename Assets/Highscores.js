var goBackButton = document.querySelector("#goBack");
var clearStorage = document.querySelector("#clearScores");
var info = JSON.parse(localStorage.getItem('score'));
var position = 0;
console.log(info);

var append = document.querySelector("body > div.card > div > p");
console.log(append);
// append.textContent = `initials: ${info[0].initials} score: ${info[0].score}`;

for (var i = 0; i < info.length; i++) {
    var div = document.createElement('div');
    div.textContent = `${[i+1]} ${info[i].initials} - ${info[i].score}`;
    append.appendChild(div);
    console.log(info[i]);
}

function goBack() {
    window.location = "./index.html";
}

function clearScores() {
    window.location = "./index.html";
    localStorage.clear();
    console.log('cleared');    
}

goBackButton.addEventListener("click", goBack);
clearStorage.addEventListener("click", clearScores);
