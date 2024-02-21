import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';

import background from '../../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../public/assets/images/Home-our-services/download (1).png'

import services from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/Magento-Development-Services.webp'
import company from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/Magento-Web-Development-Company.webp'
import developer from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/Magento-Certified-Developer.webp'

import Offer from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/1/FASTER TIME-TO-MARKET.svg'
import Features from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/1/MOBILE COMMERCE APPS.svg'
import Consulting from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/1/INTEGRATING PAYMENT GATEWAY.svg'
import Secure from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/1//CUSTOM ECOMMERCE DEVELOPMENT.svg'
import Laravel from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/1/CUSTOM THEME AND PLUGIN DEVELOPMENT.svg'
import Unit from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/1/WEBSITE MIGRATION.svg'

import Expertise from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/2/EXPERIENCE AND EXPERTISE.svg'
import Sophisticated from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/2/STRONG PORTFOLIO.svg'
import Implement from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/2/UNIQUE UI AND UX.svg'
import Affordable from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/2/FASTER DEVELOPMENT.svg'
import Time from '../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Magento 2 Developer/2/TIMELY DELIVERY.svg'


import { Helmet } from 'react-helmet'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from '../../../components/HeroSection';
import Whatsapp from '../../../components/Whatsapp';
import GetAQuoteModal from '../../../components/GetAQuoteModal';

const HireMagento = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])

  // function asd() {
  //   return (
  //     <div
  //       dangerouslySetInnerHTML={{ __html: <Link href="/aaki,i,sd">affa</Link> }}
  //     ></div>
  //   )
  // }
  // const data = { text: asd() }
  // const link = data.text.props?.dangerouslySetInnerHTML?.__html?.props?.href
  // console.log(link)
  return (
    <>
      <Helmet title="Hire Certified Magento 2 Developers In India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Magento 2 Developers In India"
        des={`Do you like to build your mobile presence with a crisp and beautiful Android app for your business? Are you trying to find some expert Android app developers who can give shape to your app idea with sophisticated Android development? Well, the Android app developers at The App Ideas ensure can ensure building highly objectively designed Android apps with custom features to help your business with a mobile presence. `}
        list1="7+ Years of experience in App Development"
        list2="Best Magento Development Company"
        list3="Dedicated team for your Magento Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Magento Development Services"
        service2="Create React Native App"
        service3="React Native Development Company"
        image1={services}
        image2={company}
        image3={developer}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Magento 2 Development</h3>
            <p>
              We at The App Ideas are working with Magento as the active
              ecommerce platform for years and over the years have shaped an
              array of most successful ecommerce sites and shopping apps with
              the power of Magento. Our feat in Magento ecommerce and web
              development consists of a plethora of online shopping stores, B2B
              business transaction interfaces and retail business websites. From
              delivering custom look and feel as per the business niche to
              helping a business reach wider audience with SEO friendly
              features, our{' '}
              <Link
                href="/magento-development"
                className="Title_Color"
                target="_blank"
                style={{ color: '#d6aa0b' }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b> Magento 2 development </b>
              </Link>{' '}
              takes care of every aspect.
            </p>
            <p>
              The developers at The App Ideas can develop custom designed and
              highly user optimised Android apps with a highly competitive
              pricing and stringent deadline.
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
      {/* Hire Section Start */}

      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              EXPERT MAGENTO DEVELOPERS TO DELIVER MOST SOPHISTICATED ECOMMERCE
              EXPERIENCE AND MORE
            </h2>
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
                  <div>FASTER TIME-TO-MARKET</div>
                </h5>
                <div className="text">
                  With the simple and easy coding of Magento, we ensure building
                  web apps real quick.
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
                  <div>MOBILE COMMERCE APPS</div>
                </h5>
                <div className="text">
                  Our Magento 2 developers can develop feature rich and powerful
                  web stores rich with features and capabilities that we expect
                  from a modern web store.
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
                  <div>INTEGRATING PAYMENT GATEWAY</div>
                </h5>
                <div className="text">
                  The expert Magento developers at The App Ideas will also help
                  integrating payment gateway to the ecommerce and business
                  websites ensuring optimum ease of use.
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
                  <div>CUSTOM ECOMMERCE DEVELOPMENT</div>
                </h5>
                <div className="text">
                  With custom Magento 2 development expertise our developers can
                  deliver highly business specific and customized ecommerce
                  experience.
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
                  <div>CUSTOM THEME AND PLUGIN DEVELOPMENT</div>
                </h5>
                <div className="text">
                  The developers at The App Ideas build a wide variety of
                  Magento themes and plugins to help you customize your web
                  store and ecommerce experience.
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
                  <div>WEBSITE MIGRATION</div>
                </h5>
                <div className="text">
                  We also provide migration service change the existing platform
                  of your business website to Magento platform.
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
            <h2>WHY HIRE MAGENTO 2 DEVELOPERS IN INDIA?</h2>
            <p>
              We have established ourselves as one of the most sought after
              Magento 2 development companies with a huge following. Here are
              some of the key reasons to choose our Magento 2 developers India.
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
                  <div>EXPERIENCE AND EXPERTISE</div>
                </h5>
                <div className="text">
                  We at The App Ideas boast of a dedicated team of experienced
                  Magento developers.
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
                  <div>STRONG PORTFOLIO</div>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  We boast of a strong portfolio of an array of successful
                  Magento 2 ecommerce stores and websites.
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
                  <div>UNIQUE UI AND UX</div>
                </h5>
                <div className="text">
                  With our Magento 2 development we ensure delivering highly
                  sophisticated and unique UI and engaging UX for your ecommerce
                  store.
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
                  <div>FASTER DEVELOPMENT</div>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  We follow agile process with concurrent testing to ensure fast
                  paced development of glitch free ecommerce experience.
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
                style={{ height: '385px',cursor:"pointer" }}
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
                  <div>TIMELY DELIVERY</div>
                </h5>
                <div className="text">
                  We ensure delivering the projects following strict project
                  deadline and milestones while ensuring competitive rate for
                  high quality development.
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
        question="Do you want to know more about our Magento 2 developers? Just
                  feel free to contact us."
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

export default HireMagento
