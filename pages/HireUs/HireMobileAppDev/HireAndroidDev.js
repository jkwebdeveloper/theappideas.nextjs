import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkHand from "../../../components/WorkHand";
import Link from "next/link";
import Image from "next/image";

import appdev from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/Android-App-Development.png";
import Application from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/Android-Application-Development.png";
import Company from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/Android-App-Development-Company.png";
// import background from "../../../public/assets/images/Home-our-services/bg-download.svg";
import background from "../../../public/assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../public/assets/images/Home-our-services/download (1).png";

import Contactus from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/1/CUSTOM ANDROID APPS.svg";
import ANDROID from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/1/ANDROID SUPPORT.svg";
import CROSS from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/1/CROSS PLATFORM DEVELOPMENT.svg";

import EXPERIENCE from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/EXPERIENCE AND EXPERTISE.svg";
import STUNNING from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/STUNNING PORTFOLIO.svg";
import GREAT from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/GREAT UI AND UX.svg";
import INTERNET from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/PERFORMANCE DRIVEN.svg";
import FAST from "../../../public/assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/FAST PACED AND COMPETITIVE.svg";

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
import Loading from "../../../public/assets/images/loading.json"


const HireAndroidDev = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolio, setPortFolios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPortFolios = () => {
    setLoading(true);
    axios
      .get(
        "https://the-app-ideas.onrender.com/api/portfolio?page=Hire Android Developer",
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
      <Helmet title="Hire Dedicated Android App Developers In India | The App Ideas" />
      {/* Banner Section Start */}
      <Header setOpenModal={setModalOpen} />
      <HeroSection
        title="Hire Android App Developers In India"
        des="Do you like to build your mobile presence with a crisp and beautiful Android app for your business? Are you trying to find some expert Android app developers who can give shape to your app idea with sophisticated Android development? Well, the Android app developers at The App Ideas ensure can ensure building highly objectively designed Android apps with custom features to help your business with a mobile presence."
        list1="7+ Years of experience in App Development"
        list2="Best Android App Development Company"
        list3="Dedicated team for your Android App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Android App Development"
        service2="Android Application Development"
        service3="Android App Development Company"
        image1={appdev}
        image2={Application}
        image3={Company}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Android App Development</h3>
            <p>
              Over the years we mastered the art and science of{" "}
              <Link
                href="/"
                className="Title_Color"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <b>mobile app development</b>
              </Link>{" "}
              with exceptional command over mobile app aesthetics and technical
              skills to build features that make an app useful. When it comes to
              the Android platform we build apps that cater to the versatility
              of the device ecosystem Android is known of. Instead of addressing
              with an “one size fits all” kind of approach we build highly
              responsive Android apps specifically to address the constraints of
              each device screen and varied range of device functions. We have
              built a gamut of successful Android apps across diver niches and
              business needs.
            </p>
            <p>
              The developers at The App Ideas can develop custom designed and
              highly user optimised Android apps with a highly competitive
              pricing and stringent deadline.
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
                      // style={{
                      //   backgroundImage: `url(${bg1.src})`,
                      //   objectFit: "cover",
                      //   display: "block",
                      //   width: "100%",
                      //   height: "400px",
                      //   backgroundSize: "cover !important",
                      //   backgroundRepeat: "no-repeat",
                      //   backgroundPosition: "center !important",
                      //   boxShadow: "0 10px 6px -6px #000",
                      //   transition: "0.1s ease",
                      // }}
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
              Hire Android Developers from The App Ideas and achieve excellent
              mobile interactions
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
                    src={Contactus}
                    alt="Web Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>Contact us ANDROID APPS</div>
                </h5>
                <div className="text">
                  Our experienced and skilled team of Android developers can
                  build innovative Android apps across niches and categories.
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
                    src={ANDROID}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>ANDROID SUPPORT</div>
                </h5>
                <div className="text">
                  We are also ready with a robust team of Android developers who
                  are ready to provide support to all your Android apps whether
                  for addressing performance issues or for changing the user
                  interface or for integrating new features.
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
                    src={CROSS}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>CROSS PLATFORM DEVELOPMENT</div>
                </h5>
                <div className="text">
                  We have a large team of expert cross platform developers who
                  can turn your app idea into sophisticated apps across both
                  Android and iOS mobile platforms.
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
            <h2>Why Hire Android Developers From Us?</h2>
            <p>
              We are one of the most respected an Android developer in India
              companies with a robust portfolio of future ready apps across the
              niche. Here are some of the key reasons to hire Android developers
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
                    src={EXPERIENCE}
                    alt="Web Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>EXPERIENCE AND EXPERTISE</div>
                </h5>
                <div className="text">
                  We boast of a long experience in Android mobile app
                  development with expertise in building apps across diverse
                  niches.
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
                    src={STUNNING}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>STUNNING PORTFOLIO</div>
                </h5>
                <div className="text">
                  We boast of a proven track record with a stunning portfolio of
                  a gamut of most successful Android apps across several niches.
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
                    src={GREAT}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>GREAT UI AND UX</div>
                </h5>
                <div className="text">
                  We guarantee delivering highly customer centric UI design and
                  engaging UX for Android apps of all types and niches.
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
                    src={INTERNET}
                    alt="INTERNET OF THING"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>PERFORMANCE DRIVEN</div>
                </h5>
                <div className="text">
                  We build Android apps with unmatched performance and low
                  downtime guaranteed.
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
                    src={FAST}
                    alt="GAME DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <div>FAST PACED AND COMPETITIVE</div>
                </h5>
                <div className="text">
                  We ensure building Android apps at quick pace thanks to our
                  agile development process while maintaining most competitive
                  pricing for apps across niches.
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
        question=" Do you want to know more about our Android app developers and
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

export default HireAndroidDev;
