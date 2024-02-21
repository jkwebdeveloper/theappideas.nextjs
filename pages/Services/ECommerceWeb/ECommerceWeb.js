import React, { useState, useEffect } from "react";
// import Link from 'next/link';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import mobileweb from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Web Development.svg";
import mobileaap from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Web Development Services.svg";
import webapp from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Website Development Company.svg";

// Service section image
import Custom from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Custom E-Commerce Website Development.svg";
import Cart from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/E-commerce Cart Development.svg";
import Plugin from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Plugin And Extensions Development.svg";
import Redevelopment from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Redevelopment Service.svg";
import Maintenance from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Maintenance And Support.svg";
import Redesigning from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Redesigning Service.svg";
import ThirdParty from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Third-party APIs integration.svg";
import ECommerceSEO from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/E-commerce SEO.svg";
import Site from "../../../public/assets/images/SERVICES/E-Commerce Website/Services we provide/Site Migration.svg";

// Industries We Serve section images
import Grocery from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Grocery Industry.svg";
import Food from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Food and Beverage Industry.svg";
import Electronics from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Electronics Industry.svg";
import Logistics from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Logistics Industry.svg";
import Fashion from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Fashion Industry.svg";
import Retail from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Retail Industry.svg";
import Business from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Business Industry.svg";
import Education from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Education Industry.svg";
import Rental from "../../../public/assets/images/SERVICES/E-Commerce Website/Industries We Serve/Rental Industry.svg";
import WorkSlider from "../../../components/WorkSlider";



