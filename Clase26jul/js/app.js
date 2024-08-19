let usuarios =[]    
const Form = document.getElementById("registroForm");
const Tabla = document.getElementById("usuariostabla").getElementsByTagName("tbody")[0];    

Form.addEventListener("submit", function(e){ 
e.preventDefault();

const nombres=document.getElementById("nombres").value;
const apellidos=document.getElementById("apellidos").value;
const correo=document.getElementById("correo").value;
const contraseña=document.getElementById("contraseña").value;
const usuario={nombres, apellidos, correo, contraseña};
usuarios.push(usuario);
actualizarTabla();
Form.reset();
});

loginform.addEventListener("submit",function(e){
    e.preventDefault();
    const correo=document.getElementById("logincorreo").value;
    const contraseña=document.getElementById("logincontraseña").value;
    const usuario=usuarios.find(u=>u.correo===correo && u.contraseña===contraseña);
    if(usuario){
        alert(`Bienvenido, ${usuario.nombres} ${usuario.apellidos}!`);
    }else{
        alert("usuario no encontrado por favor verifique");
    }
});
function actualizarTabla() {
    usuarios.forEach((usuario,index)=> {    
        const fila = Tabla.insertRow();
        fila.insertCell().textContent= usuario.nombres;
        fila.insertCell().textContent= usuario.apellidos;
        fila.insertCell().textContent= usuario.correo;
        const celdaAcciones=fila.insertCell();

        const botonEditar=document.createElement("button");
        botonEditar.textContent="Editar";
        botonEditar.onclick=()=>editarusuario(index);
        celdaAcciones.appendChild(botonEditar);

        const botonEliminar=document.createElement("button");
        botonEliminar.textContent="Eliminar";
        botonEliminar.onclick=()=>eliminarusuario(index);
        celdaAcciones.appendChild(botonEliminar);
    }); 
}
function editarusuario(index) {
    const usuario= usuario[index];
    document.getElementById("nombres").value=usuario.nombres;
    document.getElementById("apellidos").value=usuario.apellidos;
    document.getElementById("correo").value=usuario.correo; 
    document.getElementById("contraseña").value=usuario.contraseña;
    usuarios.splice(index,1);
    actualizarTabla();
}
function eliminarusuario(index){    
    usuarios.splice(index,1);
    actualizarTabla();
}