// Crear un objeto literal. Con minimo 5 propiedades. Que contengan al menos 2 funciones. 
// Y llamar las funcioes en consola , utilizando las demas propiedades del objeto.

let perro={
    name:"castor",
    raza:"Chihuahua",
    edad:1,
    color:"negro",
    size:"pequeño",
    Dato:function(){`el nombre de perro es ${this.name} es de raza ${this.raza}`},
    carasteristicas: function(){`el perro es de color ${this.color} y es de tamaño ${this.size}`}
}
    
console.log(perro.Dato())

// Vamos a crear un algoritmo. Que lista del 1 al 30. Si el numero es multiplo de 3, 
// pinta fizz. Si es multiplo de 5 pinta buzz. Y si es multimo de 3 y de 5 pinta fizz buzz. 
function multiplos(numero){
    for(i=1;i<=numero;i++){
       if((i % 3)==0){
        console.log(i+"fizz");
       }else if(( i % 5)==0){
        console.log(i+"buzz")
       }else if (( i % 5)==0 && (i % 3)==0){
        console.log(i+"fizz buzz");
       }


    }
}
multiplos(30);