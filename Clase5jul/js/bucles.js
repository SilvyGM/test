//bucle while   
/*let x =1;
while(x<= 50){  
    if(x % 5 ===0){ 
        document.write(x+"<br/>");
    }   
    x++;
}*/
//bucle for
/*for ( let x=10;x<=20;x=x+2){ 
    document.write(x+"<br/>");
}*/
/*do while hacer mientras*/
/*let i= 0;
do{ 
    document.write (i+"<br/>"); 
    i += 1;
}while (i <=5);*/   
//switch
let num1= prompt("favor ingrese un numero");
letnum2= prompt("favor ingrese un numero");
operacion=prompt(" por favor ingrese la operacion que desea realizar;\n 1. suma\n 2. resta\n 3. multiplicacion\n 4. division"); 
let resultado;
switch(operacion){  
    case "1":  
        resultado= num1 +num2;
        alert(' el resultado de la suma es: ' +resultado);
        break;
    case "2":  
        resultado= num1 -num2;  
        alert(' el resultado de la resta es: ' +resultado);
        break;
    case "3":  
    resultado= num1 * num2;  
    alert(' el resultado de la multiplicacion es: ' +resultado);
        break;
    case "4": 
    if(num2 === 0){
        alert("No se puede dividir por cero");
    }else{
    resultado= num1 /num2;  
    alert(' el resultado de la division es : ' +resultado);}
            break;
    default:
        alert("opcion no valida intente de nuevo");