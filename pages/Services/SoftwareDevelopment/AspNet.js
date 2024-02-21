import React, { useState } from "react";

import CustomWordPress from "../../../public/assets/images/SERVICES/Software development/asp-net-dev/aspnet-development.webp";
import WordPressWebsite from "../../../public/assets/images/SERVICES/Software development/asp-net-dev/aspnet-development-services.webp";
import Developer from "../../../public/assets/images/SERVICES/Software development/asp-net-dev/full-stack-aspnet-development-company.webp";
import Image from 'next/image';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import ContactUs from "../../../components/ContactUs";
import HeroSection from "../../../components/HeroSection";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/1-8.png"),
    que: "Enterprise Website Development",
    ans: "The demand for online solutions is increasing as per the increasing number of online users. Not only for the users but many of the large scale businesses are implementing the software or Enterprise solutions for managing things properly and keep the overall records of the data for future reference.",
    ans2: "Here we are at The App Ideas, which is one of the leading software development services. We have a team of highly skilled Asp.net developers who are experts in offering successful services at the best rates. We help you build robust and powerful enterprise websites and web apps with the Asp.net framework equipped with rich features and unmatched performance.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/2-9.png"),
    que: "Mobile App Development",
    ans: "The popularity of the mobile app solution is getting popular because it provides the convenience and comforts of using the services very easily from any place and at any time. Enterprise solutions are very important in this present time, as it helps in managing everything very easily.",
    ans2: "Here we are at The App Ideas which is one of the leading web and app development company. We have a team of highly skilled in offering software development services. We utilise the Asp.net framework to develop sophisticated and feature-rich mobile apps for multiple mobile OS platforms.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/3-8.png"),
    que: "Video and Live Streaming",
    ans: "Many business owners and entrepreneurs are now making investments in online platforms or digital solutions. By this, they can digitize their business and can access it from any place. Many of the industries are now accepting the features like Video and Live streaming for making the business more popular.",
    ans2: "The App Ideas is one of the most popular software development company. We are highly experienced in offering the best services for development, designing as well as enterprise development. We utilise the Asp.net framework to build performance-savvy apps for video and real-time streaming capabilities.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/4-8.png"),
    que: "E-commerce Web Store Development",
    ans: "The online store provides the proper flexibility of checking the details of the product, adding it to the cart and order it at your doorstep very easily. As a store owner, it is very important for you to invest and launch an E-commerce platform to increase your profit rate and attract a high number of users to your services.",
    ans2: "We are from The App Ideas, which is one of the most popular E-commerce Web store development Company. We have a skilled team of developers who are experts in offering the best services. We utilise the asp.net framework to build robust and feature-rich e-commerce web stores equipped with all state of the art features and sophisticated shopping experiences.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/5-8.png"),
    que: "Asp.Net Integration",
    ans: "If we talk about the Software solution then Asp.Net is one of the most demanding technology. Asp.Net offers the best features and functionality which can support business owners in managing everything online. As a business owner if you are planning to integrate Asp.Net then this is the time.",
    ans2: "The App Ideas is one of the leading Software development company. We have a skilled team of expert developers who offers the best software solution by using the Asp.net services. We also help existing websites and mobile apps integrating the asp.net framework to deliver highly customised and business-specific web and mobile experiences.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/6-8.png"),
    que: "Asp.Net Support and Maintenance",
    ans: "If you are planning on making an investment in developing a software solution or enterprise for your business then this is probably the best time for it. You can do the proper research, plan things and then hire the best software development services who can offer the best service at the best rates.",
    ans2: "The App Ideas is one of the proficient software development company. We have a team of highly skilled Asp.net developers who are highly experienced in offering the best solution at affordable rates. We also provide support and maintenance services for all existing asp.net web and mobile apps across the niches.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png"),
    que: "Expertise and Experience.",
    ans: "If you are planning on launching a software solution for your business growth then this is probably the best time for you to make an investment. A software solution can help to easily manage the data as well as do the management. Before hiring any services it is very important for you to research and hire the Asp.net expertise team.",
    ans2: "Here we are at The App Ideas, which is one of the most popular software development company. We have years of experience in providing the best Asp.net software services, Our experience and expertise with the app.net framework dates back to more than a decade before and spans across a multitude of successful apps and websites.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png"),
    que: "Robust Portfolio",
    ans: "Digitalization is taking place all over the world. Many businesses like offline stores, educational institutes, agencies are now launching their online services to target a high number of users. If you are also planning on digitalizing your business then this is high time for you to launch a software solution for your business.",
    ans2: "Here we are at The App Ideas which is one of the leading web and app development company. We have a team of highly skilled Asp.net software developers who have years of experience in offering the best solution. We boast of a robust and expansive portfolio of several successful asp.net based mobile apps and enterprise websites across the niches.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png"),
    que: "Agile Development",
    ans: "Having a software solution makes the work easier for business owners. Many of the large scale to small scale businesses are now implementing the software solution to their business. Software business can make the management of the services much easier for the people.",
    ans2: "The App Ideas is one of the leading web and app development company. Along with website development, we are experienced and expertise in offering the best software solutions. We strictly follow the agile development methodology and ensure fast-paced development and optimum performance through concurrent testing.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/4-9.png"),
    que: "Timely Delivery",
    ans: "If you observe the current market then many of the business owners are now planning to shift their services to online platforms because it provides easy manageability as well as accessibility. If you finding it difficult to manage your business then this is the time for you to have a software solution for your business.",
    ans2: "Here we are at The App Ideas, which is one of the leading software development company. We have a team of highly skilled Asp.net software developers. We ensure the timely completion of each and every project by strictly following the deadlines and project milestones.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png"),
    que: "Affordable Pricing",
    ans: "The software solution makes the work easier for all kinds of businesses and industries. If you are running a business then this is probably the best time for you to take a step forward and make an investment in developing the best software solution using Asp.net technology.",
    ans2: "Here we are at The App Ideas which is one of the leading web and app development company. We have skilful and experienced Asp.net development who offers the best services at the best costing. We offer a very affordable rate for all our asp.net development projects and ensure highly competitive pricing while keeping the focus on quality.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png"),
    que: "Superb Post Development support",
    ans: "Do you have a software solution for your business? If no then this is the time for you to research and design the best software solution which can be very useful for your business growth. Asp.net software can make the work much easier for your business and services.",
    ans2: "The App Ideas is one of the leading software development services. We have a pool of talented asp.net developers who offer the best services at the best possible rates. We provide suburb post-development support for all our development projects and ensure optimum qualitative output.",
  },
];

