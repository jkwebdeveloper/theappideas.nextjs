import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import background from "../../../public/assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../public/assets/images/Home-our-services/download (1).png";
import app from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/Ceate-React-Native-App.png";
import development from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/React-Native-App-Development.png";
import company from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/React-Native-Development-Company.png";

import Customization from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Customization Of The Platforms.svg";
import Stunning from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Stunning Portfolio.svg";
import Sophisticated from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Sophisticated UI UX Designing.svg";
import Cross from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Cross Platforms Expertise.svg";
import Custom from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Custom Widget Development.svg";
import Reactnative from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/React Native Integrations.svg";

import EXPERIENCE from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Expertise And Experience.svg";
import Integration from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/3rd Party API Integration.svg";
import Powerful from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Powerful Portfolio.svg";
import Agile from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Agile Methodology.svg";
import Free from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Free Maintenance Service.svg";
import Deliver from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Deliver Secure App Solution.svg";

import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import HeroSection from "../../../components/HeroSection";
import ContactUs from "../../../components/ContactUs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";
import axios from "axios";
import Lottie from "lottie-react";
import Loading from "../../../public/assets/images/loading.json";

const HireReactNativeDev = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolio, setPortFolios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPortFolios = () => {
    setLoading(true);
    axios
      .get(
        "https://the-app-ideas.onrender.com/api/portfolio?page=Hire React Native Developer",
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
      <Helmet title="Hire React Native Developers in India - The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire React Native App Developers In India"
        des="Hire the best React Native Developers in India from The App Ideas. App Ideas is one of the most popular mobile app and web development company. We have a team of highly experienced and skilled developers who first understand the client’s requirements, analyze and plan the projects, develop the projects and deliver the project along with client satisfaction."
        list1="7+ Years of experience in App Development"
        list2="Best React Native App Development Company"
        list3="Dedicated team for your React Native App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="React Native App Development"
        service2="Create React Native App"
        service3="React Native Development Company"
        image1={app}
        image2={development}
        image3={company}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in React Native App Development</h3>
            <p>
              The App Ideas is a React Native app development company. Our React
              Native app developers are highly efficient in developing a
              future-ready React Native app development. As React Native
              Technology offers some of the best and unique features that many
              business owners are now choosing this technology for developing
              their business online platforms. Our React Native app development
              solutions can help you in building awareness as well as easily
              maintaining the Business.
            </p>
            <p>
              React Native is an open-source mobile application framework
              developed and launched by Facebook. React Native is highly used
              for the development of an online solution for Android, Android TV,
              IOS, macOS, web, windows,tvOS and more. React Native framework
              enables developers to develop software along with native platforms
              capabilities. We have a team of highly skilled React Native
              developers who are highly expert in proving the best software
              solutions for business. Hire us and access our expertise to
              convert your business ideas into the best Web and app platforms
              solutions.
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
              Hire React Native Developers from The App Ideas for Variety of
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
                    src={Customization}
                    alt="Customization Of The Platforms"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>Customization Of The Platforms</div>
                </h5>
                <div className="text">
                  Along with working with themes and predesigned models, we also
                  work on the customization or try to integrate all the
                  functionality and features in a single platform with
                  customization. Customization helps in adding up the unique
                  features which help in business growth.
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
                    src={Stunning}
                    alt="Stunning Portfolio"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>Stunning Portfolio</div>
                </h5>
                <div className="text">
                  Our React Native developers have immense skills in web and app
                  development services. We have also listed a stunning portfolio
                  that is developed by our developers.
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
                    src={Sophisticated}
                    alt="Sophisticated UI/UX Designing"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>Sophisticated UI/UX Designing</div>
                </h5>
                <div className="text">
                  With our React native development, we ensure to deliver highly
                  sophisticated, unique and engaging UI/UX for your business app
                  solution.
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
                    src={Cross}
                    alt="Cross Platforms Expertise"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>Cross Platforms Expertise</div>
                </h5>
                <div className="text">
                  We have a team of experienced cross platforms developers who
                  can help to turn your ideas into a stunning and sophisticated
                  app for both mobile platforms like Android and IOS.
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
                    src={Custom}
                    alt="GAME DEVELOPMENT"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>Custom Widget Development</div>
                </h5>
                <div className="text">
                  The developers at The App Ideas can also develop custom
                  widgets to leverage unique user experience for your Business
                  mobile app solutions.
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
                    src={Reactnative}
                    alt="React Native Integrations"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <div>React Native Integrations</div>
                </h5>
                <div className="text">
                  We are highly experienced in web and app development
                  technologies, so we can help you to integrate with React
                  Native features in your existing software solutions.
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
            <h2>Why Hire React Native app Developers from us?</h2>
            <p>
              In the market, we have established our reputation as one of the
              leading React Native app development with a wide spectrum of
              mobile app development projects across various niches. Here I am
              listing some of the reasons to hire React Native app developers
              from us.
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
                    src={EXPERIENCE}
                    alt="EXPERIENCE AND EXPERTISE"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>EXPERIENCE AND EXPERTISE</div>
                </h5>
                <div className="text">
                  In The App Ideas, React Native developers have vast experience
                  and a rich reserve of skills for developing a React Native app
                  solution.
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
                    src={Integration}
                    alt="3rd Party API Integration"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>3rd Party API Integration</div>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  With the support of our expert React Native developers, you
                  can also integrate third-party API as per the business
                  requirements and help in boosting the user experience of the
                  app.
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
                    src={Powerful}
                    alt="Powerful Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>Powerful Portfolio</div>
                </h5>
                <div className="text">
                  Along with the years, we have worked on various projects and
                  have developed successful React Native applications from
                  different niches and categories.
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
                    src={Agile}
                    alt="Agile Methodology"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>Agile Methodology</div>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  We strictly follow the agile methodology for project
                  development with the continuous iteration of the software
                  development. This will help you to easily track the software
                  progress.
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
                    src={Free}
                    alt="GAME DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>Free Maintenance Service</div>
                </h5>
                <div className="text">
                  After deployment of the project within the time periods, we
                  offer our clients three months of free maintenance and support
                  services.
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
                style={{ height: "365px" }}
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
                    src={Deliver}
                    alt="Deliver Secure App Solution"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>Deliver Secure App Solution</div>
                </h5>
                <div className="text" style={{ marginBottom: "25px" }}>
                  Along with deploying the best feature app solution to our
                  clients, we also ensure the security and privacy of the user
                  data.
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
        question="Do you want to know more about our React Native developers and
                  their expertise? Feel free to contact us."
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

export default HireReactNativeDev;
