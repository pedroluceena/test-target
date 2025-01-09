const fs = require("fs");


fs.readFile("./dados.json", "utf8", (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    const faturamento = JSON.parse(data);

    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});