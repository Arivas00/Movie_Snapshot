$(document).ready(function () {
<<<<<<< HEAD
  //Youtube API key
  //var youtubeAPIkey = "AIzaSyBLBL6GzSvQz5PJ_gEJ9zUR0qWMn-XiIgM"
=======
    //Youtube API key
    var youtubeAPIkey = "key=AIzaSyCMvE-VUEEYNHxbUoztY10VOOcSJYDCG90"
    var trailer = "trailer"
>>>>>>> 446e3447fce45502faf4b230fcf0f3e8a1518630

  //OMDB API key
  var omdbData = "https://www.omdbapi.com/?apikey=7af33c3a&"

  var search = "t="
  var key = "searchBar"
  var movie = localStorage.getItem(key)

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
              var omdbObject = JSON.parse(localStorage.getItem("results"));

              $("#movie-search").text(omdbObject.Title)
              $("#year").text("Year: " + omdbObject.Year)
              $("#director").text("Director: " + omdbObject.Director)
              $("#actors").text("Actors: " + omdbObject.Actors)
              $("#genre").text("Genre: " + omdbObject.Genre)
              $("#score").text("Rotten Tomatoes: " + omdbObject.Ratings[1].Value)
              $("#poster").attr("src", omdbObject.Poster)
          })
  }

<<<<<<< HEAD
  OMDBFetch()
  var youtube = function () {
      fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet%20&q={}&videoDuration=any&key=AIzaSyCMvE-VUEEYNHxbUoztY10VOOcSJYDCG90")
          .then(function (response) {
              return response.json();
          })
          .then(function (result) {
              console.log(result)
              document.getElementById("ytplayer").innerHTML=` 
              <div class="row">
              <div class="col s12 m5" id="video">
                <div class="VIDEO">
                  <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
                  </span>
                </div>
              </div>
            </div>
          </div>`
          });
      }
      youtube()
=======
    OMDBFetch()
    var youtube = function () {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" + movie + " " + trailer + "&type=video&" + youtubeAPIkey)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result)
                $("#ytplayer").attr("src", "https://www.youtube.com/embed/" + result.items[0].id.videoId)
            });
        }
        youtube()
>>>>>>> 446e3447fce45502faf4b230fcf0f3e8a1518630
});

