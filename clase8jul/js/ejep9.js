const num1 = Number(prompt(" ingrese la  calificacion del 0 al 100"));

if (num1 >= 0 && num1 < 11) {
  document.write("su nota es F");
} else if (num1 >= 11 && num1 < 31) {
  document.write("su nota es D");
} else if (num1 >= 31 && num1 < 51) {
  document.write("su nota es C");
} else if (num1 >= 51 && num1 < 86) {
  document.write("su nota es B");
} else if (num1 >= 86 && num1 <= 100) {
  document.write("su nota es A");
} else {
  document.write("Error: Ingrese un numero entre 0 y 100");
}
