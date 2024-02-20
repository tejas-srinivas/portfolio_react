import React from 'react'

function Footer() {
  return (
    // <!-- ============================ Footer ================================================= -->
    <footer className='footer'>
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">Tejas Srinivas</h1>
                    <span className="footer__subtitle">Web Developer</span>
                </div>

                <ul className="footer__links">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/tejassrinivas07" className="footer__social">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/tejas-srinivas" className="footer__social">
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://twitter.com/TejasSrinivas11?t=lbeU2QhZhE8F4Qc-adK7RA&s=08" className="footer__social">
                        <i className="uil uil-twitter"></i>
                    </a>
                </div>
            </div>
            <br />
            <br />
            <p style={{fontSize: "13px", color:"#000000"}}className="footer__copy">Copyright &copy; 2024 Tejas Srinivas. All rights reserved</p>

        </div>
    </footer>
  )
}

export default Footer
