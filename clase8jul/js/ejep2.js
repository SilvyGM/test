const num1 = Number(prompt("Ingrese un numero"));
const num2 = Number(prompt("Ingrese un numero"));
const num3 = Number(prompt("Ingrese un numero"));
let menor;
if (num1 <= num2 && num1 <= num3) {
  menor = num1;
} else if (num2 <= num3 && num2 <= num1) {
  menor = num2;
} else {
  menor = num3;
}
document.write("El menor de los 3 numeros es: " + menor);
