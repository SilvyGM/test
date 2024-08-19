let numero = Number(
  prompt("Ingrese el numero al que desea obtener el factorial")
);
let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}
document.write("El factorial de " + numero + " es " + factorial);
