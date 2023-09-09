import React from 'react'

function Skills() {
    return (
        <main className="main">
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My Technical Level</span>

                <div className="skills__container container grid">
                    <div>

                        {/* ===================================FRONTEND SKILLS============================== */}

                        <div className="skills__content skills__open">
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"></i>
                                <div>
                                    <h1 className="skills__titles">Frontend Development</h1>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__number">90%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__html"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__css"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">JavaScript</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__js"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">React Framework</h3>
                                        <span className="skills__number">60%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========================== BACKEND SKILLS ============================= */}

                        <div className="skills__content skills__close">
                            <div className="skills__header">
                                <i className="uil uil-server-network skills__icon"></i>
                                <div>
                                    <h1 className="skills__titles">Backend Development</h1>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">PHP</h3>
                                        <span className="skills__number">60%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__php"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Node JS</h3>
                                        <span className="skills__number">50%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__node"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">MySQL</h3>
                                        <span className="skills__number">85%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__sql"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Mongo DB</h3>
                                        <span className="skills__number">75%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__mongo"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================================== Other Skills =================================== */}

                        <div className="skills__content skills__close">
                            <div className="skills__header">
                                <i className="uil uil-swatchbook skills__icon"></i>
                                <div>
                                    <h1 className="skills__titles">Other Skills</h1>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Adobe Illustrator</h3>
                                        <span className="skills__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__illustrator"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Photoshop</h3>
                                        <span className="skills__number">65%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__photoshop"></span>
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

export default Skills