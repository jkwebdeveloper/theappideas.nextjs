import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';

import VRApplicationDeveloper from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/VRApplicationDeveloper.webp'
import appDevelopment from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Mobile-App-Development.png'
import Wordpress from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Wordpress-Developer.png'

import background from '../../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../public/assets/images/Home-our-services/download (1).png'
import Elegant from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/1/The Elegant Designing Services.svg'
import Platforms from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/1/Cross Platforms Development.svg'
import Deliver from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/1/Deliver Secure App Solution.svg'
import Support from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/1/Support And Maintenance.svg'
import Custom from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/1/Custom Flutter App Development.svg'
import Flutter from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/1/Flutter Consulting Services.svg'

import Highly from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/2/Highly Skilled Developers.svg'
import Sophisticated from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/2/Sophisticated Portfolio.svg'
import Deployment from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/2/On-Time Deployment.svg'
import Affordable from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/2/Affordable Costing.svg'
import Client from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/2/Client Satisfaction Guarantee.svg'
import Process from '../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/2/Agile Development Process.svg'


import { Helmet } from 'react-helmet'

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from '../../../components/HeroSection';
import Whatsapp from '../../../components/Whatsapp';
import GetAQuoteModal from '../../../components/GetAQuoteModal';


const HireFlutterDev = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire Flutter App Developers | Offshore Flutter Developers India" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Flutter Developers In India"
        des="Hire the best Flutter Developers in India from The App Ideas. The App Ideas is one of the most popular web and app development company. We have a team of skilled developers who are expert in understanding the client’s requirements in a much better way, plan out, develop and deploy the perfect business solutions which will be helpful in your business growth. Flutter is a newly introduced cross platforms technology. "
        list1="7+ Years of experience in App Development"
        list2="Best Flutter app Development Company"
        list3="Dedicated team for your Flutter app Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Flutter App Development"
        service2="Flutter App Development Service"
        service3="Flutter App Developer"
        image1={VRApplicationDeveloper}
        image2={appDevelopment}
        image3={Wordpress}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Flutter App Development</h3>
            <p>
              The App Ideas is a Flutter app development company. Our developers
              are highly capable of developing a sophisticated and future-ready
              flutter app development. Many of the businesses and services are
              now shifting their business to online and choose the flutter
              technology. Our flutter app development solutions can help you in
              your brand awareness online. Our Flutter skilled developers can
              provide the best software solution with the best design and
              functionality which can be helpful in business growth.
            </p>
            <p>
              Flutter is a Google new open source technology for creating native
              mobile apps for Android and IOS with a single codebase. We have a
              team of highly skilled Flutter app development who are highly
              expert and experienced in providing the best business solution for
              different niches. Hire us and access our expertise to convert your
              ideas into online platforms solutions.
            </p>
            <div className="text-center">
              <Link
                href="/contact-us"
                className='text-decoration-none'
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
              <div data-aos="fade-up" className="work_head_box port-bg-1">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Spending Tracker</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Mobile Application Development{' '}
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            React Native
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Reactjs
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Workhand/Device-Image-53-1536x948.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-bg-2">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Pitch App</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            React Native
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Reactjs
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Workhand/Device-Image-52-1536x948.webp')}
                        alt="Device-Image-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-bg-3">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>We Eat App</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            React Native
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Workhand/Device-Image-51-1536x948.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-bg-4">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Spending Tracker</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Mobile Application Development{' '}
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            React Native
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Reactjs
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Workhand/Device-Image-26-1536x948.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-bg-5">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Pitch App</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            React Native
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Reactjs
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Workhand/app-1536x948.webp')}
                        alt="Device-Image-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-bg-6">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>We Eat App</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            React Native
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-up-left"
                        src={require('../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Flutter Developers/Workhand/Device-Image-1-1536x948.webp')}
                        alt="port-mobile-app-mobile-thirteen"
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
            <h2>
              Hire Flutter Developers from The App Ideas for Variety of
              Requirements
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
                  <Image width={50} height={62}
                    src={Custom}
                    alt="Custom Flutter App Development"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Custom Flutter App Development</div>
                </h5>
                <div className="text">
                  Our Flutter app developers are highly skilled and experienced
                  in delivering the best Flutter app platform to the business
                  which fulfils all the aspects of the clients as per the
                  requirements.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  <Image width={50} height={62}
                    src={Elegant}
                    alt="The Elegant Designing Services"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>The Elegant Designing Services</div>
                </h5>
                <div className="text">
                  We have a team of highly experienced designers who are capable
                  of offering unique, sophisticated and future-ready UI -UX for
                  a variety of Flutter apps.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  <Image width={50} height={62}
                    src={Platforms}
                    alt="Cross Platforms Development"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Cross Platforms Development</div>
                </h5>
                <div className="text">
                  We have an experienced team of experts of cross-platform
                  developers who can help you to convert your app ideas into an
                  elegant app for both Android and IOS.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  <Image width={50} height={62}
                    src={Support}
                    alt="Support And Maintenance"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Support And Maintenance</div>
                </h5>
                <div className="text">
                  We are ready with a robust team of Flutter developers who are
                  ready to provide the flutter apps along with keeping in mind
                  the performance issues of integrating new features.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  <Image width={50} height={62}
                    src={Deliver}
                    alt="Deliver Secure App Solution"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Deliver Secure App Solution</div>
                </h5>
                <div className="text">
                  As a Flutter software development company, we offer the best
                  flutter app solution. Along with delivering the best flutter
                  app solution, we also ensure about delivering a secure
                  solution that helps in maintaining security and privacy.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  <Image width={50} height={62}
                    src={Flutter}
                    alt="Flutter Consulting Services"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div>Flutter Consulting Services</div>
                </h5>
                <div className="text">
                  Our iOS app developers also have the necessary expertise and
                  skills to build sophisticated Apple Watch apps and connected
                  apps for various IOT gadgets.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
            <h2>Why Hire Flutter app Developers from us?</h2>
            <p>
              We have established our reputation in the market as one of the
              leading Flutter app development with experience in app development
              for different niches. Here I am listing some of the key reasons to
              hire the Flutter app developers for us.
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
                    src={Highly}
                    alt="Highly Skilled Developers"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Highly Skilled Developers</div>
                </h5>
                <div className="text">
                  We boast of a robust team of dedicated iOS app developers with
                  proven track record and several years of iOS development
                  experience.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  We have proven our expertise in the web and app development
                  field by creating a sophisticated portfolio of web and app
                  development services.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                    src={Deployment}
                    alt="On-Time Deployment"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>On-Time Deployment</div>
                </h5>
                <div className="text">
                  Along with the best designing and development services, we
                  also offer the on-time deployment of the projects. We strictly
                  follow the timeline.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                  After requirements gathering, we analyze the overall projects
                  and features of the client. And based on that we offer the
                  best and competitive rates without compromising the quality of
                  the software solution.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                    src={Client}
                    alt="Client Satisfaction Guarantee"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Client Satisfaction Guarantee</div>
                </h5>
                <div className="text">
                  With hundreds of projects completed by us and a global client
                  base, we guarantee client satisfaction with our flutter app
                  development services.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
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
                    src={Process}
                    alt="Agile Development Process"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div>Agile Development Process</div>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  Our Flutter developers follow the Agile Development process to
                  ensure the fast paced development.
                </div>
                {/* <div className="arrow-icon">
                  <HiOutlineArrowRight />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      {/* Contact Section Start */}
      <ContactUs question="Do you want to know more about our Flutter developers and their expertise?" />
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

export default HireFlutterDev
