function initScroll() {
    const linkScroll = document.querySelectorAll('a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const item = event.currentTarget.getAttribute('href')
        const section = document.querySelector(item)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linkScroll.forEach(item => {
        item.addEventListener('click', scrollToSection)
    })
}


window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('back-to-top').style.display = 'block'
    } else {
        document.getElementById('back-to-top').style.display = 'none'
    }
}

initScroll()