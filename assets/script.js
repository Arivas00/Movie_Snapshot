// Javascript


//OMDB key
var omdbData = "http://www.omdbapi.com/?apikey=7af33c3a&"
var omdbPoster = "http://img.omdbapi.com/?apikey=7af33c3a&"
var search = "s=" 



var searchValue = $("#searchBar").val()

$("#searchBtn").on('click', function (e) {
    e.preventDefault()
    window.location.href = "results.html"
    fetch (omdbData + search + searchValue)
})