/**
import { reverse } from './basic';
 * Funções puras básicas usando Typescript
 *
 * @author Juan Pinheiro
 * @description As funções abaixo como reverse, first, last, são recursivas
 * e devem ser optimizadas no futuro.
 */

/**
 * @function increase(1);
 * @description Incrementa 1 ao parâmetro passado à função.
 */
export const increase = (x: number) => x + 1;

/**
 * @function head(Array<any>); - Atribuí o primeiro elemento parâmetro Array[] para a variável x: any.
 * @description Recebe um Array de elementos e adiciona seu primeiro.
 * elemento ao parametro "x".
 */
export const head = ([x]: Array<any>) => x;

/**
 * @function tail(Array<any>); - Ignora o primeiro elemento do Array<any> e
 * atribuí para a variável x: Array<any>.
 * @description Usando spread operator para aplicar os últimos elementos do array
 * na variável x e ignorar o primeiro elemento.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export const tail = ([, ...x]: Array<any>) => x;

/**
 * @function def(x); - x: any
 * @description Recebe um paraâmetro e verifica se ele está definida.
 * @see typeof Retorna uma String.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
export const def = (x: any) => (
  typeof x !== 'undefined'
);

/**
 * @function reverse(Array<any>); - Recebe um Array como parâmetro e atribuí o primeiro
 * elemento para "x" e o segundo elemento "y"
 * @description Usando reverse como função recursiva, retornamos sempre o primeiro elemento
 * no final do array e o que já foi modificado como o inicio do array.
 */
export const reverse = ([x, ...y]: Array<any>) => {
  console.log(`reverse([ x = [${x}], y = [${y}] ]);`);
  return def(x) ? [...reverse(y), x] : [];
};

/**
 * @function first(Array<any>,1); - Recebe um Array como parâmetro e atribuí o primeiro
 * elemento para "x" e o restante do array para elemento "xs" e um parâmetro n numérico
 * com o número de elementos que devemos retornar
 * @description Usando first como função recursiva, decrementamos o valor de "n" para
 * percorrer todo o Array.
 * Quando "n" for igual a 0 a condição é falsa.
 * Quando "x" for undefined a condição é false.
 */
export const first = ([x, ...xs]: Array<any>, n: number = 1) => {
  console.log(`first([ x = [${x}], xs = [${xs}] ], n = ${n});`);
  return def(x) && n ? [x, ...first(xs, n - 1)] : [];
};

/**
 * @function last(Array<any>,1);  - Recebe um Array como parâmetro e atribuí para a variável
 *  "xs" e um parâmetro n numérico com o número de elementos que devemos retornar.
 * @description Os primeiros "n" elementos do array reverso revertido é o resultado que esperamos! :)
 * Bizarro! Hahahahaha
 */
export const last = (xs: Array<any>, n: number = 1) => {
  console.log(`last([ xs = [${xs}], n = ${n});`);
  return reverse(first(reverse(xs), n));
};