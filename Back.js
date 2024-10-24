// Función para guardar el nombre en localStorage
function guardarNombre() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        localStorage.setItem('nombre', nombre);
        mostrarSaludo(nombre);
    }
}

// Función para mostrar el saludo si hay un nombre guardado
function mostrarSaludo(nombre) {
    document.getElementById('saludo').textContent = `¡Hola, ${nombre}!`;
}

// Función para eliminar el nombre de localStorage y ocultar el saludo
function eliminarNombre() {
    localStorage.removeItem('nombre');
    document.getElementById('saludo').textContent = '';
    document.getElementById('nombre').value = '';
}

// Mostrar el saludo automáticamente si hay un nombre guardado
document.addEventListener('DOMContentLoaded', () => {
    const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
        mostrarSaludo(nombreGuardado);
    }
});
