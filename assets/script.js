// Javascript
<<<<<<< HEAD
=======
$(document).ready(function () {

//OMDB key
var omdbData = "http://www.omdbapi.com/?apikey=7af33c3a&"
var omdbPoster = "http://img.omdbapi.com/?apikey=7af33c3a&"
var search = "t="


var key = $("searchBar")
var searchValue = $("#searchBar").val()

var OMDBFetch = function () {
    fetch(omdbData + search + key)
        .then(function (response) {
            return response.json();
})
        .then(function (data) {
            console.log(data);
            window.location.href = "results.html"
        })
}

//Search button on click event listener
$("#searchBtn").on('click', function (e) {
    e.preventDefault()
    localStorage.setItem(key, searchValue)
    localStorage.getItem(key)

    // fetch(omdbData + search + key)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //         window.location.href = "results.html"
    //     })
    
        console.log(omdbData + search + searchValue)
         OMDBFetch()
             .then(window.location.href = "results.html")

})
//you tube API

//media box JS

    //$('.materialboxed').materialbox();
});

>>>>>>> main
