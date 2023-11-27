// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {

  const gato ={};

  gato.nombre = nombre;

  gato.edad = edad ;

  gato.meow = function() {
    return "Meow!";
  };
    
  return gato;
       
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
}


function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;

  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();

  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
 // esta  ueno chequear si la proiedad existe
  // if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
  //   Multiplicamos el valor de la propiedad por 5 y lo retornamos
  //   return objetoMisterioso.numeroMisterioso * 5;
  // } else {
  //   Si la propiedad no existe, podemos retornar un valor predeterminado o lanzar un error, según sea necesario.
  //   En este caso, retornaremos NaN (Not-a-Number) si la propiedad no existe.
  //   return NaN;
  // }
}

function eliminarPropiedad(objeto, unaPropiedad) {

  delete objeto[unaPropiedad];

  return objeto;

  
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
}

function nuevoUsuario(nombre, email, password) {
    const Persona = {nombre, email, password}
    return Persona


  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
}

function tieneEmail(usuario) {
  if (usuario.email !== null && usuario.email !== undefined){
    return true
  }else {
    return false
  }
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
}



function tienePropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);

  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
}

function verificarPassword(usuario, password) {
  return usuario.password === password
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
}

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;

  return usuario
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo)
  return usuario 
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
}

function pasarUsuarioAPremium(usuarios) {

  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;

  // usuarios.forEach(function(usuario) {
  //   usuario.esPremium = true;
  // });
  // return usuarios;

  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
}

function sumarLikesDeUsuario(usuario) {


  // usuario{
  //   posts[ 
  //     post{
  //       likes = 3

  //     },
  //     post{
  //       likes =4

  //     },
  //     post{
  //       likes =  5

  //     }
  //   ]
  // }


  
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  let sumaLikes = 0;

  // Recorre los objetos "post" en el array "posts" del usuario
  for (let i = 0; i < usuario.posts.length; i++) {
    sumaLikes += usuario.posts[i].likes;
  }

  return sumaLikes;

  // let sumaLikes = 0;

  // // Utiliza forEach para recorrer los objetos "post" en el array "posts" del usuario
  // usuario.posts.forEach(post => {
  //   sumaLikes += post.likes;
  // });

  // return sumaLikes;

}

function agregarMetodoCalculoDescuento(producto) {


  producto.calcularPrecioDescuento = function () {
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  }

  return producto;


  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