import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import ContactUs from "../../../components/ContactUs";
import HeroSection from "../../../components/HeroSection";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: Custom,
    que: "Custom E-Commerce Website Design",
    ans: "The App Ideas is one of the leading E-commerce developing Company. We have a team of highly skilled developers and designers who have years of experience in offering the best E-commerce Website design at the best rates. If you are planning of launching an E-commerce platform then this is probably the best time for you to hire us and launch a victorious custom E-commerce website in the market.",
    ans2: "Are you looking for a Custom E-commerce Website Design company?",
    ans3: "If Yes, then you are at the right place. We are highly proficient in offering successful custom E-commerce Website design for all kinds of stores or businesses. There is high competition in the market for E-commerce services, so it is very important for you to develop a unique as well as custom E-commerce website design at the best rates. We are just a chat away, feel free to reach us and get a free quotation for custom E-commerce Website design services.",
  },
  {
    id: 2,
    images: Cart,
    que: "E-commerce Cart Development",
    ans: "The App Ideas is one of the most popular E-commerce Cart Development company. We have years of expertise and experience in developing the best E-commerce platforms for all kinds of businesses and online stores. Many people are now investing in digitilizing their store to increase the customer base. Customers are more inclined towards the online platforms because it offers the convenience of accessing the services.",
    ans2: "Are you looking for an E-commerce Cart Development Service?",
    ans3: "If yes, then feel free to connect with us. We have expertise in offering E-commerce website development as well as also integrating E-commerce Cart into your website. Our E-commerce developers are proficient in offering modern web solutions which can help you to generate high leads. We can help you to add some of the advanced features and unique designs which can make your platforms stand out differently in the market.",
  },
  {
    id: 3,
    images: Plugin,
    que: "Plugin And Extensions Development",
    ans: "The App Ideas is one of the highly successful software development company. In software development service, we offer development as well as designing services. We offer digitization services for all kinds of business niches including the E-commerce web and app development. We are also proficient in the development of the Plugins and Extensions for an E-commerce website development.",
    ans2: "Are you looking for an E-commerce Plugins and Extensions Development Service?",
    ans3: "Yes, then here we are just some clicks away. Feel free to connect with us and get a free quotation for your E-commerce development. We are highly proficient in offering the best online platforms for E-commerce by adding up the advanced functionality at the best possible rates. We have a team of highly experienced developers who are experts in developing plugins and extensions.",
  },
  {
    id: 4,
    images: Maintenance,
    que: "Maintenance And Support",
    ans: "The App Ideas is one of the leading Software development company. We are highly efficient in providing online platform development including mobile app development, web app development, E-commerce platforms development and website development. Along with the development and designing, we also offer maintenance and support services for E-commerce Website Development.",
    ans2: "Are you looking for an E-commerce maintenance and Support service?",
    ans3: "If yes, then this is probably the best time for you to make an investment in E-commerce platform development. You can easily reach us via E-mail, Social media, Contact form and more. Maintenance and support are very important for all kinds of online platforms to keep it updated as per the trend. After development, we offer three months of free support and maintenance services to our clients.",
  },
  {
    id: 5,
    images: Redesigning,
    que: "Redesigning Service",
    ans: "The App Ideas is one of the leading web and app development company. We offer the development as well as the best designing services for all kinds of business categories and niches. We have years of experience in offering the best services for redesigning the platforms as per the current trends and clients requirements. If you own old E-commerce platforms then it is the perfect time for you to redesign your platforms at the best rates.",
    ans2: "Are you looking for an E-commerce Redesigning Service?",
    ans3: "If Yes, then this is probably the best time for you to connect with us and get a free quotation for redesigning your website. Initially, we gather the overall requirements, analyze them, send a proposal to the clients, assign a project manager, take clients approval after every module development and deploy the project at the given time. We are proficient in offering unique designs as per the trend at the best rates.",
  },
  {
    id: 6,
    images: Redevelopment,
    que: "Redevelopment Service",
    ans: "The App Ideas is one of the foremost Software Development company. We are skilled in providing the best all types of online platforms development services like mobile app, web app, E-commerce, website and more. We have delivered over more than 300 online solutions. Along with the development, we also offer the redevelopment of the E-commerce platforms at the best rates.",
    ans2: "Are you looking for an E-commerce redevelopment Service?",
    ans3: "If Yes, then this is probably the best time for you to connect with us and get a free quotation for your E-commerce redevelopment of the services. Redevelopment of E-commerce is very crucial to stay ahead of the competition. Redevelopment can help you to convert your E-commerce platforms as per the trending and demanding technology.",
  },
  {
    id: 7,
    images: ThirdParty,
    que: "Third-party APIs integration",
    ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are proficient in delivering the best E-commerce platform as per the clients demand and search engine optimization. Along with the development, we are also experts in integrating third-party APIs into an E-commerce platform.",
    ans2: "Are you looking for services for third-party API integration?",
    ans3: "If Yes, then you are at the right place. Let’s connect and have a quick call to discuss your E-commerce requirements. Along with development and designing, our expert developers are also proficient in third party API integration services. We follow a simple process like gathering requirements, analyzing them, taking client approval, starting the development and then deploying the project at the best rates.",
  },
  {
    id: 8,
    images: ECommerceSEO,
    que: "E-commerce SEO",
    ans: "The App Ideas is one of the most popular software development services. We offer the best development service for mobile app, web app, E-Commerce app and website development. Along with the development and designing, we are also offering SEO(Search Engine Optimization) for an E-commerce web app. SEO is very crucial for making your E-commerce successful in this digital aera.",
    ans2: "Are you looking for E-Commerce SEO Service?",
    ans3: "If Yes, then this is the perfect place for you. We are providing the best SEO(Search Engine Optimization) services at the best possible rates. There is high competition in the market, so having an E-commerce web solution is not sufficient. Optimization is very important for maximizing the benefits of the online store. We offer SEO E-commerce services at the best rates.",
  },
  {
    id: 9,
    images: Site,
    que: "Site Migration",
    ans: "The App Ideas is one of the leading software development company. We have a pool of talented developers who are experts in providing the best E-commerce services at the best possible rates. Along with development, redevelopment, designing and redesigning, we also provide site migration services for all kinds of online stores platform. Site migration can help you to convert your E-commerce into a modern online store.",
    ans2: "Are you looking for E-commerce Site Migration Services?",
    ans3: "Yes, here we are just a call away. Feel free to connect with us, share your requirements and get a free quotation for your E-commerce Site Migration. Our expert developers can help you to migrate your E-commerce website to the most suitable and effective platform with seamless integration and no downtime. We gather the requirements, analyze them, send the proposal, take clients approval and deploy the project on the given timeline.",
  },
];

