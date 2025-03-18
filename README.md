<h1>Sistema de registro</h1>
-Estado de proyecto: Terminado

Parte 1 función agregar amigo

    function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtiene el input
    const nombre = input.value; // Extrae el valor del input

    if (nombre === '') { // Validación básica del input ingresado en el caso vacío
        alert('Por favor, inserte un nombre');
        return; // Detiene la función si el nombre está vacío
    }

    amigos.push(nombre); // Agrega el nombre al array
    actualizarListaAmigos(); // Actualiza la lista en HTML
    input.value = ''; // Limpia el input
    }

Parte 2 función actualizar lista

    function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Obtiene la lista HTML
    lista.innerHTML = ''; // Limpia todo el contenido previo

    for (let i = 0; i < amigos.length; i++) { // Recorre el array
        const amigo = amigos[i];
        const item = document.createElement('li'); // Crea un li
        item.innerHTML = amigo; // Asigna el nombre al li
        lista.appendChild(item); // Agrega el li a la lista
    }
    }
Parte 3 función sortear amigo

    function sortearAmigo() {
    if (amigos.length === 0) { // Validación si es nula la cantidad de amigos en el array
        alert('Agrega un amigo primero');
        return; // Detiene la función si no hay amigos
    }

    const resultado = document.getElementById('resultado'); // Contenedor del resultado
    resultado.innerHTML = ''; // Limpia resultados anteriores

    const indice = Math.floor(Math.random() * amigos.length); // Índice aleatorio del listado
    const seleccionado = document.createElement('li'); // Crea un elemento
    seleccionado.textContent = `El amigo sorteado es: ${amigos[indice]}`; // Asigna texto con el amigo sorteado del índice seleccionado de la lista
    resultado.appendChild(seleccionado); // Muestra el resultado

    amigos = []; // Vacía el array para poder nuevamente realizar el sorteo
    actualizarListaAmigos(); // Actualiza la lista eliminando los nombres vaciandola 
    }
