import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import CustomWordPress from "../../../public/assets/images/SERVICES/Designing/Graphic-design/Graphic-Design.png";
import WordPressWebsite from "../../../public/assets/images/SERVICES/Designing/Graphic-design/Graphic-Design-Services.png";
import Developer from "../../../public/assets/images/SERVICES/Designing/Graphic-design/Professional-Graphic-Designer.png";

import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import HeroSection from "../../../components/HeroSection";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/logo-design.png"),
    que: "Logo Designing",
    ans: "Logo plays a vital role in the branding of any business or startup. Nowadays, there are a high number of people are investing in online business because of the high demand for online services. There are thousands of online businesses available, so it is very important to work on logo design services that completely represent your business in the market.",
    ans2: "The App Ideas is one of the leading web and app development services. Along with the software development services, we also offer the best graphic designing services for all kinds of business categories. Our Logo design experts are highly proficient in providing the best logo designing services that reflect your services or brands.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/web-ui-ux.png"),
    que: "Web UI/UX Designing",
    ans: "UI/UX designing services are highly popular in this present time. As per the increasing demand for online services, Web designing services is also at a peak. If you are a web designing owner then it is very important for you to update your online services based on the new technology.",
    ans2: "The App Ideas is one of the highly popular Graphic Designing services. We have a team of highly skilled developers as well as designers who are proficient in providing the best services at the best rates. If you are planning to develop a web app or looking for a skilled web designers group then feel free to connect with us and get a free quote.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/landing-page.png"),
    que: "Landing Page Designing",
    ans: "Landing Page business plays a vital role in the success of any online business solution. In this present time, the demand for an online solution is increasing because people are now more inclined towards online platforms because it offers the convenience of accessing the services. A landing page is one of the best methods for keeping engaging your client in your services.",
    ans2: "The App Ideas is one of the foremost software development company. We have a team of highly skilled team of designers who are experienced in providing the best landing page services for all types of business. We are highly expertise in analysing the business as well as the modern trend to offer the leading landing page development service.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/brochure-design.png"),
    que: "Brochure design",
    ans: "The brochure is considered as an Old method of doing the advertising in the market, but still, through the digital brochure, you can attract a high number of users towards your services. If you are planning to invest in a business or already have a business then for promotion you can plan to develop the best brochure based on your services.",
    ans2: "The App Ideas is one of the foremost software development company. We offer the services like mobile app development, web app development, website development as well as Graphic designing services at the best possible rates. We offer graphic designing services that are unique and which catch the attention of the users as well as let them know about your service.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/brand-identity.png"),
    que: "Brand Identity",
    ans: "Nowadays, the demand for online platforms is highly increasing in the market. People are more inclined towards online platforms because they offer the convenience of accessing the services. Due to the demand for online platforms, there is high competition in the market. So if you are planning to launch a business or you are already running a business then it is very important to build up a Brand Identity.",
    ans2: "The App Ideas is one of the most popular web and app development company. We have a team of highly skilled developers who are proficient in providing the best Graphic designing services at the best possible rates. We provide a modern design that can help your business to create a brand identity in the market.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/business-card.png"),
    que: "Business Card",
    ans: "Many Entrepreneurs and business owners are now planning to launch a software development service in the market as it helps in increasing the sales rate of the business. If you are one of them, then you must be familiar with the business card term. This business card can help you to make people aware of your business. Digital business cards are highly popular in this present time.",
    ans2: "The App Ideas is one of the foremost software development company. We have a team of highly experienced designers or developers who are experts in providing graphic designing services. We are also proficient in offering the foremost business cards design based on the current market requirements at the best rates.",
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
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/why-choose/portfolio.png"),
    que: "Strong Portfolio",
    ans: "Are you planning to hire an expert graphic designing agency for your Mobile app? If yes, then you are at the right place. Here we have years of experience in providing the best graphic designing services according to the business requirements. Before hiring any agency it is very important to check their portfolio before hiring any services.",
    ans2: "The App Ideas is one of the foremost graphic designing services. We have a team of highly skilled graphic designers who are highly skilled in providing the best services for all kinds of business niches. To check our expertise in graphic designing, you can check out our strong portfolio of graphic designing services for the web app as well as for the mobile app.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png"),
    que: "Agile methodology",
    ans: "Are you thinking of redesigning your online platforms? There are millions of mobile apps and web apps available in the market with similar ideas. The only thing which can make the difference in the various online solution is the designing or the graphic designing services. It is very important to search for the best graphic design service.",
    ans2: "The App Ideas is one of the highly popular software development company. We are proficient in providing the best services for all kinds of online platforms like web app development, mobile app development, web designing as well as graphic designing service. We strictly follow the agile methodology for the development of the online platform and also the client approval for that.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Designing/Graphic-design/why-choose/time-delivery.png"),
    que: "On-time Delivery",
    ans: "The demand for the online solution is increasing in the market because it is very easy to manage as well as provide the service online to the users. If you are also planning to launch an online platform then it is very important for you to also provide the best UI/UX design to enhance the platform user.",
    ans2: "The App Ideas is one of the best IT services providers. We offer all kinds of services like development of the app and web platforms, Digital marketing services and Graphic design services. We first analyse the requirements then we offer the quotation as well as the timeline of completing these services. We deliver the project on the given timeline by testing the overall projects",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png"),
    que: "Competitive pricing",
    ans: "In this present time, people are more inclined towards online platforms because it offers easy accessibility for the services. Many entrepreneurs and startup owners are now planning and investing in some of the best ideas which can help in increasing the sales of the business. It is quite important for you to search for the best firm which can offer the best rates for graphic design.",
    ans2: "The App Ideas is one of the leading web and app development company. We Have a team of highly skilled developers as well as designers who are experts in providing the best graphic designing services. We have worked on various graphic designing projects and offer unique services at a competitive price.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png"),
    que: "Support and Maintenance",
    ans: "Are you thinking of launching an online platform in the market? If yes, then this is probably the best time for you to connect with us and discuss your requirements to get a free quotation. Along with the development of the online platforms, it is very important for you to also take care of the designing services. Along with these services, it is very important to have maintenance of your platforms from time to time.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are experts in providing the best solutions for all kinds of business niches. Along with that, we also provide support and maintenance services to our clients and it’s free for 3 months. Feel free to connect with us and get a free quotation for a graphic designing service.",
  },
];

