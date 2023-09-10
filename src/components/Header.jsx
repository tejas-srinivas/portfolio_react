import React, { useEffect, useState } from 'react'
import illustration from "../illustration.png"
import asset from "../asset.png"
//import useExternalScripts from '../useExternalScripts'

function Header() {
    //==================== typing EFFECT ======================
    const titles = ["Web Developer", "Logo Designer"];
    const [title, setTitle] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            var i=0;
                if (titles[0].length > title.length) {
                    setTitle(titles[0].slice(0, title.length + 1));
                } else {
                    setTitle("");
                }
        }, 500);
        return () => clearInterval(interval);
    }, [title,titles]);

    //=========================== DARK MODE =================================
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'
    const [theme, setTheme] = useState(localStorage.getItem('selected-theme'))
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    useEffect(() => {

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            document.getElementById('theme-button').classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }

    }, [theme,selectedIcon,selectedTheme])

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => document.getElementById('theme-button').classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    const handleClick = () => {
        document.body.classList.toggle(darkTheme)
        document.getElementById('theme-button').classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
        setTheme(getCurrentTheme())
    }

    //===================== NAV-MENU HIDDEN ======================
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

    //===========================================================
    return (
        <div className="wrapper_1">
            <header className="header" id="header">
                <nav className="nav container">
                    <img src={asset} className="nav__logo img" alt="Tejas Portfolio" />
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="uil uil-estate"></i> Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user"></i> About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-edit-alt"></i> Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery"></i> Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message"></i> Contact Me
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close" id="nav-close"></i>
                    </div>
                    {/* ================================= Theme Change ===================================== */}
                    <div className="nav__btns">
                        <i className="uil uil-moon change-theme" id="theme-button" onClick={handleClick}></i>
                        <div className="nav__toggle" id="nav-toggle">
                            <i className="uil uil-bars"></i>
                        </div>
                    </div>
                </nav>
            </header>

            <br />
            {/* ======================================= Content =========================================  */}
            <main className="main">
                <section className="home section" id="home">
                    <div className="home__container container grid">
                        <div className="home__content grid">
                            <div className="home__social">
                                <a href="https://www.linkedin.com/in/tejassrinivas07" className="home__social-icon">
                                    <i className="uil uil-linkedin"></i>
                                </a>
                                <a href="https://github.com/tejas-srinivas" className="home__social-icon">
                                    <i className="uil uil-github"></i>
                                </a>
                            </div>

                            <div className="home__img">
                                <img className="home__blob-img" src={illustration} style={{ width: "700px", height: "400px" }} alt='' />
                            </div>

                            <div className="home__data">
                                <h2 className="home__subtitle" >Hello, I'm </h2>
                                <h1 className="home__title" style={{ fontWeight: "700" }}>Tejas Srinivas</h1>
                                <h3 className="home__subtitle"><span className="typed-text">{title}</span><span className="cursor">&nbsp;</span></h3>
                                <script>

                                </script>
                                <p className="home__description">A recent Information Science Graduate, with a passion for innovative technologies and problem solving.</p>
                                <a href="#contact" className="button button--flex">
                                    Contact Me&nbsp;<i className="uil uil-message button__icon" style={{ display: "contents" }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="home__scroll">
                            <a href="#about" className="home__scroll-button button--flex">
                                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                                <span className="home__scroll-name">Scroll Down</span>
                                <i className="uil uil-arrow-down home__scroll-arrow"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Header;