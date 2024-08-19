function esVocal ( letra){  
    const vocales = " aeiouAEIOU";
if(letra.length !== 1){ 
    return "Debe ingresar una sola letra";
}if (!isNaN(entrada) && entrada.trim() !== '') {
    return "Error: Debes ingresar una letra, no un número.";
}
else if (vocales.includes(letra)){ return " es una vocal"}
else{ return " es una consonante"}
}
let entrada = prompt("ingresa una letra");
const resultado = esVocal( entrada);
document.write(resultado);


