var jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(danio){
        if (jugador.energia > 0){
            console.log('Tu energía es de: ' + (jugador.energia -= danio));
        }else{
            console.log('Su vida se redujo a: ' + jugadorvida - 1);
        }
    },
    recuperarEnergia: function(energiaAdicional){
        if (jugador.energia < 100){
            if ((jugador.energia += energiaAdicional) < 100){
                console.log('Tu energía adicional es de: ' + (jugador.energia += energiaAdicional));
            }else{
                console.log('Alcanzaste tu límite máximo de energía adicional');
            }
        }else{
            console.log('Alcanzaste tu límite máximo de energía');
        }
    },
    perderVida: function(menosVida){
        if (jugador.vidas > 0){
            console.log('Te quedan: ' + (jugador.vidas -= menosVida) + ' vidas');
        }else{
            console.log('No te quedan más vidas');
        }
    },
    recuperarVida: function(masVida){
        if (jugador.vidas > 0 && vidas <= 99){
            console.log('Te quedan: ' (jugador.vidas+= masVida));
        }else{
            console.log('No te quedan más vidas');
        }
    },
};

jugador.nombre = 'Antonieta';
jugador.perderVida(1);
jugador.perderEnergia(10);
jugador.perderEnergia(5);
jugador.perderEnergia(15);
jugador.perderEnergia(20);
jugador.recuperarEnergia(10);
jugador.perderEnergia(30);
jugador.perderEnergia(40);
jugador.perderVida(1);
jugador.perderVida(1);
jugador.recuperarVida(1);
jugador.recuperarVida(1);
jugador.recuperarVida(1);
jugador.perderVida(1);

console.log('La jugadora ' + jugador.nombre + ' finalizó el juego con ' + jugador.energia + ' energia y ' + jugador.vidas + ' vidas.');


