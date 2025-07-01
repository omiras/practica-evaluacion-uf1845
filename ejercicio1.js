function getPersonByIdCard(id) {

}

const personas = [
  { nombre: "Ana", dni: "12345678A" },
  { nombre: "Luis", dni: "87654321B" },
  { nombre: "Marta", dni: "11223344C" },
];

console.log(buscarNombrePorDNI("11223344C")); // "Marta"
console.log(buscarNombrePorDNI("00000000X")); // ""
