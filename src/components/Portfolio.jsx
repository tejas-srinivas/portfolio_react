import React from 'react'
import Dbms from '../project1.png'
import Modern from '../project2.png'
import JavaApp from '../project3.png'
import Todo from '../project4.png'

function Portfolio() {
  return (
    <main className="main">
        {/* <!-- =========================================== Portfolio ========================================= --> */}
            <section class="porfolio section" id="portfolio">
                <h2 class="section__title">Portfolio</h2>
                <span class="section__subtitle">Most recent work</span>

                <div class="portfolio__container container">
                    <div>
                        {/* <!-- ============================== Project 1 ===================================== --> */}
                        <div class="portfolio__content grid swiper-slide">
                            <img src={Modern} alt="" class="portfolio__img" />

                            <div class="portfolio__data">
                                <h3 class="portfolio__title">Mordern Portfolio</h3>
                                <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                                <div class="portfolio__btn__wrapper">
                                    <a href="https://tejas-portfolio-rdzl.onrender.com/" class="button button--flex button--small portfolio__button">
                                        Demo
                                        <i class="uil uil-arrow-right button__icon"></i>
                                    </a>
                                    <a href="https://github.com/tejas-srinivas/MyPortfolio-CodSoft" class="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i class="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                         {/* <!-- ============================== Project 2 ===================================== --> */}
                         <div class="portfolio__content grid swiper-slide">
                            <img src={Todo} alt="" class="portfolio__img" />

                            <div class="portfolio__data">
                                <h3 class="portfolio__title">TodoList | Mern_Stack</h3>
                                <p class="portfolio__description">A TodoList built using React.Js, Node.Js, Express.Js and MongoDB.It is a platform to perform CRUD application.</p>
                                <div class="portfolio__btn__wrapper">
                                    {/* <!-- <a href="https://github.com/tejas-srinivas/2-WheelerSalesDB" class="button button--flex button--small portfolio__button">
                                        Demo
                                        <i class="uil uil-arrow-right button__icon"></i>
                                    </a> --> */}
                                    <a href="https://github.com/tejas-srinivas/todoList_using_node.js-CodSoft" class="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i class="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ============================== Project 3 ===================================== --> */}
                        <div class="portfolio__content grid swiper-slide">
                            <img src={Dbms} alt="" class="portfolio__img" />

                            <div class="portfolio__data">
                                <h3 class="portfolio__title">Vehicle Booking | Wheels & Deals</h3>
                                <p class="portfolio__description">A e-commerce platform for buying vehicles of various brands build using HTML, CSS, PHP, MariaDB.</p>
                                <div class="portfolio__btn__wrapper">
                                    {/* <!-- <a href="https://github.com/tejas-srinivas/2-WheelerSalesDB" class="button button--flex button--small portfolio__button">
                                        Demo
                                        <i class="uil uil-arrow-right button__icon"></i>
                                    </a> --> */}
                                    <a href="https://github.com/tejas-srinivas/2-WheelerSalesDB" class="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i class="uil uil-arrow-right button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ============================== Project 4 =============================4======== --> */}
                        <div class="portfolio__content grid swiper-slide">
                            <img src={JavaApp} alt="" class="portfolio__img" />

                            <div class="portfolio__data">
                                <h3 class="portfolio__title">Quiz App | QuizFlix</h3>
                                <p class="portfolio__description">Developed a standard quiz app using Android Studio and comes integrated with Firebase (Real Time Database).</p>
                                <div class="portfolio__btn__wrapper">
                                    {/* <!-- <a href="https://github.com/tejas-srinivas/QuizFlix_AndroidApplication" class="button button--flex button--small portfolio__button"> */}
                                        {/* Demo */}
                                        {/* <i class="uil uil-arrow-right button__icon"></i> */}
                                    {/* </a> --> */}
                                    <a href="https://github.com/tejas-srinivas/QuizFlix_AndroidApplication" class="button button--flex button--small portfolio__button">
                                        GitHub
                                        <i class="uil uil-arrow-right button__icon"></i>
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