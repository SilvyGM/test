const saludo = (Nombre, Apellido, callbacks) => {
  console.log(`Hola ${Nombre} ${Apellido}!`);
  callbacks();
};
/* pendiente el callbacks */

const saludo2 = () => {
  console.log(`Luego de saludar se ejecuta el callbacks`);
};
saludo("silvana", "Gonzalez", saludo2);
