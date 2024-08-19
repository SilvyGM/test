const cadena = prompt("Introduce una cadena de texto");

// Mostrar el numero de vocales y consonantes
let vocales = 0;
let consonantes = 0;

for (let i = 0; i < cadena.length; i++) {
  const letra = cadena[i].toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    vocales++;
  } else if (letra >= "a" && letra <= "z") {
    consonantes++;
  }
}

alert(`Vocales: ${vocales}, Consonantes: ${consonantes}`);
