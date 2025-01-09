function inverterString(str) {
    let strInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    
    return strInvertida;
}

const stringOriginal = "Exemplo de string";
const resultado = inverterString(stringOriginal);

console.log("String original: " + stringOriginal);
console.log("String invertida: " + resultado);