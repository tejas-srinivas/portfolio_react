import React from 'react'

function Contact() {
    return (
        <main className="main">
            {/* <!-- ============================================== Contact Me ======================================= --> */}
            <section className="contact section" id="contact">
                <h2 className="section__title">Contact Me</h2>
                <span className="section__subtitle">Get in touch</span>

                <div className="contact__container container grid">
                    <div>
                        <div className="contact__information">
                            <i className="uil uil-linkedin-alt contact__icon"></i>

                            <div>
                                <h3 className="contact_title">LinkedIn</h3>
                                <span className="contact__subtitle">linkedin.com/in/tejassrinivas07</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="contact__information">
                            <i className="uil uil-envelope contact__icon"></i>

                            <div>
                                <h3 className="contact_title">Email</h3>
                                <span className="contact__subtitle">tejs.srnvs@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="contact__information">
                            <i className="uil uil-map-marker contact__icon"></i>

                            <div>
                                <h3 className="contact_title">Location</h3>
                                <span className="contact__subtitle">Bangalore - 73, Karnataka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact