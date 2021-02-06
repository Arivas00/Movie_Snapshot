$(document).ready(function () {

    var youtubeAPIkey = "AIzaSyBLBL6GzSvQz5PJ_gEJ9zUR0qWMn-XiIgM"

    var omdbObject = JSON.parse(localStorage.getItem("results"));
    $("#movie-search").text(omdbObject.Title)
    $("#year").text("Year: " + omdbObject.Year) 
    $("#director").text("Director: " + omdbObject.Director)
    $("#actors").text("Actors: " +omdbObject.Actors)
    $("#genre").text("Genre: " + omdbObject.Genre)
    $("#score").text("Rotten Tomatoes: " + omdbObject.Ratings[1].Value)
    $("#poster").attr("src", omdbObject.Poster)
    $("#ytplayer").attr("src", )

    
    fetch(omdbData + search + youtubeAPIkey)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    localStorage.setItem("results", JSON.stringify(data))
                    window.location.href = "results.html"
                })

});