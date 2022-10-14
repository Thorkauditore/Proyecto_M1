document.querySelector("#btn").addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let contraseña = document.querySelector("#contraseña").value
    let data = {
        email,
        contraseña
    } 
    // console.log(data)

    let objStrigified = JSON.stringify(data) // Pasamos a lectura adecuado para el storage. 
    // console.log(objStrigified)

    localStorage.setItem("userName", objStrigified) // cargamos los datos en el storage local. userN es la key y objStr... son los datos de objeto. 

    //  console.log(localStorage.getItem("userName"))

    let objDestringified = JSON.parse(localStorage.getItem("userName"))
    // cambiar del lenguaje Storage a codigo, recoger los datos en formato leible para .js

    console.log(objDestringified)

    if (localStorage.getItem("palabra") !== null) {
        alert("Estas logueado")
    } else {
        alert("Logueate")
    }

})
