// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;
let palpite = 0;

while (palpite !== numeroSecreto) {

  palpite = parseInt(prompt("Adivinhe o número de 1 a 100:"));
  tentativa++;

  if (palpite < numeroSecreto) {
    alert("Mais alto!");
  } else if (palpite > numeroSecreto) {
    alert("Mais baixo!");
  } else {
    alert("Parabéns! Você acertou em " + tentativa + " tentativas.");
  }
}
