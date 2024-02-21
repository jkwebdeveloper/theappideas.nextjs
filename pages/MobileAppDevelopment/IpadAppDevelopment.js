import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import company from "../../public/assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Company.png";
import service from "../../public/assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Service.png";
import development from "../../public/assets/images/MobileAppDev/IPhone App/IPhone-Application-Development.png";

import AR from "../../public/assets/images/MobileAppDev/IPad App Development Company/iPad Art and Design Apps/iPad AR and VR apps.svg";
import chat from "../../public/assets/images/MobileAppDev/IPad App Development Company/iPad Art and Design Apps/iPad Chat Apps.svg";
import Experience from "../../public/assets/images/MobileAppDev/Android App Development Company/Why Choose/Experience and Expertise.svg";
import Robust from "../../public/assets/images/MobileAppDev/Android App Development Company/Why Choose/Robust Portfolio.svg";
import Lifecycle from "../../public/assets/images/MobileAppDev/Android App Development Company/Why Choose/Full Lifecycle support.svg";
import Agile from "../../public/assets/images/MobileAppDev/Android App Development Company/Why Choose/Agile Development.svg";
import Fast from "../../public/assets/images/MobileAppDev/Android App Development Company/Why Choose/Fast-paced development.svg";
import Competitive from "../../public/assets/images/MobileAppDev/Android App Development Company/Why Choose/Competitive price.svg";

import TestiMonial from "../../components/Testimonial/TestiMonial";
import FAQ from "../../components/FAQ";
import WorkHand from "../../components/WorkHand";

