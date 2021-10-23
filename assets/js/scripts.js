//~~~drinks are pulled from cocktail api slap and turned into cocktail object~~~

//input movie name

//click the button
//sammy

//slaps movie api and saves input to local storage
//David
//pulls genre, poster, rating

// with the genre we pull from cocktail object with suggested drinks

//create <aside> HTML with movie title, poster, rating and suggested drink with image

$(document).ready(function () {
  function movieSearch() {
    const movieTitle = $("#userQuery").val();
    getMovie(movieTitle);
  }

  function getMovie(movie) {
    const omdbApiKey = "dc038d01";
    let requestMovieURL = `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${movie}`;
    console.log(movie);
    // fetch
    fetch(requestMovieURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  function getCocktail(cocktail) {
    console.log(cocktail);
    // fetch
  }

  getMovie("The Big Lebowski");
  getCocktail("White Russian");

  $("#searchBtn").on("click", movieSearch);

  function setLocalStorageMovies(movieTitle) {
    let movieStorage = getLocalStorageMovies();
    if (!movieStorage || !movieStorage.find((m) => m === movieTitle)) {
      // title not found add to local storage
      movieStorage.push(movieTitle);
      localStorage.setItem("movies", JSON.stringify(movieStorage));
    }
  }

  function getLocalStorageMovies() {
    let localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    return localStorageMovies || [];
  }

  setLocalStorageMovies("foo");
  setLocalStorageMovies("bar");
  setLocalStorageMovies("foo");
});
