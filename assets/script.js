// Javascript
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


        var OMDBFetch = function () {
            fetch(omdbData + search + movie)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    localStorage.setItem("results", JSON.stringify(data))
                    window.location.href = "results.html"
                })

        }
        OMDBFetch()

    })
    //you tube API

    //media box JS

    //$('.materialboxed').materialbox();
});

