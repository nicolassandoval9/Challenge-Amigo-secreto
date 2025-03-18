<h1>Sistema de registro</h1>
-Estado de proyecto: Terminado

Parte 1 función agregar amigo

  function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtiene el input
    const nombre = input.value; // Extrae el valor del input
Parte 1.1 función agregar amigo 
    if (nombre === '') { // Validación básica
        alert('Por favor, inserte un nombre');
        return; // Detiene la función si el nombre está vacío
    }
Parte 1.2 función agregar amigo
    amigos.push(nombre); // Agrega el nombre al array
    actualizarListaAmigos(); // Actualiza la lista en HTML
    input.value = ''; // Limpia el input
}

Parte 2 función actualizar lista

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Obtiene la lista HTML
    lista.innerHTML = ''; // Limpia todo el contenido previo
Parte 2.1 función actualizar lista
    for (let i = 0; i < amigos.length; i++) { // Recorre el array
        const amigo = amigos[i];
        const item = document.createElement('li'); // Crea un li
        item.innerHTML = amigo; // Asigna el nombre al li
        lista.appendChild(item); // Agrega el li a la lista
    }
}
Parte 3 función sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) { // Validación
        alert('Agrega un amigo primero');
        return; // Detiene la función si no hay amigos
    }
Parte 3.1 función sortear amigo
    const resultado = document.getElementById('resultado'); // Contenedor del resultado
    resultado.innerHTML = ''; // Limpia resultados anteriores
Parte 3.2 función sortear amigo
    const indice = Math.floor(Math.random() * amigos.length); // Índice aleatorio del listado
    const seleccionado = document.createElement('li'); // Crea un elemento
    seleccionado.textContent = `El amigo sorteado es: ${amigos[indice]}`; // Asigna texto con el amigo sorteado del índice seleccionado de la lista
    resultado.appendChild(seleccionado); // Muestra el resultado
Parte 3.2 función sortear amigo
    amigos = []; // Vacía el array para poder nuevamente realizar el sorteo
    actualizarListaAmigos(); // Actualiza la lista eliminando los nombres vaciandola 
}
