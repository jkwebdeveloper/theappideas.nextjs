import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';
import background from '../../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../public/assets/images/Home-our-services/download (1).png'
import WorkHand from '../../../components/WorkHand'

import Company from '../../../public/assets/images/HIRE US/IPhone-App-Development-Company.png'
import Service from '../../../public/assets/images/HIRE US/IPhone-App-Development-Service.png'
import ApplicationDevelopment from '../../../public/assets/images/HIRE US/IPhone-Application-Development.png'

import custom from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/1/Hire Iphone App Developers.svg'
import IOS from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/1/iOS-Game-Development.svg'
import upgrade from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/1/UPGRADE AND SUPPORT (1).svg'
import WIDGET from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/1/CUSTOM WIDGET DEVELOPMENT.svg'
import WEARABLE from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/1/IOS WEARABLE APP DEVELOPMENT.svg'
import uiux from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/1/UIUX DEVELOPMENT.svg'
import EXPERIENCE from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/2/EXPERIENCE AND EXPERTISE.svg'
import STRONG from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/2/STRONG PORTFOLIO.svg'
import UNIQUE from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/2/UNIQUE UI AND UX.svg'
import FASTER from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/2/FASTER TIME-TO-MARKET.svg'
import COMPETITIVE from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire IOS app developer/2/COMPETITIVE RATE _ SUPPORT.svg'
import { Helmet } from 'react-helmet'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import HeroSection from "../../../components/HeroSection";
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Whatsapp from '../../../components/Whatsapp';
import GetAQuoteModal from '../../../components/GetAQuoteModal';

const HireIOSDev = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire iPhone App Developers | Dedicated iOS App Developers" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Iphone App Developers In India"
        des="Hire iPhone app developers in India from The App Ideas. as the world’s prestigious mobile platform and App Store as the most popular app marketplace populated by majority of mobile apps are invincible for the mobile strategy of any business. With high-end features, most sophisticated design elements and strict quality control measures iOS is also the platform to give your app a stamp of quality as and when the app enters the App Store."
        list1="7+ Years of experience in App Development"
        list2="Best Iphone App Development Company"
        list3="Dedicated team for your Iphone App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="IPhone App Development Company"
        service2="IPhone App Development Service"
        service3="IPhone Application Development"
        image1={Company}
        image2={Service}
        image3={ApplicationDevelopment}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in iPhone App Development</h3>
            <p>
              The App Ideas is an{' '}
              <Link
                href="/iphone-app-development"
                className="Title_Color"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b>iPhone app development company</b>
              </Link>{' '}
              capable to create most sophisticated, future ready iOS apps that
              can instantly give your business brand a recognition through a
              popular App Store presence. Over the years, we have produced a
              staggering range of most sophisticated iOS apps across wide
              variety of business niches. When it comes to leveraging the unique
              and standalone iOS features and benefits down to the latest iOS
              version, our expertise stands apart from the rest.
            </p>
            <p>
              Being perfectly aware of all these competitive advantages of iOS
              we at The App Ideas give utmost focus on the platform. We boast of
              a highly experienced team of iOS developers who can transform your
              mobile presence into successful iPhone apps.
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

      <>
        {/* Work Head Section Start */}
        <WorkHand />
        {/* Work Head Section End */}
      </>

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              HIRE IOS DEVELOPERS FROM THE APP IDEAS FOR VARIETY OF REQUIREMENTS
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
                  <Image width={40} height={54}
                    src={custom}
                    alt="Web Development"
                    style={{ width: '13%' }}
                  />
                </div>
                <h5>
                  <div>CUSTOM IPHONE APP DEVELOPMENT</div>
                </h5>
                <div className="text">
                  Our iOS app developers have the expertise and experience to
                  deliver the best of iOS platform to ensure optimum native
                  capabilities with your iPhone mobile app.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={IOS}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: '15%' }}
                  />
                </div>
                <h5>
                  <div>IOS GAME DEVELOPMENT</div>
                </h5>
                <div className="text">
                  Our iOS app developers have the expertise and experience to
                  deliver the best of iOS platform to ensure optimum native
                  capabilities with your iPhone mobile app.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={upgrade}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>UPGRADE AND SUPPORT</div>
                </h5>
                <div className="text">
                  We also offer experienced IOS developers who can address
                  issues from time to time and give facelift to your apps with
                  timely and new updates and upgrades.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={WIDGET}
                    alt="INTERNET OF THING"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>CUSTOM WIDGET DEVELOPMENT</div>
                </h5>
                <div className="text">
                  The developers at The App Ideas can also build custom widgets
                  to leverage unique user experience for your new IOS app.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={uiux}
                    alt="GAME DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>UI/UX DEVELOPMENT</div>
                </h5>
                <div className="text">
                  We boast of a team of expert IOS app developers capable to
                  design and build most sophisticated and future ready UI and UX
                  for a wide variety of IOS apps.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={WEARABLE}
                    alt="Hire Developer"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>IOS WEARABLE APP DEVELOPMENT</div>
                </h5>
                <div className="text">
                  Our iOS app developers also have the necessary expertise and
                  skills to build sophisticated Apple Watch apps and connected
                  apps for various IOT gadgets.
                </div>
                {/* <Link className="arrow-icon">
                  <HiOutlineArrowRight />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two py-5">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHY HIRE iPHONE APP DEVELOPERS FROM US?</h2>
            <p>
              We have established our reputation as one of the leading iPhone
              app developers with a wide spectrum of{' '}
              <Link
                href="/mobile-app-development"
                className="Title_Color"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b>app development</b>
              </Link>{' '}
              projects across the niches. Here are some of the key reasons to
              hire iPhone app developers from us.
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
                  <Image width={40} height={54}
                    src={EXPERIENCE}
                    alt="Web Development"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>EXPERIENCE AND EXPERTISE</div>
                </h5>
                <div className="text">
                  We boast of a robust team of dedicated iOS app developers with
                  proven track record and several years of iOS development
                  experience.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={STRONG}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>STRONG PORTFOLIO</div>
                </h5>
                <div className="text">
                  We have a strong portfolio of several successful iOS apps
                  representing various niches and built for different devices
                  including latest iPhone devices and Apple Watches.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={UNIQUE}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>UNIQUE UI AND UX</div>
                </h5>
                <div className="text">
                  Our iOS developers will guarantee delivering unique and
                  engaging UI and UX for apps of all niches.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={FASTER}
                    alt="INTERNET OF THING"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>FASTER TIME TO MARKET</div>
                </h5>
                <div className="text">
                  Thanks to agile development process coupled up with concurrent
                  testing we ensure quick development time without compromising
                  on the quality.
                </div>
                {/* <Link className="arrow-icon">
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
                  <Image width={40} height={54}
                    src={COMPETITIVE}
                    alt="GAME DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>COMPETITIVE RATE</div>
                </h5>
                <div className="text">
                  We offer one of the most competitive rate for most
                  sophisticated and quality-focused iOS app development service
                  across a wide variety of business niches.
                </div>
                {/* <Link className="arrow-icon">
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
        question="Do you want to know more about our iPhone app developers and
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

export default HireIOSDev
