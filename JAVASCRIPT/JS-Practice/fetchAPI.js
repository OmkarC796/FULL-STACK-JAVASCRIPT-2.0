

// FETCH API   using .then and .catch

const url = "https://restcountries.com/v2/all"; // country name and some data fetching from the server data base

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))            // this is the fetch request .then and .catch methods
.catch((error) => console.log(error))

