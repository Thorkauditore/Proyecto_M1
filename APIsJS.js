//-----------------------------Nombres Jugador----------------------------------------------
let select = document.querySelector("select")
let teams

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0da16c44fbmsh7d65b9193e777b5p1c1087jsnc7a35e22321b',
    'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com'
  } 
}

fetch('https://nba-stats4.p.rapidapi.com/teams/?per_page=50&page=1', options)
  .then(response => response.json())
  .then((response) => {
    teams = response // El array de obejtos.
    // console.log(response);
    response.forEach((team, i) => {
      select.innerHTML += `<option value="${i}">${team.abbreviation}</option>`;
    });
  });

document.querySelector("input[type='submit']").addEventListener("click", (e) => {
  e.preventDefault()
  let datosEquipo = document.querySelector("select").value
  document.querySelector("#fullName").innerHTML = `<h2>${teams[datosEquipo].full_name}</h2>`
  document.querySelector("#citys").innerHTML = `<h4>Ciudad; ${teams[datosEquipo].city}</h4>`
  document.querySelector("#yearsold").innerHTML = `<h3>Año de fundación ${teams[datosEquipo].year_founded}</h3>`
  document.querySelector("#img").innerHTML = `<img src="./teams/${teams[datosEquipo].abbreviation}.png" alt="vaya">`
})