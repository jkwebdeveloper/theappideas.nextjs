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

const HireWordPressDev = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire Wordpress Developers | Dedicated Wordpress Developers" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire WordPress Developers In India"
        des="WordPress has always been the most popular CMS platform with millions blogs and content rich websites actively using it all over the the globe. WordPress always enjoyed popularity as a CMS platform because of its unmatched flexibility, versatility, scalability, great scope of customization with hundreds of plugins, themes and extensions. WordPress as a CMS platform offers exceptional ease of use for the user and unmatched ease and rich tools for the administrators."
        list1="7+ Years of experience in App Development"
        list2="Best WordPress  Development Company"
        list3="Dedicated team for your WordPress  Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Custom WordPress Development Services"
        service2="WordPress Website Development Company"
        service3="WordPress Website Developer"
        image1={VRApplicationDeveloper}
        image2={Apps}
        image3={Angular}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in WordPress Development</h3>
            <p>
              Over the years with a gamut of clients from all niches of business
              and all walks of life who depended on our expertise for shaping
              their web presence, we have built a strong portfolio of most
              sophisticated WordPress websites with beautiful user interface and
              exceptionally fluid user experience. Our feat in building niche
              custom WordPress websites for variety of content needs, made us
              one of the most preferred{' '}
              <Link
                href="/wordpress-development"
                className="Title_Color"
                style={{ color: '#d6aa0b' }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b> WordPress development</b>
              </Link>{' '}
              company for this popular CMS platform. Besides building custom
              WordPress websites our WordPress developers can also build and
              design custom themes and plugins to help our customers achieve
              their sought after look and feel.
            </p>
            <p>
              The App Ideas has been into WordPress development for years
              delivering a whole array of sophisticated and highly custom
              designed websites. Hire industry’s best WordPress prodigies to
              give your custom website and blog an unmatched user experience. If
              you want to produce awesome web experience with glitch-free
              performance, our Hire WordPress Developers in India.
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
              <div className="work_head_box port_ecommerce">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Resipsausa</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            E-Commerce
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Hire Wordpress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        src={require('../../../public/assets/images/Portfolio/port-ecommerce-website.webp')}
                        alt="port-ecommerce-website"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-one">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Purebodynaturals</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            E-Commerce
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Hire Wordpress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        src={require('../../../public/assets/images/Portfolio/port-ecommerce-website-one.webp')}
                        alt="port-ecommerce-website-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_mobilebg_fourteen">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Food Ordering Website</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            Hire Wordpress
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Web Development
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            {' '}
                            Wordpress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        src={require('../../../public/assets/images/Portfolio/port-webdevelop-webiste-two.webp')}
                        alt="port-webdevelop-webiste-two"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-tan">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Carolight</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            E-Commerce
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Hire Wordpress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        src={require('../../../public/assets/images/Portfolio/port-ecommerce-website-tan.webp')}
                        alt="port-ecommerce-website-tan"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-eleven">
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Bravura</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {' '}
                          </div>
                          <div className="work_head_item">
                            E-Commerce
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Hire Wordpress
                          </div>
                        </li>
                        <li>
                          {' '}
                          <div className="work_head_item">
                            Wordpress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        src={require('../../../public/assets/images/Portfolio/port-ecommerce-website-eleven.webp')}
                        alt="port-ecommerce-website-eleven"
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
              The App Ideas: Hire WordPress developers for delivering rich web
              experience with content focused websites and blogs
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
                  <div className="text_heading">WordPress Features Integration</div>
                </h5>
                <div className="text">
                  We have a team of highly skills WordPress developer who can
                  also easily integrate the new WordPress features into an
                  existing website for your business success.
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
                  <div className='text_heading'>Offer Secure Website Platforms</div>
                </h5>
                <div className="text">
                  Security is one of the most important and crucial factors in
                  Website development. WordPress is one of the most popular
                  frameworks which also provides the best security to your
                  online platform. We can help you to provide a secure web
                  application solution.
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
                    alt="CUSTOM WORDPRESS DEVELOPMENT"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <div className='text_heading'>CUSTOM WORDPRESS DEVELOPMENT</div>
                </h5>
                <div className="text">
                  Our expertise driven WordPress developers can develop highly
                  customized WordPress websites with the help of custom themes
                  and plugins offering truly unique look and feel.
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
                  <div  className='text_heading'>WORDPRESS MOBILE APP CONVERSION</div>
                </h5>
                <div className="text">
                  We have also proven expertise in converting a WordPress
                  website into highly responsive and feature rich cross platform
                  native mobile apps.
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
                  <div className='text_heading'>WORDPRESS THEME DESIGN</div>
                </h5>
                <div className="text">
                  We at The App Ideas develop a wide variety of custom WordPress
                  themes for a variety but of content rich websites belonging to
                  a wide variety of niches.
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
                  <div className='text_heading'>Theme And Plugin Integration</div>
                </h5>
                <div className="text">
                  Our WordPress experts can also help you sport accustom web
                  experience by integrating a range of handpicked themes and
                  plugins suitable for your website.
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
                  <div className='text_heading'>Expertise In Web Solutions</div>
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
                  <Image width={70} height={70}
                    src={Sophisticated}
                    alt="Sophisticated Portfolio"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div className='text_heading'>Sophisticated Portfolio</div>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  With years of experience, We have worked on various Laravel
                  projects and successful web solutions or applications for
                  different niches.
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
                  <Image width={70} height={70}
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div className='text_heading'>Implement Agile Methods</div>
                </h5>
                <div className="text">
                  Along with the best designing and development services, we
                  also offer the on-time deployment of the projects. We strictly
                  follow the timeline.
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
                  <Image width={70} height={70}
                    src={Affordable}
                    alt="Affordable Costing"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div className='text_heading'>Affordable Costing</div>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  Based on the projects, modules, and features of the
                  requirements, we offer the best competitive rates without
                  embracing the quality of the projects.
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
                  <Image width={70} height={70}
                    src={Time}
                    alt="Time-Bound Deployment"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div className='text_heading'>Time-Bound Deployment</div>
                </h5>
                <div className="text">
                  We strictly follow the timeline of deploying the projects to
                  our clients with the best quality. In a timeline, we develop
                  as well as test the software before delivering it to you.
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
                  <Image width={70} height={70}
                    src={Free}
                    alt="Free Support Services"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <div className='text_heading'>Free Support Services</div>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  After deployment of the projects within the timeline, we also
                  offer our clients three months of free support and maintenance
                  services. You can easily connect with us through various
                  methods like E-mail, call, and chat.
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

export default HireWordPressDev
