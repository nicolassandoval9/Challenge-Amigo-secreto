<h1>Sistema de registro</h1>
-Estado de proyecto: Terminado


function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtiene el input
    const nombre = input.value; // Extrae el valor del input

    if (nombre === '') { // Validación básica
        alert('Por favor, inserte un nombre');
        return; // Detiene la función si el nombre está vacío
    }

    amigos.push(nombre); // Agrega el nombre al array
    actualizarListaAmigos(); // Actualiza la lista en HTML
    input.value = ''; // Limpia el input
}
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Obtiene la lista HTML
    lista.innerHTML = ''; // Limpia todo el contenido previo

    for (let i = 0; i < amigos.length; i++) { // Recorre el array
        const amigo = amigos[i];
        const item = document.createElement('li'); // Crea un <li>
        item.innerHTML = amigo; // Asigna el nombre al <li>
        lista.appendChild(item); // Agrega el <li> a la lista
    }
}
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Obtiene la lista HTML
    lista.innerHTML = ''; // Limpia todo el contenido previo

    for (let i = 0; i < amigos.length; i++) { // Recorre el array
        const amigo = amigos[i];
        const item = document.createElement('li'); // Crea un <li>
        item.innerHTML = amigo; // Asigna el nombre al <li>
        lista.appendChild(item); // Agrega el <li> a la lista
    }
}
