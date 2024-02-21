import React, { useEffect, useState } from 'react'
import TestiMonial from '../../components/Testimonial/TestiMonial'

import ContactUs from '../../components/ContactUs'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import Whatsapp from '../../components/Whatsapp'
import GetAQuoteModal from '../../components/GetAQuoteModal'

const HireUs = () => {
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    AOS.init()
  }, [])



  return (
    <>
      <Helmet title="Hire The Best Web & App Developers | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      <section className="hire_banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="hire_banner_lft">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6">
                    <div className="hire_banner_lft_box">
                      <Image
                        src={require('../../public/assets/images/Header/Hire Us/dedicated-developer.png')}
                        alt="dedicated-developer"
                        className="img-fluid"
                      />
                      <h2>
                        Dedicated <br /> Developer
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6">
                    <div className="hire_banner_lft_box">
                      <Image
                        src={require('../../public/assets/images/Header/Hire Us/part-time.png')}
                        alt="part-time"
                        className="img-fluid"
                      />
                      <h2>
                        Part Time <br /> Developer
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6">
                    <div className="hire_banner_lft_box">
                      <Image
                        src={require('../../public/assets/images/Header/Hire Us/hourly-base.png')}
                        alt="hourly-base"
                        className="img-fluid"
                      />
                      <h2>
                        Hourly Based <br /> Developer
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6">
                    <div className="hire_banner_lft_box">
                      <Image
                        src={require('../../public/assets/images/Header/Hire Us/maintenance.png')}
                        alt="maintenance"
                        className="img-fluid"
                      />
                      <h2>
                        Maintenance <br /> &amp; Support
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="hire_banner_rht">
                <h1>Hire Dedicated Developer</h1>
                <p>
                  The App Ideas is a leading web and app development company,
                  that also offers the hiring of expert developers with
                  dedicated resources for developing the fortunate business
                  solution, at the best rates. Our committed developers
                  understand the overall project requirements, the integration
                  of unique ideas, security concerns, and the procedure for
                  deploying the best services. We have mastered delivering the
                  best software services for various niches. Hire us and
                  experience our proficiency.
                </p>
                <Link href="/hire-us" className="hire_btn text-decoration-none">
                  Hire us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hire_should_section">
        <div className="hire_title">
          <h2>Why should you hire us?</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="hire_should_box">
                <Image
                  src={require('../../public/assets/images/Header/Hire Us/why-should/exp1.png')}
                  alt="exp1"
                  className="img-fluid"
                />
                <h2>6+ Years of Experience</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="hire_should_box">
                <Image
                  src={require('../../public/assets/images/Header/Hire Us/why-should/exp2.png')}
                  alt="exp2"
                  className="img-fluid"
                />
                <h2>50+ Employees Team</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="hire_should_box">
                <Image
                  src={require('../../public/assets/images/Header/Hire Us/why-should/exp3.png')}
                  alt="exp3"
                  className="img-fluid"
                />
                <h2>500+ Projects Developed</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="hire_should_box">
                <Image
                  src={require('../../public/assets/images/Header/Hire Us/why-should/exp4.png')}
                  alt="exp4"
                  className="img-fluid"
                />
                <h2>250+ Happy Clients</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="hire_should_box">
                <Image
                  src={require('../../public/assets/images/Header/Hire Us/why-should/Deadline-icon.png')}
                  alt="exp5"
                  className="img-fluid"
                />
                <h2>Following Deadlines</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="hire_should_box">
                <Image
                  src={require('../../public/assets/images/Header/Hire Us/why-should/exp6.png')}
                  alt="exp6"
                  className="img-fluid"
                />
                <h2>3 Months Free Support</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestiMonial />

      <section className="valuable_resources_section">
        <div className="hire_title">
          <h2>Available Resources</h2>
        </div>
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-react-native-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/react-native-1.png')}
                    alt="react-native-1"
                    className="img-fluid"
                  />
                  <h2>React Native Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-flutter-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/flutter-1.png')}
                    alt="flutter-1"
                    className="img-fluid"
                  />
                  <h2>Flutter Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-android-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/android_logo-1.png')}
                    alt="android_logo"
                    className="img-fluid"
                  />
                  <h2>Android Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-ios-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/apple_logo.png')}
                    alt="apple_logo"
                    className="img-fluid"
                  />
                  <h2>IOS Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-wordpress-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/wordpress_logo.png')}
                    alt="wordpress_logo"
                    className="img-fluid"
                  />
                  <h2>WordPress Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-shopify-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/shopify-brand.png')}
                    alt="shopify-brand"
                    className="img-fluid"
                  />
                  <h2>Shopify Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-codeigniter-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/codeigniter-brand.png')}
                    alt="codeigniter-brand"
                    className="img-fluid"
                  />
                  <h2>CodeIgniter Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-laravel-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/laravel.png')}
                    alt="laravel"
                    className="img-fluid"
                  />
                  <h2>Laravel Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-nodejs-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/node-js.png')}
                    alt="node-js"
                    className="img-fluid"
                  />
                  <h2>Node.js Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/vuejs.png')}
                    alt="vuejs"
                    className="img-fluid"
                  />
                  <h2>Vuejs Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-reactjs-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/react-js.png')}
                    alt="react-js"
                    className="img-fluid"
                  />
                  <h2>React JS Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-angular-developer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/angular-brand.png')}
                    alt="angular-brand"
                    className="img-fluid"
                  />
                  <h2>Angular 2 Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/webflow-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/webflow.png')}
                    alt="webflow"
                    className="img-fluid"
                  />
                  <h2>Webflow Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/divi.png')}
                    alt="Divi"
                    className="img-fluid"
                  />
                  <h2>Divi Expert Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link
                href="/hire-enfold-expert"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/enfold.png')}
                    alt="enfold"
                    className="img-fluid"
                  />
                  <h2>Enfold Expert Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              
              <Link
                href="/hire-magento-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >

                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/magento-brand.png')}
                    alt="magento-brand"
                    className="img-fluid"
                  />
                  <h2>Magento 2 Developer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link href="/hire-us">
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/app-icon.png')}
                    alt="app-icon"
                    className="img-fluid"
                  />
                  <h2>App Designer</h2>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/web.png')}
                    alt="Web"
                    className="img-fluid"
                  />
                  <h2>Web Designer</h2>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/graphic-design.png')}
                    alt="graphic-design"
                    className="img-fluid"
                  />
                  <h2>Graphics Designer</h2>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <Link href="/html-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="valuable_box">
                  <Image
                    src={require('../../public/assets/images/Header/Hire Us/Available/html.png')}
                    alt="html"
                    className="img-fluid"
                  />
                  <h2>HTML Developer</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <ContactUs question="Would you like to hire a dedicated resources for your projects?" />
      {/* Contact Section End */}
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer/>
    </>
  )
}

export default HireUs