const IndustriesData = [
  {
    id: 1,
    images: Grocery,
    que: "Real Estate Industry",
    ans: "The App Ideas is one of the best Grocery Industry online platforms development company. We have years of experience in providing the foremost E-commerce platforms development services. We have a team of highly experienced developers and designers, who are proficient in offering the best Grocery E-commerce platforms at the best rates.",
    ans2: "Are you planning to launch a Grocery E-commerce platform in the market?",
    ans3: "Yes, then this is probably the best time for you to research, analyze and hire the best e-commerce expert to launch an online grocery store. If you can observe the market then people are more inclined towards the online grocery store because it offers the convenience of accessing the services as well as time-saving. We are just a chat away, feel free to connect with us and launch a successful Grocery E-commerce platform.",
  },
  {
    id: 2,
    images: Food,
    que: "Food and Beverage Industry",
    ans: "The App Ideas is one of the leading Food and Beverages Industry E-commerce platforms development company. We have a team of highly skilled developers and designers who are experts in offering the best E-commerce platform for the Food and Beverages Industry. Many of the food and beverages industries are now converting their services into digital solutions to increase the profits rates as well as sales of the business.",
    ans2: "Are you planning to launch a Food and Beverages E-commerce platform in the market?",
    ans3: "If Yes, then you are at the right place. Here we have years of experience in providing the best solution for all kinds of online platforms like web app development, mobile app development, E-commerce platform and more. In this digital time, it is very important to have an E-commerce platform for the Food and Beverages industry. Feel free to connect with us and get a free quote.",
  },
  {
    id: 3,
    images: Electronics,
    que: "Electronics Industry",
    ans: "The App Ideas is one of the popular E-commerce development company. If you are running an electronics business then it is very important for you to have an E-commerce platform. Having an E-commerce platform for your Electronics business can be very helpful as it is very easy for your customers to check your online platforms and make the order easily.",
    ans2: "Are you planning to launch an Electronics E-commerce platform in the market?",
    ans3: "If Yes, then this is probably the best time for you to make an investment and launch an electronics e-commerce platform development. We have a team of highly skilled developers and designers, who are proficient in providing the best solution at the best possible rates. Feel free to connect with us and get a free quotation for digitizing your business.",
  },
  {
    id: 4,
    images: Logistics,
    que: "Logistics Industry",
    ans: "The App Ideas is one of the leading Logistics Industry E-commerce platforms company. We have a team of highly experienced developers and designers who are highly proficient in developing Logistics e-commerce platforms in the market. Having a Logistics E-commerce platform can make the services easier for the owners as well as for the customers. This can also help in increasing the sales as well.",
    ans2: "Are you planning to launch a Logistics E-commerce platform in the market?",
    ans3: "If yes, then take a step ahead and hire us to develop a successful Logistics E-commerce platform in the market to increase the sales of your business. Our expert developers offer the best solution for a logistics business at the best possible rates. If you are planning to launch an E-commerce platform then feel free to connect with us and get a free quote.",
  },
  {
    id: 5,
    images: Fashion,
    que: "Fashion Industry",
    ans: "The App Ideas is one of the most popular web and app development company. We have a talented pool of expert developers as well as designers who are proficient in delivering the best E-commerce solution for all kinds of business niches including the fashion industry. Some of the business owners are selling some of the accessories related to trending fashion. It is highly recommended to have e-commerce platforms for increasing sales.",
    ans2: "Are you planning to launch a Fashion E-commerce platform in the market?",
    ans3: "If yes, then this is one of the best times for you to launch an e-commerce platform for your store and make it online. People are now more inclined towards the online business and platform because it offers easy accessibility of the services and users can check the services from any place as well as at any time. If you are planning to launch an E-commerce business then feel free to connect with us.",
  },
  {
    id: 6,
    images: Retail,
    que: "Retail Industry",
    ans: "The App Ideas is one of the foremost Retail E-commerce platforms development company. We have a team of highly efficient designers as well as developers who have years of experience in delivering a successful retail e-commerce platform at the best rates. Having an e-commerce platform for your retail business can make the work easier for your business.",
    ans2: "Are you planning to launch a Retail E-commerce Platform in the market?",
    ans3: "If yes, then feel free to connect with us and let’s have a quick call to discuss your requirements for digitalizing your retail business. Nowadays, business owners and users both are liking the online platform because it makes the work easier for everyone. We are here happy to help you to launch a successful retail platform in the market at the best rates.",
  },
  {
    id: 7,
    images: Business,
    que: "Business Industry",
    ans: "The App Ideas is one of the most popular software development company. We have a group of talented developers as well as designers who are experts in offering the best solution for mobile app, web app and E-commerce platforms development. Every business is now moving towards digitization because it makes the work easier for the users as well as for the business owners.",
    ans2: "Are you planning to launch a Business E-commerce platform in the market?",
    ans3: "If yes then you are making the right decision. Let’s connect and have a quick call to discuss your requirements, After getting your requirements, we analyze and provide you with the best quotation. We are proficient in offering advanced features and unique designs based on the current trend of the business. Feel free to connect with us and get a free quote.",
  },
  {
    id: 8,
    images: Education,
    que: "Education Industry",
    ans: "The App Ideas is one of the leading web and app development company. We are highly proficient in providing the best E-commerce platforms for all types of business categories. Nowadays, Education Industry is also implementing digitization to provide the best services to the users. Online platforms can make the work easier for the owners as well.",
    ans2: "Are you planning to launch an Education E-commerce platform in the market?",
    ans3: "If Yes, then take a step ahead and launch your own Education web or mobile app in the market. We have a team of highly skilled developers and designers who are experts in offering the best and modern solutions. We follow a simple process like requirements gathering, analyzing, sending proposals, allocating resources, taking clients approval and deploying the project on the given timeline.",
  },
  {
    id: 9,
    images: Rental,
    que: "Rental Industry",
    ans: "The App Ideas is one of the foremost Rental E-commerce platform development company. We have a team of highly expert developers and designers who are skilled in developing rental property platforms using future-ready E-commerce technology. Currently, Every rental property owner is digitizing thor services to provide a better experience to the users.",
    ans2: "Are you planning to launch an Rental E-commerce platform in the market?",
    ans3: "If yes, then this is probably the best time for you to launch an E-commerce platform for your rental property service. Having an online platform can make the services easier for the rental property owners to list down property and on the other hand, this is very easy for the customers to check the property as per the requirements. Feel free to connect with us and get a free quote.",
  },
];