const GraphicsDesign = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("logo_designing");
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
      <Helmet title="Best Graphics Design Company in India | The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Best Graphic Design Company"
        des="Top online and app developer App Ideas is recognized for its unique solutions. We produce beautiful graphics for contemporary companies in addition to programming. Building an online presence or developing an existing platform involves visual design. Audiences will like your digital interface, enhancing brand image. Use optimal design practices to communicate your brand and engage customers. In today's dynamic business, professional graphic design services improve your online platform's efficiency, competitiveness, and appearance."
        list1="7+ Years of experience in App Development"
        list2="Best Graphic design Development Company"
        list3="Dedicated team for your Graphic design Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Graphic Design"
        service2="Graphic Design Services"
        service3="Professional Graphic Designer"
        image1={CustomWordPress}
        image2={WordPressWebsite}
        image3={Developer}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we offer in a Graphic Design Company?</h3>
            <p>
              Online business platforms need graphic design to attract users.
              Graphic designers boost online platform user connection using
              visual interfaces. Directly sharing ideas to customers boosts
              engagement and enjoyment. Businesses across industries emphasize
              intelligent design to enhance user experiences. Advanced visual
              design may boost brand loyalty and user engagement. Today's
              digital industry requires outstanding visual design in online
              platforms for competitive advantage and sustained growth.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("logo_designing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "logo_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/logo-design.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Logo Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("web_ui_ux")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "web_ui_ux" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/web-ui-ux.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Web UI/UX Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("landing_page")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "landing_page" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/landing-page.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Landing Page Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("brouchure_design")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "brouchure_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/brochure-design.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Brochure Design</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("brand_identify")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "brand_identify" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/brand-identity.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Brand Identity</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("business_card")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeOffer === "business_card" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/what-do/business-card.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Business Card</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeOffer === "logo_designing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Logo Designing</h3>
                    <p className="Title_para">
                      Logo plays a vital role in the branding of any business or
                      startup. Nowadays, there are a high number of people are
                      investing in online business because of the high demand
                      for online services. There are thousands of online
                      businesses available, so it is very important to work on
                      logo design services that completely represent your
                      business in the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development services. Along with the software development
                      services, we also offer the best graphic designing
                      services for all kinds of business categories. Our Logo
                      design experts are highly proficient in providing the best
                      logo designing services that reflect your services or
                      brands.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "web_ui_ux" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web UI/UX Designing</h3>
                    <p className="Title_para">
                      UI/UX designing services are highly popular in this
                      present time. As per the increasing demand for online
                      services, Web designing services is also at a peak. If you
                      are a web designing owner then it is very important for
                      you to update your online services based on the new
                      technology.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular Graphic
                      Designing services. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      providing the best services at the best rates. If you are
                      planning to develop a web app or looking for a skilled web
                      designers group then feel free to connect with us and get
                      a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "landing_page" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Landing Page Designing</h3>
                    <p className="Title_para">
                      Landing Page business plays a vital role in the success of
                      any online business solution. In this present time, the
                      demand for an online solution is increasing because people
                      are now more inclined towards online platforms because it
                      offers the convenience of accessing the services. A
                      landing page is one of the best methods for keeping
                      engaging your client in your services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a team of highly skilled team of
                      designers who are experienced in providing the best
                      landing page services for all types of business. We are
                      highly expertise in analysing the business as well as the
                      modern trend to offer the leading landing page development
                      service.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "brouchure_design" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Brochure design</h3>
                    <p className="Title_para">
                      The brochure is considered as an Old method of doing the
                      advertising in the market, but still, through the digital
                      brochure, you can attract a high number of users towards
                      your services. If you are planning to invest in a business
                      or already have a business then for promotion you can plan
                      to develop the best brochure based on your services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We offer the services like mobile app
                      development, web app development, website development as
                      well as Graphic designing services at the best possible
                      rates. We offer graphic designing services that are unique
                      and which catch the attention of the users as well as let
                      them know about your service.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "brand_identify" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Brand Identity</h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms is highly
                      increasing in the market. People are more inclined towards
                      online platforms because they offer the convenience of
                      accessing the services. Due to the demand for online
                      platforms, there is high competition in the market. So if
                      you are planning to launch a business or you are already
                      running a business then it is very important to build up a
                      Brand Identity.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have a team of highly skilled
                      developers who are proficient in providing the best
                      Graphic designing services at the best possible rates. We
                      provide a modern design that can help your business to
                      create a brand identity in the market.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "business_card" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Business Card</h3>
                    <p className="Title_para">
                      Many Entrepreneurs and business owners are now planning to
                      launch a software development service in the market as it
                      helps in increasing the sales rate of the business. If you
                      are one of them, then you must be familiar with the
                      business card term. This business card can help you to
                      make people aware of your business. Digital business cards
                      are highly popular in this present time.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a team of highly experienced designers or
                      developers who are experts in providing graphic designing
                      services. We are also proficient in offering the foremost
                      business cards design based on the current market
                      requirements at the best rates.
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
                    src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/work-had/1-2.webp")}
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
                    src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/work-had/2-1.webp")}
                    style={{
                      width: "100%",
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
            <h3>Why choose us for Graphic Design Company?</h3>
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
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Expert Developers</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("strong_portfolio")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "strong_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/why-choose/portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Strong Portfolio</p>
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
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Agile Methodology</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("on_time_delivery")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "on_time_delivery" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Designing/Graphic-design/why-choose/time-delivery.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>On-Time Delivery</p>
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
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("support_maintenance")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "support_maintenance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
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
            {activeWhyChoose === "agile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile methodology</h3>
                    <p className="Title_para">
                      Are you thinking of redesigning your online platforms?
                      There are millions of mobile apps and web apps available
                      in the market with similar ideas. The only thing which can
                      make the difference in the various online solution is the
                      designing or the graphic designing services. It is very
                      important to search for the best graphic design service.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular software
                      development company. We are proficient in providing the
                      best services for all kinds of online platforms like web
                      app development, mobile app development, web designing as
                      well as graphic designing service. We strictly follow the
                      agile methodology for the development of the online
                      platform and also the client approval for that.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive pricing</h3>
                    <p className="Title_para">
                      In this present time, people are more inclined towards
                      online platforms because it offers easy accessibility for
                      the services. Many entrepreneurs and startup owners are
                      now planning and investing in some of the best ideas which
                      can help in increasing the sales of the business. It is
                      quite important for you to search for the best firm which
                      can offer the best rates for graphic design. .
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We Have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best graphic designing services. We have
                      worked on various graphic designing projects and offer
                      unique services at a competitive price.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "strong_portfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Strong Portfolio</h3>
                    <p className="Title_para">
                      Are you planning to hire an expert graphic designing
                      agency for your Mobile app? If yes, then you are at the
                      right place. Here we have years of experience in providing
                      the best graphic designing services according to the
                      business requirements. Before hiring any agency it is very
                      important to check their portfolio before hiring any
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost graphic designing
                      services. We have a team of highly skilled graphic
                      designers who are highly skilled in providing the best
                      services for all kinds of business niches. To check our
                      expertise in graphic designing, you can check out our
                      strong portfolio of graphic designing services for the web
                      app as well as for the mobile app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "on_time_delivery" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">On-time Delivery</h3>
                    <p className="Title_para">
                      The demand for the online solution is increasing in the
                      market because it is very easy to manage as well as
                      provide the service online to the users. If you are also
                      planning to launch an online platform then it is very
                      important for you to also provide the best UI/UX design to
                      enhance the platform user.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the best IT services providers. We
                      offer all kinds of services like development of the app
                      and web platforms, Digital marketing services and Graphic
                      design services. We first analyse the requirements then we
                      offer the quotation as well as the timeline of completing
                      these services. We deliver the project on the given
                      timeline by testing the overall projects.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "support_maintenance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance</h3>
                    <p className="Title_para">
                      Are you thinking of launching an online platform in the
                      market? If yes, then this is probably the best time for
                      you to connect with us and discuss your requirements to
                      get a free quotation. Along with the development of the
                      online platforms, it is very important for you to also
                      take care of the designing services. Along with these
                      services, it is very important to have maintenance of your
                      platforms from time to time.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best solutions for all kinds of business
                      niches. Along with that, we also provide support and
                      maintenance services to our clients and it’s free for 3
                      months. Feel free to connect with us and get a free
                      quotation for a graphic designing service.
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
      {/* Service Section End */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful Graphic Designing Company in the market?" />
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

export default GraphicsDesign;
