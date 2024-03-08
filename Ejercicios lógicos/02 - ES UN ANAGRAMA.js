/*
 * Ejercicio #2
 * ¿ES UN ANAGRAMA?
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function esAnagrama(palabra1, palabra2) {
  let palabra1Ordenada = palabra1.split("").sort().join("");
  let palabra2Ordenada = palabra2.split("").sort().join("");
  return palabra1Ordenada === palabra2Ordenada;
}

console.log(esAnagrama("roma", "amor"));
