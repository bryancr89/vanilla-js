// Inserte el código aquí

let clonarArreglo = (miLista) => {
  let lista = [1, 2, 3, 4];
  let resultado = clonarArreglo(lista);
  return resultado;
};

// 2. Escribir una función llamada clonarObjeto.
//    * Dado un objeto, retorna un objeto nuevo con todos los elementos del objeto original.

let clonarObjeto = (mariam) => {
  let Mariam = {
    nombre: "Mariam",
    edad: 20,
  };
  otraMariam = clonarObjeto(Mariam);
  return nuevaMariam;
};
// 3. Escribir una función llamada sumar.
//    * Debe recibir N parametros (rest operator)
//    * Retorna la suma de todos los parametros

let sumar = (...N) =>{

  return N.reduce((acumulador, valorActual) => {
   return acumulador + valorActual},0)
}

let suma = sumar(1,2,3,4)


let saludar = 




// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };
