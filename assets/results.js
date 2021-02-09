$(document).ready(function () {
    //Youtube API key
    //var youtubeAPIkey = "AIzaSyBLBL6GzSvQz5PJ_gEJ9zUR0qWMn-XiIgM"

    //OMDB API key
    var omdbData = "http://www.omdbapi.com/?apikey=7af33c3a&"

    var search = "t="
    var key = "searchBar"
    var movie = localStorage.getItem(key)
    var omdbObject = JSON.parse(localStorage.getItem("results"));

    $("#movie-search").text(omdbObject.Title)
    $("#year").text("Year: " + omdbObject.Year)
    $("#director").text("Director: " + omdbObject.Director)
    $("#actors").text("Actors: " + omdbObject.Actors)
    $("#genre").text("Genre: " + omdbObject.Genre)
    $("#score").text("Rotten Tomatoes: " + omdbObject.Ratings[1].Value)
    $("#poster").attr("src", omdbObject.Poster)
    $("#ytplayer").attr("src",)

    //Youtube API fetch
    // fetch(omdbData + search + youtubeAPIkey)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //         localStorage.setItem("results", JSON.stringify(data))
    //     })

    // OMDB API Fetch
    var OMDBFetch = function () {
        fetch(omdbData + search + movie)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                //console.log(data);
                localStorage.setItem("results", JSON.stringify(data))
            })

    }

    OMDBFetch()

});
