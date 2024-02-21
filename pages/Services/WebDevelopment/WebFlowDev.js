import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import Webflowservice from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/Webflow-Development-Services.png";
import webflow from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/Webflow-web-development.png";
import webflowdeveloper from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/Webflow-Developer.png";
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
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/website-management.png"),
    que: "Website management",
    ans: "We are offering the best website development services for all types of business categories. Webflow offers responsive features which make the website much more easily accessible by the users. If you are running a business then this is very important for you to launch a website using this web-flow tool.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are experts in providing the best web-flow solution at the best rates. If you are looking for any services then feel free to connect with us and get a free quote.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/custom-theme.png"),
    que: "Custom theme development",
    ans: "Nowadays, the demand for online platforms is increasing among the users as well as business owners are also converting their businesses into an online platforms because this helps in increasing the user base. Webflow offers the services of making the custom website by drag and drop methods. There are available creative templates and themes for developing a unique website. –",
    ans2: "Here we are at The App Ideas is one of the foremost software development company. We have a team of highly skilled web-flow developers who are experts in offering the best solution for all types of business categories website development. If you are looking for their services then feel free to reach us.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/psd2webflow.png"),
    que: "PSD to Webflow conversion",
    ans: "If we talk about location-based services then this type of service is also getting highly popular in the market. Many of the businesses are launching online platforms and implementing location-based features to make the services easier to access as well as for a better understanding.",
    ans2: "The App Ideas is one of the most popular software development services. We offer development services for mobile app, web app and E-commerce platform development. We are highly expert in offering a location-based online platform. We help various websites converting to WordPress CMS from their existing platforms and help to optimise existing WordPress websites.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/webflow-ecommerce.png"),
    que: "Web flow E-commerce",
    ans: "Web flow is one of the most demanding and popular software which is used for website development. As we can clearly observe that the number of e-commerce platforms is increasing in the market as per the demand among the users. People are liking the e-commerce platforms as they can access them at any time and at any place.",
    ans2: "If you are planning to convert or invest in an online platform then it is very important for you to make an investment in Webflow website development for E-commerce platforms. For more details, you can feel free to connect with us and get a free quotation for launching a web-flow e-commerce website.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/intration.png"),
    que: "Easy Integration",
    ans: "Websites are considered one of the best methods for online business. Many business owners and startup owners are now making high investments in online platform development as it helps in increasing the sales of the business. WebFlow is one of the best tools which can be used to develop a website by integrating some best features.",
    ans2: "We are from The App Ideas which is a leading web and app development company. We have a team of highly experienced Webflow developers who are experts in offering the best solutions. We are experts in integrating additional features into the website. Webflow provides the best array of integration options.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/maintenance.png"),
    que: "Website Maintenance",
    ans: "Website is one of the most popular technology platforms which helps in building the online presence in the market. If you are a business owner and have a website then it is important to maintain it so it can be compatible with multiple devices. In some time periods, it is very important to maintain the website by upgrading the features based on the updated technology.",
    ans2: "The App Ideas is one of the foremost web-flow development company. We have a team of highly skilled developers as well as designers who are experienced in providing the best services at the best rates. If you are looking for website maintenance services then this is probably the best time to connect with us.",
  },
];

const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/experienced-developers.png"),
    que: "Experienced developers",
    ans: "Webflow is one of the popular website development tools which is used for developing the best website for all types of business categories. Experienced developers are highly demanding as they clearly understand the requirements and provide the best solution for website development services.",
    ans2: "The App Ideas is one of the most popular software development company. We have a team of highly skilled web-flow developers who have years of experience in providing web-flow website development with the best features and functionality. We ensure the quality as well as the performance of the web flow development.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/ui-ux.png"),
    que: "Best UI/UX",
    ans: "Having the best design services on a website makes it popular among the users as a better UI and UX attract the customers towards the platforms. The UI/UX must be based on the types of services you are providing. Here we have a team of the highly expert designing team who offer the best services.",
    ans2: "The App Ideas is one of the most demanding software development services. along with the mobile app, we are also highly experienced in developing the website using the web flow tools with customization. We also offer the best design services at an affordable cost, feel free to connect with us and get a free quote.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/ecommerce-development.png"),
    que: "E-commerce development",
    ans: "E-commerce platforms are highly popular in this online era as people, as well as business owners, are loving the digital platforms. Users can easily make the purchase through an online platform like a website. As per the increasing demand, online store owners are also making high investments in website development services.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers who are experts in providing the best solution for E-commerce website development using the Webflow tools at the best rates. If you are looking for an E-commerce website development then feel free to connect with us.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/migration-support.png"),
    que: "Migration support",
    ans: "Migration is very important for some services as they need to convert the website into Webflow website services. Here at our company, we are also providing migration services as we can convert your current website into a web flow for further requirements at an affordable cost.",
    ans2: "The App Ideas is one of the popular web-flow development company. We have years of experience in providing the proper solution as per the need of the customers. You can connect with us for any kind of migration services we will understand your requirements and provide you with the service accordingly",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/support-and-maintenance.png"),
    que: "Support and maintenance",
    ans: "Every online platform required support and maintenance services after its development of the online platforms. If you are planning to launch a website for your business categories then this is probably the best time for you to launch a website using web-flow tools. We offer support as well as maintenance to our clients.",
    ans2: "The App Ideas is one of the highly popular software development company. We are highly experts in providing the best solution for web flow websites with advanced features and functionality. After deployment, we also offer support and maintenance services to our clients.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/affordable-cost.png"),
    que: "Affordable cost",
    ans: "The demand for the website is increasing in the market as it makes the work easier for the users as well as for the business owners. The online platforms make the work much easier for the people to get the services at their doorstep. We offer the services at an affordable cost.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled team who will provide the best services at the best rates. We understand the requirements and then provide the proper costing as well as a timeline. We offer the services at the best price. Feel free to reach us and get a quote for your idea.",
  },
];

