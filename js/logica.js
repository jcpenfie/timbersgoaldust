async function buscarListaDeEquipos() {
    const response = await fetch('../datos/listaDeEquipos.json');
    const data = await response.json();
    return data;
}

async function buscarListaDeGoles() {
    const response = await fetch('../datos/listaDeGoles.json');
    const data = await response.json();
    return data;
}

async function buscarListaDeJugadores() {
    const response = await fetch('../datos/listaDeJugadores.json');
    const data = await response.json();
    return data;
}

function getTeamLogo(equipos,equipoBuscado) {
    console.log(equipos[equipoBuscado]);
    return `../imagenes/logos/${equipos[equipoBuscado]}`;
}