document.addEventListener('DOMContentLoaded', () => {
    console.log("[SISTEMA] Archivo script.js cargado correctamente!");
    
    // ==========================================
    // 1. ANIMACIÓN DE MECANOGRAFÍADO (BIOGRAFÍA)
    // ==========================================
    const parrafo = document.querySelector('.info-seccion p');
    if (parrafo) {
        const textoOriginal = parrafo.textContent;
        parrafo.textContent = '';
        let indice = 0;
        function escribirTexto() {
            if (indice < textoOriginal.length){
                parrafo.textContent += textoOriginal.charAt(indice);
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
        if (!contenedorLogros) return;
        const logro = document.createElement('div');
        logro.className = 'notificacion-logro';
        logro.innerHTML = `
            <div class="logro-encabezado">LOGRO DESBLOQUEADO</div>
            <div class="logro-titulo">${titulo}</div>
            <div class="logro-desc">${descripcion}</div>
        `;
        contenedorLogros.appendChild(logro);
        setTimeout(() => { logro.classList.add('mostrar'); }, 100);
        setTimeout(() => {
            logro.classList.remove('mostrar');
            setTimeout(() => logro.remove(), 500);
        }, 4500);
    }

    // ==========================================
    // 3. SENSOR DE BARRAS (CORREGIDO)
    // ==========================================
    // El filtro [data-nivel] asegura que solo seleccione las barras reales
    const barrasProgreso = document.querySelectorAll('.barra-progreso[data-nivel]');

    barrasProgreso.forEach(barra => {
        const nivelObjetivo = barra.getAttribute('data-nivel');
        
        // Animación de la barra física
        setTimeout(() => {
            barra.style.width = nivelObjetivo;
        }, 500);

        // Buscar el texto del porcentaje ignorando los errores de clase del HTML
        const contenedorItem = barra.closest('.stat-item') || barra.parentElement.parentElement;
        if (contenedorItem) {
            const textoPorcentaje = contenedorItem.querySelector('.stat-porcentaje, .barra-progrso, .barra-progreso:not([data-nivel])');
            
            if (textoPorcentaje) {
                let valorActual = 0;
                const valorFinal = parseInt(nivelObjetivo) || 0;

                const contador = setInterval(() => {
                    if (valorActual >= valorFinal) {
                        clearInterval(contador);
                    } else {
                        valorActual++;
                        textoPorcentaje.textContent = valorActual + '%';
                    }
                }, 1000 / (valorFinal || 1));
            }
        }
    });

    // ==========================================
    // 4. DISPARADORES DE LOGROS
    // ==========================================
    setTimeout(() => {
        if (!localStorage.getItem('logro_tiempo')) {
            localStorage.setItem('logro_tiempo', 'true');
            desbloquearLogro("Curioso del Código", "Has permanecido analizando los registros de datos por más de 8 segundos.");
        }
    }, 8000);

    const botonesRedes = document.querySelectorAll('.boton-red');
    botonesRedes.forEach(boton => {
        boton.addEventListener('click', () => {
            if (!localStorage.getItem('logro_redes')) {
                localStorage.setItem('logro_redes', 'true');
                desbloquearLogro("Rastreador de Enlaces", "Sincronizaste con éxito las coordenadas de contacto externas.");
            }
        });
    });

});