// Inserte el código aquí
let lista = [1, 2, 3, 4];

let impirmirLista = (miLista) => {
  let nuevaLista = [...miLista];
  miLista.push(5, 6, 7);
  console.log(miLista);
};
console.log(lista);
impirmirLista(lista);
// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };
