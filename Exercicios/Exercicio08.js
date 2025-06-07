// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const cliente = venda.cliente;

    if (acumulador[cliente]) {
      acumulador[cliente] += venda.total;
    } else {
      acumulador[cliente] = venda.total;
    }

    return acumulador;
  }, {});
}

const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 150 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 }
];

const resultado = agruparPorCliente(vendas);
console.log(resultado);

