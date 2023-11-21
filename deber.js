'use strict'

function calcularEdad(fechaNac) {
   
    let yearActual = 2023;
    let edad = yearActual - fechaNac;
    return edad;
  }
  let fechaNac = 1985;
let edad = calcularEdad(fechaNac);
alert(`La edad es ${edad} años.`);