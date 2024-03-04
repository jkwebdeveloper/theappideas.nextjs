import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import CustomWordPress from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/PHP-Web-Development.png";
import WordPressWebsite from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/PHP-Development-Services.png";
import Developer from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/PHP-Expert.png";
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
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/ui-ux.png"),
    que: "Custom PHP Web Development",
    ans: "We create fully layered bespoke websites for a variety of company categories using PHP.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/cms-icon1-1.png"),
    que: "PHP Based CMS Development",
    ans: "Nowadays, due to advancements in the field of technology, we are observing that each and every business category are moving towards online platforms. Food business, Grocery business, E-commerce business and more are shifting towards online platforms for increasing the engagement of the user.",
    ans2: "The App Ideas is one of the leading web and app development company. We are highly expert in offering PHP web development services for every business niches. We build custom CMS solutions using the power of the PHP programming language to address specific web development needs.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/icons8-iphone-x-72-1.png"),
    que: "PHP Framework Development",
    ans: "PHP is one of the most popular CMS platforms which is used for developing the best web platforms helps in enhancing future-ready solutions. This is probably the best time to make an investment in web development services to offer online services to the users or customers. Online services are getting popular because this provides convenient ways of accessing the services.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers who are proficient in delivering future-ready PHP web services in the market. We also use PHP to build custom web development frameworks equipped with a rich feature set and functional capabilities.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Mechanism-gears-1.png"),
    que: "PHP Mobile conversion",
    ans: "f you observe the market then you can clearly observe that every platform is now shifting towards the web and mobile app platform for offering satisfying services to the users. More than half the population are using smartphones for accessing daily life services. This is the main reason to digitalize your business.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a pool of talented PHP developers who have years of experience in offering the best PHP web as well as an app for every business niche. We also help to convert PHP based websites into richly-features and audience-specific cross platforms mobile apps.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Group-184.png"),
    que: "PHP Custom Theme and Plugin Development",
    ans: "The demand for the online platform is getting popular day by day. People, as well as business owners, are shifting towards online platforms for increasing the profit rates of the business. Digital platforms are easy to use and easy to manage in a better way.PHP like web platforms offers additional features like custom theme development and plugin for better services development.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers who are experienced in developing the best PHP web platforms at the best rates. We also utilize our PHP development expertise in building sophisticated custom website templates and plugins to deliver a high business-specific user experience.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Mask-Group.png"),
    que: "PHP Support and Maintenance",
    ans: "If you are a business owner or planning to start an online business then this is the right time to make an investment in online web platform development. The development of the web is not the final stage, the maintenance and support are also important to keep it successful in the market.",
    ans2: "The App Ideas is one of the foremost software development company. We have a team of highly experienced and skilled developers who offer the best PHP web development services. For all PHP based websites, we also take responsibility for creating updates with relevant value additions. We offer robust post-development support and maintenance for all PHP based websites.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png"),
    que: "Expertise and Experience.",
    ans: "We are from The App Ideas which is one of the foremost web and app development company. We have a group of highly skilled developers who are experienced in providing the best web development services. Many business owners and entrepreneurs are converting their businesses into web platforms.",
    ans2: "The main reason behind choosing The App Ideas is that we have years of experience in deploying the best business solution which can drive your business to the peak of the success. We initially understand the requirements then start the development. We flaunt a highly experienced team of WordPress developers with proven expertise in building the most sophisticated WordPress websites.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png"),
    que: "Robust Portfolio",
    ans: "Before hiring any software development company, it is very important for you to check the past projects of the software services before hiring. By checking the past projects, you probably get the overall ideas of software development services like the expertise or experienced developers.",
    ans2: "We are from The App Ideas is one of the leading web and app development. We have a team of highly skilled and experienced PHP developers who are experts in providing the best web services at the best possible rates. We boast a solid portfolio of the most successful PHP website across a broad variety of niches and categories.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/why-Choose/icon.png"),
    que: "Unmatched Performance",
    ans: "The demands of software development services are getting popular day by day in the market. The users or we can say the audience is loving the online platform for accessing all kinds of services because it is easy as well as time-saving. As the demand is increasing, this is high time for business owners to convert their business into online business.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a team of highly skilled developers and designers who are expert PHP developers and provides successful web platforms solution for all business categories. We utilise the PHP programming language to ensure unmatched performance and highly audience-centric design.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png"),
    que: "Agile Development",
    ans: "Nowadays, the demand for PHP web development is getting increasing because the web platforms provide the comfort as well as convenience of accessing the services. If we check the market then there are a high number of smartphones users in the market. So this is probably the perfect time for you to make an investment in developing the best web platforms.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a group of highly skilled and experienced PHP web developers who are highly experts in offering the best services. We follow an agile development methodology for faster development while ensuring optimum quality through concurrent testing.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png"),
    que: "Competitive Rate",
    ans: "The demand for software solutions or online platforms is getting higher in the market. Many entrepreneurs, startups and business owners are now launching their web app platforms in the market. The online platform can help in reaching a high number of users which can help in increasing user engagement.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a group of highly skilled PHP developers who offer the best solutions for all kinds of business niches. Our PHP web developers are highly experienced who can offer you advanced features. We provide highly competitive PHP development pricing without compromising on the quality parameters.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Time-Bound-Development..png"),
    que: "Adhering to Strict Deadlines",
    ans: "This era is as highly popular as the digital era because now we have thousands of web app solutions in the market for every kind of business service. It is very easier for users to take out their smartphones or smart devices and start searching for the services they are looking for. This process is time-saving as well as cost-effective.",
    ans2: "The App Ideas is one of the leading PHP web development company. We have years of hands-on experience in deploying successful PHP web development services for different business categories. We also offer expert advice on integrating some unique and advanced features into your online service platforms. We adhere to strict project deadlines and milestones and allow continuous iteration to open scopes for consistent value addition",
  },
];

