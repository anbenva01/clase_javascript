

//variables
let a = 5;
let b =6;

let suma = a+b;
console.log('el resultado de la suma es'+suma);

let nombre = 'roberto';
let nombre_dos = nombre;

nombre_dos= 'carlos';

console.log('primer nombre',nombre);
console.log('segundo nombre',nombre_dos);

//notaciones de variables

camelCase = 5;
snake_case = 5;
Pascal_case = 5;

let nombre_completo = 'Andres camilo benjumea';

// no puedes iniciar con numero, no puedes tener guion medio

//constantes
const PI = 3.1416;
const COLOR = 'rojo';

//tipos datos

//number

let n = 123;
console.log(n);

//valores especiales numericos.. Infinity y NaN
console.log(1/0);

//NaN es un error de calculo pero no es un error
console.log('texto'/9);

//NaN es pegajoso. cualquier operacion con NaN devuelve un NaN
console.log('texto' - 2 * 5);

// tipo string

let ag = 'a';
let bg = "k";

console.log('roberto alias "robert"')
console.log("i can't do it")
console.log(`hola mundo`)

let name = "roberto";
console.log(`hola ${name}`)

// tipo booleano

let verdad = true;
let faslo = false;
let mayor = 4>5;

// valor null - valor especial que no pertenece a ningun tipo de dato anterior.
// forma un tipo propio separado que contiene solo el valor null

let edad = null;
console.log(edad);

// en js, null no significa un objeto, no existente
// en js, null es un valor especial que significa nada, vacio o desconocido.

// valor undefined -  valor especial que no pertenece a ningun tipo de dato anterior.
// undefined significa valor no asignado

let valor_no_asignado;
console.log(valor_no_asignado);

//operador typeof o funcion que devuelve un tipo de dato
console.log(typeof(undefined))
console.log(typeof(0))
console.log(typeof(true))
console.log(typeof(3.14))
console.log(typeof('hola'))
console.log(typeof(alert))
console.log(typeof(null))

let valor = true;
valor = String(false);
valor = String(undefined);
valor = String(null);

//conversion a number

//conversion numericas ocurren automaticamente en funciones matematicas y expresiones

console.log('6'/'3');
console.log(1+'2');
console.log('1'+2);

valor = Number(undefined);
valor = Number(null);
valor = Number(true);
valor = Number(false);
valor = Number('');
valor = Number('hola muno');
console.log(valor)

//conversion booleana
valor = Boolean(undefined);
valor = Boolean(null);
valor = Boolean(true);
valor = Boolean(false);
valor = Boolean('');
valor = Boolean('hola muno')
console.log(valor)

//comparaciones entre diferentes tipos

console.log('2'>1)
console.log('01' == 1)
console.log(true>0)
console.log(false>0)
console.log('hola'>1)
console.log(null == undefined)
console.log(0 == false)
console.log('0' == false)

//condiciones
/*if(condicion){

}else if(condicion){

}
if(condicion) console.log('mensaje');
*/

/*if('0'){
    console.log('entro')
}*/

//condicion ternario
console.log((4>5)? 'verdad' : 'falso');

//while
/*while (condition) {
    
}*/
/*do {
    
} while (condition);*/

//for
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
}*/

//switch
a = 2+1;
switch (a) {
    case 3:
        console.log('no es')
        break;
    case 4:
        console.log('es')
        break;

    default:
        break;
}

//funciones