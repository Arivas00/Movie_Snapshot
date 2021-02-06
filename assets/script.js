// Javascript
<<<<<<< HEAD
=======
$(document).ready(function () {

    //OMDB key
    var omdbData = "http://www.omdbapi.com/?apikey=7af33c3a&"
    var search = "t="
    var key = "searchBar"

    //Search button on click event listener
    $("#searchBtn").on('click', function (e) {
        e.preventDefault()
        var searchValue = $("#searchBar").val()
        localStorage.setItem(key, searchValue)
        var movie = localStorage.getItem(key)
        console.log(omdbData + search + movie)
        var OMDBFetch = function () {
            fetch(omdbData + search + movie)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    window.location.href = "results.html"
                    //$("#movie-search").text(data.Title)
                    //$("#OMDB-results").text(data.Year, data.Director, data.Actors, data.Genre, data.Ratings[1].Source, data.Ratings[1].Value)
                    //$("#poster").attr("src", data.Poster)
                })

        }
        OMDBFetch()

    })
    //you tube API

    //media box JS

    //$('.materialboxed').materialbox();
});

>>>>>>> main
