/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let allMovies = []
    for (let movie of movies) {  // to loop through all movies
  allMovies.push(movie.title)// pushing titles into allMovies empty array
} // end of loop
  return allMovies;
}  // end of function


/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highScore = 0;  //initializing counter to 0

  if (movies.length) { // if there are movies
  highScore = Number(movies[0].metascore);   // setting new high score
}
  for (let movie of movies) {  // setting up loop
    if (Number(movie.metascore) > highScore) { // if itterated score is higher than current hiScore
      highScore = Number(movie.metascore)  // update with new hiScore
    }
  }
  return highScore  // returns the high Score
}


/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let avgRating = 0; // setting new variable to 0
    for (let movie of movies) {  // starting for loop to collect all ratings
  avgRating += Number(movie.imdbRating);  // adding each movie rating into avgRating
}
    if (avgRating > 0) {   // if avgrating is bigger than 0
    avgRating /= movies.length;  // getting the average by dividing by the number of movies
  }
  return avgRating // returning the average rating
}


/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let myObject = {}  // setting new objest to empty object
    for (let movie of movies) {  // to loop through movies
  let myKey = movie.rated   // setting new variable to itterated rating 
    if (myObject[myKey]) {  // if there is a key
    myObject[myKey] += 1   // increment it
  } else {
    myObject[myKey] =1   
  }
  } 
  return myObject // returns whats in myObject.  Returns empty {} if movies array is empty
}


/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
  function findById(movies, id) {
    if (movies.length === 0) {   // if there are no movies
    return null;      // return null
  }
    for (let movie of movies) {   // starting loop
    if (movie.imdbID === id) {    // itterating through movies to see if id matches
      return movie    // if it does match, return the movie
    }
  } 
    return null;   // if it doesn't match, return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
let arrayFiltered = []  // set up empty arr

if (movies.length === 0 ) {    // if there are no movies
  return arrayFiltered // bouncer clause
}
for (let movie of movies) {    // setting up loop
let myToLowerCase = movie.genre.toLowerCase()   // setting genre to lower case and storing in myToLowerCase
  if (myToLowerCase.includes(genre.toLowerCase())) { // if my genre is lower case
   arrayFiltered.push(movie) // then push into new Arr
  }
}
return arrayFiltered
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
let result = []  // setting resukts to empty array
for (let movie of movies) {   // starting loop
 if(Number(movie.released.slice(-4)) <= year) {   // using .slice(-4) to extract the  last 4 digits from the end of the released year so we can compare it to year and if equal or smaller we push to results array
   result.push(movie)   // pushing movie into results array
 }
}
return result;  // returns the contents of the results array
}




/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let biggestMovie = ""   //movie title variable set to empty string
    let mostBoxOffice = 0   // accumulator keeping track of the money
    
      if (!movies.length){  // if no movies
        return null // return null
    }
      for (let movie of movies) {   // to loop through movies
       let moneyBox = Number(movie['boxOffice'].replace(/[$,]/g, ''))  //Removing $/, from box number string using .replace where /g replaces more than once and storing the result in moneyBox

        if (moneyBox > mostBoxOffice) {  //if moneybox number is higher than current highest
          mostBoxOffice = moneyBox   // update with the new current highest
          biggestMovie = movie['title']   // and update biggestMovie with the new movie
    }
  }
      return biggestMovie // return the biggest box office movie
}



// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
