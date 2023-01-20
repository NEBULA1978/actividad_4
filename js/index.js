/*
   Utilizando: -Primero forEach y luego for | innerHTML
   Sin usar:   -insertAdjacentHTML, find, findindex
               -concat, indexOf, map
               -el operador de propagación ([...])

   El resultado correcto final es:
   ["Ataúlfo","Atanagildo","Ervigio","Teodorico"]
*/

const uno = ["Ataúlfo", "Ervigio", "Atanagildo", "Ervigio"];
const dos = ["Atanagildo", "Ervigio", "Teodorico", "Ataúlfo"];
let final = [];

uno.forEach(leer);
dos.forEach(leer);


function leer(valor) {
   let repetido = false;
   for (let k = 0; k < final.length; k++) {
      if (valor === final[k]) {
         repetido = true;
         break;
      }
   }
   if (!repetido) {
      final.push(valor)
      const anterior = document.querySelector("div").innerHTML;
      document.querySelector("div").innerHTML = `
    <div>
      ${valor}
    </div>${anterior}`
   }
}


// EJEMPLO IA

// let resultado = [];
// const div = document.getElementById("resultado");
// uno.forEach(element => {
//    if (!resultado.includes(element)) {
//       resultado.push(element);
//    }
// });
// for (let i = 0; i < dos.length; i++) {
//    if (!resultado.includes(dos[i])) {
//       resultado.push(dos[i]);
//    }
// }

// const orden = ["Teodorico", "Atanagildo", "Ervigio", "Ataúlfo"];
// resultado.sort((a, b) => orden.indexOf(a) - orden.indexOf(b));

// resultado.forEach(element => {
//    div.innerHTML += `<p> ${element} </p>`;
// });

// En este caso se crea una constante llamada "orden" que contiene el orden especificado para los elementos.Luego se utiliza el método sort() y se pasa una función de comparación personalizada que compara los elementos según su posición en la lista "orden".Después se utiliza el forEach para iterar sobre el resultado ordenado y se agrega cada elemento al innerHTML de la variable "div" utilizando el método += y un template string.
