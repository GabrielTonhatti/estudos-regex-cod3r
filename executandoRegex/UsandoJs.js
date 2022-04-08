const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');
console.log("Métodos da RegExp...");
console.log(regexNove.test(texto)); // Retorna true ou false, dependendo se a expressão foi encontrada
console.log(regexNove.exec(texto)); // Retorna o valor da expressão encontrada, o index e todos os valores encontrados

const regexLetras = /[a-f]/g; // Pega todas as letras entre a e f de forma global
console.log('Métodos da string...');
console.log(texto.match(regexLetras)); // Retorna todas as ocorrências encontradas
console.log(texto.search(regexLetras)); // Retorna o índice da primeira ocorrência encontrada
console.log(texto.replace(regexLetras, 'Achei')); // Substitui todas as ocorrências encontradas por Achei
console.log(texto.split(regexLetras)); // Divide a string em um array de strings, separando-as pelas ocorrências encontradas