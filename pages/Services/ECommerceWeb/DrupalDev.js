import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from 'next/image';
import Services from "../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Development-Services.webp";
import Development from "../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Website-Development.webp";
import Expert from "../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Expert.webp";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeroSection from "../../../components/HeroSection";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Custom-Web-Development.png"),
    que: "Drupal Custom web development",
    ans: "Drupal is a free and open-source web app development platform or we can also say it is one of the successful frameworks for successful E-commerce web development services. Nowadays many business owners and startups owners are making investments in digitalizing their business for making the business successful.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a team of highly skilled Drupal developers who are proficient in delivering successful E-commerce platforms to clients. We build highly user-centric custom websites using the Drupal CMS Solution and ensure consistent traffic and user engagement.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Template-Theme-Development.png"),
    que: "Drupal Template and Theme Development",
    ans: "The advancement in technology has made the business process much easier for business owners as well as for the users. If we check the market then there are thousands of online platforms available for all kinds of services. If you own a store then this is the perfect time for you to digitalize it.",
    ans2: "The App Ideas is one of the proficient software development company. We have a talented group of Drupal developers who have years of experience in delivering successful E-commerce platforms. We design and develop custom website templates and themes using Drupal CMS solutions and deliver the custom look and feel suitable to the specific business needs.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Custom-Plugin-Development.png"),
    que: "Custom Plugin Development",
    ans: "Currently, the demand for the digital platform is increasing in the market because it is s convenient as well as easy to use. E-commerce platforms are time-saving as well as cost-effective for the users, that’s why many of the users are now shifting towards digital platforms. Drupal is considered one of the best platforms for E-commerce platforms development.",
    ans2: "Drupal offers the best features and functionality which helps to develop an E-commerce platform for all kinds of business categories. We build custom plugins and extensions for Drupal websites and ensure delivering custom features and functionalities for the respective audience.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Mobile-App-Conversion-1.png"),
    que: "Drupal Mobile App Conversion",
    ans: "Nowadays, online platforms like websites and mobile apps are at the peak for getting success in the market. A digitalize business makes the process much easier for the business owners as well as for the users. If we talk about the current trends then a high number of people are using smartphones for accessing all kinds of services.",
    ans2: "Are you planning on launching an E-commerce Store? If yes then this is probably the right time for executive your ideas and launching your digital E-commerce platform using Drupal in the market. We also leverage our drupal development and design expertise to create sophisticated mobile apps based on the Drupal CMS solution.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Website-Redesign.png"),
    que: "Drupal Website Redesign",
    ans: "The demand for the website is increasing day by day, all kinds of businesses and services are now moving towards digitization. If you own a Drupal website or any other website then it is very important to redesign as per the latest technology. Drupal is one of the popular E-commerce platforms which offers the best features and functionality.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a team of highly skilled and experienced drupal developers who will offer the best solutions at the best rates. If you have an old Drupal website, we can pump fresh life into it with a sophisticated redesign and feature upgrade.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Strong-Support.png"),
    que: "Drupal Support and Maintenance",
    ans: "If you are thinking of launching an online platform or E-commerce website then this is probably the best time to move further. If we observe the market then users are more likely to access digital solutions for all kinds of services including food delivery and Shopping sites.",
    ans2: "The App Ideas is one of the popular software development company. We offer the services like website development, web app development and mobile app development. We have a team of highly skilled Drupal developers who are experts in offering the best solutions. We provide full lifecycle support for Drupal and provide timely updates with crucial enhancements.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Experience-And-Expertise-1.png"),
    que: "Experience and Expertise",
    ans: "If we talk about software development services then this field is booming in the market. You own a store and are planning on converting it into a Website then this is probably the best time. Before hiring the software services it is very important for you to check their Experience and expertise.",
    ans2: "We are from The App Ideas, which is one of the leading web and app development company. We have a team of highly experts Drupal developers who are experts in offering the best solutions. We are into Drupal web development for more than a decade and we are widely acclaimed as an expertise-driven Drupal development company with solid experience.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png"),
    que: "Strong Portfolio",
    ans: "Planning of digitilizing your store? This is probably the best time for you to make an investment in the development of an E-commerce online website using drupal technology. Drupal is one of the most popular E-commerce website platforms in the market. Before hiring software services, it is very important for you to check the portfolio.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled and experienced Drupal developers who are highly expertise in developing the best E-commerce platforms. We boast a robust and strong portfolio of a multitude of successful Drupal-based websites built for different audiences and businesses.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Industry-Leading-Team.png"),
    que: "Industry Leading Team",
    ans: "The popularity of online platforms and website platforms is increasing over time. If we talk about the users then users are loving the online platforms rather than go to the offline store. The business and Startups owners are also liking the website platforms because it is very easy for them to manage and target a high number of users.",
    ans2: "We are from The App Ideas, which is one of the leading web and app development company. We have a talented pool of Drupal developers who will offer victorious solutions. We boast of an industry-leading drupal development team that has years of frontline experience in building several successful websites with drupal.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Agile-Development-1.png"),
    que: "Agile Development",
    ans: "The Demand for the drupal E-commerce platform is increasing in the market. Drupal E-commerce platform offers the proper convenience of accessing the services without visiting the stores. The online website platforms are time-saving as well as cost-effective for the business.",
    ans2: "We are from The App Ideas which is one of the most popular software development company. We have a team of highly expert developers who offer the website, web app and mobile app at the best rates. We follow Agile development methodology to ensure the optimum pace of the development coupled up with quality focus through concurrent testing and frequent iteration.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Time-Bound-Development..png"),
    que: "Adhering to strict Project Deadlines",
    ans: "If you are planning on digitilizing your offline stores and making a high investment in an E-commerce store then this is probably the best time to digitalize your business. Online users are increasing day by day in the market because online platforms provinces the convenience as well as the comfort of using the business.",
    ans2: "The App Ideas is a leading web and app development company. We have a team of highly skilled Drupal developers who have years of expertise in offering successful Drupal E-commerce platforms on the time. We adhere to strict project deadlines and milestones to complete our Drupal development projects as per the specified schedule.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/competitive-pricing.png"),
    que: "Competitive Pricing",
    ans: "Do you own a Store? Thinking of digitilizing your business store then this is probably the best time for digitalizing your business, Many of the business owners and entrepreneurs are now making high investments in developing drupal website solutions to make the business more successful in this competitive market.",
    ans2: "The App Ideas is one of the popular software development company. We have a team of highly skilled Drupal developers who are experts and skilled in offering the best solution at the best rates. We offer expert Drupal development services at a highly competitive price without compromising the least on quality parameters.",
  },
];

