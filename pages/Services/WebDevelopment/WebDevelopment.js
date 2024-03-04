import React, { useEffect, useState } from "react";
import WorkSlider from "../../../components/WorkSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import mobileweb from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Web Development.svg";
import mobileaap from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Web Development Services.svg";
import webapp from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Website Development Company.svg";

// Service section image
import CustomWebsite from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Custom Website Development.svg";
import smartphone from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Development.svg";
import webimprovement from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Improvement.svg";
import Websitemaintenance from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Maintenance.svg";
import web from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Web app.svg";
import websiteupgrade from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Upgrade.svg";
import websiteredesign from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Redesign.svg";
import webAPICreations from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Web APIs creations.svg";
import Integration from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Integration with the third parties APIs.svg";

// service provide section images
import Food from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Food Industry.svg";
import Retail from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Retail Industry.svg";
import Transport from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Transport Industry.svg";
import Education from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Education Industry.svg";
import Business from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Business Industry.svg";
import Recruitment from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Recruitment Industry.svg";
import Software from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Software Industry.svg";
import Finance from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Finance Industry.svg";
import Insurance from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Insurance Industry.svg";

import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from "../../../components/HeroSection";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: smartphone,
    que: "Website Development",
    ans: "With significant knowledge and skill, we provide top-notch web development services using the newest technologies. Our staff has completed several website projects, providing customized solutions at low prices to match our customers' demands.",
    ans2: "Are you looking for the best Website Development services?",
    ans3: "If yes, invest in digital firm development immediately. We're thrilled to help you construct a profitable website development service for your business. Our process begins with your specifications, extensive analysis, discussions, regular module development updates, and timely project execution. Let us assist you improve your digital presence throughout this innovative journey.",
  },
  {
    id: 2,
    images: CustomWebsite,
    que: "Custom Website Development",
    ans: "The App Ideas is one of the foremost software developing company. We are highly experts in providing the best solution for mobile app development, web app development and e-commerce development. Along with the templates design, we also offer the best custom website design for all kinds of niches at the best rates. We have worked on various customized website development services and deployed the project on the given deadlines with all the advanced features.",
    ans2: "Are you looking for a Custom website development company?",
    ans3: "If yes, then you are at the right place. We have years of experience in offering the best custom website development services at the best rates. Our developers initially gather the requirements, understand them or analyse them fully, allocate a dedicated developer, work on the modules, take clients approval and deploy the project on the given timelines. This is probably the time for you to take a step further and connect with us.",
  },
  {
    id: 3,
    images: webimprovement,
    que: "Website Improvement",
    ans: "The App Ideas is one of the most popular web and app development company. We have years of experience in delivering the best website services. Along with development and designing, we also offer website improvement services. Many Services already have a website service but due to changes in technology sometimes it is very important to improve your website and make it compatible with the trendy technology.",
    ans2: "Are you looking for a website designing company?",
    ans3: "If yes, then here we are only a chat away from you. We have worked on various website improvement projects. Sometimes it is very important for you to make some improvements to your website to make it work faster and increase the engagement of the users. Firstly, we gather the requirements, suggest some improvement as per the trend, take the approval of the client in each module development and deploy the project at the best possible rates.",
  },
  {
    id: 4,
    images: Websitemaintenance,
    que: "Website Maintenance",
    ans: "The App Ideas is one of the leading web app development services. Along with the development of the mobile app and website, we are also proficient in offering the best designing services at the best possible rates. We also offer website maintenance services for all kinds of business niches. After the deployment of the project to our clients, we offer free three months of maintenance support.",
    ans2: "Are you looking for a Website Maintenance Company?",
    ans3: "If yes, then without taking much time feel free to connect with us at any time. We have years of experience in providing the best web development services. We have a team of highly skilled developers who are experts in offering the best kinds of services in a given timeline as well as at the best possible rates. Feel free to connect with us at any time for your website maintenance services and we promise to offer you the best website maintenance services.",
  },
  {
    id: 5,
    images: web,
    que: "Web app",
    ans: "The App Ideas is one of the most popular web and mobile app development company. We have a team of highly skilled developers as well as designing who are proficient in offering the best web app development services. We have worked on various projects related to web app development for various industries or business categories. We also advise our clients about the trending technology and features which are on demand.",
    ans2: "Are you looking for any Web app development company?",
    ans3: "If yes then, you are at the right place. You can directly connect with us and discuss your project requirements with us as well as get a free quote for it. We have a team of highly skilled Web developers and designers who will first get all the information from the clients, try to analyze it, start the project, take the clients approval and deploy the project on time.",
  },
  {
    id: 6,
    images: websiteupgrade,
    que: "Website Upgrade",
    ans: "The App Ideas is also proficient in offering Website Upgrade services to you at the best possible rates. We offer the best software development like website development, web app development, mobile app developer, E-commerce development as well as best graphics designing services. Website Upgrade is very important to keep your website fast-loading as well as to get a better rank.",
    ans2: "Are you looking for the best Website Upgrade Services?",
    ans3: "If yes, then this is probably the time for you to make an upgrade website list and connect with us. We can check your requirements and revert you back as soon as possible. We have a team of highly skilled developers and designers who are experts in adding some of the advanced features and upgrading your website easily. Feel free to connect with us and access our best resources for upgrading your website.",
  },
  {
    id: 7,
    images: websiteredesign,
    que: "Website Redesign",
    ans: "The App Ideas is one of the leading web and app development company. Along with offering the best development services with the trending technology, we are also proficient in offering online platform designing services. We have a team of highly skilled designers who are experts in providing unique designs as per the expectation of the clients and as per the business categories.",
    ans2: "Are you looking for the best Website Redesign services?",
    ans3: "If yes, then this is the best time for you to take a step ahead and hire us for the best website redesign services. Website redesigning is very important in this present time because to keep your web app at the top on the google search engines, it is very important to keep it updated and design it as per the trending website designing services. Feel free to connect with us and get a free quote.",
  },
  {
    id: 8,
    images: webAPICreations,
    que: "Web APIs creations",
    ans: "The App Ideas is one of the leading web and app development company. We are highly experienced in providing the best services for software development services like website development, web app development mobile app development. We also have a team of highly expert designers who offer the best solution at the best rates. We are also proficient in developing Web APIs for all kinds of business niches.",
    ans2: "Are you looking for Web APIs Creation services?",
    ans3: "If yes, then you are at the right place. Here we have a team of highly experienced web app developers who are experienced in Web APIs Creation services. We have developed various Web APIs for web apps and deployed them at the given deadlines. We initially get the requirements, analyses them, work on them and deliver them at the correct time.",
  },
  {
    id: 9,
    images: Integration,
    que: "Integration with the third parties APIs",
    ans: "The App Ideas is one of the most popular software development company. We are experienced in offering the best software services along with the integration with the third parties APIs in the web development solution. We have a team of highly skilled people who are experts and provide the solution at the best time as well as at the best cost.",
    ans2: "Are you looking for services to integrate third parties APIs into your web app?",
    ans3: "If yes, then here we are. As mentioned earlier, we are highly proficient in providing the best web APIs services. We are also Skilled in integrating the web with the third parties APIs if its client’s requirements. We have years of experience in providing the best services to our clients at the best possible rates. If you are looking for services like this then feel free to connect with us and get a free quotation.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: Food,
    que: "Food Industry",
    ans: "The App Ideas is one of the Best Food Industry web and app development company. We have a team of highly skilled developers as well as designers who are proficient in offering the best software development services at the best possible rates. We have years of experience in providing the best solution for the Food or Restaurant Industry.",
    ans2: "Are you planning to launch a Food Industry Web App in the market?",
    ans3: "Nowadays, a high number of startups or business news are shifting towards digitization because it offers the convenience of accessing the services. On the other hand, people are also more inclined towards digital platforms because it is time effective. If you are planning then this is probably the time to take a step ahead and launch your own Food Industry web app in the market.",
  },
  {
    id: 2,
    images: Retail,
    que: "Retail Industry",
    ans: "The App Ideas is one of the Foremost Retail Industry web and app development company. We are highly experienced in providing the best software solution like E-commerce development, mobile app, web app and website development. We are also proficient in providing unique designing services for all kinds of industries including the retail business.",
    ans2: "Are you planning to launch a Retail Industry Web app in the market?",
    ans3: "If yes then connect with us and get a free quote. In this present time, all kinds of business industries are converting their services into digital services or online platforms because they offer convenience as well as time-saving methods. This is probably the best time for you to convert your retail business into a successful web app to generate high profits and get more users attention.",
  },
  {
    id: 3,
    images: Transport,
    que: "Transport Industry",
    ans: "The App Ideas is one of the popular Transport Industry web development services. We are highly skilled and expertise in offering the best online platforms development services including in the transport industry. In the Transport industry, it is very important to have a web app, so it will be very easy for the business owners to track down their services and manage the work accordingly.",
    ans2: "Are you planning to launch a Transport Industry Web app in the market?",
    ans3: "If Yes, then this is probably the best time for you to launch a Transport industry web app at the best rates. By having a Transport Industry web app, you can easily track down your drivers, manage the services from any place, convenience of managing the services at any time, have great staff management and more.",
  },
  {
    id: 4,
    images: Education,
    que: "Education Industry",
    ans: "The App Ideas is highly proficient in developing the best Education industry web solution. We have a team of highly experienced web app developers who are experts in delivering the best education web and app solutions at the best rates. Along with the development services, we also offer the best designing services for an education website, web app and mobile app.",
    ans2: "Are you planning to launch an Education Industry Web app in the market?",
    ans3: "If yes, feel free to connect with us and get a free quotation for an Education web app development Service. We are just a text away from you. Education web apps are trending in the market. An Education web app can help you to easily list down all the courses and keep records of the students. If you are an educational institute owner then this is probably the time to digitalize your service.",
  },
  {
    id: 5,
    images: Business,
    que: "Business Industry",
    ans: "The App Ideas is one of the most popular Software development company. We are providing digital platform services like website development, web app development, mobile app development and unique graphic designing service. Nowadays, a high number of entrepreneurs are making a high investment in developing online Businesses for increasing the profit rate and offering the best services to their customers.",
    ans2: "Are you planning to launch an Online Business in the market?",
    ans3: "If Yes, then this is probably the best time for you to make an investment and launch your online business in the market. People are probably looking for some of the best web apps to be introduced in the market which can make their work easier and efficient. If you have an idea then feel free to connect with us and get a free quotation for your ideas.",
  },
  {
    id: 6,
    images: Recruitment,
    que: "Recruitment Industry",
    ans: "The App Ideas is one of the foremost recruitment industry web app development company. We have a team of highly skilled developers as well as designers, who will offer advanced features and unique graphics which can add value to your recruitment web app. In this present time, it is very important to have online platforms for your recruitment services to make the work more convenient.",
    ans2: "Are you planning to launch a recruitment Web app in the market?",
    ans3: "If yes then, feel free to connect with us and discuss your requirements, we are just a click away. A Recruitment web app can make the process much easier for you as an owner. You can easily manage the data as well as recruit people easily online. We follow simple steps like requirements gathering, analyzing, resource allocation, updating clients related to the projects and deploying it on time.",
  },
  {
    id: 7,
    images: Software,
    que: "Software Industry",
    ans: "The App Ideas is one of the leading web and app development company. We offer the foremost services like E-commerce development, mobile app development, web app development and website app development. We are highly expertise in providing designing services like offering unique graphics design along with the development. We have also provided the best solution to the Software Industry.",
    ans2: "Are you planning to launch a Software Industry Web solution in the market?",
    ans3: "If Yes , then feel free to connect with us. We have a pool of talented developers as well as designers who are proficient in offering the best online platforms services. We are also working with the software industry to deliver high-class web app to them which can increase their profit. We initially gather the requirements, analyze requirements, allocate the resources, take clients approval and deploy the project.",
  },
  {
    id: 8,
    images: Finance,
    que: "Finance Industry",
    ans: "The App Idea is one of the successful Finance Software development services. We are highly efficient in offering the best online solution for the finance industry at the best rates. We have a team of highly skilled developers and designers who have years of experience in providing the victorious solution for the finance industry by adding some of the advanced features into the web app.",
    ans2: "If yes then, we are just a call away, Feel free to connect with us and get a free quotation for your Finance Industry Web App. Having a Finance Web App can help you to easily manage all the services through a web app. This web app can help you to easily track down your progress and make improvements as per requirements. At this present time, it is highly recommended to have the best web app for your Finance Industry.",
  },
  {
    id: 9,
    images: Insurance,
    que: "Insurance Industry",
    ans: "The App Ideas is one of the most popular IT services providers. We offer the services like web app development, mobile app development, website development, E-commerce platforms development and Graphic designing services at the best possible rates by integrating advanced features and unique designing services. The insurance industry is now also integrating digitization to make the process much easier.",
    ans2: "Are you planning to launch an Insurance Web app in the market?",
    ans3: "If you are, then this is probably the time for you to take a step ahead and connect with us. Let’s have a quick call about your requirements and we will offer you the best quotation for your insurance web app services. We follow a simple process of gathering information and analyzing it, providing the quotation, allocating dedicated developers, taking clients approval after every module development and deploying the project.",
  },
];

