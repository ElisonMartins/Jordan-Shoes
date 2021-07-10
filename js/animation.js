function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 50 * i);
        });
    }
const titulo = document.querySelector('#typed');
typeWriter(titulo);