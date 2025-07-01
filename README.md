# Evaluacion continua UF1845

## Ejercicio 1

Disponemos de una base de datos de presonas, representada por objetos donde cada persona es un nombre y su dni

Crea una función buscarNombrePorDNI(dni) que reciba un DNI como argumento, busque la persona correspondiente en el array, y devuelva el nombre si existe. Si no se encuentra ninguna persona con ese DNI, debe devolver un string vacío ("").


💡 Pistas
- Piensa que método de array te permite buscar un elemento en concreto dentro del array

## Ejercicio 2

Crea una función `filterProgrammingLanguages(languages, minYears)` que reciba un array de objetos, donde cada objeto representa un lenguaje de programación y los años de experiencia de una candidata en ese lenguaje. La función debe devolver un array con los nombres de los lenguajes en los que la candidata tenga al menos el número de años de experiencia especificado por `minYears`.

- Si ningún lenguaje cumple el requisito, debe devolver un array vacío.
- Si el array de lenguajes está vacío, debe devolver un array vacío.
- Si `minYears` es 0, debe devolver todos los lenguajes.

Ejemplo de uso:
```js
const candidate = [
  { name: 'JavaScript', years: 5 },
  { name: 'Python', years: 2 },
  { name: 'Java', years: 3 },
];
console.log(filterProgrammingLanguages(candidate, 3)); // ["JavaScript", "Java"]
```

### Ejercicio 3

Fíjate en este ejemplo

<img src="https://oscarm.tinytake.com/media/1783650?filename=1751364278277_TinyTake01-07-2025-12-04-35_638869610772624964.png&sub_type=thumbnail_preview&type=attachment&width=799&height=456" title="Powered by TinyTake Screen Capture"/><br><a href="https://www.tinytake.com">Powered by TinyTake Screen Capture</a>

Luego abre el fichero **ejercicio3.js** y escribe todo lo que puedas decir sobre el trozo de código que observas (usa comentarios). Puedes decir 5 características por fragmento de código