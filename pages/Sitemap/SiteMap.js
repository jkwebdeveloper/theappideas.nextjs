import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Core Pages
import home from '../../public/assets/images/sitemap/Home/Core_Pages/Home.svg'
import about from '../../public/assets/images/sitemap/Home/Core_Pages/About_us.svg'
import ourprocess from '../../public/assets/images/sitemap/Home/Core_Pages/our_process.svg'
import ourteam from '../../public/assets/images/sitemap/Home/Core_Pages/our_team.svg'
import career from '../../public/assets/images/sitemap/Home/Core_Pages/Career.svg'
import portfolio from '../../public/assets/images/sitemap/Home/Core_Pages/Portfolio.svg'
import testimonial from '../../public/assets/images/sitemap/Home/Core_Pages/Testimonial.svg'

// Mobile Apps Development
import Android from '../../public/assets/images/sitemap/Home/Mobile_App_dev/Android_app.svg'
import IPhone from '../../public/assets/images/sitemap/Home/Mobile_App_dev/Iphone_app_dev.svg'
import IPad from '../../public/assets/images/sitemap/Home/Mobile_App_dev/ipad.svg'
import Ionic from '../../public/assets/images/sitemap/Home/Mobile_App_dev/ionic.svg'
import Mobile from '../../public/assets/images/sitemap/Home/Mobile_App_dev/Mobile_app_dev.svg'
import INTERNET from '../../public/assets/images/sitemap/Home/Mobile_App_dev/IOT app.svg'

// Web Development
import WordPress from '../../public/assets/images/sitemap/Home/Web_Development/Wordpress.svg'
import Angular from '../../public/assets/images/sitemap/Home/Web_Development/Angular.svg'
import PHP from '../../public/assets/images/sitemap/Home/Web_Development/php.svg'
import DotNetNuke from '../../public/assets/images/sitemap/Home/Web_Development/dotnetnuke.svg'
import Asp from '../../public/assets/images/sitemap/Home/Web_Development/asp_net.svg'
import ReactNative from '../../public/assets/images/sitemap/Home/Web_Development/react_native.svg'
import WEBDEVELOPMENT from '../../public/assets/images/sitemap/Home/Web_Development/Web_Dev.svg'

// Ecommerce Development
import Magento from '../../public/assets/images/sitemap/Home/Ecommerce_Dev/Magento_Dev.svg'
import Drupal from '../../public/assets/images/sitemap/Home/Ecommerce_Dev/Drupal_Development.svg'
import Joomla from '../../public/assets/images/sitemap/Home/Ecommerce_Dev/Joomla_Dev.svg'
import Shopify from '../../public/assets/images/sitemap/Home/Ecommerce_Dev/Shopify_Dev.svg'
import Commerce from '../../public/assets/images/sitemap/Home/Ecommerce_Dev/E_Commerce_Web_Dev.svg'

// Web & Graphics Designing
import Designing from '../../public/assets/images/sitemap/Home/Web_Graphics_Designing/web_design.svg'
import MobileDesign from '../../public/assets/images/sitemap/Home/Web_Graphics_Designing/mobile_app_design.svg'
import Graphic from '../../public/assets/images/sitemap/Home/Web_Graphics_Designing/graphic_design.svg'

// Hire Developer
import IOS from '../../public/assets/images/sitemap/Home/Hire_Dev/IOS.svg'
import AndroidDeveloper from '../../public/assets/images/sitemap/Home/Hire_Dev/Android.svg'
import WordPressDeveloper from '../../public/assets/images/sitemap/Home/Hire_Dev/Wordpress.svg'
import PHPDevelopers from '../../public/assets/images/sitemap/Home/Hire_Dev/php.svg'
import MagentoDeveloper from '../../public/assets/images/sitemap/Home/Hire_Dev/Magento2.svg'
import ShopifyDeveloper from '../../public/assets/images/sitemap/Home/Hire_Dev/Shopify.svg'
import CodeIgniter from '../../public/assets/images/sitemap/Home/Hire_Dev/codlgniter.svg'
import Angular2 from '../../public/assets/images/sitemap/Home/Hire_Dev/Angular_2.svg'
import Nodejs from '../../public/assets/images/sitemap/Home/Hire_Dev/Node.js.svg'
import Laravel from '../../public/assets/images/sitemap/Home/Hire_Dev/Laravel.svg'
import ReactJS from '../../public/assets/images/sitemap/Home/Hire_Dev/Reactjs.svg'
import Native from '../../public/assets/images/sitemap/Home/Hire_Dev/React_Native.svg'
import Flutter from '../../public/assets/images/sitemap/Home/Hire_Dev/Flutter.svg'
import Python from '../../public/assets/images/sitemap/Home/Hire_Dev/Python.svg'
import Avada from '../../public/assets/images/sitemap/Home/Hire_Dev/Avada.svg'
import Divi from '../../public/assets/images/sitemap/Home/Hire_Dev/Divi.svg'
import Enfold from '../../public/assets/images/sitemap/Home/Hire_Dev/Enfold.svg'

