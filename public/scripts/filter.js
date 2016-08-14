var search = document.getElementById('search'),
    champions = document.getElementsByClassName('champion'),
    regex;

search.oninput = function() {
    regex = new RegExp(search.value, "i")
    for (var i = 0; i < champions.length; i++) {
        if (regex.test(champions[i].dataset.champion) == false) {
            champions[i].style.display = "none";
        } else {
            champions[i].style.display = "block";
        }
    }
}