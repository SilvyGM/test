
const producto ={
    nombre: "Manzana",
    categoria: 'frutas',
    precio: 2000
}

const persona ={    
    nombre: "silvana",
    apellido: "gonzalez",
    identificacion:"823748",
    edad: 34,
    direccion:{ 
        calle: 45,
    numero: 123,
    ciudad: "Medellin",
    pais: "Colombia"}
    };

document.write(persona.nombre + "<br/>");
document.write(persona.apellido + "<br/>");


function saludar (nombre) {   
    document.write("hola"+nombre );
}

saludar(" silvana");