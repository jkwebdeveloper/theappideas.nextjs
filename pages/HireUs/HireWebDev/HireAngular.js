import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

import background from "../../../public/assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../public/assets/images/Home-our-services/download (1).png";

import Development from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/Angular-JS-Development.png";
import Services from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/Angular-JS-Development-Services.png";
import developer from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/Angular-JS-developer.png";

import Enterprise from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/1/Enterprise Apps.svg";
import CUSTOM from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/1/CUSTOM ANGULAR APPS.svg";
import eCOMMERCE from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/1//E-COMMERCE APPS.svg";
import Secure from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/1/INTERACTIVE APP DEVELOPMENT.svg";
import FASTER from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/1/FASTER TIME TO MARKET.svg";
import Unit from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/1/TOOLS AND CUSTOM WIDGETS.svg";

import Expertise from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/2/EXPERIENCE AND EXPERTISE.svg";
import Sophisticated from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/2/Client Satisfaction Guarantee.svg";
import Implement from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/2/A STRONG PORTFOLIO.svg";
import Affordable from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/2/FASTER TIME TO MARKET.svg";
import Time from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/2/ROBUST CUSTOMIZATION.svg";
import Free from "../../../public/assets/images/HIRE US/Hire Web Developer/Hire Angular 2 Developer/2/COMPETITIVE RATE _ SUPPORT.svg";

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

const HireAngular = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolio, setPortFolios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPortFolios = () => {
    setLoading(true);
    axios
      .get(
        "https://the-app-ideas.onrender.com/api/portfolio?page=Hire Angular Developer",
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
      <Helmet title="Hire Angular 2 Developers | Dedicated Angular JS Developers" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Angular 2 Developers In India"
        des="When a business requires creating a scalable, reliable, performance-driven and feature rich web experience for the users Angular 2 comes to their aid. By hiring Angular 2 developers from The App Ideas you give your website a solid push thanks to this client-side framework from Google. The App Ideas is one of the leading Angular 2 web development companies with a robust team of experienced Angular 2 developers capable to deliver cutting edge web solutions."
        list1="7+ Years of experience in App Development"
        list2="Best Angular JS Development Company"
        list3="Dedicated team for your Angular JS Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Angular JS Development"
        service2="Angular JS Development Services"
        service3="Angular JS Developer"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Angular 2 Development</h3>
            <p>
              We, The App Ideas is one of the early adopters of this advanced
              web development framework and with years if the experience we
              established ourselves as one of the most sought after experts for
              building the web using this front-end technology. Headquartered in
              India and having the global presence we deliver Angular 2
              development services to a wide variety of business niches and app
              development needs. Over the years, our developers have built a
              wide spectrum of advanced{" "}
              <Link
                href="/angular-development"
                className="Title_Color"
                style={{ color: "#d6aa0b" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <b> Angular 2 web solutions</b>
              </Link>{" "}
              for a variety of clients.
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
      {/* Hire Section Start */}
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
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              HIRE ANGULAR 2 DEVELOPERS FROM THE APP IDEAS TO TRANSFORM YOUR WEB
              EXPERIENCE INTO THE MOST SOPHISTICATED ONE
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
                    src={Enterprise}
                    alt="Laravel Web Application Development"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>Enterprise Apps</div>
                </h5>
                <div className="text">
                  We build most sophisticated Angular 2 applications for all
                  types of enterprises across niches leveraging the benefits
                  like scalability, reliability, & security.
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
                    src={CUSTOM}
                    alt="Offer Customization"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>CUSTOM ANGULAR APPS</div>
                </h5>
                <div className="text">
                  We leverage the custom and business specific Angular features
                  to build strong, robust and high-performance Angular web apps.
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
                    src={eCOMMERCE}
                    alt="Laravel Features Integration"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>E-COMMERCE APPS</div>
                </h5>
                <div className="text">
                  We also leverage the typical business specific front-end
                  features of Angular features to build e-commerce web apps.
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
                  <div>INTERACTIVE APP DEVELOPMENT</div>
                </h5>
                <div className="text">
                  With Angular 2 we build highly secure and interactive web apps
                  for diverse communication and interaction needs.
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
                    src={FASTER}
                    alt="Laravel Consulting Services"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>FASTER TIME TO MARKET</div>
                </h5>
                <div className="text">
                  Thanks to a gamut if inbuilt tools Angular is faster to build
                  and with in-depth knowledge of all the themes and tools our
                  developers ensure fast-paced development of your Angular
                  website or app without compromising on quality.
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
                  <div>TOOLS AND CUSTOM WIDGETS</div>
                </h5>
                <div className="text">
                  While building websites and web apps with Angular 2 we build
                  tools and custom widgets as well to help businesses dealing
                  with traffic and search engine queries.
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
            <h2>WHY HIRE ANGULAR DEVELOPERS FROM US?</h2>
            <p>
              By working with our dedicated Angular 2 developers, you ensure
              getting the best in class development service with a highly
              efficient and well-trained team of developers with years of
              expertise.
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
                    src={Expertise}
                    alt="Expertise In Web Solutions"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>EXPERIENCE AND EXPERTISE</div>
                </h5>
                <div className="text">
                  Our expertise and experience with the Angular 2 framework go
                  back to the early years of adapting to the platform.
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
                    src={Sophisticated}
                    alt="Sophisticated Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>CLIENT SATISFACTION GUARANTEED</div>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  With a global client base and hundreds of projects completed
                  by us. We guarantee client satisfaction with our Angular 2
                  development.
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
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>A STRONG PORTFOLIO</div>
                </h5>
                <div className="text">
                  We boast of a strong portfolio of most successful websites and
                  web apps built on this feature-rich and dynamic platform.
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
                  <div>TRANSPARENT AND FAST PACED</div>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  We offer a transparent and fast paced agile development
                  process to help customers getting the app in time while
                  gaining complete peace of mind with transparent communication
                  in all steps.
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
                  <div>ROBUST CUSTOMIZATION</div>
                </h5>
                <div className="text">
                  Our Angular 2 developers are well equipped and versed with the
                  latest development protocols and tools to deliver optimum
                  customization with the App development.
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
                  <div>COMPETITIVE RATE & SUPPORT</div>
                </h5>
                <div className="text" style={{ marginBottom: "25px" }}>
                  We offer a highly competitive rate for Angular 2 development
                  of apps and websites. We offer total support and upgrading
                  service to all the Angular 2 apps built by us.
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
        question="Do you still want to know more about the Angular 2 expertise
                  of our developers? Feel free to contact us."
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

export default HireAngular;
