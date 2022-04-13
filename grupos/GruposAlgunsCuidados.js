const texto = 'Pedrinho (filho de Pedro Silva) é doutor do ABCabc!';

console.log(texto.match(/[(abc)]/gi)); // Não é um grupo
console.log(texto.match(/([abc])/gi)); // É um grupo
console.log(texto.match(/(abc)+/gi));
