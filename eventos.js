document.addEventListener('DOMContentLoaded', function () {
    
    let miDiv = document.querySelector('div');
    let miBoton = document.getElementById('saludar-btn');

    miDiv.addEventListener('click', function () {
        alert('¡Hola! Soy el div');
    });

    miBoton.addEventListener('click', function (event) {
        alert('¡Hola!');
        event.stopPropagation();
    });

});