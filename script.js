document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. ANIMACIÓN DE MECANOGRAFÍADO (TU BIOGRAFÍA)
    // ==========================================
    const textoBiografia = document.querySelector('.info-seccion p');

    if (textoBiografia) {
        const textoOriginal = textoBiografia.textContent;
        textoBiografia.textContent = '';
        let indice = 0;

        function escribirTexto() {
            if (indice < textoOriginal.length){
                textoBiografia.textContent += textoOriginal.charAt(indice);
                indice++;
                setTimeout(escribirTexto, 30);
            }
        }
        setTimeout(escribirTexto, 500);
    }

    // ==========================================
    // 2. MOTOR DEL SISTEMA DE LOGROS
    // ==========================================
    const contenedorLogros = document.getElementById('contenedor-logros');

    function desbloquearLogro(titulo, descripcion) {
        // Creamos la estructura HTML del logro dinámicamente
        const logro = document.createElement('div');
        logro.className = 'notificacion-logro';
        
        logro.innerHTML = `
            <div class="logro-encabezado">🏆 LOGRO DESBLOQUEADO</div>
            <div class="logro-titulo">${titulo}</div>
            <div class="logro-desc">${descripcion}</div>
        `;
        
        contenedorLogros.appendChild(logro);
        
        // Pequeña pausa para que el navegador procese la animación CSS de entrada
        setTimeout(() => {
            logro.classList.add('mostrar');
        }, 100);
        
        // Se oculta automáticamente después de 4.5 segundos
        setTimeout(() => {
            logro.classList.remove('mostrar');
            // Lo eliminamos por completo del HTML cuando termine de esconderse
            setTimeout(() => logro.remove(), 500);
        }, 4500);
    }

    // ==========================================
    // 3. DISPARADORES DE LOGROS (TRIGGERS)
    // ==========================================

    // LOGRO 1: Por tener la curiosidad de quedarse 8 segundos leyendo la interfaz
    setTimeout(() => {
        if (!localStorage.getItem('logro_tiempo')) {
            localStorage.setItem('logro_tiempo', 'true');
            desbloquearLogro(
                "Curioso del Código", 
                "Has permanecido analizando los registros de datos de este portafolio por más de 8 segundos."
            );
        }
    }, 8000);

    // LOGRO 2: Por interactuar y hacer clic en cualquiera de tus botones de redes sociales
    const botonesRedes = document.querySelectorAll('.boton-red');
    botonesRedes.forEach(boton => {
        boton.addEventListener('click', () => {
            if (!localStorage.getItem('logro_redes')) {
                localStorage.setItem('logro_redes', 'true');
                desbloquearLogro(
                    "Rastreador de Enlaces", 
                    "Sincronizaste con éxito las coordenadas de contacto externas del desarrollador."
                );
            }
        });
    });

});