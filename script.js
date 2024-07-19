// function saludoConsola () {
//     console.log ("Hola mundo");
// }
// saludoConsola ();

// function saludoUser (nombre) {
//     console.log (`Hola, ${nombre}!`)
// }
// saludoUser (prompt ("Escribe tu nombre"));

// function calcularDoble (numero) {
//     return numero * 2;
// };

// // let resultadoDoble = calcularDoble (Math.floor ((Math.random ()*10)+1)); 
// console.log (calcularDoble(prompt("Escriba un numero para calcular el doble")));

// function calcularPromedio (a , b , c) {
//     return a+b+c / 3;
// }

// let promedioNumeros = calcularPromedio (4,5,6);
// console.log (promedioNumeros);

// function numeroMayor (a,b) {
//     return a > b ? a : b;
// }

// let mayorNumero = numeroMayor (4,6)
// console.log (mayorNumero);

// function multiNum (numero) {
//     return numero * numero ;
// }

// let dobleNumero = multiNum (4);
// console.log (dobleNumero);

//////////////////////

// function calcularIMC(altura, peso) {
//     var imc = peso / (altura * altura);
//     return imc;
//   }



// function calculoPerimetroYarea (altura,anchura) {
//   area = altura * anchura
//   perimetro = 2*(altura+anchura);
//   return area, perimetro
// }
// function salaCircular (radio) {
//   let pi = 3,14
//   area = pi * (radio * radio)
//   perimetro = 2 * pi * radio
//   console.log (area)
//   console.log (perimetro)
// }

// function tablaMultiplicar (numero) {

// }

////////////////////////////////////


// let listaGenerica = []; 
// let lenguajesDeProgramacion = [ 'JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// lenguajesDeProgramacion.push ('Java', 'Ruby' , 'GoLang');

// console.log (lenguajesDeProgramacion.length);

// function mostrarLista () {
//     for (let i=lenguajesDeProgramacion.length-1; i >= 0; i--) {

//     console.log (lenguajesDeProgramacion[i]);
//     }
// }; 

// mostrarLista ();

// listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];
// let sumatoria = 0
// let promedio = 0
// function promedioLista () {
//     for (i=0; i < listaDeNumeros.length; i++) {
//         sumatoria = sumatoria + listaDeNumeros[i]
//     }
//     promedio= sumatoria / listaDeNumeros.length
//     console.log (promedio);

// }

// promedioLista();


// function encontrarIndiceElemento(lista, elemento) {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === elemento) {
//         return i; // Retorna el índice del elemento encontrado
//       }
//     }
//     return -1; // Retorna -1 si el elemento no se encuentra en la lista
//   }


//   function retornarCuadradosLista (listaNumeros) {
//     let nuevaLista = [];
//     for (let i=0; i < listaNumeros.length;i++) {
//        let cuadrado = listaNumeros [i] * listaNumeros[i] ;
//        nuevaLista.push(cuadrado);
//     } 
//     return nuevaLista;
//   }

//   let listaCuadrados = [2,4,6,9]; 
// console.log(`Los cuadrados de la lista: ${listaCuadrados} son: ${retornarCuadradosLista(listaCuadrados)}`);