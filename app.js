// Crear un objeto literal. Con minimo 5 propiedades. Que contengan al menos 2 funciones. 
// Y llamar las funcioes en consola , utilizando las demas propiedades del objeto.
// let perro={
//     name:"castor",
//     raza:"Chihuahua",
//     edad:1,
//     color:"negro",
//     size:"pequeño",
//     Dato:function(){return`el nombre de perro es ${this.name} es de raza ${this.raza}`},
//     carasteristicas: function(){ return`el perro es de color ${this.color} y es de tamaño ${this.size}`}
// }
// console.log(perro);
// console.log(perro.Dato());
    

// Vamos a crear un algoritmo. Que lista del 1 al 30. Si el numero es multiplo de 3, 
// pinta fizz. Si es multiplo de 5 pinta buzz. Y si es multimo de 3 y de 5 pinta fizz buzz. 

// function multiplos(numero){
//     for(i=1;i<=numero;i++){
//        if((i % 3)==0){
//         console.log(i+" "+"fizz");
//        }if(( i % 5)==0){
//         console.log(i+" "+"buzz")
//        }if(( i % 3)==0 && (i % 5)==0){
//         console.log(i+" "+"fizz buzz");
//        }
//     }
// }
// multiplos(30);


// function contructor(nombre,apellido){
//     this.nombre=nombre;
//     this.apellido=apellido;
// }
// contructor.prototype.saludar=function(){console.log('ladra')};
//  const nume1=new contructor("perro","chiguagua");
//  console.log(nume1);
//  nume1.saludar();

// const producto=[1,2,3,"err","werw"];
// producto.forEach(element => {
//     console.log(element);
// });
// producto.forEach(function(element,index) {
//     console.log(element,index);
    
// });

// class animal{
//     constructor(nombre,genero){
//         this.nombre=nombre;
//         this.genero=genero;
        
//     }
//     sonar(){
//         console.log("ladra");
//     }
    
// }
// const pupe=new animal("sada","sdasd");
// console.log(pupe);

// class perro extends animal{
//     constructor(nombre,genero,tamanio){
//         super(nombre,genero);
//         this.tamanio=tamanio;
//         this.raza=null;
//     }
//     ladrar(){
//         console.log("ladrando");
//     }
//     get getters(){
//         this.raza=raza;

//     }
//     set settter(raza){
//         this.raza=raza;
//     }
// }
//  const pupe1=new perro("laica","hembra","peque;o");
//  console.log(pupe1.raza);
//  pupe1.settter="aleman";
//  console.log(pupe1.raza);

// console.log(pupe1);

// const list1=[1,2,3,4,5];
// const lis2=[6,7,8,9,0];
//     console.log(...list1,...lis2);


// repeat(13, 5) ➞ [13, 13, 13, 13, 13]



// (function(){
//     console.log("hola");
// })();

// (function(a,b,c){
//     console.log(c);
    
// })(console,window,document);

// 1) Programa una función que cuente el número de caracteres
//  de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function cadenas(palabra){
//     if(typeof(palabra)=="string"){
//        console.log (palabra.length);

//     }else{
//             console.log(`el dato ingresado es ${typeof(palabra)}, no es un string`);
//     }
// }
// cadenas("Hola Mundo");
// 2) Programa una función que te devuelva el texto recortado según el 
// número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function recortar(cadena,numero){
//    console.log(cadena.slice(0,numero));

// }
// recortar("Hola Mundo", 4);
// // 3) Programa una función que dada una String te devuelva un Array de textos separados
// //  por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function recortar(cadena1,numero1){
//     console.log(cadena1.split(numero1));
 
//  }
//  recortar('hola que tal', " ");


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
//  devolverá Hola Mundo Hola Mundo Hola Mundo.

// function repetir(texto,veces){
//     console.log(texto.repeat(veces));
// }
// repetir(' Hola Mundo ', 3);

