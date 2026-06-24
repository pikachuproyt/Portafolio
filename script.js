document.addEventListener('DOMContentLoaded', () =>{
    //1. Buscamos el parrafo en la bibliografia
    const textoBiografia = document.querySelector('.info-seccion p');

    //2. Guardamos el texto original y limpiamos el parrafo para empezar desde de cero
    const textoOriginal = textoBiografia.textContent;
    textoBiografia.textContent = '';
    let indice  = 0;

    //3. Funcion que escribe letra por letra
    function escribirTexto() {
        if (indice < textoOriginal.length){
            textoBiografia.textContent += textoOriginal.charAt(indice);
            indice++;
            // Ajustamos el numero en milisegundos para cambiar la velocidad de escritura 
            setTimeout(escribirTexto, 35);
        }
    }
    //4.  Arranca la animacion despues de medio segundo de haber cargado la pagina
    setTimeout(escribirTexto, 500);
});