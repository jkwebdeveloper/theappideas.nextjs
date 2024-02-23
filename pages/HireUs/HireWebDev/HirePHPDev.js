import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

import background from "../../../public/assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../public/assets/images/Home-our-services/download (1).png";

import VRApplicationDeveloper from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/PHP-Web-Development.png";
import Apps from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/PHP-Development-Services.png";
import Angular from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/PHP-Expert.png";

import Offer from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/1/CUSTOM PHP DEVELOPMENT.svg";
import Features from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/1//CROSS PLATFORM PHP WEB APPLICATIONS.svg";
import Consulting from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/1/MAINTENANCE _ SUPPORT.svg";
import Secure from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/1/DYNAMIC WEBSITE DEVELOPMENT.svg";
import Laravel from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/1/PHP E-COMMERCE DEVELOPMENT.svg";
import Unit from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/1/SEAMLESS PHP PROGRAMMING.svg";

import Expertise from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/2/DEDICATED FOR EXCELLENCE.svg";
import Sophisticated from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/2/Robust Portfolio.svg";
import Implement from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/2/ROBUST SECURITY.svg";
import Affordable from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/2/FLEXIBILITY AND SCALABILITY.svg";
import Time from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/2/DEALING WITH ALL EXTENSIONS AND FRAMEWORKS.svg";
import Free from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire PHP Developer/2/CROSS PLATFORM EXPERTISE.svg";

import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from "../../../components/HeroSection";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";
import axios from "axios";
import Lottie from "lottie-react";
import Loading from "../../../public/assets/images/loading.json";

