const numDivisores = prompt("Introduce un número para hallar sus divisores");
let divisores = [];

for (let i = 1; i <= numDivisores; i++) {
  if (numDivisores % i === 0) {
    divisores.push(i);
  }
}

alert(`Los divisores de ${numDivisores} son ${divisores.join(", ")}`);
