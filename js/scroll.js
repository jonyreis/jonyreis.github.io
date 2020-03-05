function initScroll() {
    const linkScroll = document.querySelectorAll('.js-menu a[href^="#"]')

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

initScroll()