const HirePHPDev = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolio, setPortFolios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPortFolios = () => {
    setLoading(true);
    axios
      .get(
        "https://the-app-ideas.onrender.com/api/portfolio?page=Hire PHP Developer",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setPortFolios(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetPortFolios();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Hire Dedicated PHP Developers India | The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire PHP Developers In India"
        des="The App Ideas is a leading Web development, Hire PHP developers company with a robust team of an expert PHP developer, Having years of front-line experience in building sophisticated websites and web apps with PHP as the active programming language, we have hundreds of satisfied clients across several niches and specialties."
        list1="7+ Years of experience in App Development"
        list2="Best PHP Development Company"
        list3="Dedicated team for your PHP Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="PHP Web Development"
        service2="PHP Development Services"
        service3="PHP Expert"
        image1={VRApplicationDeveloper}
        image2={Apps}
        image3={Angular}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Web Industry</h3>
            <p>
              The PHP developers working in our{" "}
              <Link
                href="/web-development"
                className="Title_Color"
                style={{ color: "#d6aa0b" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <b> web development</b>
              </Link>{" "}
              projects have years of experience and resulting expertise in
              delivering the most sophisticated features with PHP-based
              websites.
            </p>
            <p>
              Our PHP developers have extensive knowledge concerning all
              technical aspects related to every subsequent PHP versions. Over
              the years our PHP developers have delivered valuable inputs for
              all genres of websites to give them a unique look and feel. Our
              PHP developers can take any challenge in delivering a unique web
              experience for users.
            </p>
            <p>
              The industry recognized the strength of PHP development skill gave
              our developers an edge over most other IT companies engaged in PHP
              development. If you want to produce excellent web experience with
              glitch-free performance, hire PHP developers.
            </p>
            <div className="text-center">
              <Link
                href="/contact-us"
                className="text-decoration-none"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="contact_btn" style={{ color: "#000" }}>
                  Contact us{" "}
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
          {loading ? (
            <Lottie
              animationData={Loading}
              loop={true}
              style={{
                width: "200px",
                margin: "0 auto",
              }}
            />
          ) : portfolio.length > 0 ? (
            <div className="row mt-5">
              {portfolio.map((elem) => {
                const { _id, image, bgImage, tags, title, link, technology } =
                  elem;
                return (
                  <div key={_id} className="col-12 px-0 mb-4">
                    <div
                      data-aos="fade-up"
                      className="work_head_box"
                      style={{
                        backgroundImage: `url(https://the-app-ideas.onrender.com${bgImage})`,
                        objectFit: "cover",
                        display: "block",
                        width: "100%",
                        height: "400px",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center !important",
                        boxShadow: "0 10px 6px -6px #000",
                        transition: "0.1s ease",
                      }}
                    >
                      <div className="work_head_box_link"></div>
                      <div className="row w-100">
                        <div className="work_head_box_link"></div>
                        <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                          <div className="work_head_box_link"></div>
                          <div className="work_head_lft">
                            <Link
                              href={link}
                              target="_blank"
                              className="work_head_box_link"
                            >
                              <h2>{title}</h2>
                            </Link>
                            <ul className="ps-0">
                              <div className="work_head_box_link"></div>
                              {technology.map((tech) => {
                                return (
                                  <li key={tech}>
                                    <div className="work_head_item">{tech}</div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                          <div className="work_head_rht">
                            <Image
                              width={492}
                              height={300}
                              data-aos="fade-left"
                              src={"https://the-app-ideas.onrender.com".concat(
                                image
                              )}
                              alt="Device-Image-one"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>no data</div>
          )}
        </div>
      </section>
      {/* Work Head Section End */}
      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              HERE ARE THE SERVICES YOU CAN GET BY HIRE PHP DEVELOPERS FROM THE
              APP IDEAS!
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
                style={{ height: "425px" }}
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
                    width={50}
                    height={50}
                    src={Laravel}
                    alt="Laravel Web Application Development"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>CUSTOM PHP DEVELOPMENT</div>
                </h5>
                <div className="text">
                  With hands-on PHP development experience and skill set our PHP
                  developers can deliver highly customized and tailor-made web
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
                style={{ height: "425px" }}
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
                    width={50}
                    height={50}
                    src={Offer}
                    alt="Offer Customization"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>CROSS PLATFORM PHP WEB APPLICATIONS</div>
                </h5>
                <div className="text">
                  Our PHP developers have the expertise in building
                  sophisticated and future-ready cross-platform web apps
                  boasting of a highly native interface and experience.
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
                style={{ height: "425px" }}
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
                    width={50}
                    height={50}
                    src={Features}
                    alt="Laravel Features Integration"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>MAINTENANCE & SUPPORT</div>
                </h5>
                <div className="text">
                  While providing our clients the service of expert PHP
                  developers we also help them frequently with crucial updates
                  and continuous support & maintenance.
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
                style={{ height: "400px" }}
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
                    width={50}
                    height={50}
                    src={Secure}
                    alt="Secure Web Solutions"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>DYNAMIC WEBSITE DEVELOPMENT</div>
                </h5>
                <div className="text">
                  Our expertise is driven PHP developers can build sophisticated
                  and dynamic websites with most advanced features as per client
                  requirements.
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
                style={{ height: "400px" }}
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
                    width={50}
                    height={50}
                    src={Consulting}
                    alt="Laravel Consulting Services"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>PHP E-COMMERCE DEVELOPMENT</div>
                </h5>
                <div className="text">
                  Our PHP developers can also build feature-rich and
                  sophisticated e-commerce websites by using the latest version
                  of PHP.
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
                style={{ height: "400px" }}
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
                    width={50}
                    height={50}
                    src={Unit}
                    alt="Unit Testing Methods"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>SEAMLESS PHP PROGRAMMING</div>
                </h5>
                <div className="text">
                  We at The App Ideas take pride in delivering seamless web
                  experience with high performance and high-speed websites
                  thanks to zero-error PHP programming.
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
            <h2>Why US Hire PHP Web Developers From Us?</h2>
            <p>
              Here are some of the key reasons to choose Hire PHP developers
              from The App Ideas.
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
                    width={70}
                    height={70}
                    src={Expertise}
                    alt="Expertise In Web Solutions"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>DEDICATED FOR EXCELLENCE</div>
                </h5>
                <div className="text">
                  We are at The App Ideas boast of a team of expert PHP
                  developers who can build most sophisticated websites with an
                  excellent user interface and user experience.
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
                    width={70}
                    height={70}
                    src={Sophisticated}
                    alt="Sophisticated Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>STRONG CREDENTIALS AND PORTFOLIO</div>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  Our Web developers having immense skills in website & web app
                  development and having robust portfolio of the websites built
                  by them.
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
                    width={70}
                    height={70}
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>ROBUST SECURITY</div>
                </h5>
                <div className="text">
                  We are recognized for our high-security savvy PHP development
                  skills that literally can make any website immune to all types
                  of malicious attacks.
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
                style={{ height: "385px" }}
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
                    width={70}
                    height={70}
                    src={Affordable}
                    alt="Affordable Costing"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>FLEXIBILITY AND SCALABILITY</div>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  Our expert PHP developers are capable to build a website that
                  can be flexible to incorporate any type of contents with ease
                  and we build websites that can be scaled up in capacity to
                  accommodate increasing traffic.
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
                style={{ height: "385px" }}
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
                    width={70}
                    height={70}
                    src={Time}
                    alt="Time-Bound Deployment"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>DEALING WITH ALL EXTENSIONS AND FRAMEWORKS</div>
                </h5>
                <div className="text">
                  Our developers are experienced and skilled to work with all
                  types of extensions, libraries, and frameworks that PHP
                  offers.
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
                style={{ height: "385px" }}
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
                    width={70}
                    height={70}
                    src={Free}
                    alt="Free Support Services"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>CROSS PLATFORM EXPERTISE</div>
                </h5>
                <div className="text" style={{ marginBottom: "25px" }}>
                  One of the core strengths of our PHP developers is the
                  capability to code with a wide range if databases for all
                  popular platforms including Windows, Linux and Mac OSX and a
                  wide range of web servers.
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
        question="Do you want to know more about our PHP development expertise
                  and the typical ways we can add value to the web experience?
                  Feel free to contact us."
      />
      {/* Contact Section End */}
      <Whatsapp />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer />
    </>
  );
};

export default HirePHPDev;
