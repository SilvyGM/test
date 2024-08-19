const azul = document.getElementById("botonAzul");
const Rojo = document.getElementById("botonRojo");
const Verde = document.getElementById("botonVerde");

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
}
azul.addEventListener("click", function () {
    cambiarColor("blue");
});
Rojo.addEventListener("click", function () {
    cambiarColor("red");
});
Verde.addEventListener("click", function () {
    cambiarColor("green");
});
/*funcionalidad de lista tareas */
const inputNuevaTarea = document.getElementById("NuevaTarea");
const botonAgregarTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("tareas");
function agregarTarea() {
    const textoTarea = inputNuevaTarea.value.trim();
    if (textoTarea) {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.className = "ntarea";
        nuevaTarea.innerHTML = `<span class="texto-tarea">${textoTarea}</span> 
        <button class="eliminar">Eliminar</button> 
        <button class="editar">Editar</button>`;
        listaTareas.appendChild(nuevaTarea);
        inputNuevaTarea.value = "";
        const botonEliminar = nuevaTarea.querySelector(".eliminar");
        botonEliminar.addEventListener("click", () => {
            listaTareas.removeChild(nuevaTarea);
        });
        const botonEditar = nuevaTarea.querySelector(".editar");
        const span = nuevaTarea.querySelector(".texto-tarea");

        botonEditar.addEventListener("click", () => {
            const nuevoTexto = prompt("Deseas editar la tarea: ", span.textContent);
            if(nuevoTexto !== null && nuevoTexto.trim()!==""){
                span.textContent=nuevoTexto.trim();
            }
        });
    }
}
botonAgregarTarea.addEventListener("click", agregarTarea);