const ECommerceWeb = () => {
  const [activeService, setActiveService] = useState("custom_e_commerce");
  const [activeWeServe, setActiveWeServe] = useState("grocery_industry");
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Best eCommerce Web Development Company India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection  
        title="E-Commerce Website Development Company"
        des="Here we are at The App Ideas, which is one of the leading web and app development company. We offer software development services like website development, mobile app development, web app development as well as E-commerce platforms development services. We are expertise in offering victorious E-commerce services to all kinds of business categories at the best possible rates."
        list1="7+ Years of experience in E-commerce Development"
        list2="Best E-commerce Website Development Company"
        list3="Dedicated team for your E-commerce Website Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="E-Commerce Website Development"
        service2="Custom E-Commerce Website Development"
        service3="Best E-commerce Developer"
        image1={mobileweb}
        image2={mobileaap}
        image3={webapp}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Services we provide</h3>
            <p>
              With most businesses looking for the advantage of an online
              marketplace, e-commerce websites and mobile commerce apps will
              continue to be popular. We at The App Ideas incorporate innovation
              and creative excellence to build powerful e-commerce web apps for
              businesses of both B2B and B2C niches. Having a fully experienced
              team of e-commerce web designers and developers we help businesses
              realize their online potential.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("custom_e_commerce")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "custom_e_commerce" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Custom}
                      alt="Custom-E-Commerce-Website-Design"
                      className="img-fluid"
                    />
                    <p>
                      Custom E-Commerce <br />
                      Website Design
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("e_commerce_cart")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "e_commerce_cart" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Cart}
                      alt="E-Commerce-Cart-Development"
                      className="img-fluid"
                    />
                    <p>
                      E-Commerce Cart <br />
                      Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("plugin")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "plugin" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Plugin}
                      alt="Plugin-And-Extensions-Development"
                      className="img-fluid"
                    />
                    <p>
                      Plugin And Extensions <br />
                      Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("maintenance_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "maintenance_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Maintenance}
                      alt="Maintenance-And-Support"
                      className="img-fluid"
                    />
                    <p>
                      Maintenance <br />
                      And Support
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("redesigning_service")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "redesigning_service" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Redesigning}
                      alt="Redesigning-Service"
                      className="img-fluid"
                    />
                    <p>
                      Redesigning <br />
                      Service
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("redevelopment")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "redevelopment" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image src={Redevelopment} alt="Redevelopment-Service" />
                    <p>
                      Redevelopment <br />
                      Service
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("third_party_api")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "third_party_api" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={ThirdParty}
                      alt="Third-Party-APIs-Integration"
                      className="img-fluid"
                    />
                    <p>
                      Third-Party <br />
                      APIs Integration
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("e_commerce_seo")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "e_commerce_seo" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={ECommerceSEO}
                      alt="E-Commerce-SEO"
                      className="img-fluid"
                    />
                    <p>
                      E-Commerce <br />
                      SEO
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("site_migration")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "site_migration" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Site}
                      alt="Site-Migration"
                      className="img-fluid"
                    />
                    <p>
                      Site <br />
                      Migration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "custom_e_commerce" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom E-Commerce Website Design
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading E-commerce developing
                      Company. We have a team of highly skilled developers and
                      designers who have years of experience in offering the
                      best E-commerce Website design at the best rates. If you
                      are planning of launching an E-commerce platform then this
                      is probably the best time for you to hire us and launch a
                      victorious custom E-commerce website in the market.
                    </p>
                    <p className="Title_para">
                      Are you looking for a Custom E-commerce Website Design
                      company?
                    </p>
                    <p className="Title_para">
                      If Yes, then you are at the right place. We are highly
                      proficient in offering successful custom E-commerce
                      Website design for all kinds of stores or businesses.
                      There is high competition in the market for E-commerce
                      services, so it is very important for you to develop a
                      unique as well as custom E-commerce website design at the
                      best rates. We are just a chat away, feel free to reach us
                      and get a free quotation for custom E-commerce Website
                      design services.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "e_commerce_cart" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      E-commerce Cart Development{" "}
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular E-commerce Cart
                      Development company. We have years of expertise and
                      experience in developing the best E-commerce platforms for
                      all kinds of businesses and online stores. Many people are
                      now investing in digitilizing their store to increase the
                      customer base. Customers are more inclined towards the
                      online platforms because it offers the convenience of
                      accessing the services.
                    </p>
                    <p className="Title_para">
                      Are you looking for an E-commerce Cart Development
                      Service?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us. We have
                      expertise in offering E-commerce website development as
                      well as also integrating E-commerce Cart into your
                      website. Our E-commerce developers are proficient in
                      offering modern web solutions which can help you to
                      generate high leads. We can help you to add some of the
                      advanced features and unique designs which can make your
                      platforms stand out differently in the market.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "plugin" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Plugin And Extensions Development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the highly successful software
                      development company. In software development service, we
                      offer development as well as designing services. We offer
                      digitization services for all kinds of business niches
                      including the E-commerce web and app development. We are
                      also proficient in the development of the Plugins and
                      Extensions for an E-commerce website development.
                    </p>
                    <p className="Title_para">
                      Are you looking for an E-commerce Plugins and Extensions
                      Development Service?
                    </p>
                    <p className="Title_para">
                      Yes, then here we are just some clicks away. Feel free to
                      connect with us and get a free quotation for your
                      E-commerce development. We are highly proficient in
                      offering the best online platforms for E-commerce by
                      adding up the advanced functionality at the best possible
                      rates. We have a team of highly experienced developers who
                      are experts in developing plugins and extensions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "maintenance_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Maintenance And Support </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading Software development
                      company. We are highly efficient in providing online
                      platform development including mobile app development, web
                      app development, E-commerce platforms development and
                      website development. Along with the development and
                      designing, we also offer maintenance and support services
                      for E-commerce Website Development.
                    </p>
                    <p className="Title_para">
                      Are you looking for an E-commerce maintenance and Support
                      service?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      make an investment in E-commerce platform development. You
                      can easily reach us via E-mail, Social media, Contact form
                      and more. Maintenance and support are very important for
                      all kinds of online platforms to keep it updated as per
                      the trend. After development, we offer three months of
                      free support and maintenance services to our clients.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "redesigning_service" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Redesigning Service</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We offer the development as well as
                      the best designing services for all kinds of business
                      categories and niches. We have years of experience in
                      offering the best services for redesigning the platforms
                      as per the current trends and clients requirements. If you
                      own old E-commerce platforms then it is the perfect time
                      for you to redesign your platforms at the best rates.
                    </p>
                    <p className="Title_para">
                      Are you looking for an E-commerce Redesigning Service?
                    </p>
                    <p className="Title_para">
                      If Yes, then this is probably the best time for you to
                      connect with us and get a free quotation for redesigning
                      your website. Initially, we gather the overall
                      requirements, analyze them, send a proposal to the
                      clients, assign a project manager, take clients approval
                      after every module development and deploy the project at
                      the given time. We are proficient in offering unique
                      designs as per the trend at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "redevelopment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Redevelopment Service</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost Software Development
                      company. We are skilled in providing the best all types of
                      online platforms development services like mobile app, web
                      app, E-commerce, website and more. We have delivered over
                      more than 300 online solutions. Along with the
                      development, we also offer the redevelopment of the
                      E-commerce platforms at the best rates.
                    </p>
                    <p className="Title_para">
                      Are you looking for an E-commerce redevelopment Service?
                    </p>
                    <p className="Title_para">
                      If Yes, then this is probably the best time for you to
                      connect with us and get a free quotation for your
                      E-commerce redevelopment of the services. Redevelopment of
                      E-commerce is very crucial to stay ahead of the
                      competition. Redevelopment can help you to convert your
                      E-commerce platforms as per the trending and demanding
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "third_party_api" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Third-party APIs integration
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      delivering the best E-commerce platform as per the clients
                      demand and search engine optimization. Along with the
                      development, we are also experts in integrating
                      third-party APIs into an E-commerce platform.
                    </p>
                    <p className="Title_para">
                      Are you looking for services for third-party API
                      integration?
                    </p>
                    <p className="Title_para">
                      If Yes, then you are at the right place. Let’s connect and
                      have a quick call to discuss your E-commerce requirements.
                      Along with development and designing, our expert
                      developers are also proficient in third party API
                      integration services. We follow a simple process like
                      gathering requirements, analyzing them, taking client
                      approval, starting the development and then deploying the
                      project at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "e_commerce_seo" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">E-commerce SEO </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We offer the best development
                      service for mobile app, web app, E-Commerce app and
                      website development. Along with the development and
                      designing, we are also offering SEO(Search Engine
                      Optimization) for an E-commerce web app. SEO is very
                      crucial for making your E-commerce successful in this
                      digital aera.
                    </p>
                    <p className="Title_para">
                      Are you looking for E-Commerce SEO Service?
                    </p>
                    <p className="Title_para">
                      If Yes, then this is the perfect place for you. We are
                      providing the best SEO(Search Engine Optimization)
                      services at the best possible rates. There is high
                      competition in the market, so having an E-commerce web
                      solution is not sufficient. Optimization is very important
                      for maximizing the benefits of the online store. We offer
                      SEO E-commerce services at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "site_migration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Site Migration</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a pool of talented developers who are
                      experts in providing the best E-commerce services at the
                      best possible rates. Along with development,
                      redevelopment, designing and redesigning, we also provide
                      site migration services for all kinds of online stores
                      platform. Site migration can help you to convert your
                      E-commerce into a modern online store.
                    </p>
                    <p className="Title_para">
                      Are you looking for E-commerce Site Migration Services?
                    </p>
                    <p className="Title_para">
                      Yes, here we are just a call away. Feel free to connect
                      with us, share your requirements and get a free quotation
                      for your E-commerce Site Migration. Our expert developers
                      can help you to migrate your E-commerce website to the
                      most suitable and effective platform with seamless
                      integration and no downtime. We gather the requirements,
                      analyze them, send the proposal, take clients approval and
                      deploy the project on the given timeline.
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
                        <p>{item.ans3}</p>
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
      {/* Technologies Section Start */}
      <section className="technologies__section py-5">
        <div className="container">
          <div className="Title__White mb-4">
            <h3>Technologies we use</h3>
          </div>
          <div className="row">
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/E-Commerce Website/Tecnologies/shopify.png")}
                  alt="Shopify"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Shopify</h2>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div
                data-aos="flip-right"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/E-Commerce Website/Tecnologies/magento.png")}
                  alt="Magento"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Magento</h2>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/E-Commerce Website/Tecnologies/joomla.png")}
                  alt="Joomla"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Joomla</h2>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div
                data-aos="flip-right"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/E-Commerce Website/Tecnologies/drupal.png")}
                  alt="Drupal"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Drupal</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Industries We Serve</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("grocery_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "grocery_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Grocery}
                      alt="Grocery-Industry"
                      className="img-fluid"
                    />
                    <p>Grocery Industry</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("food_beverage")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "food_beverage" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Food}
                      alt="Food-And-Beverage-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Food And <br />
                      Beverage Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("electronics")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "electronics" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Electronics}
                      alt="Electronics-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Electronics <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("logistics")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "logistics" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Logistics}
                      alt="Logistics-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Logistics <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("fashion")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "fashion" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Fashion}
                      alt="Fashion-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Fashion <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("retail")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "retail" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image src={Retail} alt="Retail-Industry" />
                    <p>
                      Retail <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("business")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "business" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Business}
                      alt="Business-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Business <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("education")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "education" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Education}
                      alt="Education-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Education <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("rental")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "rental" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Rental}
                      alt="Rental-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Rental <br />
                      Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeServe === "grocery_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Grocery Industry </h3>
                    <p className="Title_para">
                      The App Ideas is one of the best Grocery Industry online
                      platforms development company. We have years of experience
                      in providing the foremost E-commerce platforms development
                      services. We have a team of highly experienced developers
                      and designers, who are proficient in offering the best
                      Grocery E-commerce platforms at the best rates.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Grocery E-commerce platform
                      in the market?
                    </p>
                    <p className="Title_para">
                      Yes, then this is probably the best time for you to
                      research, analyze and hire the best e-commerce expert to
                      launch an online grocery store. If you can observe the
                      market then people are more inclined towards the online
                      grocery store because it offers the convenience of
                      accessing the services as well as time-saving. We are just
                      a chat away, feel free to connect with us and launch a
                      successful Grocery E-commerce platform.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "food_beverage" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Food and Beverage Industry
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading Food and Beverages
                      Industry E-commerce platforms development company. We have
                      a team of highly skilled developers and designers who are
                      experts in offering the best E-commerce platform for the
                      Food and Beverages Industry. Many of the food and
                      beverages industries are now converting their services
                      into digital solutions to increase the profits rates as
                      well as sales of the business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Food and Beverages E-commerce
                      platform in the market?
                    </p>
                    <p className="Title_para">
                      If Yes, then you are at the right place. Here we have
                      years of experience in providing the best solution for all
                      kinds of online platforms like web app development, mobile
                      app development, E-commerce platform and more. In this
                      digital time, it is very important to have an E-commerce
                      platform for the Food and Beverages industry. Feel free to
                      connect with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "electronics" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Electronics Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the popular E-commerce development
                      company. If you are running an electronics business then
                      it is very important for you to have an E-commerce
                      platform. Having an E-commerce platform for your
                      Electronics business can be very helpful as it is very
                      easy for your customers to check your online platforms and
                      make the order easily.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Electronics E-commerce
                      platform in the market?
                    </p>
                    <p className="Title_para">
                      If Yes, then this is probably the best time for you to
                      make an investment and launch an electronics e-commerce
                      platform development. We have a team of highly skilled
                      developers and designers, who are proficient in providing
                      the best solution at the best possible rates. Feel free to
                      connect with us and get a free quotation for digitizing
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "logistics" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Logistics Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading Logistics Industry
                      E-commerce platforms company. We have a team of highly
                      experienced developers and designers who are highly
                      proficient in developing Logistics e-commerce platforms in
                      the market. Having a Logistics E-commerce platform can
                      make the services easier for the owners as well as for the
                      customers. This can also help in increasing the sales as
                      well.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Logistics E-commerce platform
                      in the market?
                    </p>
                    <p className="Title_para">
                      If yes, then take a step ahead and hire us to develop a
                      successful Logistics E-commerce platform in the market to
                      increase the sales of your business. Our expert developers
                      offer the best solution for a logistics business at the
                      best possible rates. If you are planning to launch an
                      E-commerce platform then feel free to connect with us and
                      get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "fashion" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fashion Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have a talented pool of expert
                      developers as well as designers who are proficient in
                      delivering the best E-commerce solution for all kinds of
                      business niches including the fashion industry. Some of
                      the business owners are selling some of the accessories
                      related to trending fashion. It is highly recommended to
                      have e-commerce platforms for increasing sales.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Fashion E-commerce platform
                      in the market?
                    </p>
                    <p className="Title_para">
                      If yes, then this is one of the best times for you to
                      launch an e-commerce platform for your store and make it
                      online. People are now more inclined towards the online
                      business and platform because it offers easy accessibility
                      of the services and users can check the services from any
                      place as well as at any time. If you are planning to
                      launch an E-commerce business then feel free to connect
                      with us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "retail" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Retail Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost Retail E-commerce
                      platforms development company. We have a team of highly
                      efficient designers as well as developers who have years
                      of experience in delivering a successful retail e-commerce
                      platform at the best rates. Having an e-commerce platform
                      for your retail business can make the work easier for your
                      business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Retail E-commerce Platform in
                      the market?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us and let’s have a
                      quick call to discuss your requirements for digitalizing
                      your retail business. Nowadays, business owners and users
                      both are liking the online platform because it makes the
                      work easier for everyone. We are here happy to help you to
                      launch a successful retail platform in the market at the
                      best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "business" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Business Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a group of talented
                      developers as well as designers who are experts in
                      offering the best solution for mobile app, web app and
                      E-commerce platforms development. Every business is now
                      moving towards digitization because it makes the work
                      easier for the users as well as for the business owners.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Business E-commerce platform
                      in the market?
                    </p>
                    <p className="Title_para">
                      If yes then you are making the right decision. Let’s
                      connect and have a quick call to discuss your
                      requirements, After getting your requirements, we analyze
                      and provide you with the best quotation. We are proficient
                      in offering advanced features and unique designs based on
                      the current trend of the business. Feel free to connect
                      with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "education" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Education Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly proficient in providing
                      the best E-commerce platforms for all types of business
                      categories. Nowadays, Education Industry is also
                      implementing digitization to provide the best services to
                      the users. Online platforms can make the work easier for
                      the owners as well.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Education E-commerce
                      platform in the market?
                    </p>
                    <p className="Title_para">
                      If Yes, then take a step ahead and launch your own
                      Education web or mobile app in the market. We have a team
                      of highly skilled developers and designers who are experts
                      in offering the best and modern solutions. We follow a
                      simple process like requirements gathering, analyzing,
                      sending proposals, allocating resources, taking clients
                      approval and deploying the project on the given timeline.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "rental" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Rental Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost Rental E-commerce
                      platform development company. We have a team of highly
                      expert developers and designers who are skilled in
                      developing rental property platforms using future-ready
                      E-commerce technology. Currently, Every rental property
                      owner is digitizing thor services to provide a better
                      experience to the users.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Rental E-commerce platform
                      in the market?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      launch an E-commerce platform for your rental property
                      service. Having an online platform can make the services
                      easier for the rental property owners to list down
                      property and on the other hand, this is very easy for the
                      customers to check the property as per the requirements.
                      Feel free to connect with us and get a free quote.
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
                        <p>{item.ans3}</p>
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
      {/* <!-- Work Slider Start --> */}
      <WorkSlider />
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
      <FAQ />
      <ContactUs question="Are you looking for the best E-commerce Platform development company?" />
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

export default ECommerceWeb;
