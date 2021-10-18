const nombre = "FRANCISCO";


const nombre = "PANCHO";
console.log("HOLA");

var apellido = "Boisier";

console.log(apellido)

var arreglo = [1,2,3,4,5,6,7,8,9,10];
            // 0,1,2,3,4,5,6,7,8,9

console.log(arreglo[3]);

var usuario = {
    nombre: "Francisco",
    apellido: "Boisier",
    edad: "23",
    direccion: {
        calle: "Calle falsa",
        numero: "123"
    },
    hobbys: ["comer", "dormir", "jugar"]
}

// {} = objeto .
// [] = arreglo []

// console.log(usuario);

// console.log(usuario.direccion.numero);

console.log(usuario.hobbys);
for (const pasatiempos of usuario.hobbys){
    console.log(pasatiempos);
}

function saludar(){
    console.log("Hola");
}

saludar();

let francisco = saludar;

francisco();


function saludar(nom){
    console.log("Hola " + nom);
}

saludar("Francisco");
saludar("Pancho");
saludar("Javier");
saludar("Den");

function generarArregloMeses(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses;
}

let mesesDelAnio = generarArregloMeses();
console.log(mesesDelAnio);

function crearZapato(color, tela){
    if (color == "" || tela == ""){
        return "ZAPATO VACIO";
    }

    if (color != "" && tela != ""){
        return "ZAPATO " + color + " - " + tela;
    }
}

console.log(crearZapato("",""));
console.log(crearZapato("Negro","Gruesa"));
console.log(crearZapato("Rojo","Delgada"));
console.log(crearZapato("Amarillo","Gamuza"));

