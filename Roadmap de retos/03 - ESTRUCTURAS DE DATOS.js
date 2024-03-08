/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */

// Ejemplo de creación de todas las estructuras soportadas por defecto en JavaScript
// - Array
let array = [1, 2, 3, 4, 5];
// - Object
let object = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
// - Map
let map = new Map();
map.set("nombre", "Juan");
map.set("edad", 25);
map.set("ciudad", "Madrid");
// - Set
let set = new Set([1, 2, 3, 4, 5]);
// - WeakMap
let weakMap = new WeakMap();
let key = { nombre: "Juan" };
weakMap.set(key, "Madrid");
// - WeakSet
let weakSet = new WeakSet();
let value = { nombre: "Juan" };
weakSet.add(value);

// Operaciones de inserción, borrado, actualización y ordenación
// - Array
array.push(6);
array.pop();
array[0] = 0;
array.sort();
// - Object
object.apellido = "Pérez";
delete object.ciudad;
object.edad = 26;
// - Map
map.set("apellido", "Pérez");
map.delete("ciudad");
map.set("edad", 26);
// - Set
set.add(6);
set.delete(1);
// - WeakMap
let key2 = { nombre: "Juan" };
weakMap.set(key2, "Barcelona");
weakMap.delete(key);
// - WeakSet
let value2 = { nombre: "Juan" };
weakSet.add(value2);
weakSet.delete(value);

// Ejemplo de agenda de contactos por terminal
let agenda = new Map();
let operacion = "";
while (operacion !== "salir") {
  operacion = prompt(
    "¿Qué operación quieres realizar? (buscar, insertar, actualizar, eliminar, salir)"
  );
  if (operacion === "buscar") {
    let nombre = prompt("Introduce el nombre del contacto");
    if (agenda.has(nombre)) {
      console.log(agenda.get(nombre));
    } else {
      console.log("El contacto no existe");
    }
  } else if (operacion === "insertar") {
    let nombre = prompt("Introduce el nombre del contacto");
    let telefono = prompt("Introduce el teléfono del contacto");
    agenda.set(nombre, telefono);
  } else if (operacion === "actualizar") {
    let nombre = prompt("Introduce el nombre del contacto");
    if (agenda.has(nombre)) {
      let telefono = prompt("Introduce el nuevo teléfono del contacto");
      agenda.set(nombre, telefono);
    } else {
      console.log("El contacto no existe");
    }
  } else if (operacion === "eliminar") {
    let nombre = prompt("Introduce el nombre del contacto");
    if (agenda.has(nombre)) {
      agenda.delete(nombre);
    } else {
      console.log("El contacto no existe");
    }
  }
}
console.log("¡Hasta luego!");
