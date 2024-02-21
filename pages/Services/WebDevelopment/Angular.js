import React, { useState } from "react";

import Image from 'next/image';
import CustomWordPress from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Angular-JS-Development.png";
import WordPressWebsite from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Angular-JS-Development-Services.png";
import Developer from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Angular-JS-developer.png";
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
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/js.png"),
    que: "Angular JS Cross Platforms App Development",
    ans: "The demand for mobile and web app services are getting higher in this present time and the graph is going to increase in the future. The users or we can say the customers are more likely to use the app platform rather than visit the store. These digital solutions make the process much easier, time-saving and cost-effective.",
    ans2: "The business owners who are targeting a high market or planning to target a high number of users then Angular JS Cross Platforms app can be one of the best solutions. Cross-Platform are the app solutions which has a single codebase and can be run on Android as well as IOS platforms. We use the Angular JS Javascript framework to build custom cross platforms mobile apps rich in features and appealing user interfaces.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Angular-JS-Web-Development-icon.png"),
    que: "Angular JS Web Development",
    ans: "If we talk about the web app platforms then these kinds of digital solutions are getting popular day by day. Many business owners and entrepreneurs are making high investments in developing a successful web platform for their business. The web platforms help in managing the data much easier and faster way.",
    ans2: "The App Ideas is one of the leading web and app development company. We are highly expert as well as experience in offering the best Angular JS web development services. We build sophisticated and user optimised responsive websites for various business niches by using the Angular JS framework.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Strong-Support.png"),
    que: "Angular JS Consulting services",
    ans: "If you are planning to launch a web app solution for your business then it is very important for you to do the research then jump into the development. You need to consult someone before choosing the technology because choosing technology is also depend on the requirements and features you are planning to integrate into your services.",
    ans2: "Here at The App Ideas, we are offering development services, designing services as well as our experts also offers consulting services to our clients. This will help you to easily choose the best for your services. We help you choose the right version of the Angular JS framework and provide expert advice to use the right technology stack while building web apps with Angular JS.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Angular-JS-Custom-Apps-icon.png"),
    que: "Angular JS Custom Apps",
    ans: "As we know, nowadays, we have hundreds of technology options available in the market. You can do the research and choose as per your requirements or convenience. Technologies like Angular JS offers some of the pre-built templates as well as it also offers customization features for developing the app as per the client requirements.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled and experienced developers who are experts in developing Angular JS templates and custom designs. We help you transform your existing website into an Angular JS based dynamic hybrid apps with ease.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Strong-Support.png"),
    que: "Support and Maintenance",
    ans: "If you are a startup owner or entrepreneur and planning to launch an online business then this is probably the best time to make an investment for developing web platform services. Along with the development, you also need to keep in mind the maintenance and support services because this will help you to be successful in the market.",
    ans2: "The App Ideas is one of the most successful software development company. We have a pool of talented Angular JS developers who are experts in offering the best web services for all kinds of businesses and categories. We provide post-development support to all our clients and help you updating and upgrading your websites and web apps with timely value addition.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Angular-JS-Integration.png"),
    que: "Angular JS Integration",
    ans: "The demand for the online platform or we can say the digital solution is getting higher day to day. If we talk about the users or customers then more than half the population are using smartphones for accessing every kind of service online. And due to the rise in demand for digital platforms, it’s time for you to make an investment in app platforms development.",
    ans2: "The App Ideas is one of the well popular Angular JS app development company. We are highly expert as well as proficient in developing as well as delivering successful Angular JS app development services to our clients. We also help to integrate the Angular JS framework to your existing website and mobile app along with other technologies as per specific requirements.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png"),
    que: "Expertise and Experience.",
    ans: "After doing the overall market research, now it’s time for you to make an investment in developing an Angular JS mobile app in the market. We are from The App Ideas which is one of the leading web and app development companies. We have a group of experts who are experienced in offering the best Angular JS services.",
    ans2: "We have years of experience in providing successful Angular JS app development services to our clients at the best rates. We boast of nearly a decade long experience in Angular JS development starting from the early Angular JS versions to the latest.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png"),
    que: "Sound Portfolio",
    ans: "Before hiring any of the software services for your web app development, it is must require to check the expertise of the developers. Expert and skilled developers can help you to integrate advanced features and functionality in the app based on the different business categories.",
    ans2: "The App Ideas is one of the leading software development company. We offer the development services like mobile app development, website development and web app development as well as we have a strong portfolio of our work. We boast a strong and sound portfolio of an array of successful Angular JS based dynamic websites and apps built for a variety of niches.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Time-Bound-Development..png"),
    que: "Exceptional and Dynamic",
    ans: "We are from The App Ideas which is one of the leading web and app development company. We have a team of highly expert, skilled and experienced developers who are proficient in offering Angular JS app development with the best features and at the best rates. We offer a dynamic solution based on the business requirements.",
    ans2: "We have a team of highly skilled Angular JS developers who have years of experience in developing advanced Angular JS app development which helps you in making your business more profitable. Angular JS is a powerful framework and we leave no leaf unturned to utilise the power of Angular JS for building a high performance and engaging web app.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Superb-User-Experience.png"),
    que: "Agile Development",
    ans: "The popularity of the Angular JS app is increasing at the present time because the app solution is offering the convenience as well as the comfort of accessing the services through the smart devices from any place and at any time. This is the main reason, Why you should digitalize your business or services.",
    ans2: "The App Ideas is one of the most popular software development services. We follow the agile methodology for quicker app development. We strictly implement an agile development methodology to ensure faster development while upholding our focus on quality output throughout the development process.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png"),
    que: "Competitive Pricing",
    ans: "If you are planning on launching an Angular JS mobile app solution in the market for successful startups and businesses then this is probably the right time for making an investment in launching the best mobile app. The Angular JS mobile app can help your business to stand out differently from the competition.",
    ans2: "We are from The App Ideas, which is one of the most popular software development company. We have a talented team of Angular JS developers who are experts in offering the best services. We offer Angular JS development service at a highly competitive price by industry-standard while ensuring uncompromising quality in output.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png"),
    que: "Timely Project Completion",
    ans: "The App Ideas is one of the leading and popular web as well as mobile app development company. We are skilled in offering successful Angular JS app development services for different business niches and categories. We strictly follow the time deadlines for deploying the Angular JS app to the clients.",
    ans2: "We mainly work on the milestones and divide the project into small parts. We strictly follow the agile methodology, work on the milestones, take the clients approval and then move to the further milestones. We ensure timely project completion by adhering to strict project deadlines and schedule milestones while never compromising on iteration and testing.",
  },
];
const Angular = () => {
  const [activeOffer, setActiveOffer] = useState("cross_platform");
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

  return (
    <>
      <Helmet title="Angular Development Company In India | The app Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Angular JS Development Company"
        des="The App Ideas is one of the foremost software development company. We offer the top services for web development, E-commerce platform development as well as mobile app development. We have a team of highly experienced and skilled developers who are experts in offering awesome Angular JS web development services at the best possible rates."
        list1="7+ Years of experience in Angular JS Development"
        list2="Best Angular JS Development Company"
        list3="Dedicated team for your Angular JS Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Angular JS Development"
        service2="Angular JS Development Services"
        service3="Angular JS Developer"
        image1={CustomWordPress}
        image2={WordPressWebsite}
        image3={Developer}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we offer in Angular JS Development Company?</h3>
            <p>
              Angular JS or as it used to be called Angular JS, is a widely
              acclaimed open-source JavaScript framework used for building
              dynamic web apps. Angular JS is particularly well-known for
              delivering rich features and customisable elements. The App Ideas
              is a leading Angular JS development company with years of
              frontline experience and proven expertise. Over the years we have
              built a whole array of award-winning and high-performance websites
              and hybrid mobile apps using the Angular JS framework.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("cross_platform")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "cross_platform" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/js.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Cross Platform Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("web_development")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "web_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Angular-JS-Web-Development-icon.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Angular JS Web Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("consulting_service")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "consulting_service" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Strong-Support.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Angular JS Consulting Services</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("custom_app")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "custom_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Angular-JS-Custom-Apps-icon.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Angular JS Custom Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "support" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Strong-Support.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveOffer("integration")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeOffer === "integration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/what do/Angular-JS-Integration.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Angular JS Integration</p>
                  </div>
                </div>
              </div>
            </div>
            {activeOffer === "cross_platform" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Angular JS Cross Platforms App Development
                    </h3>
                    <p className="Title_para">
                      The demand for mobile and web app services are getting
                      higher in this present time and the graph is going to
                      increase in the future. The users or we can say the
                      customers are more likely to use the app platform rather
                      than visit the store. These digital solutions make the
                      process much easier, time-saving and cost-effective.
                    </p>
                    <p className="Title_para">
                      The business owners who are targeting a high market or
                      planning to target a high number of users then Angular JS
                      Cross Platforms app can be one of the best solutions.
                      Cross-Platform are the app solutions which has a single
                      codebase and can be run on Android as well as IOS
                      platforms. We use the Angular JS Javascript framework to
                      build custom cross platforms mobile apps rich in features
                      and appealing user interfaces.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "web_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Angular JS Web Development{" "}
                    </h3>
                    <p className="Title_para">
                      If we talk about the web app platforms then these kinds of
                      digital solutions are getting popular day by day. Many
                      business owners and entrepreneurs are making high
                      investments in developing a successful web platform for
                      their business. The web platforms help in managing the
                      data much easier and faster way.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly expert as well as
                      experience in offering the best Angular JS web development
                      services. We build sophisticated and user optimised
                      responsive websites for various business niches by using
                      the Angular JS framework.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "consulting_service" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Angular JS Consulting services{" "}
                    </h3>
                    <p className="Title_para">
                      If you are planning to launch a web app solution for your
                      business then it is very important for you to do the
                      research then jump into the development. You need to
                      consult someone before choosing the technology because
                      choosing technology is also depend on the requirements and
                      features you are planning to integrate into your services.
                    </p>
                    <p className="Title_para">
                      Here at The App Ideas, we are offering development
                      services, designing services as well as our experts also
                      offers consulting services to our clients. This will help
                      you to easily choose the best for your services. We help
                      you choose the right version of the Angular JS framework
                      and provide expert advice to use the right technology
                      stack while building web apps with Angular JS.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "custom_app" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Angular JS Custom Apps </h3>
                    <p className="Title_para">
                      As we know, nowadays, we have hundreds of technology
                      options available in the market. You can do the research
                      and choose as per your requirements or convenience.
                      Technologies like Angular JS offers some of the pre-built
                      templates as well as it also offers customization features
                      for developing the app as per the client requirements.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled and
                      experienced developers who are experts in developing
                      Angular JS templates and custom designs. We help you
                      transform your existing website into an Angular JS based
                      dynamic hybrid apps with ease.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance </h3>
                    <p className="Title_para">
                      If you are a startup owner or entrepreneur and planning to
                      launch an online business then this is probably the best
                      time to make an investment for developing web platform
                      services. Along with the development, you also need to
                      keep in mind the maintenance and support services because
                      this will help you to be successful in the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most successful software
                      development company. We have a pool of talented Angular JS
                      developers who are experts in offering the best web
                      services for all kinds of businesses and categories. We
                      provide post-development support to all our clients and
                      help you updating and upgrading your websites and web apps
                      with timely value addition.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeOffer === "integration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Angular JS Integration </h3>
                    <p className="Title_para">
                      The demand for the online platform or we can say the
                      digital solution is getting higher day to day. If we talk
                      about the users or customers then more than half the
                      population are using smartphones for accessing every kind
                      of service online. And due to the rise in demand for
                      digital platforms, it’s time for you to make an investment
                      in app platforms development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the well popular Angular JS app
                      development company. We are highly expert as well as
                      proficient in developing as well as delivering successful
                      Angular JS app development services to our clients. We
                      also help to integrate the Angular JS framework to your
                      existing website and mobile app along with other
                      technologies as per specific requirements.
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
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why choose App Ideas for Angular JS Development Company?</h3>
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
                  onClick={() => setActiveWhyChoose("sound_porfolio")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "sound_porfolio" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Sound Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("exceptional_dynamic")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "exceptional_dynamic" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Time-Bound-Development..png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Exceptional and Dynamic</p>
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
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Superb-User-Experience.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
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
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
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
                    } `}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Timely Project Completion</p>
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
                      After doing the overall market research, now it’s time for
                      you to make an investment in developing an Angular JS
                      mobile app in the market. We are from The App Ideas which
                      is one of the leading web and app development companies.
                      We have a group of experts who are experienced in offering
                      the best Angular JS services.
                    </p>
                    <p className="Title_para">
                      We have years of experience in providing successful
                      Angular JS app development services to our clients at the
                      best rates. We boast of nearly a decade long experience in
                      Angular JS development starting from the early Angular JS
                      versions to the latest.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "sound_porfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Sound Portfolio</h3>
                    <p className="Title_para">
                      Before hiring any of the software services for your web
                      app development, it is must require to check the expertise
                      of the developers. Expert and skilled developers can help
                      you to integrate advanced features and functionality in
                      the app based on the different business categories.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We offer the development services like mobile app
                      development, website development and web app development
                      as well as we have a strong portfolio of our work. We
                      boast a strong and sound portfolio of an array of
                      successful Angular JS based dynamic websites and apps
                      built for a variety of niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "exceptional_dynamic" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Exceptional and Dynamic</h3>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a team of highly
                      expert, skilled and experienced developers who are
                      proficient in offering Angular JS app development with the
                      best features and at the best rates. We offer a dynamic
                      solution based on the business requirements.
                    </p>
                    <p className="Title_para">
                      We have a team of highly skilled Angular JS developers who
                      have years of experience in developing advanced Angular JS
                      app development which helps you in making your business
                      more profitable. Angular JS is a powerful framework and we
                      leave no leaf unturned to utilise the power of Angular JS
                      for building a high performance and engaging web app.
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
                      The popularity of the Angular JS app is increasing at the
                      present time because the app solution is offering the
                      convenience as well as the comfort of accessing the
                      services through the smart devices from any place and at
                      any time. This is the main reason, Why you should
                      digitalize your business or services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We follow the agile methodology for
                      quicker app development. We strictly implement an agile
                      development methodology to ensure faster development while
                      upholding our focus on quality output throughout the
                      development process.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      If you are planning on launching an Angular JS mobile app
                      solution in the market for successful startups and
                      businesses then this is probably the right time for making
                      an investment in launching the best mobile app. The
                      Angular JS mobile app can help your business to stand out
                      differently from the competition.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the most
                      popular software development company. We have a talented
                      team of Angular JS developers who are experts in offering
                      the best services. We offer Angular JS development service
                      at a highly competitive price by industry-standard while
                      ensuring uncompromising quality in output.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "timely_project" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Timely Project Completion</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading and popular web as
                      well as mobile app development company. We are skilled in
                      offering successful Angular JS app development services
                      for different business niches and categories. We strictly
                      follow the time deadlines for deploying the Angular JS app
                      to the clients.
                    </p>
                    <p className="Title_para">
                      We mainly work on the milestones and divide the project
                      into small parts. We strictly follow the agile
                      methodology, work on the milestones, take the clients
                      approval and then move to the further milestones. We
                      ensure timely project completion by adhering to strict
                      project deadlines and schedule milestones while never
                      compromising on iteration and testing.
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
      <ContactUs question="Are you planning to launch a Successful Angular JS app in the market?" />
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

export default Angular;
