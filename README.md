# Evaluacion continua UF1845

## Ejercicio 1

Disponemos de una base de datos de presonas, representada por objetos donde cada persona es un nombre y su dni

Implementa la función `getPersonByIdCard` que reciba un DNI como argumento, busca la persona correspondiente en el array, y devuelva el nombre si existe. Si no se encuentra ninguna persona con ese DNI, debe devolver un string vacío ("").


💡 Piensa que método de array te permite buscar un elemento en concreto dentro del array

### Evaluación

- Si el DNI existe, la función devuelve el nombre correcto: 1.25 puntos
- Si el DNI no existe, la función devuelve un "": 1.25 puntos

## Ejercicio 2

Crea una función `filterProgrammingLanguages(languages, minYears)` que reciba un array de objetos, donde cada objeto representa un lenguaje de programación y los años de experiencia de una candidata en ese lenguaje. La función debe devolver un array con los nombres de los lenguajes en los que la candidata tenga al menos el número de años de experiencia especificado por `minYears`.

Ejemplo de uso:
```js
const candidate = [
  { name: 'JavaScript', years: 5 },
  { name: 'Python', years: 2 },
  { name: 'Java', years: 3 },
];
console.log(filterProgrammingLanguages(candidate, 3)); // ["JavaScript", "Java"]
```

💡Es un ejercicio complejo. Debes combinar **dos** métodos de array diferentes para obtener el resultado esperado.

### Evaluación

- Para cada caso que pase correctamente: 0.5 puntos.

### Ejercicio 3

Fíjate en este ejemplo

<img src="https://oscarm.tinytake.com/media/1783650?filename=1751364278277_TinyTake01-07-2025-12-04-35_638869610772624964.png&sub_type=thumbnail_preview&type=attachment&width=799&height=456" title="Powered by TinyTake Screen Capture"/><br>

Luego abre el fichero **ejercicio3.js** y escribe todo lo que puedas decir sobre los dos fragmentos de código (usa comentarios). Puedes decir 5 características por fragmento de código.

### Evaluación

- Para cada carecterística correcta del primer fragmneto de código: 0.5 puntos (máximo 5 afirmaciones)
- Para cada carecterística correcta del segundo fragmneto de código: 0.5 puntos (máximo 5 afirmaciones)