// function repetir(texto,veces){
//     for(i=0;i<veces;i++){
//         console.log(`${texto} ${i}`);
//     }
   
// }
// repetir(' Hola Mundo ', 3);

// 5) Programa una función que invierta las palabras de una cadena
//  de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
//  function invertirCadena(cadena){
//  if(cadena==undefined){
//     console.warn("ingrese el string a revertir")}
//  if(typeof(cadena)=="string"){
//             space=cadena.split("");
//             invertir=space.reverse();
//             convertircadena=invertir.join("")
//             console.log(convertircadena);}
//  else{
//  console.log(`el dato ingresado es ${typeof(cadena)}, no es un string`);
//         }

//  }
//  invertirCadena("Hola Mundo" )

// 6) Programa una función para contar el número de veces que se repite 
// una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

//  revisar esta mal
// function contarPalabras(palabra){

//     palabra=palabra.split(" ");
//     for (i=0;i<palabra.length;i++){
//         // console.log(i);
//         nuevo=palabra.indexOf("hola",i); 
        
//     }
//     console.log(nuevo);
    
// }
// contarPalabras("hola hola hola hola hola hola mundo")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// function palindromo(texto){
     
//     reves=texto.split("").reverse("").join("");
//     console.log(reves)
//     if(reves== texto){
//         console.log("es plalindromo")
//     }else{
//         console.log("no es palidnromo")
//     }
    
// }
// palindromo("salasw");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// function eliminarPatron(dato,patron){
//     console.log(dato.replace(new RegExp(patron,"ig"),""));
// }
// eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz","xyz")

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
//  function numeroRandom(){
//     let numerorandon;
//     numerorandon=Math.random(numeroRandom)*100;
//     numerorandon=Math.round(numerorandon)+500;

//     console.log(numerorandon);

//  }
//  numeroRandom()
// 10) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// function capicua(numbercapicuo){
//     let numberreves;
//     numbercapicuo=numbercapicuo.toString();
//     numberreves= numbercapicuo.split("").reverse("").join("");
//     console.log(numberreves);

// }
// capicua(312312)
// 11) Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto 
// de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) 
// devolverá 120.

// function factorial(variable){
//     let factorial=1;
// for (i=variable;i>1;i--){
//     factorial= factorial*i;
// }
// console.log(factorial);
// }
// factorial(5);

// 12) Programa una función que determine si un número es 
// primo (aquel que solo es divisible por sí mismo y 1) o no, pe.
//  miFuncion(7) devolverá true.

// function primos(numero){

//     let divisible=false;
//     for(i=2;i<numero;i++){
//         if ((numero % i)===0){
//             divisible=true;
//             break;
//         }
    
//     }
//     return (divisible)
//         ? console.log(`el numero ${numero} NO es primo`)
//         : console.log(`el numero ${numero} es primo`)
// }
// primos(2);


// 13) Programa una función que determine si un número es par o impar, pe. 
// miFuncion(29) devolverá Impar.




// 14) Programa una función para convertir grados Celsius a Fahrenheit y 
// viceversa, pe. miFuncion(0,"C") devolverá 32°F.



// 15) Programa una función para convertir números de base binaria a decimal 
// y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// 16) Programa una función que devuelva el monto final después de aplicar un 
// descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

// function porcentaje(monto,descuento){
// desc=monto*(descuento/ 100);
// console.log(monto-desc)
// }
// porcentaje(1000,20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado 
// hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// new date().getTime()

// 18) Programa una función que dada una cadena de texto cuente el número de vocales
//  y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// 19) Programa una función que valide que un texto sea un nombre válido, pe.
//  miFuncion("Jonathan MirCha") devolverá verdadero.

// 20) Programa una función que valide que un texto sea un email válido, pe.
//  miFuncion("jonmircha@gmail.com") devolverá verdadero.

// 21) Programa una función que dado un array numérico devuelve otro array con 
// los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// 22) Programa una función que dado un array devuelva el número mas alto 
// y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

