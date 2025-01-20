// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Declarar un array para almacenar los nombres
let amigos = [];
// 2. Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
  
    // Validar la entrada
    if (nombreAmigo === '') {
      alert('Por favor, inserte un nombre.');
      return;
    }
  
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
  
    // Actualizar la lista en el HTML
    mostrarListaAmigos();
  
    // Limpiar el campo de entrada
    inputAmigo.value = '';
  }

  // 3. Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
  
    amigos.forEach(amigo => {
      const li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });
  }