const WebDev = () => {
  const [activeService, setActiveService] = useState("website_development");
  const [activeServe, setActiveServe] = useState("food_industry");
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
      <Helmet title="Custom Web Development Company India - The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="WEB DEVELOPMENT"
        des="Web development is used for various needs nowadays. The sector offers hundreds of online e-commerce, restaurant ordering, e-learning, dating, taxi booking, doctor hiring, and other options. App Ideas is a leading software company with outstanding web developers. Our skilled developers work hard to suit your web development needs. Our experience and dedication will exceed your expectations for unique solutions and platform enhancements. Join us to increase your company's digital presence with web development."
        list1="7+ Years of experience in Web Development"
        list2="Best Web Development Company"
        list3="Dedicated team for your Web Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Web Development"
        service2="Web Development Services"
        service3="Website Development Company"
        image1={mobileweb}
        image2={mobileaap}
        image3={webapp}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why choose us for Website Designing & Development?</h3>
            <p>
              Our unique ideas and professional web developers at The App Ideas
              will design your online presence to attract your target audience.
              Be unique in today's digital landscape, where every company seeks
              its niche. Unique website solutions are preferred over generic
              ones. To attract and engage website visitors, we tailor our
              approach to your objectives and brand message. We develop websites
              for startups and established companies that reflect their brands
              and engage audiences. We can help you improve your website and
              stay ahead online.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_development")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "website_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={smartphone}
                      alt="Website-Development"
                      className="img-fluid"
                    />
                    <p>
                      Website
                      <br /> Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("custom_website")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "custom_website" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={CustomWebsite}
                      alt="Custom Website-Development"
                      className="img-fluid"
                    />
                    <p>
                      Custom Website <br />
                      Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_improvment")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "website_improvment" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={webimprovement}
                      alt="website-improvement"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Improvement
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_maintenance")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "website_maintenance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Websitemaintenance}
                      alt="Website-maintenance"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Maintenance
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("web_app")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "web_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={web} alt="web-App" className="img-fluid" />
                    <p>
                      Web <br /> App
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_upgrade")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "website_upgrade" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={websiteupgrade}
                      alt="website-upgrade"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Upgrade
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_redesign")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "website_redesign" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={websiteredesign}
                      alt="Website-redesign"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Redesign
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("web_api")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "web_api" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={webAPICreations}
                      alt="web-API-Creations"
                      className="img-fluid"
                    />
                    <p>
                      Web APIs <br />
                      Creations
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("integration")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "integration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Integration}
                      alt="Integration"
                      className="img-fluid"
                    />
                    <p>
                      Integration With The <br />
                      Third Parties APIs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "website_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Development</h3>
                    <p className="Title_para">
                      With significant knowledge and skill, we provide top-notch
                      web development services using the newest technologies.
                      Our staff has completed several website projects,
                      providing customized solutions at low prices to match our
                      customers' demands.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Website Development services?
                    </p>
                    <p className="Title_para">
                      If yes, invest in digital firm development immediately.
                      We're thrilled to help you construct a profitable website
                      development service for your business. Our process begins
                      with your specifications, extensive analysis, discussions,
                      regular module development updates, and timely project
                      execution. Let us assist you improve your digital presence
                      throughout this innovative journey.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "custom_website" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom Website Development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software developing
                      company. We are highly experts in providing the best
                      solution for mobile app development, web app development
                      and e-commerce development. Along with the templates
                      design, we also offer the best custom website design for
                      all kinds of niches at the best rates. We have worked on
                      various customized website development services and
                      deployed the project on the given deadlines with all the
                      advanced features.
                    </p>
                    <p className="Title_para">
                      Are you looking for a Custom website development company?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. We have years of
                      experience in offering the best custom website development
                      services at the best rates. Our developers initially
                      gather the requirements, understand them or analyse them
                      fully, allocate a dedicated developer, work on the
                      modules, take clients approval and deploy the project on
                      the given timelines. This is probably the time for you to
                      take a step further and connect with us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_improvment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Improvement</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have years of experience in
                      delivering the best website services. Along with
                      development and designing, we also offer website
                      improvement services. Many Services already have a website
                      service but due to changes in technology sometimes it is
                      very important to improve your website and make it
                      compatible with the trendy technology.
                    </p>
                    <p className="Title_para">
                      Are you looking for a website designing company?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are only a chat away from you. We
                      have worked on various website improvement projects.
                      Sometimes it is very important for you to make some
                      improvements to your website to make it work faster and
                      increase the engagement of the users. Firstly, we gather
                      the requirements, suggest some improvement as per the
                      trend, take the approval of the client in each module
                      development and deploy the project at the best possible
                      rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_maintenance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Maintenance</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web app development
                      services. Along with the development of the mobile app and
                      website, we are also proficient in offering the best
                      designing services at the best possible rates. We also
                      offer website maintenance services for all kinds of
                      business niches. After the deployment of the project to
                      our clients, we offer free three months of maintenance
                      support.
                    </p>
                    <p className="Title_para">
                      Are you looking for a Website Maintenance Company?
                    </p>
                    <p className="Title_para">
                      If yes, then without taking much time feel free to connect
                      with us at any time. We have years of experience in
                      providing the best web development services. We have a
                      team of highly skilled developers who are experts in
                      offering the best kinds of services in a given timeline as
                      well as at the best possible rates. Feel free to connect
                      with us at any time for your website maintenance services
                      and we promise to offer you the best website maintenance
                      services.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "web_app" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web app</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and mobile
                      app development company. We have a team of highly skilled
                      developers as well as designing who are proficient in
                      offering the best web app development services. We have
                      worked on various projects related to web app development
                      for various industries or business categories. We also
                      advise our clients about the trending technology and
                      features which are on demand.
                    </p>
                    <p className="Title_para">
                      Are you looking for any Web app development company?
                    </p>
                    <p className="Title_para">
                      If yes then, you are at the right place. You can directly
                      connect with us and discuss your project requirements with
                      us as well as get a free quote for it. We have a team of
                      highly skilled Web developers and designers who will first
                      get all the information from the clients, try to analyze
                      it, start the project, take the clients approval and
                      deploy the project on time.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_upgrade" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Upgrade</h3>
                    <p className="Title_para">
                      The App Ideas is also proficient in offering Website
                      Upgrade services to you at the best possible rates. We
                      offer the best software development like website
                      development, web app development, mobile app developer,
                      E-commerce development as well as best graphics designing
                      services. Website Upgrade is very important to keep your
                      website fast-loading as well as to get a better rank.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Website Upgrade Services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the time for you to make an
                      upgrade website list and connect with us. We can check
                      your requirements and revert you back as soon as possible.
                      We have a team of highly skilled developers and designers
                      who are experts in adding some of the advanced features
                      and upgrading your website easily. Feel free to connect
                      with us and access our best resources for upgrading your
                      website.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_redesign" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Redesign</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with offering the best
                      development services with the trending technology, we are
                      also proficient in offering online platform designing
                      services. We have a team of highly skilled designers who
                      are experts in providing unique designs as per the
                      expectation of the clients and as per the business
                      categories.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Website Redesign services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is the best time for you to take a step
                      ahead and hire us for the best website redesign services.
                      Website redesigning is very important in this present time
                      because to keep your web app at the top on the google
                      search engines, it is very important to keep it updated
                      and design it as per the trending website designing
                      services. Feel free to connect with us and get a free
                      quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "web_api" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web APIs creations</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly experienced in
                      providing the best services for software development
                      services like website development, web app development
                      mobile app development. We also have a team of highly
                      expert designers who offer the best solution at the best
                      rates. We are also proficient in developing Web APIs for
                      all kinds of business niches.
                    </p>
                    <p className="Title_para">
                      Are you looking for Web APIs Creation services?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. Here we have a
                      team of highly experienced web app developers who are
                      experienced in Web APIs Creation services. We have
                      developed various Web APIs for web apps and deployed them
                      at the given deadlines. We initially get the requirements,
                      analyses them, work on them and deliver them at the
                      correct time.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "integration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Integration with the third parties APIs
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We are experienced in offering the
                      best software services along with the integration with the
                      third parties APIs in the web development solution. We
                      have a team of highly skilled people who are experts and
                      provide the solution at the best time as well as at the
                      best cost.
                    </p>
                    <p className="Title_para">
                      Are you looking for services to integrate third parties
                      APIs into your web app?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are. As mentioned earlier, we are
                      highly proficient in providing the best web APIs services.
                      We are also Skilled in integrating the web with the third
                      parties APIs if its client’s requirements. We have years
                      of experience in providing the best services to our
                      clients at the best possible rates. If you are looking for
                      services like this then feel free to connect with us and
                      get a free quotation.
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
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div
                data-aos="flip-left"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Technologies/wp.png")}
                  alt="Wordpress"
                  className="img-fluid"
                />
                <h2>Wordpress</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div
                data-aos="flip-right"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Technologies/php.png")}
                  alt="PHP"
                  className="img-fluid"
                />
                <h2>PHP</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div
                data-aos="flip-left"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Technologies/an.png")}
                  alt="Angular"
                  className="img-fluid"
                />
                <h2>Angular</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div
                data-aos="flip-right"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Technologies/react-js.png")}
                  alt="React-Js"
                  className="img-fluid"
                />
                <h2>ReactJs</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div
                data-aos="flip-left"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Technologies/node-js.png")}
                  alt="Node-Js"
                  className="img-fluid"
                />
                <h2>Node Js</h2>
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
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("food_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "food_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Food}
                      alt="Food-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Food <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("retail_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "retail_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Retail}
                      alt="Retail-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Retail <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("transport_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "transport_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Transport}
                      alt="Transport-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Transport <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("education_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "education_industry" &&
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
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("business_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "business_industry" &&
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
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("recruitment_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "recruitment_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Recruitment}
                      alt="Recruitment-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Recruitment <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("software_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "software_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Software}
                      alt="Software-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Software <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("finance_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "finance_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Finance}
                      alt="Finance-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Finance <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("insurance_industry")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeServe === "insurance_industry" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image
                      src={Insurance}
                      alt="Insurance-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Insurance <br />
                      Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeServe === "food_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Food Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the Best Food Industry web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      offering the best software development services at the
                      best possible rates. We have years of experience in
                      providing the best solution for the Food or Restaurant
                      Industry.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Food Industry Web App in the
                      market?
                    </p>

                    <p className="Title_para">
                      Nowadays, a high number of startups or business news are
                      shifting towards digitization because it offers the
                      convenience of accessing the services. On the other hand,
                      people are also more inclined towards digital platforms
                      because it is time effective. If you are planning then
                      this is probably the time to take a step ahead and launch
                      your own Food Industry web app in the market.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "retail_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Retail Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the Foremost Retail Industry web
                      and app development company. We are highly experienced in
                      providing the best software solution like E-commerce
                      development, mobile app, web app and website development.
                      We are also proficient in providing unique designing
                      services for all kinds of industries including the retail
                      business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Retail Industry Web app in
                      the market?
                    </p>

                    <p className="Title_para">
                      If yes then connect with us and get a free quote. In this
                      present time, all kinds of business industries are
                      converting their services into digital services or online
                      platforms because they offer convenience as well as
                      time-saving methods. This is probably the best time for
                      you to convert your retail business into a successful web
                      app to generate high profits and get more users attention.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "transport_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Transport Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the popular Transport Industry web
                      development services. We are highly skilled and expertise
                      in offering the best online platforms development services
                      including in the transport industry. In the Transport
                      industry, it is very important to have a web app, so it
                      will be very easy for the business owners to track down
                      their services and manage the work accordingly.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Transport Industry Web app in
                      the market?
                    </p>

                    <p className="Title_para">
                      If Yes, then this is probably the best time for you to
                      launch a Transport industry web app at the best rates. By
                      having a Transport Industry web app, you can easily track
                      down your drivers, manage the services from any place,
                      convenience of managing the services at any time, have
                      great staff management and more.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "education_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Education Industry</h3>
                    <p className="Title_para">
                      The App Ideas is highly proficient in developing the best
                      Education industry web solution. We have a team of highly
                      experienced web app developers who are experts in
                      delivering the best education web and app solutions at the
                      best rates. Along with the development services, we also
                      offer the best designing services for an education
                      website, web app and mobile app.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Education Industry Web app
                      in the market?
                    </p>

                    <p className="Title_para">
                      If yes, feel free to connect with us and get a free
                      quotation for an Education web app development Service. We
                      are just a text away from you. Education web apps are
                      trending in the market. An Education web app can help you
                      to easily list down all the courses and keep records of
                      the students. If you are an educational institute owner
                      then this is probably the time to digitalize your service.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "business_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Business Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular Software
                      development company. We are providing digital platform
                      services like website development, web app development,
                      mobile app development and unique graphic designing
                      service. Nowadays, a high number of entrepreneurs are
                      making a high investment in developing online Businesses
                      for increasing the profit rate and offering the best
                      services to their customers.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Online Business in the
                      market?
                    </p>

                    <p className="Title_para">
                      If Yes, then this is probably the best time for you to
                      make an investment and launch your online business in the
                      market. People are probably looking for some of the best
                      web apps to be introduced in the market which can make
                      their work easier and efficient. If you have an idea then
                      feel free to connect with us and get a free quotation for
                      your ideas.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "recruitment_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Recruitment Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost recruitment industry
                      web app development company. We have a team of highly
                      skilled developers as well as designers, who will offer
                      advanced features and unique graphics which can add value
                      to your recruitment web app. In this present time, it is
                      very important to have online platforms for your
                      recruitment services to make the work more convenient.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a recruitment Web app in the
                      market?
                    </p>

                    <p className="Title_para">
                      If yes then, feel free to connect with us and discuss your
                      requirements, we are just a click away. A Recruitment web
                      app can make the process much easier for you as an owner.
                      You can easily manage the data as well as recruit people
                      easily online. We follow simple steps like requirements
                      gathering, analyzing, resource allocation, updating
                      clients related to the projects and deploying it on time.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "software_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Software Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We offer the foremost services like
                      E-commerce development, mobile app development, web app
                      development and website app development. We are highly
                      expertise in providing designing services like offering
                      unique graphics design along with the development. We have
                      also provided the best solution to the Software Industry.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Software Industry Web
                      solution in the market?
                    </p>

                    <p className="Title_para">
                      If Yes , then feel free to connect with us. We have a pool
                      of talented developers as well as designers who are
                      proficient in offering the best online platforms services.
                      We are also working with the software industry to deliver
                      high-class web app to them which can increase their
                      profit. We initially gather the requirements, analyze
                      requirements, allocate the resources, take clients
                      approval and deploy the project.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "finance_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Finance Industry</h3>
                    <p className="Title_para">
                      The App Idea is one of the successful Finance Software
                      development services. We are highly efficient in offering
                      the best online solution for the finance industry at the
                      best rates. We have a team of highly skilled developers
                      and designers who have years of experience in providing
                      the victorious solution for the finance industry by adding
                      some of the advanced features into the web app.
                    </p>

                    <p className="Title_para">
                      If yes then, we are just a call away, Feel free to connect
                      with us and get a free quotation for your Finance Industry
                      Web App. Having a Finance Web App can help you to easily
                      manage all the services through a web app. This web app
                      can help you to easily track down your progress and make
                      improvements as per requirements. At this present time, it
                      is highly recommended to have the best web app for your
                      Finance Industry.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "insurance_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Insurance Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular IT services
                      providers. We offer the services like web app development,
                      mobile app development, website development, E-commerce
                      platforms development and Graphic designing services at
                      the best possible rates by integrating advanced features
                      and unique designing services. The insurance industry is
                      now also integrating digitization to make the process much
                      easier.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Insurance Web app in the
                      market?
                    </p>

                    <p className="Title_para">
                      If you are, then this is probably the time for you to take
                      a step ahead and connect with us. Let’s have a quick call
                      about your requirements and we will offer you the best
                      quotation for your insurance web app services. We follow a
                      simple process of gathering information and analyzing it,
                      providing the quotation, allocating dedicated developers,
                      taking clients approval after every module development and
                      deploying the project.
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

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}
      {/* Contact Section Start */}
      <ContactUs question="Are you looking for the best Web app development company?" />
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

export default WebDev;
