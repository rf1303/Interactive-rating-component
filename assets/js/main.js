document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicio');  
    const wrappersFeedback = document.querySelector('.wrappers__feedback');
    const wrappersComponent = document.querySelector('.wrappers__component');
    const wrappersSelected = document.querySelector('.wrappers__selected');
    const ratingNumber = document.querySelector('.rating__number');
    const numberCheck = document.querySelectorAll('.number__check');

    numberCheck.forEach((inputRadio, index) => {
        console.log('foreach: ', inputRadio, ' ', index); 
        inputRadio.addEventListener('keydown', function(e) {
            
            if (e.key === 'Tab' && !e.shiftkey) {
                console.log('TAB');
                if (index < numberCheck.length - 1) {
                    e.preventDefault();
                    numberCheck[index + 1].focus();
                console.log('TAB+focus');
                } 
            } else if (e.key === 'Tab' && e.shiftKey) {
                if (index > 0) {
                    e.preventDefault();
                    numberCheck[index - 1].focus();
                }
            } else if (e.key === 'ArrowRight' ) {

                e.preventDefault();
                const indexRight = (index + 1) % numberCheck.length;
                console.log('(index+1) % inputRadio.length: ', indexRight);
                numberCheck[indexRight].focus();

            } else if (e.key === 'ArrowLeft') {

                e.preventDefault();
                const indexLeft = (index - 1 + numberCheck.length) % numberCheck.length;
                console.log('index+1) % inputRadio.length: ', indexLeft);
                numberCheck[indexLeft].focus();

            } else if (e.key === 'Enter' || e.key === ' '){
                e.preventDefault();
                inputRadio.checked = true;
            } 
        });
    });

    wrappersFeedback.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const valorRating = wrappersFeedback.querySelector('.number__check:checked');
        console.log('valor rating: ', valorRating); 
        if (valorRating) {
            ratingNumber.textContent = `${valorRating.value}`; 
            console.log(' valorRating: 🆗 w: ', valorRating.value); 
            wrappersComponent.classList.add('display__none');
            wrappersSelected.classList.remove('display__none');

        } else {
            alert('Select a Rating 👍');
        }

    });

});
