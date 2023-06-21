
const solicitudPromesa = fetch ("https://poeapi.co/api/v2/berry/1");
 solicitudPromesa.then(function(response){
  console.log(response.text);
 });















// let hola = () => {
//   console.log("Hola Mundo");
// };

// let intervalID = setInterval(hola, 1000);


// setTimeout(() => {
//   console.log("Fin");
//   clearInterval(intervalID);
// }, 3500);

// console.log("Empezamos") //caja 1-rápida
// setTimeout(hola, 1000) // caja 2
// console.log("terminamos") // caja 1-rápida

// let lista = [1, 2, 3, 4];

// let impirmirLista = (miLista) => {
//   let nuevaLista = [...miLista];
//   miLista.push(5, 6, 7);
//   console.log(miLista);
// };
// console.log(nuevaLista);
// impirmirLista(lista);
// FILTER FUNCTION

// function esCarro(elementoActual) {
//   return elementoActual === "carrorojo";
// }

// function noEsCarro(elementoActual) {
//   return elementoActual != "carrorojo";
// }

// let vehiculos = ["carrorojo", "carrorojo", "taxi", "bus", "tren"];
// let listaCarros = vehiculos.filter(esCarro);
// let otrosVehiculos = vehiculos.filter(noEsCarro);
// console.log(listaCarros);
// console.log(otrosVehiculos);

// MAP FUNCTION

// function hacerFiletes(elementoActual) {
//   let respuesta = "";
//   if (elementoActual === "vaca") {
//     respuesta = "filet de res";
//   } else if (elementoActual == "pescado") {
//     respuesta = "filet de pescado";
//   } else {
//     respuesta = "no es";
//   }
//   return respuesta;
// }

// let filetes = ["vaca", "vaca", "pescado", "pescado", "vaca", "kiwii"].map(
//   hacerFiletes
// );
// console.log(filetes);

// REDUCE FUNCTION
// function sumaTotal(acumulador, valorActual) {
//     console.log()
//     console.log({acumulador})
//     console.log({valorActual})
//     let sumaActual = acumulador + valorActual
//     console.log({sumaActual})
//     return sumaActual;
// }

// let Suma = [1,2,3,4,5].reduce(sumaTotal, 0)
// console.log(Suma)
