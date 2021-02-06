$(document).ready(function () {

    var omdbObject = JSON.parse(localStorage.getItem("results"));
    $("#movie-search").text(omdbObject.Title)
    $("#year").text("Year: " + omdbObject.Year) 
    $("#director").text("Director: " + omdbObject.Director)
    $("#actors").text("Actors: " +omdbObject.Actors)
    $("#genre").text("Genre: " + omdbObject.Genre)
    $("#score").text("Rotten Tomatoes: " + omdbObject.Ratings[1].Value)
    $("#poster").attr("src", omdbObject.Poster)

    console.log(omdbObject)
});