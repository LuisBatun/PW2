function numeroRandom() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

function pedirNumero() {
    return parseInt(prompt("Ingresa un número del 1 al 10:"));
}

function juego() {
    let numeroMaquina = numeroRandom();

    let vidas = 3;

    do{
        numeroUsuario = pedirNumero();
        if (numeroMaquina !== numeroUsuario) {
            vidas--;
            if (vidas >= 1){
                alert("Fallaste, intenta nuevamente. Tus vidas restantes son: " + vidas);
            }else{
                alert("Fallaste. Tus vidas restantes son: " + vidas);
            }
        }
    
        if (numeroMaquina === numeroUsuario) {
            alert("¡Ganaste! ¡FELICIDADES!");
            console.log("Ganaste");
            return;
        }
    }while(vidas !== 0)
    alert("¡Perdiste!. Una lastima, el número era: " + numeroMaquina);
    console.log("Perdiste. El número era: " + numeroMaquina);
}

juego();
