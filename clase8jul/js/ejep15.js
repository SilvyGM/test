let num = Number(prompt("Ingrese el numero de la tabla que quiere ver"));

for (let i = 0; i <= 10; i++) {
  let mul;
  mul = num * i;
  document.write(num + " x " + i + " = " + mul + "<br>");
}
