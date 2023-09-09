import React from 'react'

function Qualification() {
    return (
        <main className="main">
            {/* =================================== Qualification ========================================== */}
            <section class="qualification section">
                <h2 class="section__title">Qualification</h2>
                <span class="section__subtitle">My personal journey</span>

                <div class="qualifiation__container container">
                    <div class="qualification__tabs">
                        <div class="qualification__button button--flex">
                            <i class="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div class="qualification__button button--flex">
                            <i class="uil uil-briefcase-alt qualification__icon"></i>
                            Work
                        </div>
                    </div>

                    {/* ==================================== Education ================================== */}
                    <div class="qualification__sections">
                        <div class="qualification__content qualification__active" data-content id="education">
                            {/* ==================== Education 1 ===================== */}
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">B.E, Information Science</h3>
                                    <span class="qualification__subtitle">SJB Institute of Technology</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calender"></i>
                                        2020 - 2024
                                    </div>

                                </div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>

                            {/* <!-- ==================== Education 2 ===================== */}
                            <div class="qualification__data">
                                <div ></div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>

                                <div style={{display: "flex",flexDirection: "column"}}>
                                    <h3 class="qualification__title">Intermediate Education</h3>
                                    <span class="qualification__subtitle">SVM Ind. PU College</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calender"></i>
                                        2018 - 2020
                                    </div>

                                </div>
                            </div>

                            {/* <!-- ==================== Education 3 ===================== --> */}
                            <div class="qualification__data">

                                <div>
                                    <h3 class="qualification__title">Secondary Education</h3>
                                    <span class="qualification__subtitle">SVM Education Society</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calender"></i>
                                        2017 - 2018
                                    </div>

                                </div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    {/* <!-- <span class="qualification__line"></span> --> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                        {/* <!-- ========================================= Work =========================================== --> */}
                        <div class="qualification__sections">
                            <div class="qualification__content" data-content id="work">
                                {/* <!-- ==================== Expirence 1 ===================== --> */}
                                <div class="qualification__data">
                                    <div>
                                        <h3 class="qualification__title">Web Development Intern</h3>
                                        <span class="qualification__subtitle">CodSoft</span>
                                        <div class="qualification__calendar">
                                            <i class="uil uil-calender"></i>
                                            Aug - Sep (2023)
                                        </div>
                                    </div>
                                    <div>
                                        <span class="qualification__rounder"></span>
                                        <span class="qualification__line"></span>
                                    </div>
                                </div>

                                {/* <!-- ==================== Experience 2 ===================== --> */}
                                <div class="qualification__data">
                                    <div></div>

                                    <div>
                                        <span class="qualification__rounder"></span>
                                        {/* <!-- <span class="qualification__line"></span> --> */}
                                    </div>

                                    <div style={{display: "flex",flexDirection: "column"}}>
                                        <h3 class="qualification__title">Logo Designer</h3>
                                        <span class="qualification__subtitle">Freelance</span>
                                        <div class="qualification__calendar">
                                            <i class="uil uil-calender"></i>
                                            2020 - Present
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            </section>
        </main>
    )
}

export default Qualification