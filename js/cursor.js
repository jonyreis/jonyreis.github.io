function typeWriter(texto) {
    const textoArray = texto.innerHTML.split('')
    texto.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => texto.innerHTML += letra, 65 * i)
    })
}

const h1 = document.querySelector('h1')
typeWriter(h1)