const PHPDev = () => {
  const [activeOffer, setActiveOffer] = useState("php_web");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "expertise_experience"
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
      <Helmet title="Best PHP Development Company In India | The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="PHP Development Company"
        des="App Ideas leads online and app development with unparalleled expertise. Our talented PHP web app developers improve business. Now is the time for PHP web platforms. Contact us for free project quotes. We assist PHP web businesses flourish in today's competitive industry with our track record and devotion."
        list1="7+ Years of experience in App Development"
        list2="Best PHP Development Company"
        list3="Dedicated team for your PHP Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="PHP Web Development"
        service2="PHP Development Services"
        service3="PHP Expert"
        image1={CustomWordPress}
        image2={WordPressWebsite}
        image3={Developer}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we offer in PHP Development Company?</h3>
            <p>
              Popular websites and CMSs use PHP. Popular for its user-friendly
              coding environment, huge customization options, efficient coding
              techniques, robust design, and scalability. The App Ideas builds
              adaptable, customizable, and user-friendly websites for different
              industries using PHP. We build award-winning and lucrative PHP
              websites with over a decade of PHP development experience. Our PHP
              expertise makes our clients' websites attractive and smooth across
              platforms and devices. We'll design innovative PHP solutions for
              your e-commerce platform, business website, or dynamic web
              application that exceed your expectations.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("php_web")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "php_web" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/ui-ux.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Customize Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("php_cms")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "php_cms" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/cms-icon1-1.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>PHP Based CMS Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("php_framework")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "php_framework" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/icons8-iphone-x-72-1.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>PHP Framework Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("php_mobile")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "php_mobile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Mechanism-gears-1.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>PHP Mobile Conversion</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("theme_plugin")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "theme_plugin" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Group-184.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Theme & Plugins Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("php_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "php_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Mask-Group.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>PHP Support And Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeOffer === "php_web" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom PHP Web Development
                    </h3>
                    <p className="Title_para">
                      We create fully layered bespoke websites for a variety of
                      company categories using PHP.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "php_cms" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      PHP Based CMS Development{" "}
                    </h3>
                    <p className="Title_para">
                      Nowadays, due to advancements in the field of technology,
                      we are observing that each and every business category are
                      moving towards online platforms. Food business, Grocery
                      business, E-commerce business and more are shifting
                      towards online platforms for increasing the engagement of
                      the user.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly expert in offering PHP
                      web development services for every business niches. We
                      build custom CMS solutions using the power of the PHP
                      programming language to address specific web development
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "php_framework" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      PHP Framework Development{" "}
                    </h3>
                    <p className="Title_para">
                      PHP is one of the most popular CMS platforms which is used
                      for developing the best web platforms helps in enhancing
                      future-ready solutions. This is probably the best time to
                      make an investment in web development services to offer
                      online services to the users or customers. Online services
                      are getting popular because this provides convenient ways
                      of accessing the services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers who are proficient in delivering future-ready
                      PHP web services in the market. We also use PHP to build
                      custom web development frameworks equipped with a rich
                      feature set and functional capabilities.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "php_mobile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">PHP Mobile conversion </h3>
                    <p className="Title_para">
                      If you observe the market then you can clearly observe
                      that every platform is now shifting towards the web and
                      mobile app platform for offering satisfying services to
                      the users. More than half the population are using
                      smartphones for accessing daily life services. This is the
                      main reason to digitalize your business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a pool of talented PHP
                      developers who have years of experience in offering the
                      best PHP web as well as an app for every business niche.
                      We also help to convert PHP based websites into
                      richly-features and audience-specific cross platforms
                      mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "theme_plugin" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      PHP Custom Theme and Plugin Development
                    </h3>
                    <p className="Title_para">
                      The demand for the online platform is getting popular day
                      by day. People, as well as business owners, are shifting
                      towards online platforms for increasing the profit rates
                      of the business. Digital platforms are easy to use and
                      easy to manage in a better way.PHP like web platforms
                      offers additional features like custom theme development
                      and plugin for better services development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers who are experienced in developing the best PHP
                      web platforms at the best rates. We also utilize our PHP
                      development expertise in building sophisticated custom
                      website templates and plugins to deliver a high
                      business-specific user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "php_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      PHP Support and Maintenance{" "}
                    </h3>
                    <p className="Title_para">
                      If you are a business owner or planning to start an online
                      business then this is the right time to make an investment
                      in online web platform development. The development of the
                      web is not the final stage, the maintenance and support
                      are also important to keep it successful in the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a team of highly experienced and skilled
                      developers who offer the best PHP web development
                      services. For all PHP based websites, we also take
                      responsibility for creating updates with relevant value
                      additions. We offer robust post-development support and
                      maintenance for all PHP based websites.
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
                    alt="Group-18"
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
                    alt="Group-19"
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
                    alt="Group-20"
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
                    alt="Group-21"
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
                    alt="Group-22"
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
                    alt="Group-23"
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
                    alt="Group-24"
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
                    alt="Group-26"
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
                    alt="Group-28"
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
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose The App Ideas for PHP Development Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("expertise_experience")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "expertise_experience" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Expertise and Experience</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust_portfolio")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_portfolio" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("unmatched_performance")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "unmatched_performance" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/why-Choose/icon.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Unmatched Performance</p>
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
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_rate")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_rate" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Competitive Rate</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("adhering_strict")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "adhering_strict" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Time-Bound-Development..png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Adhering To Strict Deadlines</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === "expertise_experience" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expertise and Experience.</h3>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the foremost web
                      and app development company. We have a group of highly
                      skilled developers who are experienced in providing the
                      best web development services. Many business owners and
                      entrepreneurs are converting their businesses into web
                      platforms.
                    </p>
                    <p className="Title_para">
                      The main reason behind choosing The App Ideas is that we
                      have years of experience in deploying the best business
                      solution which can drive your business to the peak of the
                      success. We initially understand the requirements then
                      start the development. We flaunt a highly experienced team
                      of WordPress developers with proven expertise in building
                      the most sophisticated WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "robust_portfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Before hiring any software development company, it is very
                      important for you to check the past projects of the
                      software services before hiring. By checking the past
                      projects, you probably get the overall ideas of software
                      development services like the expertise or experienced
                      developers.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas is one of the leading web and
                      app development. We have a team of highly skilled and
                      experienced PHP developers who are experts in providing
                      the best web services at the best possible rates. We boast
                      a solid portfolio of the most successful PHP website
                      across a broad variety of niches and categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "unmatched_performance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unmatched Performance</h3>
                    <p className="Title_para">
                      The demands of software development services are getting
                      popular day by day in the market. The users or we can say
                      the audience is loving the online platform for accessing
                      all kinds of services because it is easy as well as
                      time-saving. As the demand is increasing, this is high
                      time for business owners to convert their business into
                      online business.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a team of highly
                      skilled developers and designers who are expert PHP
                      developers and provides successful web platforms solution
                      for all business categories. We utilise the PHP
                      programming language to ensure unmatched performance and
                      highly audience-centric design.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "agile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      Nowadays, the demand for PHP web development is getting
                      increasing because the web platforms provide the comfort
                      as well as convenience of accessing the services. If we
                      check the market then there are a high number of
                      smartphones users in the market. So this is probably the
                      perfect time for you to make an investment in developing
                      the best web platforms.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a group of highly skilled and
                      experienced PHP web developers who are highly experts in
                      offering the best services. We follow an agile development
                      methodology for faster development while ensuring optimum
                      quality through concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_rate" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Rate</h3>
                    <p className="Title_para">
                      The demand for software solutions or online platforms is
                      getting higher in the market. Many entrepreneurs, startups
                      and business owners are now launching their web app
                      platforms in the market. The online platform can help in
                      reaching a high number of users which can help in
                      increasing user engagement.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a group of highly
                      skilled PHP developers who offer the best solutions for
                      all kinds of business niches. Our PHP web developers are
                      highly experienced who can offer you advanced features. We
                      provide highly competitive PHP development pricing without
                      compromising on the quality parameters.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "adhering_strict" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Adhering to Strict Deadlines
                    </h3>
                    <p className="Title_para">
                      This era is as highly popular as the digital era because
                      now we have thousands of web app solutions in the market
                      for every kind of business service. It is very easier for
                      users to take out their smartphones or smart devices and
                      start searching for the services they are looking for.
                      This process is time-saving as well as cost-effective.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading PHP web development
                      company. We have years of hands-on experience in deploying
                      successful PHP web development services for different
                      business categories. We also offer expert advice on
                      integrating some unique and advanced features into your
                      online service platforms. We adhere to strict project
                      deadlines and milestones and allow continuous iteration to
                      open scopes for consistent value addition
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
      {/* Service Section End */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful PHP Mobile app in the market?" />
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

export default PHPDev;
