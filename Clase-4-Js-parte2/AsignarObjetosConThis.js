// Definimos una función constructora llamada "Persona"
function Persona(nombre, edad) {
    // Usamos "this" para asignar valores a las propiedades del objeto que se creará
    this.nombre = nombre;
    this.edad = edad;
  
    // Un método que se compartirá entre todos los objetos creados con esta función constructora
    this.saludar = function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
  }
  
  // Creamos dos objetos "persona" utilizando la función constructora
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Ana", 25);
  
  // Llamamos al método "saludar" de cada objeto
  persona1.saludar(); // Salida: "Hola, soy Juan y tengo 30 años."
  persona2.saludar(); // Salida: "Hola, soy Ana y tengo 25 años."

  //  ejemplo para asignar objetos
  