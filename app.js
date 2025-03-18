let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value;

    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const item = document.createElement('li');
        item.innerHTML = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega un amigo primero');
        return;
    }
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = document.createElement('li');
    seleccionado.textContent = `El amigo sorteado es: ${amigos[indice]}`;
    resultado.appendChild(seleccionado);

    amigos = [];
    actualizarListaAmigos();
}
