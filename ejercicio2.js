/**
 * Los software de cribado de candidatos de los reclutadores puede ser algo estrictos. Suelen descartar de forma automática aquellos candidatos que no disponen de un mínimo de años de experiencia en una materia, aunque puedan demostrar otras cualidades.
 * 
 * Nos han pedido diseñar una función para un software de reclutamiento, que va a filtrar todos los lenguajes de programación en los que no haya trabajado un candidato durante un tiempo determinado
 * 
 *
 * @param {array<object>} languages Array de objetos con los lenguajes de programación que conoce la candidata y sus años de experiencia
 * @param {number} minYears Años de experiencia mínimos que debe haber trabajado en los lenguajes de programación para darlos por válidos
 * 
 * @returns {array<string>} Array de strings  
 *  
 */

function filterProgrammingLanguages(languages, minYears) {

}

// Caso 1: Candidata con suficientes años de experiencia en algunos lenguajes
const candidate1 = [
    { name: 'JavaScript', years: 5 },
    { name: 'Python', years: 2 },
    { name: 'Java', years: 3 },
];
console.log(filterProgrammingLanguages(candidate1, 3)); // ["JavaScript", "Java"]

// Caso 2: Candidata con suficientes años de experiencia en todos los lenguajes. Debemos devolver un string con todos los lenguajes del array
const candidate2 = [
    { name: 'C++', years: 4 },
    { name: 'Ruby', years: 5 },
    { name: 'Go', years: 3 },
];
console.log(filterProgrammingLanguages(candidate2, 3)); // ["C++", "Ruby", "Go"]

// Caso 3: Candidata sin suficientes años de experiencia en ningún lenguaje
const candidate3 = [
    { name: 'JavaScript', years: 1 },
    { name: 'Python', years: 2 },
    { name: 'Java', years: 1 },
];
console.log(filterProgrammingLanguages(candidate3, 3)); // []

// Caso 4: Candidata con lenguajes y experiencia vacíos
const candidate4 = [];
console.log(filterProgrammingLanguages(candidate4, 3)); // []

// Caso 5: Candidata con lenguajes pero años mínimos requeridos es 0. Todos los lenguajes pasarán el filtro
const candidate5 = [
    { name: 'JavaScript', years: 2 },
    { name: 'Python', years: 3 },
    { name: 'Java', years: 1 },
];