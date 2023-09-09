import React from 'react'

function Contact() {
    return (
        <main className="main">
            {/* <!-- ============================================== Contact Me ======================================= --> */}
            <section class="contact section" id="contact">
                <h2 class="section__title">Contact Me</h2>
                <span class="section__subtitle">Get in touch</span>

                <div class="contact__container container grid">
                    <div>
                        <div class="contact__information">
                            <i class="uil uil-linkedin-alt contact__icon"></i>

                            <div>
                                <h3 class="contact_title">LinkedIn</h3>
                                <span class="contact__subtitle">linkedin.com/in/tejassrinivas07</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="contact__information">
                            <i class="uil uil-envelope contact__icon"></i>

                            <div>
                                <h3 class="contact_title">Email</h3>
                                <span class="contact__subtitle">tejs.srnvs@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="contact__information">
                            <i class="uil uil-map-marker contact__icon"></i>

                            <div>
                                <h3 class="contact_title">Location</h3>
                                <span class="contact__subtitle">Bangalore - 73, Karnataka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact