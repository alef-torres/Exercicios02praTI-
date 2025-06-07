// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memo(fn) {
  let cache = {};

  return function (...args) {
    let chave = JSON.stringify(args);

    if (cache[chave] !== undefined) {
      return cache[chave];
    }

    const resultado = fn.apply(this, args);
    cache[chave] = resultado;

    return resultado;
  };
}

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
const fatorialMemo = memo(fatorial);
console.log(fatorialMemo(5));
console.log(fatorialMemo(5)); 
