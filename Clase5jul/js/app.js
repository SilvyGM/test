/*const arreglo = [100,true,"Palabras",45,"cadena"];
document.write(typeof arreglo+"<br/>");*/

const frutas =["manzanas","uvas","kiwi","arandano","limon"];
/*frutas.push("banana");
frutas.unshift("coco");
frutas.pop();
frutas.shift();*/
document.write(frutas.length+ "<br/>");

frutas.slice(0,3,"corozo","fresa","durazno");
frutas.slice(1,0,"piña");

document.write(frutas);
const comida= frutas.slice
document.write("<br/>" +comida .indexof("fresa"));

if(frutas.includes("frambuesa")){
    document.write("<br/>" +frutas.indexOf("frambuesa"));   
}else{   
    frutas.push("frambuesa");
    document.write("<br/>" +frutas);
}
if(frutas.includes("frambuesa")){   
    document.write("<br/>" +frutas.indexOf("frambuesa"));   
}else{  
    frutas.push("frambuesa");
    document.write("<br/>" +frutas);}



