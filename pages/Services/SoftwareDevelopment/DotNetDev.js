import React, { useState } from "react";

import CustomWordPress from "../../../public/assets/images/SERVICES/Software development/dotnet-dev/dotnetnuke-development-company.webp";
import WordPressWebsite from "../../../public/assets/images/SERVICES/Software development/dotnet-dev/dotnetnuke-custom-module-developmen.webp";
import Developer from "../../../public/assets/images/SERVICES/Software development/dotnet-dev/dotnetnuke-development-services.webp";

import Image from 'next/image';
import Footer from "../../../components/Footer";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import ContactUs from "../../../components/ContactUs";
import HeroSection from "../../../components/HeroSection";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/1-8.png"),
    que: "Web Development",
    ans: "This era is highly popular as the digital era, many businesses, startups and entrepreneurs are now making high investments in software development services. People are mostly more inclined towards digital platforms because they provide easy accessibility to the services.",
    ans2: "Here we are at The App Ideas, which is one of the foremost web and app development company. We have a team of highly skilled web developers who will offer the best services. We utilize the DotNetNuke framework for building sophisticated websites rich with the standout interface and user experience.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/2-9.png"),
    que: "Module Development",
    ans: "Digitalization is one of the most important parts of business growth and success. Many of the businesses and industry are now launching DotNetNuke software solutions for making the growth of the business. It is very important for business owners to work on module development.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled DotNetNuke developers who are experienced in offering the best software development services. We use the DotNetNuke framework for developing ready to use modules for use in websites, third-party apps, blogs and eCommerce websites.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/3-10.png"),
    que: "App Maintenance",
    ans: "Along with the development of the services, maintenance also plays a vital role in the success of the business. Along with the designing and development , maintenance is also provided by some of the software developers. If you are looking for the maintenance services of your software solution then feel free to reach us.",
    ans2: "The App Ideas is one of the most popular software development company. We have a team of highly skilled DotNetNuke developers who are proficient in providing the best services. We offer robust DotNetNuke maintenance services and value-driven optimisation to all web apps built by us.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/4-10.png"),
    que: "DNN Migration",
    ans: "Software Services are now getting popular day by day. The software offers the easy manageability of the features as well as the data for the business owners. If you are running a business then it is very important for you to have a software solution that can help you to easily manage everything and grow your business.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a team of highly skilled and experienced DotNetNuke software developers who will offer the best services. Whether you have an existing website built on other platforms and want to shift to the DotNetNuke content management system or want to build a fresh site on this platform, we can undertake any project.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/5-10.png"),
    que: "DNN Upgrades",
    ans: "The popularity of mobile app, web app and websites is very high in the market. People are more inclined towards the online platforms because it provides the convenience of accessing the services very easily. If you own an offline or online business then it is important for you to have a software solution.",
    ans2: "The App Ideas is one of the foremost software development company.DotNetNuke is one of the most popular software development technology. We help you upgrades and update your websites with recurrent as well as frequent value additions and feature integration when required.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/6-10.png"),
    que: "DNN Web Skin Design",
    ans: "In this present time, many entrepreneurs, startups owners and business owners are now making investments in online platform development. A software service can help the business owner to easily manage the data as well as increase the profit rate of the business by providing the best platforms.",
    ans2: "Here at The App Ideas, which is one of the leading web and app development company. Along with the development of the online platform, we also offer software development services. We also design DotNetNuke skins for any website and ensure meeting the aesthetic as well as the functional standard for the website.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png"),
    que: "Expertise and Experience.",
    ans: "If you own a business then this is high time for you to convert your business into an online business. An online software solution can help you to reach out to a high audience or target a high number of users. Before hiring it is very important for you to hire experienced and Expertise of DotNetNuke developers.",
    ans2: "Here we are at The App Ideas, which is one of the leading web and app development company. We have a team of highly skilled software developers who are experts in offering the best IT services for all kinds of business categories. We boast of more than a decade of experience and proven expertise in building websites and web apps using this framework.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png"),
    que: "Solid DNN Portfolio",
    ans: "Many entrepreneurs and business owners are now making investments in software development services for the growth of their businesses. If you are also shifting towards the software solution then this is the best time to take a step further. Before hiring any software development services, it is very important for you to check their portfolio.",
    ans2: "We are at The App Ideas, which is one of the leading software development company. We have an expert team of DotNetNuke developers who have years of experience in providing the best solution. We boast a solid portfolio of several successful websites and web apps built using the DotNetNuke content management platform.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png"),
    que: "Agile Development",
    ans: "Before hiring any software development company, it is very important for you to research the market and then make the choice. A software solution can help you to easily manage the data, save the data and use it for future reference.",
    ans2: "We are at The App Ideas, which is one of the most popular web and app development company. We offer the best IT services like mobile app development, web app development, website development and software development company. We follow an agile development methodology to ensure faster development while taking care of performance and quality through rigorous and concurrent testing.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/4-9.png"),
    que: "Great Post-Development support",
    ans: "The demand or the popularity of the software solution is increasing with time. If you are running a business then it is very important for you to have a software solution that can help you to easily manage the overall data easily from any place and at any time easily.",
    ans2: "Here at The App Ideas, which is one of the leading software development company. Along with the development, designing, consulting services, we also offer support and maintenance to our clients. We provide throughout post-development support through timely maintenance, upgrades and updates for all apps and websites built by us.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png"),
    que: "Timely Project Completion",
    ans: "The demand for a Software solution is increasing in the market. People are now more comfortable with the online solution rather do it by themselves. This is probably the main reason behind the business owners, who are making investments in software development services.",
    ans2: "We are from The App Ideas, which is one of the leading web and app development company. We have years of experience on offering the best software solution at the best rates and on-time delivery. We ensure completing each and every development project within a stipulated time frame by strictly following the project deadlines and milestones.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png"),
    que: "Competitive pricing",
    ans: "Are you planning for launching a software solution for your business? If yes then, this is probably the best time for you to make an investment in the software development platforms. Presently, having software development services can be very beneficial for your online services.",
    ans2: "The App Ideas is the foremost software development service. We have a team of highly skilled DotNetNuke developers, who will offer the best services. We offer highly competitive pricing to ensure the affordability of the development services for small and medium enterprises.",
  },
];
const DotNetDev = () => {
  const [activeWeProvide, setActiveWeProvide] = useState("website_development");
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

  return (
    <>
      <Helmet title="Ditnrtnuke Development Company India, USA - The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="DotNetNuke Development Company"
        des="If we talk about the current trend then software, digitalization and online platforms like mobile app, websites and web apps are in rising demand in the market. As a business owner, it is very important for you to have a software solution that helps in the easy management of the services. Here at The App Ideas, we have a team of highly skilled DotNetNuke software developers who will offer the best services at the best possible rates."
        list1="7+ Years of experience in App Development"
        list2="Best DotNetNuke Development Company"
        list3="Dedicated team for your DotNetNuke Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="DotNetNuke Development Company"
        service2="DotNetNuke Custom Module Development"
        service3="DotNetNuke Development Services"
        image1={CustomWordPress}
        image2={WordPressWebsite}
        image3={Developer}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we provide for DotNetNuke Development Company?</h3>
            <p>
              DotNetNuke or DNN is one of the leading content management systems
              for developing dynamic websites or mobile apps on the Microsoft
              .NET environment. We at The App Ideas have a robust DotNetNuke
              development team having expertise and experience for developing
              the most sophisticated web apps across the niches. We develop DNN
              modules with the assurance of full support for building modules,
              migration, updates and upgrades.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("website_development")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "website_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/1-8.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Web Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("module_development")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "module_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/2-9.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Module Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("app_maintanance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "app_maintanance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/3-10.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>
                      App <br /> Maintenance
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("dnn_migration")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "dnn_migration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/4-10.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>
                      DNN <br />
                      Migration
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("dnn_upgrades")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "dnn_upgrades" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/5-10.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>
                      DNN <br />
                      Upgrades
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("dnn_web_skin_design")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "dnn_web_skin_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/dotnet-dev/what-do/6-10.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>DNN Web Skin Design</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeProvide === "website_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web Development </h3>
                    <p className="Title_para">
                      This era is highly popular as the digital era, many
                      businesses, startups and entrepreneurs are now making high
                      investments in software development services. People are
                      mostly more inclined towards digital platforms because
                      they provide easy accessibility to the services.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the foremost
                      web and app development company. We have a team of highly
                      skilled web developers who will offer the best services.
                      We utilize the DotNetNuke framework for building
                      sophisticated websites rich with the standout interface
                      and user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "module_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Module Development</h3>
                    <p className="Title_para">
                      Digitalization is one of the most important parts of
                      business growth and success. Many of the businesses and
                      industry are now launching DotNetNuke software solutions
                      for making the growth of the business. It is very
                      important for business owners to work on module
                      development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      DotNetNuke developers who are experienced in offering the
                      best software development services. We use the DotNetNuke
                      framework for developing ready to use modules for use in
                      websites, third-party apps, blogs and eCommerce websites.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "app_maintanance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Maintenance</h3>
                    <p className="Title_para">
                      Along with the development of the services, maintenance
                      also plays a vital role in the success of the business.
                      Along with the designing and development , maintenance is
                      also provided by some of the software developers. If you
                      are looking for the maintenance services of your software
                      solution then feel free to reach us.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of highly skilled
                      DotNetNuke developers who are proficient in providing the
                      best services. We offer robust DotNetNuke maintenance
                      services and value-driven optimisation to all web apps
                      built by us.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "dnn_migration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">DNN Migration</h3>
                    <p className="Title_para">
                      Software Services are now getting popular day by day. The
                      software offers the easy manageability of the features as
                      well as the data for the business owners. If you are
                      running a business then it is very important for you to
                      have a software solution that can help you to easily
                      manage everything and grow your business.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a team of highly
                      skilled and experienced DotNetNuke software developers who
                      will offer the best services. Whether you have an existing
                      website built on other platforms and want to shift to the
                      DotNetNuke content management system or want to build a
                      fresh site on this platform, we can undertake any project.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "dnn_upgrades" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">DNN Upgrades</h3>
                    <p className="Title_para">
                      The popularity of mobile app, web app and websites is very
                      high in the market. People are more inclined towards the
                      online platforms because it provides the convenience of
                      accessing the services very easily. If you own an offline
                      or online business then it is important for you to have a
                      software solution.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company.DotNetNuke is one of the most popular software
                      development technology. We help you upgrades and update
                      your websites with recurrent as well as frequent value
                      additions and feature integration when required.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "dnn_web_skin_design" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">DNN Web Skin Design</h3>
                    <p className="Title_para">
                      In this present time, many entrepreneurs, startups owners
                      and business owners are now making investments in online
                      platform development. A software service can help the
                      business owner to easily manage the data as well as
                      increase the profit rate of the business by providing the
                      best platforms.
                    </p>
                    <p className="Title_para">
                      Here at The App Ideas, which is one of the leading web and
                      app development company. Along with the development of the
                      online platform, we also offer software development
                      services. We also design DotNetNuke skins for any website
                      and ensure meeting the aesthetic as well as the functional
                      standard for the website.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
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
                      <Image width={50} height={50}
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
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we provide for DotNetNuke Development Company?</h3>
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
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Expertise and Experience</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("solid_dnn_portfolio")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "solid_dnn_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Solid DNN Portfolio</p>
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
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("after_deploy")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "after_deploy" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/4-9.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>After Deploy Support</p>
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
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Timely Project Completion</p>
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
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing </p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience_expertise" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expertise and Experience.</h3>
                    <p className="Title_para">
                      If you own a business then this is high time for you to
                      convert your business into an online business. An online
                      software solution can help you to reach out to a high
                      audience or target a high number of users. Before hiring
                      it is very important for you to hire experienced and
                      Expertise of DotNetNuke developers.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the leading
                      web and app development company. We have a team of highly
                      skilled software developers who are experts in offering
                      the best IT services for all kinds of business categories.
                      We boast of more than a decade of experience and proven
                      expertise in building websites and web apps using this
                      framework.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "solid_dnn_portfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Solid DNN Portfolio</h3>
                    <p className="Title_para">
                      Many entrepreneurs and business owners are now making
                      investments in software development services for the
                      growth of their businesses. If you are also shifting
                      towards the software solution then this is the best time
                      to take a step further. Before hiring any software
                      development services, it is very important for you to
                      check their portfolio.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is one of the leading
                      software development company. We have an expert team of
                      DotNetNuke developers who have years of experience in
                      providing the best solution. We boast a solid portfolio of
                      several successful websites and web apps built using the
                      DotNetNuke content management platform.
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
                      Before hiring any software development company, it is very
                      important for you to research the market and then make the
                      choice. A software solution can help you to easily manage
                      the data, save the data and use it for future reference.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is one of the most popular
                      web and app development company. We offer the best IT
                      services like mobile app development, web app development,
                      website development and software development company. We
                      follow an agile development methodology to ensure faster
                      development while taking care of performance and quality
                      through rigorous and concurrent testing.
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
                      The demand for a Software solution is increasing in the
                      market. People are now more comfortable with the online
                      solution rather do it by themselves. This is probably the
                      main reason behind the business owners, who are making
                      investments in software development services.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have years of experience
                      on offering the best software solution at the best rates
                      and on-time delivery. We ensure completing each and every
                      development project within a stipulated time frame by
                      strictly following the project deadlines and milestones.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive pricing</h3>
                    <p className="Title_para">
                      Are you planning for launching a software solution for
                      your business? If yes then, this is probably the best time
                      for you to make an investment in the software development
                      platforms. Presently, having software development services
                      can be very beneficial for your online services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is the foremost software development
                      service. We have a team of highly skilled DotNetNuke
                      developers, who will offer the best services. We offer
                      highly competitive pricing to ensure the affordability of
                      the development services for small and medium enterprises.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "after_deploy" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Great Post-Development support
                    </h3>
                    <p className="Title_para">
                      The demand or the popularity of the software solution is
                      increasing with time. If you are running a business then
                      it is very important for you to have a software solution
                      that can help you to easily manage the overall data easily
                      from any place and at any time easily.
                    </p>
                    <p className="Title_para">
                      Here at The App Ideas, which is one of the leading
                      software development company. Along with the development,
                      designing, consulting services, we also offer support and
                      maintenance to our clients. We provide throughout
                      post-development support through timely maintenance,
                      upgrades and updates for all apps and websites built by
                      us.
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
                      <Image width={50} height={50}
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
      <ContactUs question="Are you planning to launch a Successful DotNetNuke Development service in the market?" />
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

export default DotNetDev;