const DrupalDev = () => {
  const [activeWeProvide, setActiveWeProvide] = useState("drupal_website");
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
      <Helmet title="Drupal Web Development Company In India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Drupal Web Development Company"
        des="We are here at The App Ideas which is one of the leading web and app development company. We have years of experience in offering the best software services for all kinds of business niches at the best rates. We have a team of a highly skilled and expert team of Drupal developers who will offer future-ready solutions. If you are planning on converting your business into a Drupal platform then feel free to reach us."
        list1="7+ Years of experience in Development"
        list2="Best Drupal Development Company"
        list3="Dedicated team for your Food Delivery App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Drupal Web Development Company"
        service2="Drupal Web Development Services"
        service3="Drupal Website Development"
        image1={Services}
        image2={Development}
        image3={Expert}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What Do We provide in Drupal Web Development Company?</h3>
            <p>
              Drupal is the CMS platform that empowers more than a million
              websites comprising mission-critical administrative business,
              business websites, blogs and e-commerce stores. Drupal is widely
              acclaimed as a CMS for unmatched ease of use, robust feature set
              and clean interface. Our Drupal development experience and
              expertise date back to more than a decade before when the CMS was
              first conceptualised and put into practice.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("drupal_website")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "drupal_website" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Custom-Web-Development.png")}
                      alt="Drupal Custom web development"
                      className="img-fluid"
                    />
                    <p>Drupal Custom web development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("theme_templates")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "theme_templates" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Template-Theme-Development.png")}
                      alt="Drupal Template and Theme Development"
                      className="img-fluid"
                    />
                    <p>Theme & Templates Service</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("custom_plugin")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "custom_plugin" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Custom-Plugin-Development.png")}
                      alt=" Custom Plugin Development"
                      className="img-fluid"
                    />
                    <p>Custom Plugin Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("app_conversion")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "app_conversion" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Mobile-App-Conversion-1.png")}
                      alt="App Conversion"
                      className="img-fluid"
                    />
                    <p>App Conversion</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("drupal_website_redesign")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "drupal_website_redesign" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Website-Redesign.png")}
                      alt="Drupal Website Redesign"
                      className="img-fluid"
                    />
                    <p>Drupal Website Redesign</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() =>
                    setActiveWeProvide("drupal_support_maintanance")
                  }
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "drupal_support_maintanance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Strong-Support.png")}
                      alt="Drupal Support & Maintenance"
                      className="img-fluid"
                    />
                    <p>Drupal Support & Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeProvide === "drupal_website" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Drupal Custom web development
                    </h3>
                    <p className="Title_para">
                      Drupal is a free and open-source web app development
                      platform or we can also say it is one of the successful
                      frameworks for successful E-commerce web development
                      services. Nowadays many business owners and startups
                      owners are making investments in digitalizing their
                      business for making the business successful.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a team of highly
                      skilled Drupal developers who are proficient in delivering
                      successful E-commerce platforms to clients. We build
                      highly user-centric custom websites using the Drupal CMS
                      Solution and ensure consistent traffic and user
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "theme_templates" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Drupal Template and Theme Development{" "}
                    </h3>
                    <p className="Title_para">
                      The advancement in technology has made the business
                      process much easier for business owners as well as for the
                      users. If we check the market then there are thousands of
                      online platforms available for all kinds of services. If
                      you own a store then this is the perfect time for you to
                      digitalize it.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the proficient software
                      development company. We have a talented group of Drupal
                      developers who have years of experience in delivering
                      successful E-commerce platforms. We design and develop
                      custom website templates and themes using Drupal CMS
                      solutions and deliver the custom look and feel suitable to
                      the specific business needs.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "custom_plugin" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom Plugin Development{" "}
                    </h3>
                    <p className="Title_para">
                      Currently, the demand for the digital platform is
                      increasing in the market because it is s convenient as
                      well as easy to use. E-commerce platforms are time-saving
                      as well as cost-effective for the users, that’s why many
                      of the users are now shifting towards digital platforms.
                      Drupal is considered one of the best platforms for
                      E-commerce platforms development.
                    </p>
                    <p className="Title_para">
                      Drupal offers the best features and functionality which
                      helps to develop an E-commerce platform for all kinds of
                      business categories. We build custom plugins and
                      extensions for Drupal websites and ensure delivering
                      custom features and functionalities for the respective
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "app_conversion" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Drupal Mobile App Conversion{" "}
                    </h3>
                    <p className="Title_para">
                      Nowadays, online platforms like websites and mobile apps
                      are at the peak for getting success in the market. A
                      digitalize business makes the process much easier for the
                      business owners as well as for the users. If we talk about
                      the current trends then a high number of people are using
                      smartphones for accessing all kinds of services.
                    </p>
                    <p className="Title_para">
                      Are you planning on launching an E-commerce Store? If yes
                      then this is probably the right time for executive your
                      ideas and launching your digital E-commerce platform using
                      Drupal in the market. We also leverage our drupal
                      development and design expertise to create sophisticated
                      mobile apps based on the Drupal CMS solution.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "drupal_website_redesign" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Drupal Website Redesign </h3>
                    <p className="Title_para">
                      The demand for the website is increasing day by day, all
                      kinds of businesses and services are now moving towards
                      digitization. If you own a Drupal website or any other
                      website then it is very important to redesign as per the
                      latest technology. Drupal is one of the popular E-commerce
                      platforms which offers the best features and
                      functionality.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a team of highly
                      skilled and experienced drupal developers who will offer
                      the best solutions at the best rates. If you have an old
                      Drupal website, we can pump fresh life into it with a
                      sophisticated redesign and feature upgrade.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "drupal_support_maintanance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Drupal Support and Maintenance{" "}
                    </h3>
                    <p className="Title_para">
                      If you are thinking of launching an online platform or
                      E-commerce website then this is probably the best time to
                      move further. If we observe the market then users are more
                      likely to access digital solutions for all kinds of
                      services including food delivery and Shopping sites.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular software development
                      company. We offer the services like website development,
                      web app development and mobile app development. We have a
                      team of highly skilled Drupal developers who are experts
                      in offering the best solutions. We provide full lifecycle
                      support for Drupal and provide timely updates with crucial
                      enhancements.
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
                      <Image  width={50} height={50}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
                  <Image  width={1110} height={628}
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
            <h3>
              Why Opt for the App Ideas for Drupal Web Development Company?
            </h3>
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
                    <Image  width={60} height={60}
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
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png")}
                      alt="Strong Portfolio"
                      className="img-fluid"
                    />
                    <p>Strong Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("indudtry_leading_team")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "indudtry_leading_team" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Industry-Leading-Team.png")}
                      alt="Industry Leading Team"
                      className="img-fluid"
                    />
                    <p>Industry Leading Team</p>
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
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Agile-Development-1.png")}
                      alt="Agile Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("strict_project")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "strict_project" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Time-Bound-Development..png")}
                      alt="Adhering to strict Project Deadlines"
                      className="img-fluid"
                    />
                    <p>Adhering to strict Project Deadlines </p>
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
                    <Image  width={60} height={60}
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
                      If we talk about software development services then this
                      field is booming in the market. You own a store and are
                      planning on converting it into a Website then this is
                      probably the best time. Before hiring the software
                      services it is very important for you to check their
                      Experience and expertise.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have a team of highly
                      experts Drupal developers who are experts in offering the
                      best solutions. We are into Drupal web development for
                      more than a decade and we are widely acclaimed as an
                      expertise-driven Drupal development company with solid
                      experience.
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
                      Planning of digitilizing your store? This is probably the
                      best time for you to make an investment in the development
                      of an E-commerce online website using drupal technology.
                      Drupal is one of the most popular E-commerce website
                      platforms in the market. Before hiring software services,
                      it is very important for you to check the portfolio.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled and
                      experienced Drupal developers who are highly expertise in
                      developing the best E-commerce platforms. We boast a
                      robust and strong portfolio of a multitude of successful
                      Drupal-based websites built for different audiences and
                      businesses.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "indudtry_leading_team" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Industry Leading Team</h3>
                    <p className="Title_para">
                      The popularity of online platforms and website platforms
                      is increasing over time. If we talk about the users then
                      users are loving the online platforms rather than go to
                      the offline store. The business and Startups owners are
                      also liking the website platforms because it is very easy
                      for them to manage and target a high number of users.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have a talented pool of
                      Drupal developers who will offer victorious solutions. We
                      boast of an industry-leading drupal development team that
                      has years of frontline experience in building several
                      successful websites with drupal.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "agile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      The Demand for the drupal E-commerce platform is
                      increasing in the market. Drupal E-commerce platform
                      offers the proper convenience of accessing the services
                      without visiting the stores. The online website platforms
                      are time-saving as well as cost-effective for the
                      business.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the most popular
                      software development company. We have a team of highly
                      expert developers who offer the website, web app and
                      mobile app at the best rates. We follow Agile development
                      methodology to ensure the optimum pace of the development
                      coupled up with quality focus through concurrent testing
                      and frequent iteration.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "strict_project" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Adhering to strict Project Deadlines
                    </h3>
                    <p className="Title_para">
                      If you are planning on digitilizing your offline stores
                      and making a high investment in an E-commerce store then
                      this is probably the best time to digitalize your
                      business. Online users are increasing day by day in the
                      market because online platforms provinces the convenience
                      as well as the comfort of using the business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. We have a team of highly skilled Drupal
                      developers who have years of expertise in offering
                      successful Drupal E-commerce platforms on the time. We
                      adhere to strict project deadlines and milestones to
                      complete our Drupal development projects as per the
                      specified schedule.
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
                      Do you own a Store? Thinking of digitilizing your business
                      store then this is probably the best time for digitalizing
                      your business, Many of the business owners and
                      entrepreneurs are now making high investments in
                      developing drupal website solutions to make the business
                      more successful in this competitive market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular software development
                      company. We have a team of highly skilled Drupal
                      developers who are experts and skilled in offering the
                      best solution at the best rates. We offer expert Drupal
                      development services at a highly competitive price without
                      compromising the least on quality parameters.
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
                      <Image  width={50} height={50}
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
      <ContactUs question="Are you planning to launch a Successful Drupal website in the market?" />
      {/* Contact Section End */}
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer/>
    </>
  );
};

export default DrupalDev;
