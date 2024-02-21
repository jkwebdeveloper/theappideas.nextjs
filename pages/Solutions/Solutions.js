import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import background from '../../public/assets/images/Home-our-services/bg-download.svg'
import background1 from '../../public/assets/images/Home-our-services/download (1).png'
import { HiOutlineArrowRight } from 'react-icons/hi'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

import { Helmet } from 'react-helmet'
import Link from 'next/link';
import Image from 'next/image';
import Whatsapp from '../../components/Whatsapp'
import GetAQuoteModal from '../../components/GetAQuoteModal'
const Solutions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Best Mobile App Development Services Solutions - The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      <section className="solution-section">
        <div className="container">
          <h2 className="solution-title">Our Solutions</h2>
        </div>
      </section>
      <section className="services-section style-two">
        <div className="container">
          <div className="row clearfix">
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/food-delivery-app-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image
                      width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/Food Ordering Solution.gif')}
                      alt="Food Ordering Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/food-delivery-app-development">
                      Food Ordering Solution
                    </Link>
                  </h5>
                  <Link
                    href="/food-delivery-app-development"
                    className="arrow-icon"
                  >
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/dating-app-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image
                      width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/Dating Apps and Solutin.gif')}
                      alt="Dating Website & App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/dating-app-development">
                      Dating Website & App Solution
                    </Link>
                  </h5>
                  <Link href="/dating-app-development" className="arrow-icon">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/security-app-solution"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/Security App Solution.gif')}
                      alt="Security App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/security-app-solution">
                      Security App <br />
                      Solution
                    </Link>
                  </h5>
                  <Link href="/security-app-solution" className="arrow-icon">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/e-commerce-app-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/E-Commerce App Solution.gif')}
                      alt="Ecommerce App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/e-commerce-app-development">
                      Ecommerce App Solution
                    </Link>
                  </h5>
                  <Link href="/e-commerce-app-development" className="arrow-icon">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/taxi-booking-app-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/Taxi Booking App Solution.gif')}
                      alt="Taxi Booking App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/taxi-booking-app-development">
                      Taxi Booking App Solution
                    </Link>
                  </h5>
                  <Link
                    href="/taxi-booking-app-development"
                    className="arrow-icon"
                  >
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/e-learning-app-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/E-Learning Website Solution.gif')}
                      alt="Elearning Website Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/taxi-booking-app-development">
                      Elearning Website Solution
                    </Link>
                  </h5>
                  <Link
                    href="/taxi-booking-app-development"
                    className="arrow-icon"
                  >
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/driver-tracking-app-development"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/Driver Tracking App Solution.gif')}
                      alt="Driver Tracking App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/driver-tracking-app-development">
                      Driver Tracking App Solution
                    </Link>
                  </h5>
                  <Link
                    href="/driver-tracking-app-development"
                    className="arrow-icon"
                  >
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href=""
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/MLM Website _ Mobile Application Development.gif')}
                      alt="MLM Website & Mobile App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/">MLM Website & Mobile App Solution</Link>
                  </h5>
                  <Link href="/" className="arrow-icon">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/salon-service-app"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/Service App Solution.gif')}
                      alt="Salon Service App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/salon-service-app">
                      Salon <br /> Service App <br /> Solution
                    </Link>
                  </h5>
                  <Link href="/salon-service-app" className="arrow-icon">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/doctor-hiring-app-solution"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                      src={require('../../public/assets/images/Header/Our Solutions/on demand therapist doctor hiring app solution.gif')}
                      alt="On Demand Therapist/ Doctor Hiring App Solution"
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/doctor-hiring-app-solution">
                      On Demand Therapist/ Doctor Hiring App Solution
                    </Link>
                  </h5>
                  <Link href="/doctor-hiring-app-solution" className="arrow-icon">
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12 my-5">
              <Link
                href="/courier-pickup-management-solution"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                target="_blank"
              >
                <div
                  data-aos="fade-up"
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="color-layer" />
                  <div
                    className="pattern-layer-one"
                    style={{
                      backgroundImage: `url(${background})`,
                      width: '220px',
                    }}
                  />
                  <div
                    className="pattern-layer-two"
                    style={{ backgroundImage: `url(${background1})` }}
                  />
                  <div className="icon-box">
                    <Image width={100} height={100}
                    alt='courier-pickup-management'
                      src={require('../../public/assets/images/Header/Our Solutions/courier pickup management solution.gif')}
                      style={{ width: '100px' }}
                    />
                  </div>
                  <h5>
                    <Link href="/courier-pickup-management-solution">
                      Courier Pickup Management <br /> Solution
                    </Link>
                  </h5>
                  <Link
                    href="/courier-pickup-management-solution"
                    className="arrow-icon"
                  >
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
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

export default Solutions