const WebFlowDev = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("website_management");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experienced_developers"
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
      <Helmet title="Webflow Web Development Services In India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Webflow Development Services"
        des="The App Ideas is one of the foremost app and web development company. We offer the best development as well as designing services for all types of business categories based on the modern requirements of the users. We are also working on Webflow development for offering the best website development services. If you are planning to launch an online business then feel free to connect with us and get a free quote by experiencing our expertise in web flow development."
        list1="7+ Years of experience in Webflow Development"
        list2="Best Webflow Development Company"
        list3="Dedicated team for your Webflow Development"
        list4="Complete Guidance from Designing to Webflow Deployment"
        service1="Webflow Development Services"
        service2="Webflow web development"
        service3="Webflow Developer"
        image1={Webflowservice}
        image2={webflow}
        image3={webflowdeveloper}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we offer in a Webflow Development Company?</h3>
            <p>
              Webflow is highly popular in this present time. This Webflow is a
              responsive website builder which is a cloud-based tool that helps
              in the development website based on the requirements. This makes
              designing and developing a website using a site builder much
              easier and offers various functions to add up to the website. This
              tool offers a good amount of customization which can be done as
              per the client’s requirements and is fully responsive and can be
              compatible with various online platforms.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("website_management")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "website_management" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/website-management.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Website management</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("custom_theme")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "custom_theme" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/custom-theme.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Custom theme development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("psd_webflow")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "psd_webflow" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/psd2webflow.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>PSD to Webflow conversion</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("web_flow")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "web_flow" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/webflow-ecommerce.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Web flow E-commerce</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("easy_integration")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "easy_integration" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/intration.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Easy Integration</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("website_maintenance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "website_maintenance" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/maintenance.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Website Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeOffer === "website_management" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website management</h3>
                    <p className="Title_para">
                      We are offering the best website development services for
                      all types of business categories. Webflow offers
                      responsive features which make the website much more
                      easily accessible by the users. If you are running a
                      business then this is very important for you to launch a
                      website using this web-flow tool.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best web-flow solution at the best rates. If
                      you are looking for any services then feel free to connect
                      with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "custom_theme" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom theme development</h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms is increasing
                      among the users as well as business owners are also
                      converting their businesses into an online platforms
                      because this helps in increasing the user base. Webflow
                      offers the services of making the custom website by drag
                      and drop methods. There are available creative templates
                      and themes for developing a unique website. –
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas is one of the foremost
                      software development company. We have a team of highly
                      skilled web-flow developers who are experts in offering
                      the best solution for all types of business categories
                      website development. If you are looking for their services
                      then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "psd_webflow" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">PSD to Webflow conversion</h3>
                    <p className="Title_para">
                      If we talk about location-based services then this type of
                      service is also getting highly popular in the market. Many
                      of the businesses are launching online platforms and
                      implementing location-based features to make the services
                      easier to access as well as for a better understanding.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We offer development services for
                      mobile app, web app and E-commerce platform development.
                      We are highly expert in offering a location-based online
                      platform. We help various websites converting to WordPress
                      CMS from their existing platforms and help to optimise
                      existing WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "web_flow" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web flow E-commerce</h3>
                    <p className="Title_para">
                      Web flow is one of the most demanding and popular software
                      which is used for website development. As we can clearly
                      observe that the number of e-commerce platforms is
                      increasing in the market as per the demand among the
                      users. People are liking the e-commerce platforms as they
                      can access them at any time and at any place.
                    </p>
                    <p className="Title_para">
                      If you are planning to convert or invest in an online
                      platform then it is very important for you to make an
                      investment in Webflow website development for E-commerce
                      platforms. For more details, you can feel free to connect
                      with us and get a free quotation for launching a web-flow
                      e-commerce website.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "easy_integration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Easy Integration</h3>
                    <p className="Title_para">
                      Websites are considered one of the best methods for online
                      business. Many business owners and startup owners are now
                      making high investments in online platform development as
                      it helps in increasing the sales of the business. WebFlow
                      is one of the best tools which can be used to develop a
                      website by integrating some best features.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is a leading web and app
                      development company. We have a team of highly experienced
                      Webflow developers who are experts in offering the best
                      solutions. We are experts in integrating additional
                      features into the website. Webflow provides the best array
                      of integration options.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "website_maintenance" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Maintenance</h3>
                    <p className="Title_para">
                      Website is one of the most popular technology platforms
                      which helps in building the online presence in the market.
                      If you are a business owner and have a website then it is
                      important to maintain it so it can be compatible with
                      multiple devices. In some time periods, it is very
                      important to maintain the website by upgrading the
                      features based on the updated technology.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web-flow development
                      company. We have a team of highly skilled developers as
                      well as designers who are experienced in providing the
                      best services at the best rates. If you are looking for
                      website maintenance services then this is probably the
                      best time to connect with us.
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
                    alt="Cyber_Risk"
                    src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Work-hand/Cyber_Risk.webp")}
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
            <h3>Why choose us for Webflow Development Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experienced_developers")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "experienced_developers" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/experienced-developers.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Experienced Developers</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("ui_ux")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "ui_ux" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/ui-ux.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Best UI/UX</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("ecom_dev")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "ecom_dev" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/ecommerce-development.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>E-Commerce Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("migration_support")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "migration_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/migration-support.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Migration Support</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("support_maintanance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "support_maintanance" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/support-and-maintenance.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("cost")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "cost" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/affordable-cost.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Affordable Cost</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experienced_developers" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experienced developers</h3>
                    <p className="Title_para">
                      Webflow is one of the popular website development tools
                      which is used for developing the best website for all
                      types of business categories. Experienced developers are
                      highly demanding as they clearly understand the
                      requirements and provide the best solution for website
                      development services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of highly skilled
                      web-flow developers who have years of experience in
                      providing web-flow website development with the best
                      features and functionality. We ensure the quality as well
                      as the performance of the web flow development.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "ui_ux" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Best UI/UX</h3>
                    <p className="Title_para">
                      Having the best design services on a website makes it
                      popular among the users as a better UI and UX attract the
                      customers towards the platforms. The UI/UX must be based
                      on the types of services you are providing. Here we have a
                      team of the highly expert designing team who offer the
                      best services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most demanding software
                      development services. along with the mobile app, we are
                      also highly experienced in developing the website using
                      the web flow tools with customization. We also offer the
                      best design services at an affordable cost, feel free to
                      connect with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "ecom_dev" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">E-commerce development</h3>
                    <p className="Title_para">
                      E-commerce platforms are highly popular in this online era
                      as people, as well as business owners, are loving the
                      digital platforms. Users can easily make the purchase
                      through an online platform like a website. As per the
                      increasing demand, online store owners are also making
                      high investments in website development services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers who are experts in providing the best solution
                      for E-commerce website development using the Webflow tools
                      at the best rates. If you are looking for an E-commerce
                      website development then feel free to connect with us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "migration_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Migration support</h3>
                    <p className="Title_para">
                      Migration is very important for some services as they need
                      to convert the website into Webflow website services. Here
                      at our company, we are also providing migration services
                      as we can convert your current website into a web flow for
                      further requirements at an affordable cost.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular web-flow development
                      company. We have years of experience in providing the
                      proper solution as per the need of the customers. You can
                      connect with us for any kind of migration services we will
                      understand your requirements and provide you with the
                      service accordingly
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "support_maintanance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and maintenance</h3>
                    <p className="Title_para">
                      Every online platform required support and maintenance
                      services after its development of the online platforms. If
                      you are planning to launch a website for your business
                      categories then this is probably the best time for you to
                      launch a website using web-flow tools. We offer support as
                      well as maintenance to our clients.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular software
                      development company. We are highly experts in providing
                      the best solution for web flow websites with advanced
                      features and functionality. After deployment, we also
                      offer support and maintenance services to our clients.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "cost" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Affordable cost</h3>
                    <p className="Title_para">
                      The demand for the website is increasing in the market as
                      it makes the work easier for the users as well as for the
                      business owners. The online platforms make the work much
                      easier for the people to get the services at their
                      doorstep. We offer the services at an affordable cost.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled team
                      who will provide the best services at the best rates. We
                      understand the requirements and then provide the proper
                      costing as well as a timeline. We offer the services at
                      the best price. Feel free to reach us and get a quote for
                      your idea.
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
                    alt="certificate"
                    src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Work-hand/certificate-1_page-0001-1200x849.jpg")}
                    style={{
                      height: "80%",
                      width: "80%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image
                    alt="certificate_page"
                    src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Work-hand/certificate_page-0001-1200x849.jpg")}
                    style={{
                      height: "80%",
                      width: "80%",
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Work Hand Done slider End  */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful Webflow Web in the market?" />
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

export default WebFlowDev;
