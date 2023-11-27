// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {

  if(x<y) {
    return y
  } else if (x>y) {
    return x
  } else {
    return x || y
  }
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
}

function mayoriaDeEdad(edad) {
  if(edad >= 18) {
    return "Allowed"
  } else {
    return "Not allowed"
  }
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}

function conection(status) {
  if(status===1) {
    return "Online"
  }else if (status===2){
    return "Away"
  } else {
    return "Offline"
  } 
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}

function saludo(idioma) {

  if (idioma==="aleman"){
    return "Guten Tag!" 
  } else if (idioma==="mandarin"){
    return "Ni Hao!"
  } else if (idioma==="ingles"){
    return "Hello!"
  } else {
    return "Hola!"
  }

    

  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
}

function colors(color) {
    switch (color) {
      case "blue":
        return "This is blue";
      case "red":
        return "This is red";
      case "green":
        return "This is green";
      case "orange":
        return "This is orange";
      default:
        return "Color not found";
    }
  
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
}

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;

  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}

function estaEnRango(numero) {
  return numero < 50 && numero > 20;
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
  return numero === Math.floor(numero);
  
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
  if (numero%3 ===0 && numero%5 === 0){
    return "fizzbuzz"
  } else if (numero%3 ===0 ){
    return "fizz"
  } else if (numero%5 === 0){
    return "buzz"
  } else {
    return numero
  }
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function operadoresLogicos(num1, num2, num3) {

  if (num1 < 0 || num2 < 0 || num2 < 0){
    return "Hay negativos"
  } else if (num1 === 0 || num2 === 0 || num2 === 0){
    return "Error"
  } else if (num1 > num2 && num1 > num3 ){
    return "Número 1 es mayor y positivo"
  } else if (num3 > num1 && num3 > num2){
    return num3 + 1
  } else {
    
    return false
  } 
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:
}

function esVerdadero(valor) {
  if (valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }

  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí:
}

function tieneTresDigitos(numero) {
  return numero.toString().length === 3; 
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:

}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  // Itera desde 2 hasta el número - 1
  for (let i = 2; i < numero; i++) {
    // Si el número es divisible por cualquier número en este rango, no es primo
    if (numero % i === 0) {
      return false;
    }
  }

  // Si no se encontraron divisores, el número es primo
  return true;
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
}

function doWhile(numero) {
  let contador = 0; // Inicializamos un contador para llevar el seguimiento de las iteraciones
  do {
    numero += 5; // Incrementamos el valor recibido en 5 en cada iteración
    contador++; // Incrementamos el contador de iteraciones
  } while (contador < 8); // Continuamos el bucle mientras el contador sea menor que 8

  return numero; // Devolvemos el valor final
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};