import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/HeroSection";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../public/assets/images/MobileAppDev/IPad App Development Company/enterprise.png"),
    que: "IPad Enterprise App",
    ans: "Nowadays many business owners, startups or enterprise owners are now shifting their business towards online platforms. Digitilizing their business can help owners to reach as many people as they can. Along with that, some of the online platforms can also help in managing the overall business through a single screen.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled and expert developers who will offer the best iPad app development services with unique design and the best rates. We develop custom iPad mobile apps for a variety of business niches and categories.",
  },
  {
    id: 2,
    images: require("../../public/assets/images/MobileAppDev/IPad App Development Company/ipad-media.png"),
    que: "IPad Entertainment and media Apps",
    ans: "If we talk about the Entertainment and media categories then this type of apps are getting highly popular as well as its demand is also increasing among the users. If you are planning to make an investment in this field then you can easily launch your own iPad mobile app for Entertainment and media.",
    ans2: "The App Ideas is one of the popular iPad mobile app development company. We have a team of highly talented developers who are proficient in providing the best iPad app solutions for different business categories. We build advanced entertainment and media apps for iPad users equipped with state of the art features like a live recording, on-screen caption etc.",
  },
  {
    id: 3,
    images: require("../../public/assets/images/MobileAppDev/IPad App Development Company/ipad-game.png"),
    que: "IPad Game App",
    ans: "We are from The App Ideas which is one of the experienced web and app development company. We are providing successful mobile app development services for all types of operating systems including the IOS and Android for the success of the business.iPad mobile app solutions are highly demanding in this present time.",
    ans2: "If we talk about game app development the iPad Game apps are highly popular in the market. Many of the entrepreneurs are making investments in developing a new concept iPad games in the market. We develop sophisticated and addictive mobile apps for iPad users using state of the art gaming technologies.",
  },
  {
    id: 4,
    images: AR,
    que: "IPad AR and VR apps",
    ans: "iPad Mobile apps are getting popular day by day. And if we talk about the AR(Augmented Reality) and VR(Virtual Reality) apps then this is highly getting popular in the market. Many of the popular and successful mobile apps are integrating AR and VR into their services to offer more convenient services to the users.",
    ans2: "The App Ideas is a leading web and app development company. We have a team of highly skilled and expertise software developers who are proficient in providing the best solution for AR and VR apps. We utilise the large screen and authentic visual capability of the iPad to build sophisticated AR and VR apps for an immersive experience.",
  },
  {
    id: 5,
    images: chat,
    que: "IPad Chat Apps",
    ans: "iPad Chat apps are highly popular and demanding in the market. If we check in the market then we have thousands of chat app available. Chat app can help users to connect with each other and chat with them easily through their smart devices. Chat apps are mainly used by every professional including students, business owners and more.",
    ans2: "The App Ideas is a leading web and app development company. We have a team of highly skilled developers who will offer the unique design and best solution of the iPad chat app at the best costs. We build state of the art chat apps for iPad users with real-time video chat, smart emoji and other advanced features.",
  },
  {
    id: 6,
    images: require("../../public/assets/images/MobileAppDev/IPad App Development Company/Website-Redesign.png"),
    que: "IPad Art and Design Apps",
    ans: "If we talk about the Art and Design industry then this industry is also booming in the market. Many entrepreneurs and startups are making investments in mobile apps development for increasing their profits rates. It is one of the best ideas to launch an iPad Art and Desing apps.",
    ans2: "The App Ideas is one of the popular web and app development company. We have a pool of talented IOS developers who will offer the best design and development services for iPad Art and Design apps. We develop a range of most user-centric apps targeted at professional designers, artists and architects who use iPad extensively for their purpose.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: Experience,
    que: "Experience and Expertise.",
    ans: "We are from The App Ideas is a leading web and app development company. We offer website development services as well as the best iPad App development service which will helps businesses to grow and increase the engagement of the users towards your services.",
    ans2: "Before hiring any software development company, it is very important for you to know the expertise of the team. We offer a talented pool of Ipad developers having years of experience proven expertise and great credentials.",
  },
  {
    id: 2,
    images: Robust,
    que: "Unmatched Design Excellence",
    ans: "If we talk about designing then you probably have an idea that design is one of the most important things behind the success of any software development service. Designing can help you to get more users towards your online platforms as well as also helps in increasing the user engagement towards the services.",
    ans2: "The App Ideas is one of the best web and app development company. We are highly expert in providing the best iPad app development services along with unique designing services. With a highly talented pool of iPad app designers, we ensure delivering the most unique, beautiful and minimalist UI design output.",
  },
  {
    id: 3,
    images: Lifecycle,
    que: "Robust Portfolio",
    ans: "Before hiring us, you can probably check our Robust portfolio to see our expertise in the web and app development field. Past projects and testimonials can help you to get to know the software services experienced.",
    ans2: "The App Ideas is one of the foremost app and web development company. We have a team of highly skilled and experienced developers who offers the best iPad app development services. We boast a huge portfolio of the most successful iPad apps built for a variety of niches and business categories.",
  },
  {
    id: 4,
    images: Agile,
    que: "Agile development",
    ans: "Nowadays, the demand for the iPad mobile app development is increasing very drastically and the reason behind this is very convenient to use for a place and any time. People are highly inclined towards smartphones for all kinds of services which makes business owners shift their business towards online platforms.",
    ans2: "The App Ideas is a leading web and app development company. We mainly follow the agile methodology or stick to an agile development methodology to ensure optimum quality while meeting deadlines and milestones with faster development.",
  },
  {
    id: 5,
    images: Fast,
    que: "Offshore Hiring",
    ans: "As we know, the demand for online platforms is increasing day by day. Many people are investing in software development services like websites development or mobile app development. Many people are really investing in iPad mobile app development for expanding their business in other areas.",
    ans2: "We are from The App Ideas, which is a leading web and app development company. We have a team of highly skilled developers who offer the best features as well as unique designs to the clients. We also deliver to your offshore development needs by allowing you to hire from our experienced iPad app development team.",
  },
  {
    id: 6,
    images: Competitive,
    que: "Competitive price",
    ans: "The market is full of web and app services. You can check the app store for any kinds of services you required. And if we talk about the popularity then the demand is also getting increase with the time. For iPad mobile app development it is very important for you to have some unique concept to increase the engagement of the user.",
    ans2: "The App Ideas is a highly experienced web and app development company. We have a pool of talented developers who offer the best iPad app development services. We offer the most competitive pricing for building the most sophisticated iPad app with guaranteed performance and app market success.",
  },
];
const IpadAppDev = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [activeService, setActiveService] = useState("ipad_enterprise");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_expertise"
  );

  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [openIndustries, SetOpenIndustries] = useState(false);

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
      <Helmet title="Custom ipad Application Development Company | The app ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="IPad App Development Company"
        des="The App Ideas is one of the leading web and app development company. We are highly expert in providing the best software services including the IOS service platforms like iPad app development service. We also offer custom iPad app development which can be very helpful for your business at the best possible rates."
        list1="7+ Years of experience in App Development"
        list2="Best iPad App Development Company"
        list3="Dedicated team for your iPad App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="IPad App Development"
        service2="IPad App Development Services"
        service3="Ipad Application Development"
        image1={company}
        image2={service}
        image3={development}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What Do We Offer For iPad App Development Company?</h3>
            <p>
              iPad among all the iOS devices has a very special place because of
              its sophisticated large screen hybrid computing experience. Though
              all major iPhone apps are automatically available for iPad users,
              some apps are particularly designed and built keeping iPad users
              in mind. We build all typical iPad centric apps ranging from iPad
              games, robust enterprise apps, design and art apps, writing and
              note-taking apps, entertainment and media apps, reading apps and
              many others.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_enterprise")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "ipad_enterprise" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/IPad App Development Company/enterprise.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>IPad Enterprise App</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_entertainment")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "ipad_entertainment" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/IPad App Development Company/ipad-media.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      Ipad Media <br /> Apps
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_game")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "ipad_game" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/IPad App Development Company/ipad-game.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      IPad Game <br /> App
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_ar_vr")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "ipad_ar_vr" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={AR}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>IPad AR & VR Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_chat")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "ipad_chat" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={chat}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      IPad Chat <br />
                      Apps
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_art_design")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "ipad_art_design" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/IPad App Development Company/Website-Redesign.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>IPad Art & Design Apps</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "ipad_enterprise" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Enterprise App</h3>
                    <p className="Title_para">
                      Nowadays many business owners, startups or enterprise
                      owners are now shifting their business towards online
                      platforms. Digitilizing their business can help owners to
                      reach as many people as they can. Along with that, some of
                      the online platforms can also help in managing the overall
                      business through a single screen.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled and
                      expert developers who will offer the best iPad app
                      development services with unique design and the best
                      rates. We develop custom iPad mobile apps for a variety of
                      business niches and categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_entertainment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      iPad Entertainment and media Apps
                    </h3>
                    <p className="Title_para">
                      If we talk about the Entertainment and media categories
                      then this type of apps are getting highly popular as well
                      as its demand is also increasing among the users. If you
                      are planning to make an investment in this field then you
                      can easily launch your own iPad mobile app for
                      Entertainment and media.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular iPad mobile app
                      development company. We have a team of highly talented
                      developers who are proficient in providing the best iPad
                      app solutions for different business categories. We build
                      advanced entertainment and media apps for iPad users
                      equipped with state of the art features like a live
                      recording, on-screen caption etc.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_game" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Game App </h3>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the experienced
                      web and app development company. We are providing
                      successful mobile app development services for all types
                      of operating systems including the IOS and Android for the
                      success of the business.iPad mobile app solutions are
                      highly demanding in this present time.
                    </p>
                    <p className="Title_para">
                      If we talk about game app development the iPad Game apps
                      are highly popular in the market. Many of the
                      entrepreneurs are making investments in developing a new
                      concept iPad games in the market. We develop sophisticated
                      and addictive mobile apps for iPad users using state of
                      the art gaming technologies.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_ar_vr" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad AR and VR apps</h3>
                    <p className="Title_para">
                      iPad Mobile apps are getting popular day by day. And if we
                      talk about the AR(Augmented Reality) and VR(Virtual
                      Reality) apps then this is highly getting popular in the
                      market. Many of the popular and successful mobile apps are
                      integrating AR and VR into their services to offer more
                      convenient services to the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. We have a team of highly skilled and expertise
                      software developers who are proficient in providing the
                      best solution for AR and VR apps. We utilise the large
                      screen and authentic visual capability of the iPad to
                      build sophisticated AR and VR apps for an immersive
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_chat" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Chat Apps</h3>
                    <p className="Title_para">
                      iPad Chat apps are highly popular and demanding in the
                      market. If we check in the market then we have thousands
                      of chat app available. Chat app can help users to connect
                      with each other and chat with them easily through their
                      smart devices. Chat apps are mainly used by every
                      professional including students, business owners and more.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. We have a team of highly skilled developers who
                      will offer the unique design and best solution of the iPad
                      chat app at the best costs. We build state of the art chat
                      apps for iPad users with real-time video chat, smart emoji
                      and other advanced features.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_art_design" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Art and Design Apps</h3>
                    <p className="Title_para">
                      If we talk about the Art and Design industry then this
                      industry is also booming in the market. Many entrepreneurs
                      and startups are making investments in mobile apps
                      development for increasing their profits rates. It is one
                      of the best ideas to launch an iPad Art and Desing apps.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular web and app
                      development company. We have a pool of talented IOS
                      developers who will offer the best design and development
                      services for iPad Art and Design apps. We develop a range
                      of most user-centric apps targeted at professional
                      designers, artists and architects who use iPad extensively
                      for their purpose.
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

      {/* Work Head Section Start */}
      <WorkHand />
      {/* Work Head Section End */}

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose App Ideas For IPad App Development?</h3>
            <p>
              At the App Ideas over the years we built a standout reputation for
              outstanding IPad App Development Service by producing an array of
              widely bench marked apps flaunting sophisticated user experience
              and visually enticing UI. Our IPad App Development Service over
              the years contributed to the commercial success of many businesses
              and helped them carve out a competitive mobile presence. Let’s
              mention the key reasons to choose us for IPad App Development.
            </p>
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
                    } `}
                  >
                    <Image width={60} height={60}
                      src={Experience}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust_protfolio")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_protfolio" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={Robust}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>
                      Unique <br />
                      Designing
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("full_lifestyle_support")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "full_lifestyle_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={Lifecycle}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile_development")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile_development" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <Image width={60} height={60}
                      src={Agile}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("fast_paced_development")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "fast_paced_development" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <Image width={60} height={60}
                      src={Fast}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>
                      Offshore <br /> Hiring
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_price")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_price" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <Image width={60} height={60}
                      src={Competitive}
                      alt="Competitive-Pricing"
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
                    <h3 className="Title_heading">Experience and Expertise.</h3>
                    <p className="Title_para">
                      We are from{" "}
                      <div
                        
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <b>The App Ideas</b>
                      </div>{" "}
                      is a leading web and app development company. We offer
                      website development services as well as the best iPad App
                      development service which will helps businesses to grow
                      and increase the engagement of the users towards your
                      services.
                    </p>
                    <p className="Title_para">
                      Before hiring any software development company, it is very
                      important for you to know the expertise of the team. We
                      offer a talented pool of Ipad developers having years of
                      experience proven expertise and great credentials.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "robust_protfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Unmatched Design Excellence
                    </h3>
                    <p className="Title_para">
                      If we talk about designing then you probably have an idea
                      that design is one of the most important things behind the
                      success of any software development service. Designing can
                      help you to get more users towards your online platforms
                      as well as also helps in increasing the user engagement
                      towards the services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the best web and app development
                      company. We are highly expert in providing the best iPad
                      app development services along with unique designing
                      services. With a highly talented pool of iPad app
                      designers, we ensure delivering the most unique, beautiful
                      and minimalist UI design output.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "full_lifestyle_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Before hiring us, you can probably check our Robust
                      portfolio to see our expertise in the web and app
                      development field. Past projects and testimonials can help
                      you to get to know the software services experienced.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost app and web
                      development company. We have a team of highly skilled and
                      experienced developers who offers the best iPad app
                      development services. We boast a huge portfolio of the
                      most successful iPad apps built for a variety of niches
                      and business categories.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "agile_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile development</h3>
                    <p className="Title_para">
                      Nowadays, the demand for the iPad mobile app development
                      is increasing very drastically and the reason behind this
                      is very convenient to use for a place and any time. People
                      are highly inclined towards smartphones for all kinds of
                      services which makes business owners shift their business
                      towards online platforms.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. We mainly follow the agile methodology or stick
                      to an agile development methodology to ensure optimum
                      quality while meeting deadlines and milestones with faster
                      development.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "fast_paced_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Offshore Hiring</h3>
                    <p className="Title_para">
                      As we know, the demand for online platforms is increasing
                      day by day. Many people are investing in software
                      development services like websites development or mobile
                      app development. Many people are really investing in iPad
                      mobile app development for expanding their business in
                      other areas.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is a leading web and app
                      development company. We have a team of highly skilled
                      developers who offer the best features as well as unique
                      designs to the clients. We also deliver to your offshore
                      development needs by allowing you to hire from our
                      experienced iPad app development team.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "competitive_price" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive price</h3>
                    <p className="Title_para">
                      The market is full of web and app services. You can check
                      the app store for any kinds of services you required. And
                      if we talk about the popularity then the demand is also
                      getting increase with the time. For iPad mobile app
                      development it is very important for you to have some
                      unique concept to increase the engagement of the user.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a highly experienced web and app
                      development company. We have a pool of talented developers
                      who offer the best iPad app development services. We offer
                      the most competitive pricing for building the most
                      sophisticated iPad app with guaranteed performance and app
                      market success.
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
                      <Image width={60} height={60}
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

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful iPad Mobile app in the market?" />
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

export default IpadAppDev;
