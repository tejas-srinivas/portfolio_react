import React from 'react'

function Qualification() {
    return (
        <main className="main">
            {/* =================================== Qualification ========================================== */}
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="qualifiation__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex">
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div className="qualification__button button--flex">
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Work
                        </div>
                    </div>

                    {/* ==================================== Education ================================== */}
                    <div className="qualification__sections">
                        <div className="qualification__content qualification__active" data-content id="education">
                            {/* ==================== Education 1 ===================== */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">B.E, Information Science</h3>
                                    <span className="qualification__subtitle">SJB Institute of Technology</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calender"></i>
                                        2020 - 2024
                                    </div>

                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            {/* <!-- ==================== Education 2 ===================== */}
                            <div className="qualification__data">
                                <div ></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div style={{display: "flex",flexDirection: "column"}}>
                                    <h3 className="qualification__title">Intermediate Education</h3>
                                    <span className="qualification__subtitle">SVM Ind. PU College</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calender"></i>
                                        2018 - 2020
                                    </div>

                                </div>
                            </div>

                            {/* <!-- ==================== Education 3 ===================== --> */}
                            <div className="qualification__data">

                                <div>
                                    <h3 className="qualification__title">Secondary Education</h3>
                                    <span className="qualification__subtitle">SVM Education Society</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calender"></i>
                                        2017 - 2018
                                    </div>

                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    {/* <!-- <span className="qualification__line"></span> --> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                        {/* <!-- ========================================= Work =========================================== --> */}
                        <div className="qualification__sections">
                            <div className="qualification__content" data-content id="work">
                                {/* <!-- ==================== Expirence 1 ===================== --> */}
                                <div className="qualification__data">
                                    <div>
                                        <h3 className="qualification__title">Web Development Intern</h3>
                                        <span className="qualification__subtitle">CodSoft</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calender"></i>
                                            Aug - Sep (2023)
                                        </div>
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                {/* <!-- ==================== Experience 2 ===================== --> */}
                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        {/* <!-- <span className="qualification__line"></span> --> */}
                                    </div>

                                    <div style={{display: "flex",flexDirection: "column"}}>
                                        <h3 className="qualification__title">Logo Designer</h3>
                                        <span className="qualification__subtitle">Freelance</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calender"></i>
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