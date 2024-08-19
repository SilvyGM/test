const hamburguesa= document.querySelector('.hamburguesa')
const navegacion= document.querySelector('.navegacion')
console.log(hamburguesa);

document.addEventListener('DOMContentLoaded', () => {
    mostrarmenu();
});

function mostrarmenu(){
    hamburguesa.addEventListener('click',() =>{
        navegacion.classList.toggle('ocultar');
    });
}
function cerrarmenu(){  
    enlace.array.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventdefault();
        });
    });
}