// Digital Marketing
import SocialMedia from '../../public/assets/images/sitemap/Home/Digital_Marketing/social_media_marketing.svg'
import SEO from '../../public/assets/images/sitemap/Home/Digital_Marketing/seo.svg'
import ASO from '../../public/assets/images/sitemap/Home/Digital_Marketing/aso.svg'

// Ready Made Solutions
import Food from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/food_ordering_solutions.svg'
import Dating from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Dating_Website_And_App_Solution.svg'
import Lawyer from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Lawyer_Website_Solution.svg'
import EcommerceApp from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Ecommerce_App_Solution.svg'
import MLMWebsite from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/MLM Website _ Mobile_App_Solution.svg'
import ELearning from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/E_Learning_Website_Dev.svg'
import Taxi from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Taxi_Booking_App_Development.svg'
import Doctor from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Doctor_Hiring_App_Solution.svg'
import Courier from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Courier_Pickup_Management_Solution.svg'
import Security from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Security_App_Solution.svg'
import Driver from '../../public/assets/images/sitemap/Home/Ready_Made_Solutions/Driver_Tracking_App_Dev.svg'

// On-Demand Apps
import SecurityApp from '../../public/assets/images/sitemap/Home/On_Demand_Apps/Security_App_Dev.svg'
import TaxiBooking from '../../public/assets/images/sitemap/Home/On_Demand_Apps/Taxi_Booking_App_Dev.svg'
import ElearningWebsite from '../../public/assets/images/sitemap/Home/On_Demand_Apps/E_Learning_Website_Dev.svg'
import Tracking from '../../public/assets/images/sitemap/Home/On_Demand_Apps/Driver_Tracking_App_Dev.svg'

// Location Wise Services
import Toronto from '../../public/assets/images/sitemap/Home/Locationwise_services/toronto.svg'
import York from '../../public/assets/images/sitemap/Home/Locationwise_services/New_york.svg'
import Barcelona from '../../public/assets/images/sitemap/Home/Locationwise_services/barcelona.svg'
import Sydney from '../../public/assets/images/sitemap/Home/Locationwise_services/sydney.svg'
import Adelaide from '../../public/assets/images/sitemap/Home/Locationwise_services/Adelaide.svg'
import Brisbane from '../../public/assets/images/sitemap/Home/Locationwise_services/Brisbane.svg'
import Bristol from '../../public/assets/images/sitemap/Home/Locationwise_services/Bristol.svg'
import Liverpool from '../../public/assets/images/sitemap/Home/Locationwise_services/Liverpool.svg'
import Manchester from '../../public/assets/images/sitemap/Home/Locationwise_services/Manchester.svg'
import Melbourne from '../../public/assets/images/sitemap/Home/Locationwise_services/Melbourne.svg'
import London from '../../public/assets/images/sitemap/Home/Locationwise_services/London.svg'

// Other Services
import Startup from '../../public/assets/images/sitemap/Home/Other_Services/Startup_Services.svg'
import Enterprise from '../../public/assets/images/sitemap/Home/Other_Services/Enterprise_App_Dev.svg'

import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer';
import Whatsapp from '../../components/Whatsapp';
import Header from '../../components/Header/Header';
import GetAQuoteModal from '../../components/GetAQuoteModal';

