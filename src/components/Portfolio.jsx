import React from 'react'
import Dbms from '../project1.png'
import Modern from '../project2.png'
import JavaApp from '../project3.png'
import Todo from '../project4.png'
import Crypto from '../project5.png'
import Dashboard from '../project6.png'

function Portfolio() {
  return (
    <main className="main">
        {/* <!-- =========================================== Portfolio ========================================= --> */}
            <section className="porfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent work</span>

                <div className="portfolio__container container">
                    <div>
                        {/* <!-- ============================== Project 1 ===================================== --> */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src={Modern} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Mordern Portfolio | React JS</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                                <div className="portfolio__btn__wrapper">
                                    <a href="https://portfolio-using-react-js.onrender.com" className="button button--flex button--small portfolio__button">
                                        Demo
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                    <a href="https://github.com/tejas-srinivas/MyPortfolio-CodSoft" className="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                       {/* <!-- ============================== Project 2 ===================================== --> */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src={Dashboard} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Web Dashboard | React JS | Flask</h3>
                                <p className="portfolio__description">A real time web dashboard to display the stats and adopts async programming.</p>
                                <div className="portfolio__btn__wrapper">
                                    <a href="https://github.com/tejas-srinivas/Web-Analysis-Dashboard--React" className="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ============================== Project 3 ===================================== --> */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src={Crypto} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Crypto Tracker | Live Statistics</h3>
                                <p className="portfolio__description">A Live Crypto tracker website built using React Js, Chart JS, CoinGecko API.</p>
                                <div className="portfolio__btn__wrapper">
                                    <a href="https://live-crypto-statistics.onrender.com" className="button button--flex button--small portfolio__button">
                                        Demo
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                    <a href="https://github.com/tejas-srinivas/crypto_tracker_using_react.js" className="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                         {/* <!-- ============================== Project 4 ===================================== --> */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src={Todo} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">TodoList | Mern_Stack</h3>
                                <p className="portfolio__description">A TodoList built using React.Js, Node.Js, Express.Js and MongoDB.It is a platform to perform CRUD application.</p>
                                <div className="portfolio__btn__wrapper">
                                    {/* <!-- <a href="https://github.com/tejas-srinivas/2-WheelerSalesDB" className="button button--flex button--small portfolio__button">
                                        Demo
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a> --> */}
                                    <a href="https://github.com/tejas-srinivas/todoList_using_node.js-CodSoft" className="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ============================== Project 5 ===================================== --> */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src={Dbms} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Vehicle Booking | Wheels & Deals</h3>
                                <p className="portfolio__description">A e-commerce platform for buying vehicles of various brands build using HTML, CSS, PHP, MariaDB.</p>
                                <div className="portfolio__btn__wrapper">
                                    {/* <!-- <a href="https://github.com/tejas-srinivas/2-WheelerSalesDB" className="button button--flex button--small portfolio__button">
                                        Demo
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a> --> */}
                                    <a href="https://github.com/tejas-srinivas/2-WheelerSalesDB" className="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ============================== Project 6 =============================4======== --> */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src={JavaApp} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Quiz App | QuizFlix</h3>
                                <p className="portfolio__description">Developed a standard quiz app using Android Studio and comes integrated with Firebase (Real Time Database).</p>
                                <div className="portfolio__btn__wrapper">
                                    {/* <!-- <a href="https://github.com/tejas-srinivas/QuizFlix_AndroidApplication" className="button button--flex button--small portfolio__button"> */}
                                        {/* Demo */}
                                        {/* <i className="uil uil-arrow-right button__icon"></i> */}
                                    {/* </a> --> */}
                                    <a href="https://github.com/tejas-srinivas/QuizFlix_AndroidApplication" className="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </main>
  )
}

export default Portfolio
