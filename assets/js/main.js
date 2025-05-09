document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicio');  
    const wrappersFeedback = document.querySelector('.wrappers__feedback');
    const feedbackNumber = document.querySelectorAll('.number__check');
    const buttonSubmit = document.querySelector('.button__submit');
    const ratingNumber = document.querySelectorAll('.number__check');

    // ratingNumber.forEach((inputRadio, index) => {
    //    console.log('foreach: ', inputRadio, ' ', index); 
    //     inputRadio.addEventListener('keydown',function(e) {
    //         
    //         const ir = (index + 1) % inputRadio.length;
    //         const il = (index - 1 + inputRadio.length) % inputRadio.length;
    //         console.log('ir - il 🆕 ', ir, '⚡', il);
    //
    //         if (e.key === 'TAB' && !e.shiftKey) {
    //             if (index < inputRadio.length - 1) {
    //                 e.preventDefault();
    //                 ratingNumber[index+1].focus();
    //             } 
    //         } else if (e.key === 'TAB' && e.shiftKey) {
    //             if (index > 0) {
    //                 e.preventDefault();
    //                 ratingNumber[index+1].focus();
    //             }
    //         } else if (e.key === 'ArrowRight' ) {
    //
    //             e.preventDefault();
    //             const indexRight = (index+1) % inputRadio.length;
    //             console.log('(index+1) % inputRadio.length: ', indexRight);
    //             ratingNumber[indexRight].focus();
    //
    //         } else if (e.key === 'ArrowLeft') {
    //
    //             e.preventDefault();
    //             const indexLeft = (index-1 + inputRadio.length) % inputRadio.length;
    //             console.log('index+1) % inputRadio.length: ', indexLeft);
    //             ratingNumber[indexLeft].focus();
    //
    //         } else if (e.key === 'Enter' || e.key === ' '){
    //             e.preventDefault();
    //             inputRadio.checked();
    //         } 
    //     });
    // });
radioInputs.forEach((input, index) => {
        // Interceptar eventos de teclado
        input.addEventListener('keydown', function(e) {
            // Si se presiona la tecla Tab sin la tecla Shift
            if (e.key === 'Tab' && !e.shiftKey) {
                // Si no es el último radio button, prevenir el comportamiento por defecto y enfocar el siguiente input
                if (index < radioInputs.length - 1) {
                    e.preventDefault();
                    radioInputs[index + 1].focus();
                }
            }
            // Si se presiona Shift+Tab
            else if (e.key === 'Tab' && e.shiftKey) {
                // Si no es el primer radio button, prevenir el comportamiento por defecto y enfocar el input anterior
                if (index > 0) {
                    e.preventDefault();
                    radioInputs[index - 1].focus();
                }
            }
            // Si se presiona la flecha derecha o abajo, mover al siguiente input
            else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % radioInputs.length;
                radioInputs[nextIndex].focus();
                radioInputs[nextIndex].checked = true;
            }
            // Si se presiona la flecha izquierda o arriba, mover al input anterior
            else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (index - 1 + radioInputs.length) % radioInputs.length;
                radioInputs[prevIndex].focus();
                radioInputs[prevIndex].checked = true;
            }
            // Si se presiona Space o Enter, seleccionar la opción
            else if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                input.checked = true;
            }
        });
    });
});
