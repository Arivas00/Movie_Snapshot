// Javascript
$(document).ready(function () {

    var key = "searchBar"

    //Search button on click event listener
    $("#searchBtn").on('click', function (e) {
        e.preventDefault()
        var searchValue = $("#searchBar").val()
        localStorage.setItem(key, searchValue)
        
        window.location.href = "results.html"

    })
});

