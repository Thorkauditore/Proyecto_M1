//-----------------------------Nombres Jugador----------------------------------------------
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "0da16c44fbmsh7d65b9193e777b5p1c1087jsnc7a35e22321b",
      "X-RapidAPI-Host": "nba-stats4.p.rapidapi.com",
    },
  };
  let divId = document.querySelector("#nombre");
  fetch(
    "https://nba-stats4.p.rapidapi.com/players/?page=1&per_page=50",
    options
  )
    .then((response) => response.json())

    .then((response) => {
     
     for (let i = 0; i < 5; i++){
      
        // response.forEach((vueltaFor) => {
          divId.innerHTML += `<h1>${response[i].full_name}</h1>`;
      }
    })
    .catch((err) => console.error(err));

//------------------------Nombre equipos-------------------------------------------------------

const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "0da16c44fbmsh7d65b9193e777b5p1c1087jsnc7a35e22321b",
      "X-RapidAPI-Host": "nba-stats4.p.rapidapi.com",
    },
  };
let divId2 = document.querySelector("#nombre1")
  fetch(
    "https://nba-stats4.p.rapidapi.com/teams/?per_page=50&page=1",
    options2
  )
    .then((response) => response.json())

    .then((response) => {
      response.forEach((vueltaFor,) => {
        console.log();
        // el 0 de los array, son los 0 de vueltaFor.
        divId1.innerHTML += `<h1>${vueltaFor.full_name}</h1>`
      });
    });