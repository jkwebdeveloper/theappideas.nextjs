import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

import background from "../../../public/assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../public/assets/images/Home-our-services/download (1).png";

import Website from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/Shopify-Website-Development.webp";
import Theme from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/Shopify-Custom-Theme-Developmen.webp";
import Experts from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/Shopify-Experts.webp";

import SEO from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/SEO FRIENDLY.svg";
import GAME from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/IOS GAME DEVELOPMENT.svg";
import LOWER from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/LOWER LEARNING CURVE.svg";
import HIGHLY from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/HIGHLY RESPONSIVE.svg";
import FASTER from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/FASTER TIME TO MARKET.svg";
import Wearable from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/IOS Wearable App Development.svg";

import Expertise from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/EXPERIENCE AND EXPERTISE.svg";
import ROBUST from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/Robust Portfolio.svg";
import Implement from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/On-Time Deployment.svg";
import Affordable from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/MOST COMPETITIVE PRICING.svg";
import Time from "../../../public/assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/SEO FRIENDLY.svg";

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

const HireShopify = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolio, setPortFolios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPortFolios = () => {
    setLoading(true);
    axios
      .get(
        "https://the-app-ideas.onrender.com/api/portfolio?page=Hire Shopify Developer",
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
      <Helmet title="Hire Dedicated Shopify Developers in India | The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Shopify Developers In India"
        des="Shopify is popular ecommerce platform with all inbuilt features to ensure fast development with custom user experience and high degree of flexibility and scalability. Hire Shopify developers from The App Ideas to build a customized online store or a fully featured dynamic e-commerce website for your business using the Shopify platform."
        list1="7+ Years of experience in App Development"
        list2="Best Shopify Development Company"
        list3="Dedicated team for your Shopify Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Shopify Website Development"
        service2="Shopify Custom Theme Development"
        service3="Shopify Experts"
        image1={Website}
        image2={Theme}
        image3={Experts}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Shopify Development</h3>
            <p>
              As one of the early adopters of the Shopify platform we offer
              outstanding ecommerce development service on the Shopify platform
              leveraging all the customisation benefits and features specific to
              this platform. Our dedicated{" "}
              <Link
                href="/shopify-development"
                className="Title_Color"
                style={{ color: "#d6aa0b" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <b>Shopify developers</b>
              </Link>{" "}
              can shape your ecommerce website and online stores with the custom
              and business specific features and UI and UX elements offered by
              the Shopify platform. Uncompromising quality and robust
              performance coupled up with extreme ease of use and engaging UI
              make the Shopify apps built by us unique and standalone from the
              rest.
            </p>
            <p>
              The App Ideas is a globally recognized web and mobile app
              development company with robust team of experienced Shopify
              developers who built too many successful ecommerce websites and
              online stores using the Shopify platform.
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
              HIRE SHOPIFY DEVELOPERS FROM THE APP IDEAS TO LEVERAGE THE UNIQUE
              BENEFITS OF THIS ECOMMERCE PLATFORM
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
                    src={SEO}
                    alt="Laravel Web Application Development"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <Link href="/">SEO FRIENDLY</Link>
                </h5>
                <div className="text">
                  While building Shopify website we take full advantage of the
                  SEO friendly structure that the platform is known for and
                  ensure making the site equipped to generate higher volume of
                  organic traffic.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                    src={GAME}
                    alt="Offer Customization"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <Link href="/">IOS GAME DEVELOPMENT</Link>
                </h5>
                <div className="text">
                  We boast of a large team of experienced game developers who
                  have built several successful mobile game apps for IOS
                  platform.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                    src={LOWER}
                    alt="Laravel Features Integration"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <Link href="/services">LOWER LEARNING CURVE</Link>
                </h5>
                <div className="text">
                  While building ecommerce websites with Shopify we ensure
                  helping our clients with video tutorials & PDF guidance for
                  easy backend operation and management.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                    src={HIGHLY}
                    alt="Secure Web Solutions"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <Link href="/services">HIGHLY RESPONSIVE</Link>
                </h5>
                <div className="text">
                  We built Shopify websites and web apps with highly responsive
                  web design and layout to ensure smooth appearance of the
                  website across multiple device screens running with different
                  OS versions.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <Link href="/services">FASTER TIME TO MARKET</Link>
                </h5>
                <div className="text">
                  Thanks to a gamut if inbuilt tools Angular is faster to build
                  and with in-depth knowledge of all the themes and tools our
                  developers ensure fast-paced development of your Angular
                  website or app without compromising on quality.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                    src={Wearable}
                    alt="Unit Testing Methods"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <Link href="/services">IOS Wearable App Development</Link>
                </h5>
                <div className="text">
                  Our iOS app developers also have the necessary expertise and
                  skills to build sophisticated Apple Watch apps and connected
                  apps for various IOT gadgets.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
            <h2>WHY HIRE SHOPIFY DEVELOPERS FROM US?</h2>
            <p>
              We have already established ourselves as one of the leading
              Shopify developers. Here are some of the key reasons to hire
              Shopify developers from us.
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
                  <Link href="/services">EXPERIENCE AND EXPERTISE</Link>
                </h5>
                <div className="text">
                  As one of the early adopters of the Shopify platform we have
                  vast experience and rich reserve of skills for building
                  Shopify websites and web apps.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                    src={ROBUST}
                    alt="Sophisticated Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <Link href="/services">ROBUST PORTFOLIO</Link>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  We boast of a robust portfolio of successful Shopify websites
                  and web apps for a wide variety of business niches.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <Link href="/services">
                    TRANSPARENT AND TIMELY DEVELOPMENT
                  </Link>
                </h5>
                <div className="text">
                  We ensure a transparent and fast paced development process to
                  ensure building the websites within fixed deadlines and timely
                  milestones.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <Link href="/services">MOST COMPETITIVE PRICING</Link>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  While building highly unique, feature rich and scalable
                  ecommerce websites and web apps on Shopify platform we ensure
                  most competitive pricing for each project.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
                  <Link href="/services">High Degree Of Flexibility</Link>
                </h5>
                <div className="text">
                  By helping our clients choosing business specific themes and
                  plugins from what Shopify as a platform offers we help
                  customising the look and feel of websites and web apps.
                </div>
                {/* <Link href="/services" className="arrow-icon">
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
        question="Do you want to know more about the expertise of our Shopify
                  developers? Feel free to contact us"
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

export default HireShopify;