// 23) Programa una función que dado un array de números devuelva un objeto 
// con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
//  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// function paresEInpares(arreglo){
// let pares=[];
// let inpares=[];
// for (i=0;i<arreglo.length;i++){
//     if((arreglo[i]% 2)==0){
//         if (arreglo[i]!==0){
//         pares.push(arreglo[i]); } 
//     }else{
//         inpares.push(arreglo[i]); 
//     }
    
// }
// console.log(pares)
// console.log(inpares)
// }
// paresEInpares([1,2,3,4,5,6,7,8,9,0])

// 24) Programa una función que dado un arreglo de números devuelva 
// un objeto con dos arreglos, el primero tendrá los numeros ordenados
//  en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
//  devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe.
//  promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.


// 27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los 
// siguentes datos: id de la película en IMDB, titulo, director, año de estreno,
//  país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

//   class película{
//     constructor(id,titulo,director,estreno,origenPais,genero){
//         this.id=id;
//         this.titulo=titulo;
//         this.director=director;
//         this.estreno=estreno;
//         this.origenPais=origenPais;
//         this.genero=genero;
//     }
//   }
  
// promesas

// function sum(valor){
   
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve({
//             valor,
//             result:valor*valor
//             })
//         }, 0);
//     });
// }
// sum(0)
// .then((obj)=>{
// console.log("inicio ");
// console.log(`: ${obj.valor},${obj.result} `);
// return sum(1);
// })
// .then((obj)=>{
//     console.log(` ${obj.valor},${obj.result} `);
//     return sum(2);
// })
// .then((obj)=>{ 
//     console.log(`${obj.valor},${obj.result} `);
//     return sum(3);
// })
// .then((obj)=>{
//     console.log(` ${obj.valor},${obj.result} `);
//     return sum(4);
// })
// .then((obj)=>{
//     console.log(`${obj.valor},${obj.result} `);
//     return sum(5);
// })
// .then((obj)=>{
//     console.log(` ${obj.valor},${obj.result} `);
//     return sum(6);
// })
// .catch( err=> console.error(err));

// // callback
// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);


// /* asyncm await */
// function sum(valor){
//  return new Promise((resolve,reject)=>{
// setTimeout(() => {
//  resolve({
//  valor,
//  result:valor*valor
//  })
//  }, 0);
// });
// }

// async function funtionAsincrona(){
//     try {
//         console.log("inicio")
//         let obj= await sum(0);
//         console.log(` asyn funtion ${obj.valor} ${obj.result}`);
//         console.log("inicio")
//          obj= await sum(1);
//         console.log(` asyn funtion ${obj.valor} ${obj.result}`);
//         console.log("inicio")
//          obj= await sum(2);
//         console.log(` asyn funtion ${obj.valor} ${obj.result}`);
//         console.log("inicio")
//          obj= await sum(3);
//         console.log(` asyn funtion ${obj.valor} ${obj.result}`);
//         console.log("inicio")
//          obj= await sum(4);
//         console.log(` asyn funtion ${obj.valor} ${obj.result}`);
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// funtionAsincrona()

// Iterables & Iterators 
// const iterable=[1,2,3,4,5,6,7];
//  const iterador=iterable[Symbol.iterator]();

//  let next=iterador.next();

//  while (!next.done) {
//     console.log(next.value);
//     next=iterador.next();
    
//  }


// 11. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el
// número efectivamente esté en ese rango, si no lo está imprima un mensaje de
// error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si
// está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.


// function calificacion(){
//     let nota=prompt("ingrese la calificadion");
//     nota=Number(nota);
//     if (nota>=1 && nota<=10){
//         if(nota<6){
//             alert("Reprobado")
//         }if(nota>=6 && nota<=8){
//             alert("Regular")
//         }if(nota===9){
//             alert("Bien")
//         }if(nota===10){
//             alert("excelente")
//         }
//     }
//     else{
//         alert(" ERROR ; ingrese un rango de nota entra 1 y 10");
//     }
// }
//  calificacion();
// 12. Escribe un programa que responda a un usuario que quiere comprar un helado en
// una conocida marca de comida rápida, cuánto le costará en función del topping
// que elija.
// • El helado sin topping cuesta 50 MXN.
// • El topping de oreo cuesta 10 MXN.
// • El topping de KitKat cuesta 15 MXN.
// • El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le
// indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
// precio del helado sin ningún topping.

// function herlado(){
//  const helados=[{name:"oreo",
//                  precio:10},
//                 {name:"kitkat",
//                   precio:15}, 
//                 {name:"brownie",
//                  precio:20},
//                 {name:"sin topping",
//                  precio:50
//                 }];

//                  let entrada=prompt("eliga un helado ");
//                  entrada=entrada.toLowerCase();
//                  let array=[];

//                 if (entrada!== ' '){
//                     for (i=0;i<helados.length; i++){
//                         if ((helados[i].name)===entrada){
//                             array.push(helados[i].name)
//                             console.log(array[0])
//                             console.log(helados[i].precio+ "MXN ")
//                             break;
//                         }
//                     }
//                  }
//                  }
    
//     herlado()


// 13. Un conocido portal de educación en tecnología está ofreciendo programas para
// aprender a desarrollar aplicaciones. Escribe un programa que le indique a la
// persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción
// elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo
// mensual:
// • Course: $4999 MXN
// • Carrera $3999 MXN
// • Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
// correspondiente al precio final.
// • Beca Facebook: 20% de descuento.
// • Beca Google: 15% de descuento.
// • Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto
// gastaría en total por el curso elegido, tomando en cuenta las siguientes
// duraciones:
// • Course: 2 meses
// • Carrera 6 meses
// • Master: 12 meses






// 14. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
// distancia recorrida por un vehículo con cargo extra por los litros consumidos,
// tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser
// 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es
// mayor la cantidad de litros consumidos se ha de añadir 10 al total.
// Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros
// consumidos.


// const btn = document.getElementById('btnCall');

// const callConsole = () => {
// const arrayNames = ['Diego', 'Jose', 'Pedro'];

//   }
// btn.addEventListener('click', callConsole);


// const add=document.querySelector("section");
// const ulList=document.createElement("ul"),list=document.createElement("li"),
// list2=document.createElement("li");
// contenido=document.createTextNode("secc");
// contenido2=document.createTextNode("secc2");

// list.appendChild(contenido)
// list2.appendChild(contenido2)

// add.appendChild(ulList);
// ulList.appendChild(list)
// ulList.appendChild(list2)

// add.setAttribute("alt","animal");
// add.classList.add("seccion")


// console.log(add);

// const circe=document.createElement("ul");
// const arrglo=[1,2,3,4,5,6,7,8,9,10,11,12,13,141,15,16,17,18,19,20];
// const fragmento=document.createDocumentFragment();

// arrglo.forEach(el =>{
//  const li=document.createElement("li");
//  li.textContent=el;
//  fragmento.appendChild(li);
// });

// circe.appendChild(fragmento),
// document.body.appendChild(circe);


const template=document.getElementById("template").content;
 const fragmen=document.createDocumentFragment();
 const card=document.querySelector(".cards")
 console.log(card)

 const array=[{name:"oreo",
                  precio:"10"},
                  {name:"kitkat",
                   precio:"15"}, 
                  {name:"brownie",
                   precio:"20"},
                  {name:"sin topping",
                  precio:"50"
                  }];
array.forEach((el) =>{
template.querySelector("img").setAttribute("alt",el.name);
template.querySelector("figcaption").setAttribute("src",el.precio);

let clone=document.importNode(template,true);
fragmen.appendChild(clone);
console.log(fragmen)
});
card.appendChild(fragmen)