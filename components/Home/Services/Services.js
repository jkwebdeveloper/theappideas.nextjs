import React, { useEffect } from 'react'
import background from '../../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../public/assets/images/Home-our-services/download (1).png'
import { HiOutlineArrowRight } from 'react-icons/hi'
import './services.module.css'
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      {/* ======= Services Section ======= */}
      <section className="services-section style-two">
        <div className="container">
          <div className="services-heading">
            <h3>Our Services</h3>
          </div>
          <p className="services-heading-text">
            Over the years we have established ourselves as the leading service
            provider for Mobile App Development, Web Development, Web and
            Graphic Design, Ecommerce Development, IOT development and Games
            Development.
          </p>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
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
                  <Image
                    src={require('../../../public/assets/images/Home-our-services/WEB DEVELOPMENT.gif')}
                    alt="Web Development"
                       width={70}
                        height={70}
                  />
                </div>
                <h4>
                  <Link
                    href="/web-development"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <h4>WEB DEVELOPMENT</h4>
                  </Link>
                </h4>
                <div className="text">
                  We help you build robust web presence with our expertise ...
                </div>
                <Link
                  href="/web-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="arrow-icon">
                    <HiOutlineArrowRight />
                  </div>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
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
                  <Image
                    src={require('../../../public/assets/images/Home-our-services/E-COMMERCE DEVELOPMENT.gif')}
                    alt="E-COMMERCE DEVELOPMENT"
                    width={70}
                        height={70}
                  />
                </div>
                <h4>
                  <Link
                    href="/e-commerce-website-development"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    E-COMMERCE DEVELOPMENT
                  </Link>
                </h4>
                <div className="text">
                  We help your business connect to the customers over ...
                </div>
                <Link
                  href="/e-commerce-website-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="arrow-icon">
                    <HiOutlineArrowRight />
                  </div>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
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
                  <Image
                    src={require('../../../public/assets/images/Home-our-services/WEB DEVELOPMENT (1).gif')}
                    alt="MOBILE APP DEVELOPMENT"
                    width={70}
                    height={70}
                  />
                </div>
                <h4>
                  <Link
                    href="/mobile-app-development"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    MOBILE APP DEVELOPMENT
                  </Link>
                </h4>
                <div className="text">
                  We assist your brand to enjoy the edge of mobile by ...
                </div>
                <Link
                  href="/mobile-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="arrow-icon">
                    <HiOutlineArrowRight />
                  </div>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
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
                  <Image
                    src={require('../../../public/assets/images/Home-our-services/INTERNET OF THINGS.gif')}
                    alt="INTERNET OF THING"
                    width={70}
                    height={70}
                  />
                </div>
                <h4>
                  <Link
                    href="/iot-app-development"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    INTERNET OF THINGS
                  </Link>
                </h4>
                <div className="text">
                  We build intuitive mobile apps connecting the gadgets in ...
                </div>
                <Link
                  href="/iot-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="arrow-icon">
                    <HiOutlineArrowRight />
                  </div>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
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
                  <Image
                    src={require('../../../public/assets/images/Home-our-services/GAME DEVELOPMENT.gif')}
                    alt="GAME DEVELOPMENT"
                    width={70}
                        height={70}
                  />
                </div>
                <h4>
                  <Link
                    href="/"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    GAME DEVELOPMENT
                  </Link>
                </h4>
                <div className="text">
                  We build 2D & 3D engaging and addictive mobile games for all
                  ...
                </div>
                <Link
                  href="/"
                  className="arrow-icon"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <HiOutlineArrowRight />
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
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
                  <Image
                    src={require('../../../public/assets/images/Home-our-services/Hire Developer.gif')}
                    alt="Hire Developer"
                    width={70}
                        height={70}
                  />
                </div>
                <h4>
                  <Link
                    href="/hire-us"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    HIRE A DEVELOPER
                  </Link>
                </h4>
                <div className="text">
                  The App Ideas providing best skilled, experienced developers
                  ...
                </div>
                <Link
                  href="/hire-us"
                  className="arrow-icon"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <HiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Services Section */}
    </>
  )
}

export default Services
