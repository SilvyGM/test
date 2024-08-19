// Escribe un programa que muestre la secuencia de Fibonacci hasta el décimo término.
function fibonacci(n) {
  let a = 0;
  let b = 1;
  document.write(a + "<br/>");
  document.write(b + "<br/>");

  for (let i = 2; i < n; i++) {
    let c = a + b;
    document.write(c + "<br/>");
    a = b;
    b = c;
  }
}
// Llama a la función para generar los primeros 10 términos
fibonacci(12);