const SiteMap = () => {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <>
      <Helmet title="SITEMAP - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner */}
      <section className="sitemap_banner">
        <h1>SITEMAP</h1>
      </section>
      {/* Core page */}
      <section className="sitemap_container white_bg">
        <div className="sitemap_title">
          <h2>Core Pages</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={home}
                    alt="home"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Home</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/about-us"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={about}
                    alt="home"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>About Us</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/our-process"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={ourprocess}
                    alt="Our-Process"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Our Process</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/our-team"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={ourteam}
                    alt="Our-Team"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Our Team</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/careers"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={career}
                    alt="Career"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Career</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/portfolio"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={portfolio}
                    alt="Portfolio"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Portfolio</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/testimonial"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={testimonial}
                    alt="testimonial"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Testimonial</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile App */}
      <section className="sitemap_container">
        <div className="sitemap_title">
          <h2>Mobile Apps Development</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/android-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Android}
                    alt="android"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Android App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/iphone-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={IPhone}
                    alt="iphone"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>IPhone App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/ipad-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={IPad}
                    alt="ipad"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>IPad App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Ionic}
                    alt="ionic"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Ionic App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Mobile}
                    alt="mobile-app-development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/iot-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={INTERNET}
                    alt="iot-app-development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>INTERNET OF THINGS (IOT) App DEVELOPMENT</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Web Development */}
      <section className="sitemap_container white_bg">
        <div className="sitemap_title">
          <h2>Web Development</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/wordpress-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={WordPress}
                    alt="WordPress-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>WordPress Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/angular-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  {' '}
                  <Image
                    src={Angular}
                    alt="Angular-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Angular Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/php-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={PHP}
                    alt="PHP-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>PHP Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/dotnetnuke-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={DotNetNuke}
                    alt="DotNetNuke-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>DotNetNuke Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/asp-net-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Asp}
                    alt="Asp-Net-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Asp.Net Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/react-native-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={ReactNative}
                    alt="React-Native-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>React Native Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/web-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={WEBDEVELOPMENT}
                    alt="WEB-DEVELOPMENT"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>WEB DEVELOPMENT</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* E-commerce */}
      <section className="sitemap_container">
        <div className="sitemap_title">
          <h2>Ecommerce Development</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/magento-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Magento}
                    alt="Magento-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Magento Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/drupal-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Drupal}
                    alt="Drupal-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Drupal Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/joomla-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Joomla}
                    alt="Joomla-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Joomla Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/shopify-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Shopify}
                    alt="Shopify-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Shopify Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/e-commerce-website-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Commerce}
                    alt="E-Commerce-Website-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>E-Commerce Website Development</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Web & Graphic */}
      <section className="sitemap_container white_bg">
        <div className="sitemap_title">
          <h2>Web & Graphics Designing</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/designing-services"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Designing}
                    alt="WordPress-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Web Designing</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-design"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={MobileDesign}
                    alt="Mobile-App-Design"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Design</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/graphics-design"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Graphic}
                    alt="Graphic-Designing"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Graphic Designing</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire */}
      <section className="sitemap_container">
        <div className="sitemap_title">
          <h2>Hire Developer</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-ios-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={IOS}
                    alt="Hire-IOS-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire IOS Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-android-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={AndroidDeveloper}
                    alt="Hire-Android-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Android Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-wordpress-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={WordPressDeveloper}
                    alt="Hire-WordPress-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire WordPress Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-php-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={PHPDevelopers}
                    alt="Hire-PHP-Developers"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire PHP Developers</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-magento-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={MagentoDeveloper}
                    alt="Hire-Magento-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Magento 2 Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-shopify-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={ShopifyDeveloper}
                    alt="Hire-Shopify-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Shopify Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-codeigniter-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={CodeIgniter}
                    alt="Hire-CodeIgniter-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire CodeIgniter Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-angular-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Angular2}
                    alt="Hire-Angular-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Angular 2 Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-nodejs-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Nodejs}
                    alt="Hire-Node-JS-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Node.Js Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-laravel-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Laravel}
                    alt="Hire-Laravel-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Laravel Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-reactjs-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={ReactJS}
                    alt="Hire-React-js-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire React JS Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-react-native-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Native}
                    alt="Hire-React-Native-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire React Native Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-flutter-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Flutter}
                    alt="Hire-Flutter-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Flutter Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-python-developer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Python}
                    alt="Hire-Python-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Python Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-us"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Avada}
                    alt="Hire-Avada-Expert-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Avada Expert Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-us"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Divi}
                    alt="Hire-Divi-Expert-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Divi Expert Developer</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/hire-us"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Enfold}
                    alt="Hire-Enfold-Expert-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Hire Enfold Expert Developer</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Digital Marketing */}
      <section className="sitemap_container white_bg">
        <div className="sitemap_title">
          <h2>Digital Marketing</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/social-media-marketing"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={SocialMedia}
                    alt="Social Media Marketing"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Social Media Marketing</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/seo"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={SEO}
                    alt="seo"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>SEO</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/aso"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={ASO}
                    alt="aso"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>ASO</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ready_Made_Solutions */}
      <section className="sitemap_container">
        <div className="sitemap_title">
          <h2>Ready Made Solutions</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/food-delivery-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Food}
                    alt="Food Ordering Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Food Ordering Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/dating-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Dating}
                    alt="Dating Website And App Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Dating Website And App Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/lawyer-website-solution"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Lawyer}
                    alt="Lawyer Website Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Lawyer Website Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/e-commerce-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={EcommerceApp}
                    alt="Ecommerce App Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Ecommerce App Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/sitemap"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={MLMWebsite}
                    alt="MLM-Website-Mobile"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>MLM Website & Mobile App Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/e-learning-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={ELearning}
                    alt="Hire-Shopify-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>E-Learning Website Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/taxi-booking-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Taxi}
                    alt="Taxi-Booking-App-Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Taxi Booking App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/doctor-hiring-app-solution"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Doctor}
                    alt="Doctor Hiring App Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Doctor Hiring App Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/courier-pickup-management-solution"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Courier}
                    alt="Courier-Pickup-Management-Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Courier Pickup Management Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/security-app-solution"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Security}
                    alt="Security App Solution"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Security App Solution</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/driver-tracking-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Driver}
                    alt="Hire-Laravel-Developer"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Driver Tracking App Development</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* On_Demand_Apps */}
      <section className="sitemap_container white_bg">
        <div className="sitemap_title">
          <h2>On-Demand Apps</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/security-app-solution"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={SecurityApp}
                    alt="Security App Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Security App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/taxi-booking-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={TaxiBooking}
                    alt="Taxi Booking App Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Taxi Booking App Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/e-learning-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={ElearningWebsite}
                    alt="Elearning Website Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Elearning Website Development</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/driver-tracking-app-development"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Tracking}
                    alt="Driver Tracking App Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Driver Tracking App Development</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* location_map */}
      <section className="sitemap_container">
        <div className="sitemap_title">
          <h2>Location Wise Services</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-toronto"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Toronto}
                    alt="Mobile App Development Toronto"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Toronto</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-new-york"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={York}
                    alt="Mobile App Development New York"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development New York</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-barcelona"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Barcelona}
                    alt="Mobile App Development Barcelona"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Barcelona</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-Sydney"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Sydney}
                    alt="Mobile App Development Sydney"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Sydney</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-adelaide"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Adelaide}
                    alt="Mobile App Development Adelaide"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Adelaide</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-brisbane"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Brisbane}
                    alt="Mobile App Development Brisbane"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Brisbane</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-Bristol"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Bristol}
                    alt="Mobile App Development Bristol"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Bristol</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-Liverpool"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Liverpool}
                    alt="Mobile App Development Liverpool"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Liverpool</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-Manchester"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Manchester}
                    alt="Mobile App Development Manchester"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Manchester</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-Melbourne"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={Melbourne}
                    alt="Mobile App Development Melbourne"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development Melbourne</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/mobile-app-development-London"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  target="_blank"
                >
                  <Image
                    src={London}
                    alt="Mobile App Development London"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Mobile App Development London</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Other_Services */}
      <section className="sitemap_container white_bg">
        <div className="sitemap_title">
          <h2>Other Services</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/startup-services"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Startup}
                    alt="Startup Services"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Startup Services</h3>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sitemap_box">
                <Link
                  href="/sitemap"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <Image
                    src={Enterprise}
                    alt="Enterprise App Development"
                    className="img-fluid"
                    style={{ height: '60px' }}
                  />
                  <h3>Enterprise App Development</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog */}
      <section className="sitemap_container">
        <div className="sitemap_title">
          <h2>Blog</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 bottom_spacing">
              <div className="blog_box">
                <h2>
                  <Link href="/sitemap">
                    How much does it cost to create an app in 2023?
                  </Link>
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 bottom_spacing">
              <div className="blog_box">
                <h2>
                  <Link href="/sitemap">How much Does It Cost to Build a FinTech App?</Link>
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 bottom_spacing">
              <div className="blog_box">
                <h2>
                  <Link href="/sitemap">
                    How Much Does It Cost To Build An App Like Rover?
                  </Link>
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 bottom_spacing">
              <div className="blog_box">
                <h2>
                  <Link href="/sitemap">
                    How Much Does It Cost to Develop An On-Demand Car Wash App?
                  </Link>
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 bottom_spacing">
              <div className="blog_box">
                <h2>
                  <Link href="/sitemap">
                    How Much Does It Cost To Develop A Car Parking Finder App?
                  </Link>
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 bottom_spacing">
              <div className="blog_box">
                <h2>
                  <Link href="/sitemap">
                    How Much Does It Cost to Develop an On-Demand Delivery App
                    like Dunzo?
                  </Link>
                </h2>
              </div>
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

export default SiteMap
