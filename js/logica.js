async function buscarListaDeEquipos() {
    // const response = await fetch('../datos/listaDeEquipos.json');
    const response = await fetch('https://esbendev.com/timbersgoaldust/datos/listaDeEquipos.json');
    const data = await response.json();
    return data;
}

async function buscarListaDeGoles() {
    // const response = await fetch('../datos/listaDeGoles.json');
    const response = await fetch('https://esbendev.com/timbersgoaldust/datos/listaDeGoles.json');
    const data = await response.json();
    return data;
}

async function buscarListaDeJugadores() {
    // const response = await fetch('../datos/listaDeJugadores.json');
    const response = await fetch('https://esbendev.com/timbersgoaldust/datos/listaDeJugadores.json');
    const data = await response.json();
    return data;
}

function getTeamLogo(equipos,equipoBuscado) {
    console.log(equipos[equipoBuscado]);
    // return `../imagenes/logos/${equipos[equipoBuscado]}`;
    return `https://esbendev.com/timbersgoaldust/imagenes/logos/${equipos[equipoBuscado]}`;
}