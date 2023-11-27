'use strict'

function counter() {
let count = 0;

  function increment (){
    count ++;
    return count 
  }

  return increment;

  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
}

function cacheFunction(cb) {
  const cache = {}; // Objeto para almacenar los resultados en caché.

  // La función interna es lo que se retornará y se encargará de gestionar el caché.
  function cachedFunction(arg) {
    // Comprueba si el argumento ya está en el caché.
    if (cache.hasOwnProperty(arg)) {
      return cache[arg]; // Retorna el resultado almacenado en el caché.
    } else {
      const result = cb(arg); // Invoca la función original con el argumento.
      cache[arg] = result; // Almacena el resultado en el caché.
      return result;
    }
  }

  // Devuelve la función interna que maneja el caché.
  return cachedFunction;
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
