// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function dizerOi() {
  console.log("Oi!");
}
const dizerOlaComDelay = debounce(dizerOi, 2000);
dizerOlaComDelay();
dizerOlaComDelay();
dizerOlaComDelay(); 
