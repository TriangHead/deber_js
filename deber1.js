'use strict'

function suma_multipl(multiplicador, multiplicando) {
    let result = 0;
    for (let i = 0; i < multiplicador; i++) {
      result += multiplicando;
    }
    return result;
  }

  let multiplicador = 23;
let multiplicando = 45;
let resultado = suma_multipl(multiplicador, multiplicando);
alert(`El resultado de ${multiplicador} x ${multiplicando} es de ${resultado}.`);