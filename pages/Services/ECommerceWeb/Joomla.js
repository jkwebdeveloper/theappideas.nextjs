import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Services from "../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Development-Services.webp";
import Development from "../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Website-Development.webp";
import Expert from "../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Expert.webp";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import HeroSection from "../../../components/HeroSection";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Website-Development.png"),
    que: "Joomla Website Development",
    ans: "Joomla is a popular CMS for building dynamic, mobile-friendly websites with extensive features and interfaces. The straightforward interface, visual appeal, and customization possibilities of Joomla make it a popular CMS for site developers.",
    ans2: "After a decade of Joomla development, App Ideas has created successful Joomla apps for numerous industries and genres. Our Joomla experience lets us customize solutions for customers. We develop Joomla solutions for small and big enterprises' digital development.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-E-Commerce-Development.png"),
    que: "Joomla E-commerce Development",
    ans: "The popularity of digital solutions is increasing day by day. The advancement in technology has changed, so many things for the betterment of the users as well as for the business owners. By having an E-commerce online platforms business owners can easily manage the services and on the other hand, users can easily access the services at any time and from any place.",
    ans2: "The App Ideas is popular as one of the best Joomla platforms development company. We have a team of highly skilled developers who are experts in offering the best solution for all kinds of business categories. We build highly sophisticated and feature-rich custom e-commerce stores with an easy and mobile-friendly interface and engaging user experience.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Custom-Feature-Development.png"),
    que: "Joomla Custom Feature development",
    ans: "Joomla is a free and open-source content management system that is used for developing victorious e-commerce platforms. Nowadays many business owners and entrepreneurs are making a high investment in digitalizing their store for the success of the business. Joomla also offers custom features development services to business owners.",
    ans2: "We are from The App Ideas, which is one of the best software development company. We offer custom features development for web and app development services. By using the customizable elements of Joomla we also build custom features for the existing Joomla website and help to improve the user experience.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Template-And-Theme-Development-1.png"),
    que: "Joomla Template and Theme Development",
    ans: "The advancement in technology has automatically risen the demand for online platforms in the market. E-commerce stores are one of the best solutions because it’s easy to access the services from any palace and at any time at the user convenience. If you own a store then this is the time for you to digitalize it.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of Joomla developers who have years of experience in delivering successful e-commerce platforms. We develop custom Joomla website templates and themes for a highly responsive mobile friendly and visually appealing look and feel of websites.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Strong-Support.png"),
    que: "Joomla Website Maintenance and Support",
    ans: "If you are thinking of launching any E-commerce website platforms in the market then What are you waiting for? This is probably the best time for making the investment. The popularity of the E-commerce website is increasing day by day. Users are now loving online services because it is time-saving and easy to use.",
    ans2: "We are at The App Ideas, which is a leading web and app development company. We have a team of highly skilled Joomla developers who are experts in offering successful E-commerce platforms. We provide continuous support and maintenance to Joomla websites by providing timely updates, upgrades and value additions.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Template-And-Theme-Development.png"),
    que: "Joomla Mobile App Conversion",
    ans: "Currently, digitization is at the peak of success because this makes the process as well as management much easier. Websites are also popular in the market but if we talk about the mobile app then Mobile apps can make the process much easier. More than half of the population are using smartphones for accessing all kinds of services.",
    ans2: "If you are a store owner and if you have a website for your E-commerce services then this is probably the best time for you to convert it into mobile app services. We also help to convert Joomla based websites into hybrid mobile apps to offer a more native and platform-driven user experience.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Experience-And-Expertise-1.png"),
    que: "Experience and Expertise",
    ans: "The App Ideas is one of the popular software development company. We have years of experience as well as expertise in offering the best Joomla E-commerce platforms development for the business. We are highly skilled in offering website development, web app development and mobile app development.",
    ans2: "We are highly proficient in developing the best Joomla E-commerce platform for increasing the profit rates of the business. We have experience in Joomla web development for close to a decade and have the most experienced team of Joomla developers with several successful projects to their credits.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png"),
    que: "Strong Portfolio",
    ans: "If you are thinking of digitizing your store by launching E-commerce platforms then it is very important to analyze the market and hire the best software development services who are experts in offering the Joomla platforms services. Before hiring any software development services then it is must require to check the portfolio.",
    ans2: "We are from The App Ideas, which is one of the popular Joomla E-commerce platforms development company. We have a talented pool of developers who are experts in offering the Joomla platforms at the best rates. We have a Strong portfolio of the most successful and award-winning responsive Joomla built for businesses across the niches.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Industry-Leading-Team.png"),
    que: "Industry-leading team",
    ans: "The demand for online platforms is getting higher and higher as per time. If we talk about the users then they are loving the online platforms because they can access the services from any palace and at any time. And on the other side, it is very easy for business owners to manage the services online as well as they can target a high number of users.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled Joomla experts who are successful in offering victorious solutions. Here at The App Ideas, we boast of an expert team of Joomla developers having experience in building many benchmarked websites and apps with this framework.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Agile-Development-1.png"),
    que: "Agile development",
    ans: "The demand for the Joomla E-commerce platform is exceedingly increasing in the market. Joomla E-commerce platform offers the convenience as well as comforts of accessing the services without visiting the store. This process is probably time-saving as well as cost-effective.",
    ans2: "The App Ideas is one of the leading software development company. We offer the services like website development, mobile app development and web development at the best possible rates. We follow the Agile development process to build Joomla Website and hybrid apps at a faster pace while ensuring quality through concurrent testing and iteration.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/deadline.png"),
    que: "Timely Project Completion",
    ans: "We are from The App Ideas is a leading web and app development company. We offer successful web and app development services for all kinds of business categories. If you are planning to launch an E-commerce platforms services in the market then Joomla is one of the best technology platforms.",
    ans2: "The App Ideas has a team of highly skilled and experienced Joomla developers who are experts in offering the best E-commerce websites at the best possible rates. We keep our word on the project deadline and respective milestones and ensure finishing the development within committees time without compromising on quality.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/competitive-pricing.png"),
    que: "Competitive Pricing",
    ans: "Are you a store owner? Planning of digitizing your store business then this is probably the best time for that. Many business owners and entrepreneurs are now making a high investment in digitalizing their services for making the services easier to access as well as manage.",
    ans2: "We are from The App Ideas is one of the popular software development company. We offer the services like mobile app, web app and website development. While providing industry-leading Joomla development service we offer a highly competitive rate for businesses of all niches.",
  },
];
const Joomla = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("joomla_website");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_expertise"
  );

  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [openIndustries, SetOpenIndustries] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false);
    }
    SetOpenServicesProvide(i);
  };
  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return SetOpenIndustries(null);
    }
    SetOpenIndustries(i);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Helmet title="Joomla Development Company In India - The app ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Joomla Development Company"
        des="App Ideas, a prominent software development company, offers affordable E-commerce platform services from a team of skilled engineers. We can build your stores' Joomla E-commerce platform. We smoothly combine features and capabilities for your organization since we specialize in Joomla development and E-commerce solutions. Our developers created profitable, scalable E-commerce solutions. To help your small or large company achieve E-commerce goals, we offer customized services. Contact us now to discuss your requirements and start building a successful Joomla E-commerce platform for your stores."
        list1="7+ Years of experience in Development"
        list2="Best Joomla Development Company"
        list3="Dedicated team for your Joomla Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Joomla Development Services"
        service2="Joomla Website Development"
        service3="Joomla Expert"
        image1={Services}
        image2={Development}
        image3={Expert}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What Do We offer in Joomla Development?</h3>
            <p>
              Joomla is a popular CMS for developing dynamic, mobile-friendly
              websites with rich features and interfaces. Joomla's simple
              interface, attractive design, and customizable capabilities make
              it a popular CMS for web developers. The App Ideas, a global
              Joomla development company with over a decade of experience and
              successful Joomla applications for many enterprises and sectors.
              Our extensive Joomla understanding allows us to provide bespoke
              solutions for our clients. We provide amazing Joomla development
              solutions for small and large businesses to boost digital growth.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("joomla_website")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "joomla_website" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Website-Development.png")}
                      alt="Joomla Website Development"
                      className="img-fluid"
                    />
                    <p>Joomla Website Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("e_comm")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "e_comm" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-E-Commerce-Development.png")}
                      alt="Joomla E-commerce Development"
                      className="img-fluid"
                    />
                    <p>E-commerce Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("joomla_customization")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "joomla_customization" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Custom-Feature-Development.png")}
                      alt="Joomla Customization"
                      className="img-fluid"
                    />
                    <p>Joomla Customization</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("templates")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "templates" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Template-And-Theme-Development-1.png")}
                      alt="Templates & Theme Service"
                      className="img-fluid"
                    />
                    <p>Templates & Theme Service</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("joomla_maintanance_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "joomla_maintanance_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Strong-Support.png")}
                      alt="Joomla Maintenance And Support"
                      className="img-fluid"
                    />
                    <p>Joomla Maintenance And Support</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("joomla_mobile")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "joomla_mobile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Joomla-Template-And-Theme-Development.png")}
                      alt="Joomla Mobile App Conversion"
                      className="img-fluid"
                    />
                    <p>Joomla Mobile App Conversion</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeOffer === "joomla_website" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Joomla Website Development
                    </h3>
                    <p className="Title_para">
                      Joomla is a popular CMS for building dynamic,
                      mobile-friendly websites with extensive features and
                      interfaces. The straightforward interface, visual appeal,
                      and customization possibilities of Joomla make it a
                      popular CMS for site developers.
                    </p>
                    <p className="Title_para">
                      After a decade of Joomla development, App Ideas has
                      created successful Joomla apps for numerous industries and
                      genres. Our Joomla experience lets us customize solutions
                      for customers. We develop Joomla solutions for small and
                      big enterprises' digital development.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "e_comm" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Joomla E-commerce Development{" "}
                    </h3>
                    <p className="Title_para">
                      The popularity of digital solutions is increasing day by
                      day. The advancement in technology has changed, so many
                      things for the betterment of the users as well as for the
                      business owners. By having an E-commerce online platforms
                      business owners can easily manage the services and on the
                      other hand, users can easily access the services at any
                      time and from any place.
                    </p>
                    <p className="Title_para">
                      The App Ideas is popular as one of the best Joomla
                      platforms development company. We have a team of highly
                      skilled developers who are experts in offering the best
                      solution for all kinds of business categories. We build
                      highly sophisticated and feature-rich custom e-commerce
                      stores with an easy and mobile-friendly interface and
                      engaging user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "joomla_customization" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Joomla Custom Feature development{" "}
                    </h3>
                    <p className="Title_para">
                      Joomla is a free and open-source content management system
                      that is used for developing victorious e-commerce
                      platforms. Nowadays many business owners and entrepreneurs
                      are making a high investment in digitalizing their store
                      for the success of the business. Joomla also offers custom
                      features development services to business owners.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the best
                      software development company. We offer custom features
                      development for web and app development services. By using
                      the customizable elements of Joomla we also build custom
                      features for the existing Joomla website and help to
                      improve the user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "templates" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Joomla Template and Theme Development{" "}
                    </h3>
                    <p className="Title_para">
                      The advancement in technology has automatically risen the
                      demand for online platforms in the market. E-commerce
                      stores are one of the best solutions because it’s easy to
                      access the services from any palace and at any time at the
                      user convenience. If you own a store then this is the time
                      for you to digitalize it.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of Joomla developers
                      who have years of experience in delivering successful
                      e-commerce platforms. We develop custom Joomla website
                      templates and themes for a highly responsive mobile
                      friendly and visually appealing look and feel of websites.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "joomla_maintanance_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Joomla Website Maintenance and Support{" "}
                    </h3>
                    <p className="Title_para">
                      If you are thinking of launching any E-commerce website
                      platforms in the market then What are you waiting for?
                      This is probably the best time for making the investment.
                      The popularity of the E-commerce website is increasing day
                      by day. Users are now loving online services because it is
                      time-saving and easy to use.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is a leading web and app
                      development company. We have a team of highly skilled
                      Joomla developers who are experts in offering successful
                      E-commerce platforms. We provide continuous support and
                      maintenance to Joomla websites by providing timely
                      updates, upgrades and value additions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "joomla_mobile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Joomla Mobile App Conversion{" "}
                    </h3>
                    <p className="Title_para">
                      Currently, digitization is at the peak of success because
                      this makes the process as well as management much easier.
                      Websites are also popular in the market but if we talk
                      about the mobile app then Mobile apps can make the process
                      much easier. More than half of the population are using
                      smartphones for accessing all kinds of services.
                    </p>
                    <p className="Title_para">
                      If you are a store owner and if you have a website for
                      your E-commerce services then this is probably the best
                      time for you to convert it into mobile app services. We
                      also help to convert Joomla based websites into hybrid
                      mobile apps to offer a more native and platform-driven
                      user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {ServiceProvideData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: "20px", cursor: "pointer" }}
                onClick={() => toggleOpen(i)}
              >
                <div className="service_provide_box">
                  <div className="service_provide_content">
                    <div className="service_provide_title">
                      <Image
                        width={50}
                        height={50}
                        src={item?.images}
                        alt="smartphone-tablet"
                        className="img-fluid"
                      />
                      <p>{item.que}</p>
                    </div>
                    {openServicesProvide === i ? (
                      <div>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {openServicesProvide === i ? (
                    <div className="answer_box">
                      <hr className="line_tag" />
                      <div className="answer">
                        <p>{item.ans}</p>
                        <p>{item.ans2}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
            {/* Mobile View */}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Work Hand Done slider start  */}
      <section className="work_slider_section py-5">
        <div className="container">
          <div className="work-heading">
            <h2>Work we had done</h2>
          </div>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={"horizontal"}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            //   style={{ padding: "2.5rem 0" }}
          >
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-18.webp")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-19.png")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-20.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-21.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-22.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-23.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-24.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-26.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    width={1110}
                    height={628}
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-28.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Work Hand Done slider End  */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why choose App Ideas for Joomla development?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience_expertise")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience_expertise" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience and Expertise"
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("storng_portfolio")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "storng_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png")}
                      alt="Strong Portfolio"
                      className="img-fluid"
                    />
                    <p>Strong Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("industry_leading_team")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "industry_leading_team" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Industry-Leading-Team.png")}
                      alt="Industry-leading team"
                      className="img-fluid"
                    />
                    <p>Industry-leading team</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Agile-Development-1.png")}
                      alt="Agile development"
                      className="img-fluid"
                    />
                    <p>Agile development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("timely_project")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "timely_project" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/deadline.png")}
                      alt="Timely Project Completion"
                      className="img-fluid"
                    />
                    <p>Timely Project Completion </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_pricing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_pricing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/competitive-pricing.png")}
                      alt="Competitive Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience_expertise" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and Expertise</h3>
                    <p className="Title_para">
                      The App Ideas is one of the popular software development
                      company. We have years of experience as well as expertise
                      in offering the best Joomla E-commerce platforms
                      development for the business. We are highly skilled in
                      offering website development, web app development and
                      mobile app development.
                    </p>
                    <p className="Title_para">
                      We are highly proficient in developing the best Joomla
                      E-commerce platform for increasing the profit rates of the
                      business. We have experience in Joomla web development for
                      close to a decade and have the most experienced team of
                      Joomla developers with several successful projects to
                      their credits.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "storng_portfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Strong Portfolio</h3>
                    <p className="Title_para">
                      If you are thinking of digitizing your store by launching
                      E-commerce platforms then it is very important to analyze
                      the market and hire the best software development services
                      who are experts in offering the Joomla platforms services.
                      Before hiring any software development services then it is
                      must require to check the portfolio.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the popular
                      Joomla E-commerce platforms development company. We have a
                      talented pool of developers who are experts in offering
                      the Joomla platforms at the best rates. We have a Strong
                      portfolio of the most successful and award-winning
                      responsive Joomla built for businesses across the niches.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "industry_leading_team" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Industry-leading team</h3>
                    <p className="Title_para">
                      The demand for online platforms is getting higher and
                      higher as per time. If we talk about the users then they
                      are loving the online platforms because they can access
                      the services from any palace and at any time. And on the
                      other side, it is very easy for business owners to manage
                      the services online as well as they can target a high
                      number of users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      Joomla experts who are successful in offering victorious
                      solutions. Here at The App Ideas, we boast of an expert
                      team of Joomla developers having experience in building
                      many benchmarked websites and apps with this framework.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "agile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile development</h3>
                    <p className="Title_para">
                      The demand for the Joomla E-commerce platform is
                      exceedingly increasing in the market. Joomla E-commerce
                      platform offers the convenience as well as comforts of
                      accessing the services without visiting the store. This
                      process is probably time-saving as well as cost-effective.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We offer the services like website development,
                      mobile app development and web development at the best
                      possible rates. We follow the Agile development process to
                      build Joomla Website and hybrid apps at a faster pace
                      while ensuring quality through concurrent testing and
                      iteration.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "timely_project" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Timely Project Completion</h3>
                    <p className="Title_para">
                      We are from The App Ideas is a leading web and app
                      development company. We offer successful web and app
                      development services for all kinds of business categories.
                      If you are planning to launch an E-commerce platforms
                      services in the market then Joomla is one of the best
                      technology platforms.
                    </p>
                    <p className="Title_para">
                      The App Ideas has a team of highly skilled and experienced
                      Joomla developers who are experts in offering the best
                      E-commerce websites at the best possible rates. We keep
                      our word on the project deadline and respective milestones
                      and ensure finishing the development within committees
                      time without compromising on quality.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      Are you a store owner? Planning of digitizing your store
                      business then this is probably the best time for that.
                      Many business owners and entrepreneurs are now making a
                      high investment in digitalizing their services for making
                      the services easier to access as well as manage.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas is one of the popular software
                      development company. We offer the services like mobile
                      app, web app and website development. While providing
                      industry-leading Joomla development service we offer a
                      highly competitive rate for businesses of all niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {IndustriesData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: "20px", cursor: "pointer" }}
                onClick={() => industriesOpen(i)}
              >
                <div className="service_provide_box">
                  <div className="service_provide_content">
                    <div className="service_provide_title">
                      <Image
                        width={50}
                        height={50}
                        src={item?.images}
                        alt="smartphone-tablet"
                        className="img-fluid"
                      />
                      <p>{item.que}</p>
                    </div>
                    {openIndustries === i ? (
                      <div>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {openIndustries === i ? (
                    <div className="answer_box">
                      <hr className="line_tag" />
                      <div className="answer">
                        <p>{item.ans}</p>
                        <p>{item.ans2}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
            {/* Mobile View */}
          </div>
        </div>
      </section>
      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful Joomla website in the market?" />
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

export default Joomla;
