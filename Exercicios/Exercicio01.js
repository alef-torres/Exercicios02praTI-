// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {

  if (
    typeof dia !== "number" || typeof mes !== "number" || typeof ano !== "number" ||
    dia < 1 || mes < 1 || mes > 12
  ) {
    return false;
  }

  function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }

  const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31];

  return dia <= diasPorMes[mes - 1];
}

