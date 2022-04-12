const texto = "1,2,3,a.b c!d?e[f";

console.log(texto.match(/\D/g)); // Não números [^0-9]
console.log(texto.match(/[^0-9]/g)); // Não números [^0-9]
console.log(texto.match(/[^\d!\?\[\s,\.]/g)); // Não números [^0-9]

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';
console.log(texto2.match(/[^!-/:-@\s]/g));