const num1 = Number(prompt("ingrese un numero del 1 al 7"));
switch (num1) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  case 3:
    alert("Miercoles");
    break;
  case 4:
    alert("Jueves");
    break;
  case 5:
    alert("Viernes");
    break;
  case 6:
    alert("Sabado");
    break;
  case 7:
    alert("Domingo");
    break;
  default:
    alert("Error: Ingrese un numero del 1 al 7");
}
