import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';

import background from '../../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../public/assets/images/Home-our-services/download (1).png'

import VRApplicationDeveloper from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/Mobile-Apps-Development.png'
import Apps from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/VRAppDevelopmentCompany.1d7163a9358b4fd6b91d.webp'
import Angular from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/Game-App-Development-Company.440287dcf93acec0f79c.webp'

import Offer from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/React JS Web Development.svg'
import Features from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/JSX Integration.svg'
import Consulting from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/Mobile Application Development Service.svg'
import Secure from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/Customize Web Development.svg'
import Laravel from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/React JS Integration.svg'
import Unit from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/React JS Consulting Services.svg'

import Expertise from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Expertise In The Field.svg'
import Sophisticated from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Powerful Portfolio.svg'
import Implement from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Follow Agile Methodology.svg'
import Affordable from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Affordable Pricing.svg'
import Time from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Deployment On Time.svg'
import Free from '../../../public/assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Support And Maintenance.svg'

import { Helmet } from 'react-helmet'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from '../../../components/HeroSection';
import Whatsapp from '../../../components/Whatsapp';
import GetAQuoteModal from '../../../components/GetAQuoteModal';

const HireReactJsDev = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire ReactJS Developers | Hire Dedicated ReactJS Developers India "/>
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire React JS Developers In India"
        des="ReactJS which is also known as ReactJS or React which is a Javascript library maintained by Facebook helps in developing or we can say that rendering UI components for web development. React JS supports Frontend development as well as Server side development. React JS is an open-source library of Javascript that is efficient, declarative, and flexible which is used for developing a User interface in the best way and is used as a base for developing single-page web development."
        list1="7+ Years of experience in App Development"
        list2="Best ReactJS Development Company"
        list3="Dedicated team for your ReactJS Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="ReactJS Development"
        service2="ReactJS Development Company"
        service3="ReactJS Development Developer"
        image1={VRApplicationDeveloper}
        image2={Apps}
        image3={Angular}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in the ReactJS Developers</h3>
            <p>
              We offer the best ReactJS services. We are highly expert as well
              as have years of experience in providing the best software
              solution using the React JS Library and offer the best UI
              components in the web solutions. Hire us and experience our
              expertise.
            </p>
            <p>
              The App Ideas is a leading React JS development company and have
              experienced ReactJS developers in India who are expertise in
              deploying the best solutions.
            </p>
            <div className="text-center">
              <Link
                href="/contactus" className='text-decoration-none'
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
      {/* Hire Section Start */}
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-mobile-one">
                <Link href="/" className="work_head_box_link"></Link>
                <div className="row w-100">
                  <Link href="/" className="work_head_box_link"></Link>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <Link href="/" className="work_head_box_link"></Link>
                    <div className="work_head_lft">
                      <Link href="/" className="work_head_box_link">
                        <h2>Spending Tracker</h2>
                      </Link>
                      <ul className="ps-0">
                        <Link href="/" className="work_head_box_link"></Link>
                        <li>
                          <Link href="/" className="work_head_box_link">
                            {' '}
                          </Link>
                          <Link href="/" className="work_head_item">
                            Mobile Application Development{' '}
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="/" className="work_head_item">
                            React Native
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
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-three.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-mobile-two">
                <Link href="/" className="work_head_box_link"></Link>
                <div className="row w-100">
                  <Link href="/" className="work_head_box_link"></Link>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <Link href="/" className="work_head_box_link"></Link>
                    <div className="work_head_lft">
                      <Link href="/" className="work_head_box_link">
                        <h2>Pitch App</h2>
                      </Link>
                      <ul className="ps-0">
                        <Link href="/" className="work_head_box_link"></Link>
                        <li>
                          <Link href="/" className="work_head_box_link">
                            {' '}
                          </Link>
                          <Link href="/" className="work_head_item">
                            Mobile Application Development
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="/" className="work_head_item">
                            React Native
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
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-twenty.webp')}
                        alt="Device-Image-one"
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
                className="work_head_box port_mobilebg_one"
              >
                <Link href="#" className="work_head_box_link"></Link>
                <div className="row w-100">
                  <Link href="#" className="work_head_box_link"></Link>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <Link href="#" className="work_head_box_link"></Link>
                    <div className="work_head_lft">
                      <Link href="#" className="work_head_box_link">
                        <h2>Mindweel </h2>
                      </Link>
                      <ul className="ps-0">
                        <Link href="#" className="work_head_box_link"></Link>
                        <li>
                          <Link href="#" className="work_head_box_link">
                            {' '}
                          </Link>
                          <Link href="#" className="work_head_item">
                            Laravel
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="#" className="work_head_item">
                            Mobile Application Development
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link href="#" className="work_head_item">
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
          </div>
        </div>
      </section>
      {/* Work Head Section End */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHAT DO WE OFFER IN REACTJS DEVELOPMENT COMPANY?</h2>
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
                  <div>React JS Web Development</div>
                </h5>
                <div className="text">
                  We have a team of highly skilled and experienced developers
                  who will provide the best software development services using
                  this popular React JS Library. We also help in integrating the
                  best features as per the selected technology by our clients.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>JSX Integration</div>
                </h5>
                <div className="text">
                  JSX is one of the popular features of React JS which will help
                  in developing the React JS element very efficiently and
                  effectively.JSX is also known as an extension of Javascript.
                  We are also familiar with JSX which includes both makeup as
                  well as logic.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Mobile Application Development Service</div>
                </h5>
                <div className="text">
                  If you are thinking of shifting towards mobile applications
                  using react technology features then we can help you because
                  along with React JS we are also expertise in React Native app
                  development.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Customize Web Development</div>
                </h5>
                <div className="text">
                  We can help you to develop a customization web as well as app
                  development services based on your business user requirements.
                  Customization is most popular in this present time because it
                  offers the functionality you want to integrate into your
                  services.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>React JS Integration</div>
                </h5>
                <div className="text">
                  We are highly experienced in web and app development
                  technologies that we can help you to integrate with React JS
                  features in your existing software solution.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>React JS Consulting Services</div>
                </h5>
                <div className="text">
                  We can help you to make a decision and provide expert advice
                  in choosing the trending React JS features or framework for
                  your software solution. This will help you to keep ahead in
                  the market as per the trend.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
            <h2>WHY SHOULD YOU HIRE REACTJS DEVELOPERS FROM US?</h2>
            <p>
              ReactJS is an open-source Javascript library that helps in
              developing the Ravishing web application. Our developers are
              highly skilled and have worked on various ReactJS projects. There
              are various reasons to choose us.
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
                  <div>Expertise In The Field</div>
                </h5>
                <div className="text">
                  We are highly experienced in providing the best React JS web
                  application. We have proven our expertise by developing the
                  most sophisticated React JS projects.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Powerful Portfolio</div>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  Along with the years, we have worked on various projects and
                  developed successful React JS web applications for different
                  niches and categories.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Follow Agile Methodology</div>
                </h5>
                <div className="text">
                  We highly follow agile methodology for project development
                  with continuous updation and iteration of the software
                  development. This will help you to easily track the software
                  progress.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Affordable Pricing</div>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  We offer the best and affordable pricing for React JS web
                  development without compromising the quality of the software.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Deployment On Time</div>
                </h5>
                <div className="text">
                  We follow the agile methodology and strictly follow the
                  project milestones which helps in delivering the project on
                  deadlines along with testing all the modules.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <div>Support And Maintenance</div>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  After deployment of the projects, we also offer free
                  maintenance services for some time. We are always ready to
                  support and help you via call, E-mail, social media, and more.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
        question="Do you want to know more about our ReactJS Developers and
                  their expertise? Feel free to contact us."
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

export default HireReactJsDev
