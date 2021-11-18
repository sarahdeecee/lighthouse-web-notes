Agenda
- AJAX (What it is and why)
- Building an app with an API

APIs
- is a web server
  -  you will get raw data in either a JSON format or XML format

fetch('https://api.chucknorris.io/jokes/random')  .then(response => response.json())
  .then(data => console.log(data));
fetch is built into browser
```html
<form id="search">
  <h1>Search for title of show and movie :)</h1>
  <input type="text" name="movieName">
  <button>Find!!</button>
</form>
```
```javascript
// need to find a way to send a request to the API
  //jQuery
  // $.get(tvMazeApiURL).then(data => {
    //   console.log("What happened?");
  //   console.log(data);
  // })
  $(() => {
    let tvMazeApiURL = 'https://api.tvmaze.com/search/shows?q=dog';
    $.get(tvMazeApiURL).then(data => { //when loaded
      console.log("What happened?");
      console.log(data);
      for (let movie of data) {
        addMovie(movie);
      }
    });
  })
    // event lisener for form to control the search option
    // add this inside of document.on.ready because like append(),
    // you can only attach an event listener to a loaded HTML tag
```
```javascript
  $('#search').on('submit', (event) => {
    event.preventDefault();
    console.log(event.target.movieName.value);
    let tvMazeApiURL = 'https://api.tvmaze.com/search/shows?q=';
    $.get(tvMazeApiURL + event.target.movieName.value).then(data => {
      console.log("What happened?");
      console.log(data);
      for (let movie of data) {
        addMovie(movie);
      }
  })

  // $('.movies').append('<h1>Movie test</h1>');
  const addMovie = movieObj => {
    console.log(movieObj);
    let image = defaultImage;
    if (!movieObj.show.image.medium) {

    }
    $('.movies').append(`--movie info in html--
    <div class="movie">
      <div class="movie-img">
        <img src="${movieObj.show.image.medium}">
      </div>
      <div class="movie-desc">
        <h1>${movieObj.show.name}</h1>
        <h2>${movieObj.score}</h2>
        <h3>${movieObj.show.nameZ}</h3>
        <h4>${movieObj.show.language}</h4>
      </div>
      <p>${movieObj.show.summary}</p>
    </div>`);
  }
  // need to see what sort of data obj/arr I'm working with
  // need to build a layout for these data obj(s)
  // styling
```
```javascript
//form -----> event listener -----> preventDefault
//find values and serialize (gives it a keyname)
const val = $(event.target.movieName).serialize();
//POST req
$.post('/tweets/', val).then(() => {
//  ...
})
```