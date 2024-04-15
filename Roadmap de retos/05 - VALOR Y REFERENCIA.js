/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
 *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// Asignación de variables "por valor" y "por referencia"
let a = 5;
let b = a;
a = 10;
console.log(a); // 10
console.log(b); // 5

let c = [1, 2, 3];
let d = c;
c[0] = 4;
console.log(c); // [4, 2, 3]
console.log(d); // [4, 2, 3]

// Funciones con variables que se les pasan "por valor" y "por referencia"
function porValor(x) {
  x = 20;
}

let y = 10;
porValor(y);
console.log(y); // 10

function porReferencia(x) {
  x[0] = 4;
}
let z = [1, 2, 3];
porReferencia(z);
console.log(z); // [4, 2, 3]

// DIFICULTAD EXTRA (opcional)
function intercambioPorValor(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function intercambioPorReferencia(a, b) {
  let temp = a[0];
  a[0] = b[0];
  b[0] = temp;
  return [a, b];
}

let e = 5;
let f = 10;
let g = [5];
let h = [10];
let resultado1 = intercambioPorValor(e, f);
let resultado2 = intercambioPorReferencia(g, h);
console.log(e, f, resultado1); // 5 10 [10, 5]
console.log(g, h, resultado2); // [10] [5] [[10], [5]]
