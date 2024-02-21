import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';

import background from '../../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../public/assets/images/Home-our-services/download (1).png'

import VRApplicationDeveloper from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/VRApplicationDeveloper.webp'
import Apps from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/Mobile-Apps-Development.png'
import Angular from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/Angular-JS-developer.png'

import Offer from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Offer Customization.svg'
import Features from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Laravel Features Integration.svg'
import Consulting from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Laravel Consulting Services.svg'
import Secure from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Secure Web Solutions.svg'
import Laravel from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Laravel Web Application Development.svg'
import Unit from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Unit Testing Methods.svg'

import Expertise from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Expertise In Web Solutions.svg'
import Sophisticated from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Sophisticated Portfolio.svg'
import Implement from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Implement Agile Methods.svg'
import Affordable from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Affordable Costing.svg'
import Time from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Time-Bound Deployment.svg'
import Free from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Free Support Services.svg'

import { Helmet } from 'react-helmet'

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from '../../../components/HeroSection';
import Whatsapp from '../../../components/Whatsapp';
import GetAQuoteModal from '../../../components/GetAQuoteModal';

const HireLaravelDev = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire Laravel Developers | Laravel Development Company India" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Laravel Developers"
        des="Laravel is an open-source and free PHP web framework which is developed by Tylor Otwell. Laravel is mainly introduced for web application development following the model-view-controller(MVC) architecture and highly based on the Symfony framework. Laravel offers the syntaxes and features which helps in deploying high-end web applications. Laravel Technology facilitates the developer to save a huge amount of time to develop the entire website from scratch."
        list1="7+ Years of experience in App Development"
        list2="Best Laravel Development Company"
        list3="Dedicated team for your Laravel Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Laravel App Development"
        service2="Laravel App Development Company"
        service3="Laravel App Developer"
        image1={VRApplicationDeveloper}
        image2={Apps}
        image3={Angular}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Laravel Development</h3>
            <p>
              We are highly expert in providing the best{' '}
              <Link
                href="/web-development"
                className="Title_Color"
                style={{ color: '#d6aa0b' }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b> Laravel web solution</b>
              </Link>{' '}
              to our clients and always satisfy them with our services. We have
              years of experience deploying the best software solutions at the
              best rates. Hire us and experience our expertise.
            </p>
            <p>
              Laravel is a server-side PHP framework that helps in developing
              full-stack apps, mobile apps with features, and more. The App
              Ideas is one of the experienced Laravel development company and
              also deployed the best laravel solutions.
            </p>
            <div className="text-center">
              <Link
                href="/contact-us" className='text-decoration-none'
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="contact_btn" style={{ color: '#000' }}>
                  Contact us{' '}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box port_mobilebg_one"
              >
                <Link href="/" className="work_head_box_link"></Link>
                <div className="row w-100">
                  <Link href="/" className="work_head_box_link"></Link>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <Link href="/" className="work_head_box_link"></Link>
                    <div className="work_head_lft">
                      <Link href="/" className="work_head_box_link">
                        <h2>Mindweel </h2>
                      </Link>
                      <ul className="ps-0">
                        <Link href="/" className="work_head_box_link"></Link>
                        <li>
                          <Link href="/" className="work_head_box_link">
                            {' '}
                          </Link>
                          <Link href="/" className="work_head_item">
                            Laravel
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="/" className="work_head_item">
                            Mobile Application Development
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="/" className="work_head_item">
                            Reactjs
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-left"
                        src={require('../../../public/assets/images/Portfolio/port-mobile-app-mobile-one.webp')}
                        alt="Device-Image-two"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box port_mobilebg-02"
              >
                <Link href="/" className="work_head_box_link"></Link>
                <div className="row w-100">
                  <Link href="/" className="work_head_box_link"></Link>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <Link href="/" className="work_head_box_link"></Link>
                    <div className="work_head_lft">
                      <Link href="/" className="work_head_box_link">
                        <h2>Bolt – User</h2>
                      </Link>
                      <ul className="ps-0">
                        <Link href="/" className="work_head_box_link"></Link>
                        <li>
                          <Link href="/" className="work_head_box_link">
                            {' '}
                          </Link>
                          <Link href="/" className="work_head_item">
                            Laravel
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="/" className="work_head_item">
                            Mobile Application Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/workhand/port-mobile-app-mobile-fifteen.webp')}
                        alt="port-mobile-app-mobile-fifteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box port_mobilebg_sixteen"
              >
                <Link href="/" className="work_head_box_link"></Link>
                <div className="row w-100">
                  <Link href="/" className="work_head_box_link"></Link>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <Link href="/" className="work_head_box_link"></Link>
                    <div className="work_head_lft">
                      <Link href="/" className="work_head_box_link">
                        <h2>Bolt – Driver</h2>
                      </Link>
                      <ul className="ps-0">
                        <Link href="/" className="work_head_box_link"></Link>
                        <li>
                          <Link href="/" className="work_head_box_link">
                            {' '}
                          </Link>
                          <Link href="/" className="work_head_item">
                            Laravel
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="/" className="work_head_item">
                            Mobile Application Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-left"
                        src={require('../../../public/assets/images/Portfolio/port-mobile-app-mobile-sixteen.webp')}
                        alt="port-mobile-app-mobile-sixeen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section End */}
      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHAT DO WE OFFER IN LARAVEL DEVELOPMENT COMPANY?</h2>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '425px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={50} height={50}
                    src={Laravel}
                    alt="Laravel Web Application Development"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Laravel Web Application Development</div>
                </h5>
                <div className="text">
                  Laravel is an Open source web application technology which
                  offers the easy accessibility of the features for developing
                  the best web solution for small to large scale industry. We
                  have a team of highly skilled Laravel developers who provide
                  the best solution to the clients.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '425px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={50} height={50}
                    src={Offer}
                    alt="Offer Customization"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Offer Customization</div>
                </h5>
                <div className="text">
                  We also work on customizable software development and try to
                  provide all the functionality in a single platform through
                  customizations. Customization helps in adding up the unique
                  features which help in increasing the sales.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '425px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={50} height={50}
                    src={Features}
                    alt="Laravel Features Integration"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Laravel Features Integration</div>
                </h5>
                <div className="text">
                  We have skilled Laravel development who can also help to
                  integrate Laravel features into an existing web application
                  for your business or industry.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '400px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={50} height={50}
                    src={Secure}
                    alt="Secure Web Solutions"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Secure Web Solutions</div>
                </h5>
                <div className="text">
                  We are ready with a robust team of Flutter developers who are
                  ready to provide the flutter apps along with keeping in mind
                  the performance issues of integrating new features.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '400px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={50} height={50}
                    src={Consulting}
                    alt="Laravel Consulting Services"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Laravel Consulting Services</div>
                </h5>
                <div className="text">
                  As a Flutter software development company, we offer the best
                  flutter app solution. Along with delivering the best flutter
                  app solution, we also ensure about delivering a secure
                  solution that helps in maintaining security and privacy.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '400px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={50} height={50}
                    src={Unit}
                    alt="Unit Testing Methods"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Unit Testing Methods</div>
                </h5>
                <div className="text">
                  Laravel Technology provides features of unique unit testing.
                  During Development, the Laravel framework can run several test
                  cases to check the changes in the web app. Our Laravel
                  developer can write test cases for better performance.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      <TestiMonial />

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two py-5">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHY CHOOSE HIRE LARAVEL DEVELOPERS IN INDIA?</h2>
            <p>
              Laravel Technology is a free and open-source laravel PHP framework
              that follows the MVC architecture to offer the foremost web
              applications to you. Our Laravel developers are highly
              experienced. There are various reasons to choose us.
            </p>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={70} height={70}
                    src={Expertise}
                    alt="Expertise In Web Solutions"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Expertise In Web Solutions</div>
                </h5>
                <div className="text">
                  We boast of a robust team of dedicated iOS app developers with
                  proven track record and several years of iOS development
                  experience.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={70} height={70}
                    src={Sophisticated}
                    alt="Sophisticated Portfolio"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Sophisticated Portfolio</div>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  With years of experience, We have worked on various Laravel
                  projects and successful web solutions or applications for
                  different niches.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={70} height={70}
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Implement Agile Methods</div>
                </h5>
                <div className="text">
                  Along with the best designing and development services, we
                  also offer the on-time deployment of the projects. We strictly
                  follow the timeline.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={70} height={70}
                    src={Affordable}
                    alt="Affordable Costing"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Affordable Costing</div>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  Based on the projects, modules, and features of the
                  requirements, we offer the best competitive rates without
                  embracing the quality of the projects.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={70} height={70}
                    src={Time}
                    alt="Time-Bound Deployment"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Time-Bound Deployment</div>
                </h5>
                <div className="text">
                  We strictly follow the timeline of deploying the projects to
                  our clients with the best quality. In a timeline, we develop
                  as well as test the software before delivering it to you.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <Image width={70} height={70}
                    src={Free}
                    alt="Free Support Services"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Free Support Services</div>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  After deployment of the projects within the timeline, we also
                  offer our clients three months of free support and maintenance
                  services. You can easily connect with us through various
                  methods like E-mail, call, and chat.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      {/* Contact Section Start */}
      <ContactUs
        question="Do you want to know more about our Flutter developers and
                  their expertise?"
      />
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

export default HireLaravelDev
