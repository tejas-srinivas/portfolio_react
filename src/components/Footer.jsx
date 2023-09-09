import React from 'react'

function Footer() {
  return (
    // <!-- ============================ Footer ================================================= -->
    <footer className='footer'>
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">Tejas Srinivas</h1>
                    <span class="footer__subtitle">Web Developer</span>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#home" class="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#about" class="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" class="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://www.linkedin.com/in/tejassrinivas07" class="footer__social">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/tejas-srinivas" class="footer__social">
                        <i class="uil uil-github"></i>
                    </a>
                    <a href="https://twitter.com/TejasSrinivas11?t=lbeU2QhZhE8F4Qc-adK7RA&s=08" class="footer__social">
                        <i class="uil uil-twitter"></i>
                    </a>
                </div>
            </div>
            <br />
            <br />
            <p style={{fontSize: "13px"}}class="footer__copy">Copyright &copy; 2023 Tejas Srinivas. All rights reserved</p>

        </div>
    </footer>
  )
}

export default Footer