const AspNet = () => {
  const [activeWeProvide, setActiveWeProvide] = useState("enterprise_website");
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
    SetOpenServicesProvide();
  };
  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return SetOpenIndustries(null);
    }
    SetOpenIndustries(i);
  };

  return (
    <>
      <Helmet title="Best Asp.Net Development Company India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Asp.net Development"
        des="Many business owners are now switching towards online services or planning to launch software solutions for their businesses. A software solution can help the business owners to easily integrate all the services in single platforms and the admin or business owners can check all the connected systems, modify and make changes as per the requirements. We have a team of highly skilled Asp.net developers who will offer the best solutions at the best rates."
        list1="7+ Years of experience in App Development"
        list2="Best Asp.net App Development Company"
        list3="Dedicated team for your Asp.net App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Asp.net Development"
        service2="ASP.Net Development Services"
        service3="Full Stack ASP.Net Development Company"
        image1={CustomWordPress}
        image2={WordPressWebsite}
        image3={Developer}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we provide in Asp.net development?</h3>
            <p>
              Asp.net from Microsoft is one of the leading and most sought-after
              development frameworks used for building high-performance websites
              and mobile apps across the niches. The App Ideas is a leading
              Asp.net development company with years of experience and a solid
              portfolio of several successful websites and mobile apps built
              with this framework.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("enterprise_website")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeProvide === "enterprise_website" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/1-8.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Enterprise Website</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("mobile_app")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeProvide === "mobile_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/2-9.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Mobile App Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("video_live_steraming")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "video_live_steraming" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/3-8.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Video and Live Streaming</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("e_comm")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "e_comm" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/4-8.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>E-Commerce Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("asp.net_integration")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "asp.net_integration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/5-8.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Asp.Net Integration</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("asp.net_maintenance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === "asp.net_maintenance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/what-do/6-8.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Asp.Net Support & Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeProvide === "enterprise_website" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Enterprise Website Development
                    </h3>
                    <p className="Title_para">
                      The demand for online solutions is increasing as per the
                      increasing number of online users. Not only for the users
                      but many of the large scale businesses are implementing
                      the software or Enterprise solutions for managing things
                      properly and keep the overall records of the data for
                      future reference.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the leading
                      software development services. We have a team of highly
                      skilled Asp.net developers who are experts in offering
                      successful services at the best rates. We help you build
                      robust and powerful enterprise websites and web apps with
                      the Asp.net framework equipped with rich features and
                      unmatched performance.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "mobile_app" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Development </h3>
                    <p className="Title_para">
                      The popularity of the mobile app solution is getting
                      popular because it provides the convenience and comforts
                      of using the services very easily from any place and at
                      any time. Enterprise solutions are very important in this
                      present time, as it helps in managing everything very
                      easily.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the leading
                      web and app development company. We have a team of highly
                      skilled in offering software development services. We
                      utilise the Asp.net framework to develop sophisticated and
                      feature-rich mobile apps for multiple mobile OS platforms.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "video_live_steraming" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Video and Live Streaming </h3>
                    <p className="Title_para">
                      Many business owners and entrepreneurs are now making
                      investments in online platforms or digital solutions. By
                      this, they can digitize their business and can access it
                      from any place. Many of the industries are now accepting
                      the features like Video and Live streaming for making the
                      business more popular.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We are highly experienced in offering
                      the best services for development, designing as well as
                      enterprise development. We utilise the Asp.net framework
                      to build performance-savvy apps for video and real-time
                      streaming capabilities.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "e_comm" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      E-commerce Web Store Development{" "}
                    </h3>
                    <p className="Title_para">
                      The online store provides the proper flexibility of
                      checking the details of the product, adding it to the cart
                      and order it at your doorstep very easily. As a store
                      owner, it is very important for you to invest and launch
                      an E-commerce platform to increase your profit rate and
                      attract a high number of users to your services.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the most
                      popular E-commerce Web store development Company. We have
                      a skilled team of developers who are experts in offering
                      the best services. We utilise the asp.net framework to
                      build robust and feature-rich e-commerce web stores
                      equipped with all state of the art features and
                      sophisticated shopping experiences.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "asp.net_integration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Asp.Net Integration </h3>
                    <p className="Title_para">
                      If we talk about the Software solution then Asp.Net is one
                      of the most demanding technology. Asp.Net offers the best
                      features and functionality which can support business
                      owners in managing everything online. As a business owner
                      if you are planning to integrate Asp.Net then this is the
                      time.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading Software development
                      company. We have a skilled team of expert developers who
                      offers the best software solution by using the Asp.net
                      services. We also help existing websites and mobile apps
                      integrating the asp.net framework to deliver highly
                      customised and business-specific web and mobile
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeProvide === "asp.net_maintenance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Asp.Net Support and Maintenance{" "}
                    </h3>
                    <p className="Title_para">
                      If you are planning on making an investment in developing
                      a software solution or enterprise for your business then
                      this is probably the best time for it. You can do the
                      proper research, plan things and then hire the best
                      software development services who can offer the best
                      service at the best rates.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the proficient software
                      development company. We have a team of highly skilled
                      Asp.net developers who are highly experienced in offering
                      the best solution at affordable rates. We also provide
                      support and maintenance services for all existing asp.net
                      web and mobile apps across the niches.
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
            <h3>Why Choose The App Ideas for Asp.net Development?</h3>
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
                  onClick={() => setActiveWhyChoose("robust_portfolio")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
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
                  onClick={() => setActiveWhyChoose("timely_delivery")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "timely_delivery" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/4-9.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Timely Delivery</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("affordable_pricing")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "affordable_pricing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Affordable Pricing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("post_deploy_support")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "post_deploy_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Post Deploy Support</p>
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
                      If you are planning on launching a software solution for
                      your business growth then this is probably the best time
                      for you to make an investment. A software solution can
                      help to easily manage the data as well as do the
                      management. Before hiring any services it is very
                      important for you to research and hire the Asp.net
                      expertise team.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the most
                      popular software development company. We have years of
                      experience in providing the best Asp.net software
                      services, Our experience and expertise with the app.net
                      framework dates back to more than a decade before and
                      spans across a multitude of successful apps and websites.
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
                      Digitalization is taking place all over the world. Many
                      businesses like offline stores, educational institutes,
                      agencies are now launching their online services to target
                      a high number of users. If you are also planning on
                      digitalizing your business then this is high time for you
                      to launch a software solution for your business.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the leading
                      web and app development company. We have a team of highly
                      skilled Asp.net software developers who have years of
                      experience in offering the best solution. We boast of a
                      robust and expansive portfolio of several successful
                      asp.net based mobile apps and enterprise websites across
                      the niches.
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
                      Having a software solution makes the work easier for
                      business owners. Many of the large scale to small scale
                      businesses are now implementing the software solution to
                      their business. Software business can make the management
                      of the services much easier for the people.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with website development, we
                      are experienced and expertise in offering the best
                      software solutions. We strictly follow the agile
                      development methodology and ensure fast-paced development
                      and optimum performance through concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "timely_delivery" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Timely Delivery</h3>
                    <p className="Title_para">
                      If you observe the current market then many of the
                      business owners are now planning to shift their services
                      to online platforms because it provides easy manageability
                      as well as accessibility. If you finding it difficult to
                      manage your business then this is the time for you to have
                      a software solution for your business.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the leading
                      software development company. We have a team of highly
                      skilled Asp.net software developers. We ensure the timely
                      completion of each and every project by strictly following
                      the deadlines and project milestones.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "affordable_pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Affordable Pricing</h3>
                    <p className="Title_para">
                      The software solution makes the work easier for all kinds
                      of businesses and industries. If you are running a
                      business then this is probably the best time for you to
                      take a step forward and make an investment in developing
                      the best software solution using Asp.net technology.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the leading
                      web and app development company. We have skilful and
                      experienced Asp.net development who offers the best
                      services at the best costing. We offer a very affordable
                      rate for all our asp.net development projects and ensure
                      highly competitive pricing while keeping the focus on
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "post_deploy_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Superb Post Development support
                    </h3>
                    <p className="Title_para">
                      Do you have a software solution for your business? If no
                      then this is the time for you to research and design the
                      best software solution which can be very useful for your
                      business growth. Asp.net software can make the work much
                      easier for your business and services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      services. We have a pool of talented asp.net developers
                      who offer the best services at the best possible rates. We
                      provide suburb post-development support for all our
                      development projects and ensure optimum qualitative
                      output.
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
      <FAQ/>
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful Asp.net Software development in the market?" />
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

export default AspNet;
