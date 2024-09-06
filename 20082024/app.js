let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("Ingresa tu edad"));
let peso = parseFloat(prompt("Ingresa tu peso(kg)"));
let estatura = parseFloat(prompt("Ingresa tu estatura(cm)")) / 100;

let imc = peso / (estatura * estatura);

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Peso: " + peso + " kg");
console.log("Estatura: " + estatura * 100 + " cm");
console.log("Masa corporal: " + imc.toFixed(2));

let clasificacion;
if (imc < 18.5) {
    clasificacion = 'eres más delgado de lo que deberías';
} else if (imc < 25) {
    clasificacion = 'estás saludable';
} else {
    clasificacion = 'tienes sobrepeso';
}

console.log("Tu IMC es " + imc.toFixed(2) + ", tu clasificación es: " + clasificacion);
