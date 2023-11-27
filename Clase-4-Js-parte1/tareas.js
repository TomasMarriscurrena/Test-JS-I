// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {

  return array[0];
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return array[array.length - 1];
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1
  }
  return array

  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {

  array.push(elemento)
  return array
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
  return array 
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true; // El elemento se encontró en el array, devuelve true
    }
  }
  return false;
// o tambien puede ser con includes()
// return array.includes(elemento);

// Comprueba si el elemento existe dentro de "array"
// Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  let suma = 0; 
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]; 
  }
  return suma;
  
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  let suma = 0; 
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]; 
  }
  let promedio = suma/ resultadosTest.length;
  return promedio;

  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {

  let maximo = numeros[0]
  
  for (let i = 0; i < numeros.length; i++) {
    if (maximo < numeros[i]) {
      maximo = numeros[i]
    } else {
      maximo
    }}
  
  return maximo
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function cuentoElementos(arreglo){

  let contador = 0

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>19) {
      contador++
  }}

  return contador
  // retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
}

function diaDeLaSemana(numeroDeDia) {

  if(numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";}

  
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
} 

function empiezaConNueve(n) {
  while (n >= 10) {
    n = Math.floor(n / 10);
  }
  return n === 9;

  // Otra opcion es
  // const numeroComoString = n.toString(); // Convierte el número en una cadena
  // return numeroComoString.startsWith("9"); // Verifica si la cadena comienza con "9"


  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
}

function todosIguales(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== arreglo[0]) {
      return false; 
  }}
  return true
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
} 

function mesesDelAño(array) {


  const newArray = []
  for(let i = 0; i < array.length; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
    newArray.push(array[i]);
}} 
  if (newArray.length === 3) {
  return newArray;
  } else {
  return "No se encontraron los meses pedidos";}

  // const mesesEncontrados = [];

  // if (array.includes("Enero")) {
  //   mesesEncontrados.push("Enero");
  // }

  // if (array.includes("Marzo")) {
  //   mesesEncontrados.push("Marzo");
  // }

  // if (array.includes("Noviembre")) {
  //   mesesEncontrados.push("Noviembre");
  // }

  // if (mesesEncontrados.length === 3) {
  //   return mesesEncontrados;
  // } else {
  //   return "No se encontraron los meses pedidos";
  // }     NO SE POR QUE ESTE NO ANDA SI ES LO MISMO

  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

function mayorACien(array) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      resultado.push(array[i]);
   
    }
  }

  return resultado;
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
