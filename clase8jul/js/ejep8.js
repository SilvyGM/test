const numero1 = Number(prompt("Ingrese el primer numero"));
const numero2 = Number(prompt("Ingrese el segundo numero"));
const numero3 = Number(prompt("Ingrese el tercer numero"));
const mayor = 0;
const medio = 0;

if (numero1 > numero2) {
  if (numero1 > numero3) {
    if (numero2 > numero3) {
      mayor = numero1;
      medio = numero2;
    } else {
      mayor = numero1;
      medio = numero3;
    }
    document.write("El numero de en medio es: " + medio);
  }
}
if (numero2 > numero1) {
  if (numero2 > numero3) {
    if (numero1 > numero3) {
      mayor = numero2;
      medio = numero1;
    } else {
      mayor = numero2;
      medio = numero3;
    }
    document.write("El numero de en medio es: " + medio);
  }
}
if (numero3 > numero1) {
  if (numero3 > numero2) {
    if (numero1 > numero2) {
      mayor = numero3;
      medio = numero1;
    } else {
      mayor = numero3;
      medio = numero2;
    }
    document.write("El numero de en medio es: " + medio);
  }
}
if (numero1 == numero2 && numero3 == numero1) {
  document.write("Los 3 numeros son iguales");
}
if (numero1 == numero2 || numero3 == numero1 || numero2 == numero3) {
  document.write("Hay dos numeros iguales");
}
