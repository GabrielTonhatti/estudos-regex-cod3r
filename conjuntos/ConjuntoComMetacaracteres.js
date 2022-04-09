const texto = '.$+*?-';
console.log(texto.match(/[+.?*$]/g)); // não precisa de escapte(\) dentro do conjunto
console.log(texto.match(/[$-?]/g)); // isso é um intervalo (range)