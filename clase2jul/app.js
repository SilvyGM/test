let nombre= prompt("por favor ingresa tu nombre: ");
let edad= prompt("por favor ingresa tu edad: ");    
if (edad < 18) {
    document.write ('hola, ${nombre} eres menor de edad <br>');
    document.write ('no puedes ingresar a discotecas<br>');
}else{
    document.write ('hola, ${nombre} eres mayor de edad <br>');
    document.write ('Que disfrutes tu rumba <br>');
} 