import React from 'react'
import Profile from '../profile_1.png'

function About() {
  return (
    <main className="main">
        <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>
                <div className="about__container container grid">
                    <img src={Profile} style={{marginTop: "-3rem"}} alt="Profile" className="about__img" />
                    <div className="about__data">
                        <p className="about__description">Greetings! 👋 I'm Tejas Srinivas, a recent Information Science graduate thrilled to kickstart a new journey in the world of technology and innovation. 
                            With a solid educational foundation and a passion for problem-solving, I'm eager to contribute my skills to the field of Information Technology.</p>
                        <div className="about__buttons">
                            <a download="" href="https://drive.google.com/file/d/1Qt1K1aK95zmhBuLybjU7oDfXyNTiwSoH/view?usp=sharing" className="button button--flex">
                                Download CV <i className="uil uil-download-alt button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </main>
  )
}

export default About
