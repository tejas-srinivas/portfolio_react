// ========================= Typing Effect ===========================
 function typingEffect() {
    const textArray = ["Web Developer", "Logo Designer"]
    const typingDelay = 200
    const erasingDelay = 100
    const newTextDelay = 2000
    let textIndex = 0
    let charIndex = 0

    const typeTextSpan = document.getElementsByClassName("typed-text");
    // const cursorSpan = document.querySelector(".cursor");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            // if(!cursorSpan.classList.contains("typing")) {cursorSpan.classList.add("typing")}
            typeTextSpan.textContent += textArray[textIndex].charAt(charIndex)
            charIndex++
            console.log(typeTextSpan.textContent)
            setTimeout(type, typingDelay)
        }
        else {
            // cursorSpan.classList.remove("typing")
            setTimeout(erase, newTextDelay)
        }
    }

    function erase() {
        if (charIndex > 0) {
            // if(!cursorSpan.classList.contains("typing")) {cursorSpan.classList.add("typing")}
            typeTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--
            setTimeout(erase, erasingDelay)
        } else {
            textIndex++
            // cursorSpan.classList.remove("typing")
            if (textIndex >= textArray.length) {
                textIndex = 0
            }
            setTimeout(type, typingDelay)
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, typingDelay + 1100)
    })
}

// =============== Menu Hidden ===================
 function menuHidden() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    const navLink = document.querySelectorAll('.nav__link');

    function linkaction() {
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkaction))
}

// ==================== skills ===================================
 function skillsToggling() {
    const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills() {
        let itemClass = this.parentNode.className

        for (let i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }

        if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })
}

// ========================== DARK LIGHT ======================================
 function lightDarkMode() {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}