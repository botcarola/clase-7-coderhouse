function saludar () {
    return `Hola`
}

const saludo = saludar()

console.log(saludo)

// FUNCIONES DE ORDEN SUPERIOR
// pueden retornar funciones y pasar funciones como parámetro

let edadLegal = 18

const chequearSiEsLegal = (edadDelUsuario, edadDeLegalidad) => {

    if( edadDelUsuario >= edadDeLegalidad ){
        return "Es mayor de edad"
    } 
    else {
        return "Es menor de edad"
    }
}

const comprobarEdadDeAriel = chequearSiEsLegal(40, edadLegal) // retornamos una función
const comprarEdadCarola = chequearSiEsLegal(27, edadLegal) // retornamos una función

edadLegal = 18 + 20 // cambio de valor de variable global (PELIGRO!!!)

const comprobarEdadDeJorge = chequearSiEsLegal(25, edadLegal) // retornamos una función
console.log(comprobarEdadDeJorge)

// 2 ASPECTO: PUEDEN PASARSE FUNCIONES COMO PARÁMETRO

const saludoFormal = () => {
    console.log("Buenas noches querido estudiantes")
}

const saludoInformal = () => {
    console.log("ke ase crá")
}

const comprobarSaludo = (tipoDeSaludo, metodoFormal, metodoInformal) => {

    if (tipoDeSaludo === "formal"){
        metodoFormal()
    }
    else if(tipoDeSaludo === "informal"){
        metodoInformal()
    }
}

const saludoPiola = comprobarSaludo("informal", saludoFormal, saludoInformal)

 // MÉTODOS DE ARRAYS


 const estudiantes = ["Mateo", "Mitchell", "Jorge", "Azucena", "Paula", "Malena", "Fernandos"]
 const numeros = [7, 3, 22, 14, 89, 100, 5]
 let clientes = [
    {
        nombre: "Carola",
        edad: 27,
    },
    {
        nombre: "Daniel",
        edad: 20,
    },
    {
        nombre: "Agustina",
        edad: 10,
    },
    {
        nombre: "Lucas",
        edad: 16,
    },
]

// métodos arrays

//EJEMPLO DE FUNCION FLECHA, PARA QUE VEA CÓMO SE HACE UN CALLBACK
// CALLBACK ES UNA FUNCIÓN UQE SE PASA COMO PARÁMETRO A OTRA FUNCIÓN

// const saludar = () => {

// }

// forEach() --> EJECUTAR UNA FUNCIÓN POR CADA UNO DE LOS ELEMENTOS DEL ARRAYS

estudiantes.forEach(( elementoActual, i) => {
    console.log(elementoActual)
})

// forEach recibe un callback -obligatorio- y hasta 3 parametros en su callback
// se escriben en orden y se precisan de los parámetros anteriores SIEMPRE

// find()

const numeroMenor = numeros.find((curr) => {
    return curr > 1 && curr < 10
})

console.log(numeroMenor)

// DEVUELVE EL PRIMER VALOR QUE CUMPLA CON LA CONDICIÓN

// filter() 
// MÉTODO QUE GENERA UN NUEVO ARRAY EN BASE A UNA CONDICIÓN
// LOS ELEMENTOS SE SOMETEN ANTE ESTA CONDICIÓN Y LOS QUE LA PASAN, FORMAN PARTE DEL NUEVO ARRAY
// RECIBE HASTA 3 PARÁMETROS, SIENDO CURRENT O ELEMENTO OBLIGATORIO
// los parámetros se ponen en orden e index y array son optativos

const clientesMayoresDeEdad = clientes.filter((elemento) => {
    return elemento.edad > 18
})

console.log(clientes)
console.log(clientesMayoresDeEdad)
console.log(clientes)

// some()
//  COMPRUEBA SI AL MENOS UN ELEMENTO CUMPLE CON LA CONDICIÓN
//  devuelve un booleano
// some significa algunos

console.log(clientes.some( (elemento) => {
    return elemento.edad < 20
}))

// también tiene parámetros opcionales: elemento, index, array
// map
// map genera un nuevo array sobre los elementos que itera y también ejecuta una función
// recibe hasta tres parámetros: elemento, index, array

const numerosMultiplicados = numeros.map((curr) => {
    return curr * 1000
})

console.log(numerosMultiplicados)
console.log(numeros)


// reduce()
// ejerce una función sobre cada elemento del array devolviendo como resultado un único valor
// recibe hasta 4 parámetros: acumuladora, valor actual, indice y array
// acc, curr, i, arr

const valorTotal = numerosMultiplicados.reduce((acc, elemento) => {
    return acc + elemento
})

console.log(valorTotal)

// let acc = 0

// for(let i = 0; i < 10; i++){
//     acc = acc + i
//     acc = 0 + 0
//     acc = 0 + 1
//     acc = 1 + 2
//     acc = 3 + 3
//     acc = 6 + 4
// }

// console.log(acc)

const nombresAHTML = estudiantes.reduce((acc, curr) => {
    return acc += `
    <p>${curr}</p>
    `
})

console.log(nombresAHTML)

// sort()
// ordena los elementos y devuelve un array ordenado
// modifica al array original

console.log(numeros)

//  DE MENOR A MAYOR
console.log(numeros.sort((a, b) => {
    return a - b
}))

// DE MAYOR A MENOR
console.log(numeros.sort((a, b) => {
    return b - a
}))

// DE MENOR A MAYOR

console.log(clientes)

clientes.sort( (a, b) => {

    if(a.edad > b.edad){
        return 1
    }
    else if( a.edad < b.edad){
        return -1
    }
})

console.log(clientes)

// de mayor a menor

clientes.sort( (a, b) => {

    if(a.edad > b.edad){
        return -1
    }
    else if( a.edad < b.edad){
        return 1
    }
})

// Math

console.log(Math.E) // valor constante de Euler
console.log(Math.PI) // valor de PI

console.log(Math.min(10, 2, 1, -Infinity)) // devuelve el número más pequeño
console.log(Math.max(1000, 10000000, 2, Infinity)) // devuelve el número más grande

console.log(Math.sqrt(9)) // devuelve la raiz cuadrada
console.log(Math.sqrt(-1))// NOT A NUMBER NAN

console.log(Math.random()) // genera un número aleatorio entre 0 y 1 si no le paso parámetro
console.log(Math.random() * 1000) // me genera un número aleatorio entre 0 y 1000
// console.log(Math.random() * 10 + 50) // me genera un número aleatorio entre 0 y 60
console.log(Math.random() * 50 + 10) // 


console.log(Math.round(Math.random() * 1000))// redondea al número más cercano
console.log(Math.round(9.9))
console.log(Math.ceil(9.9)) //redondea para arriba siempre
console.log(Math.floor(9.9))//redondea para abajo siempre

// DATE

console.log(new Date()) // nos genera la fecha y tiempo actual UTC
console.log(new Date(1994, 8, 26)) // me devuelve la info de ese día // los meses se calculan desde 0 a 11, en donde 0 es enero y 11 es diciembre
console.log(new Date(1996, 5, 15, 14, 36, 59))
console.log(new Date("September 15, 2020 10:40"))

//obtener un valor

console.log("September 15", 2020, 14,30)
const fecha = new Date(2015, 4, 29, 20, 30)
const dia = fecha.getDay()
console.log(dia) // devuelve el día de la semana
console.log(fecha.getMonth()) // devuelve el mes
console.log(fecha.getFullYear()) // devuelve el año

// fecha y horario local

console.log(fecha.toDateString()) // devuelve la fecha en formato inglés americano
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleString())
console.log(fecha.toTimeString())
