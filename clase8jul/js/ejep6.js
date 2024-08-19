const num = Number(prompt("Ingrese un numero"));

if (num < 0) {
  document.write(num + " Es negativo");
} else if (num > 0) {
  document.write(num + " Es positivo");
} else {
  document.write(num + " Es cero");
}
