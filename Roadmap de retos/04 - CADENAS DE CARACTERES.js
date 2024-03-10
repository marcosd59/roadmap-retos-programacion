/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

// Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...

// Acceso a caracteres específicos
let cadena = "Hola mundo";
console.log(cadena[0]); // H
console.log(cadena.charAt(0)); // H

// Subcadenas
console.log(cadena.substring(0, 4)); // Hola
console.log(cadena.slice(0, 4)); // Hola
console.log(cadena.substr(0, 4)); // Hola

// Longitud
console.log(cadena.length); // 10

// Concatenación
let cadena2 = " desde JavaScript";
console.log(cadena + cadena2); // Hola mundo desde JavaScript

// Repetición
console.log(cadena.repeat(3)); // Hola mundoHola mundoHola mundo

// Recorrido
for (let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
}

// Conversión a mayúsculas y minúsculas
console.log(cadena.toUpperCase()); // HOLA MUNDO
console.log(cadena.toLowerCase()); // hola mundo

// Reemplazo
console.log(cadena.replace("mundo", "JavaScript")); // Hola JavaScript

// División
console.log(cadena.split(" ")); // ["Hola", "mundo"]

// Unión
console.log(["Hola", "mundo"].join(" ")); // Hola mundo

// Interpolación
let nombre = "Mundo";
console.log(`Hola ${nombre}`); // Hola Mundo

// Verificación
console.log(cadena.includes("Hola")); // true
console.log(cadena.startsWith("Hola")); // true
console.log(cadena.endsWith("mundo")); // true
console.log(cadena.indexOf("mundo")); // 5
console.log(cadena.lastIndexOf("o")); // 7
console.log(cadena.search("mundo")); // 5
console.log(cadena.match(/o/g)); // ["o", "o"]
console.log(cadena.match(/o/g).length); // 2
console.log(cadena.match(/o/gi)); // ["o", "o"]
console.log(cadena.match(/o/gi).length); // 2
console.log(cadena.match(/o/gi).join("")); // oo
console.log(cadena.match(/o/gi).reverse().join("")); // oo
console.log(
  cadena.match(/o/gi).reverse().join("") === cadena.match(/o/gi).join("")
); // true
console.log(
  cadena.match(/o/gi).reverse().join("") === cadena.match(/o/gi).join("")
); // true
console.log(
  cadena.match(/o/gi).reverse().join("") === cadena.match(/o/gi).join("")
); // true

// Ejercicio extra:
// Crea un programa que analice dos palabras diferentes y realice comprobaciones
// para descubrir si son:
// - Palíndromos
// - Anagramas
// - Isogramas

// Palíndromos
function esPalindromo(palabra) {
  return palabra === palabra.split("").reverse().join("");
}

console.log(esPalindromo("oso")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("hola")); // false

// Anagramas
function esAnagrama(palabra1, palabra2) {
  return (
    palabra1.split("").sort().join("") === palabra2.split("").sort().join("")
  );
}

console.log(esAnagrama("roma", "amor")); // true
console.log(esAnagrama("hola", "mundo")); // false

// Isogramas
function esIsograma(palabra) {
  return palabra.length === new Set(palabra).size;
}

console.log(esIsograma("murcielago")); // true
console.log(esIsograma("hola")); // false
console.log(esIsograma("mundo")); // true
console.log(esIsograma("oso")); // false
console.log(esIsograma("reconocer")); // false
console.log(esIsograma("roma")); // true
console.log(esIsograma("amor")); // true
console.log(esIsograma("hola")); // true
console.log(esIsograma("mundo")); // true
console.log(esIsograma("hola mundo")); // false
console.log(esIsograma("hola mundo".replace(" ", ""))); // true
