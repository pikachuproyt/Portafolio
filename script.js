document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscamos el parrafo en la bibliografia (Asegurate que en el HTML tienes .info-seccion p)
    const textoBiografia = document.querySelector('.info-seccion span');

    // 2. Control de seguridad: Si no lo encuentra, te avisará en la consola (F12)
    if (textoBiografia) {
        // 3. Guardamos el texto original y limpiamos el parrafo para empezar desde de cero
        const textoOriginal = textoBiografia.textContent;
        textoBiografia.textContent = '';
        let indice = 0;

        // 4. Funcion que escribe letra por letra
        function escribirTexto() {
            if (indice < textoOriginal.length){
                textoBiografia.textContent += textoOriginal.charAt(indice);
                indice++;
                // Ajustamos el numero en milisegundos para cambiar la velocidad de escritura
                setTimeout(escribirTexto, 30); // 30ms por letra
            }
        }
        // 5. Arranca la animacion despues de medio segundo de haber cargado la pagina
        setTimeout(escribirTexto, 500);

    } else {
        // Si hay un error de nombres en tu HTML, esto saldrá en ROJO al presionar F12
        console.error("ERROR CRÍTICO: No se encontró el párrafo. Revisa tu HTML.");
    }
});