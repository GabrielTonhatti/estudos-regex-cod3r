// g - global
// i = ignore case

const texto = 'Carlos assinou o abaixo-assinado';
console.log(texto.match(/C|ab/)); // Procura por C maíusculo ou ab
console.log(texto.match(/c|ab/i)); // Procura por c ignorando se é maíuscula ou minúscula ou ab
console.log(texto.match(/c|ab/gi)); // Procura por todas as ocorrências ignorando se é maíuscula ou minúscula