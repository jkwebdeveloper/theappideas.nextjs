import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from 'next/image';
import SoftwareDevelopment from "../../../public/assets/images/SERVICES/Software development/Software Development.svg";
import Custom from "../../../public/assets/images/SERVICES/Software development/Custom Softwrare Development.svg";
import SoftwareDeveloper from "../../../public/assets/images/SERVICES/Software development/Software Developer.svg";

// Service section image
import DesktopApplication from "../../../public/assets/images/SERVICES/Software development/Services we provide/Desktop Application.svg";
import WebApplication from "../../../public/assets/images/SERVICES/Software development/Services we provide/Web Application.svg";
import CRM from "../../../public/assets/images/SERVICES/Software development/Services we provide/CRM Solution.svg";
import ERP from "../../../public/assets/images/SERVICES/Software development/Services we provide/ERP Solution.svg";
import HRMS from "../../../public/assets/images/SERVICES/Software development/Services we provide/HRMS System.svg";
import SoftwareMaintenance from "../../../public/assets/images/SERVICES/Software development/Services we provide/Software Maintenance Support.svg";
import SoftwareIntegration from "../../../public/assets/images/SERVICES/Software development/Services we provide/Software integration.svg";
import SoftwareUIUX from "../../../public/assets/images/SERVICES/Software development/Services we provide/Software UI UX designing services.svg";
import SoftwareConsulting from "../../../public/assets/images/SERVICES/Software development/Services we provide/Software consulting.svg";

// Industries  section images
import Academic from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Academic and Education.svg";
import Fintech from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Fintech Industry.svg";
import Real from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Real Estate industry.svg";
import Restaurant from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Restaurant business.svg";
import Travel from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Travel and Tourism.svg";
import Construction from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Construction Industry.svg";
import IT from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/IT industry.svg";
import Healthcare from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Healthcare Industry.svg";
import Entertainment from "../../../public/assets/images/SERVICES/Software development/Industries We Serve/Entertainment Industry.svg";

import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Work from "../../../components/Workdone/Work";
import HeroSection from "../../../components/HeroSection";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header/Header";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: DesktopApplication,
    que: "Desktop Application",
    ans: "The desktop application is a software program that can be used in computers or on standalone machines for performing different tasks by an end-user. Desktop applications can be consist of game applications, media players, word editors and more. Users can easily download the desktop application so if you are planning to launch a software solution like a desktop application",
    ans2: "Are you looking for the Best Desktop Applications Services?",
    ans3: "We are from The App Ideas, which is one of the leading software development company. We are highly skilled in developing the best mobile app, web app, website app and software solution. We are highly skilled in providing the custom software development services like Desktop Applications services. Feel Free to connect with us and get a free quotation for a desktop application service.",
  },
  {
    id: 2,
    images: WebApplication,
    que: "Web Application",
    ans: "Web Applications are a type of application software that is probably developed to run on a web server. Web Application programs are run on the operating system of the device. Users need to have a good network connection, so they can access the web application from the server. If you are running a business then it is important to invest in web application development services.",
    ans2: "Are you looking for the Best Web Application services?",
    ans3: "Here we are at The App Ideas which is one of the leading web and app development company. We have a team of highly skilled developers as well as designers, who are proficient in developing the best web application for all kinds of business categories. For a business, it is quite important to have a web application as users can easily access it from the browser. For more details, feel free to connect with us and get a free quotation for your web application.",
  },
  {
    id: 3,
    images: CRM,
    que: "CRM Solution",
    ans: "CRM (Customer Relationship Management) Software is an online tool that is designed for your business to help your customers and offer them a unique as well as a seamless experience. CRM also helps in building better relationships with the customers by providing an overall detail of the customer’s interactions, keeping track of sales and prioritizing the customers and all. Having a CRM for your business can be very beneficial for you.",
    ans2: "Are you looking for the Best CRM Solutions Services?",
    ans3: "The App Ideas is one of the foremost software development company. We have years of experience in providing the best online platform development as well as designing services at the best rates. We have also worked on CRM development platforms and offers the best system by integrating advanced features and unique design. If you want to develop a CRM for your business then feel free to connect with me and get a free quotation for that.",
  },
  {
    id: 4,
    images: ERP,
    que: "ERP Solution",
    ans: "ERP Solution or which is also known as Enterprise Resource Planning is a type of software that businesses useless to manage daily activities which include accounting, project management, risk management, supply chain operation, compliances, procurement and more. It is more important to have ERP solutions, so you can easily manage the details of your business in a single software platform.",
    ans2: "Are you looking for the Best ERP Solutions Services?",
    ans3: "If yes, then here we are at The App Ideas, which is one of the popular software development company. We have a team of highly skilled developers and designers who are proficient in providing the best ERP solution for all kinds of business categories at the best rates. For more details on this, feel free to connect with us and schedule a call, so we can provide you with the best cost for your ERP solution.",
  },
  {
    id: 5,
    images: HRMS,
    que: "HRMS System",
    ans: "HRMS is also known as the Human Resources Management system. This software is mainly designed to help the human resources team easily manage all the tasks or internal functions. As you probably have an idea, that the task of HR is more complex as they need to manage the employee information. If your team is facing such kinds of problems then it is highly recommended to have an HRM to make the work more smooth for the HR team.",
    ans2: "Are you looking for the best HRMS Solutions service?",
    ans3: "If yes, then feel free to connect with me and get a free quotation for the HRMs software development services, We have a team of highly skilled developers as well as designers who are proficient in offering the best solution at the best rates. For custom HRMs development, you can directly connect with us and get an approximate costing.",
  },
  {
    id: 6,
    images: SoftwareMaintenance,
    que: "Software Maintenance Support",
    ans: "Nowadays, the demand for a software solution is increasing day by day in the market. Many businesses are using software solutions for different purposes or tasks. The software can make the work easier for the team as you can save as well as retrieve the data whenever required. But sometimes, maintenance is must require in software so it can work efficiently in new operating systems.",
    ans2: "Are you looking for the best Software maintenance support solutions service?",
    ans3: "If yes, then you are at the right place. We are highly experienced and skilled software developers who are proficient in developing a software solution for all kinds of business categories like CRM, HRMs, ERP and more. We are also providing maintenance services as well for all kinds of software platforms. Feel free to connect with us and get a free quotation.",
  },
  {
    id: 7,
    images: SoftwareIntegration,
    que: "Software integration",
    ans: "As many businesses are using a software solution to make the work easier. Some of the businesses also hire software service providers for the software integration service. Software integration is a process of collecting together the different kinds of subsystems to develop a single unified single software system. Joining the software can make the process much easier. If you are planning for a software integration service then feel free to reach us.",
    ans2: "Are you looking for the best Software Integration solution service?",
    ans3: "If yes, then this is probably the right time for you to integrate different software and have a single platform for it. We have a team of leading software developers who is efficient in providing the best software development services for all kinds of business niches. Along with that our developers are also skilled in software integration services. Feel free to connect with us, share your requirements and get a free quotation for software integration services.",
  },
  {
    id: 8,
    images: SoftwareUIUX,
    que: "Software UI/UX designing services",
    ans: "As we can clearly observe that, digitization is taking place in various kinds of fields and categories. Similarly, businesses are implementing software solutions to make the work easier for employers or for users. Designing plays a vital role in the success of software solutions. If you are planning to develop a software solution then feel free to connect with us. As with the development, we are also offering the best designing services as per the business needs.",
    ans2: "Are you looking for the best Software Designing solution service?",
    ans3: "The App Ideas is one of the leading web and app development company. We are highly experienced in providing the best online platform services like mobile app, web app, websites as well as software development services as per the client’s needs. We have years of experience in providing the best software development as well as designing services at the best possible rates. For more details, feel free to connect with us and get a quote.",
  },
  {
    id: 9,
    images: SoftwareConsulting,
    que: "Software consulting",
    ans: "Presently, many businesses, as well as startups, are investing in developing software to make their work more efficient and effective. Having a software solution can make the process faster as well as time-saving. If you are facing issues related to management in your business then this is probably the time for you to take a software consultation and launch a perfect software to make work easier.",
    ans2: "Are you looking for the best Software Consulting services?",
    ans3: "If yes then here we are just a text away. The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers, who are experts in providing the best software solutions. Our Software development experts have a strong understanding of all kinds of software and can recommend the best custom features to add as per your business requirements. Feel free to connect with us and get a free quotation.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: Academic,
    que: "Academic and Education",
    ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are proficient in providing the best software solution for all kinds of the industry including the academic and education industry. Currently, we can clearly observe that the educational industries are digitalizing to offer online courses to students.",
    ans2: "Are you planning to launch an Academic and Education Industry Software?",
    ans3: "If yes, then this is probably the best time for you. We have years of experience in providing the best solution for mobile apps, web apps, websites as well as software solutions for the education or the Academic industry. If you are running an education industry or an academic-industry then this is probably the time for you to launch a software solution to manage the data properly. Hire us and check our expertise.",
  },
  {
    id: 2,
    images: Fintech,
    que: "Fintech Industry",
    ans: "The App Ideas is one of the foremost software development company. We have a group of people who are highly skilled in developing successful software solutions for all kinds of businesses. Fintech businesses are also investing in developing software solutions that can help them in saving the data and using it. Having a software solution for a fintech can make the process briskly.",
    ans2: "Are you planning to launch a Fintech Industry Software?",
    ans3: "If yes, then this is probably the best time for you to launch software for your Fintech industry. We are highly experienced in developing software solutions for all kinds of industries at the best possible rates. If you are into the fintech industry then feel free to connect with us, discuss your requirements for fintech software development and get a free quotation.",
  },
  {
    id: 3,
    images: Real,
    que: "Real Estate industry",
    ans: "The App Ideas is one of the foremost software development company. We have skilled software developers who are providing unique designing and advanced features services for all kinds of software development services. If we talk about the Real Estate industry then a software solution can make the process much easier for them by digitalizing the platform.",
    ans2: "Are you planning to launch a Real Estate Industry Software?",
    ans3: "If yes, then without wasting much feel free to connect with us and get a free quotation for your real estate software development services. We are highly experts in providing the best services like mobile app development, web app development and website development. We are just a click away, feel free to connect with us, share your requirements and get the best quotation for real estate software development.",
  },
  {
    id: 4,
    images: Restaurant,
    que: "Restaurant business",
    ans: "The App Ideas is one of the highly popular software development company. We have years of experience in providing the best solution for all kinds of business categories like Hotel management, food court services and restaurant business. We have also worked on various online platform development services related to the restaurant industry. Having an online platform can make the work easier for your restaurant business.",
    ans2: "Are you planning to launch a Restaurant Industry software?",
    ans3: "If yes, then this is probably the best time for you to develop a Restaurant app or web app. Restaurant businesses are now converting their services into online business because by this method they can easily connect with the customers through the internet methods. If you want to digitalize your restaurant business then this is probably the best time for you to launch an online solution at the best rates.",
  },
  {
    id: 5,
    images: Travel,
    que: "Travel and Tourism",
    ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers, who are proficient in providing the best solution for all types of business categories. If we talk about the travel and tourism industry then it is also investing in digitalizing its services to enhance the user experience and to manage all the details easily from a single platform.",
    ans2: "Are you planning to launch a Travel and Tourism Industry software?",
    ans3: "If yes then you are on the right page because here we provide the best online platforms services for all kinds of business niches including the Travel and tourism industry. Having an online platform for the travel and tourism industry can be very beneficial for you as it can help you to get more users attention. Feel free to connect with us and get a free quotation for a Travel and tourism app.",
  },
  {
    id: 6,
    images: Construction,
    que: "Construction Industry",
    ans: "The App Ideas is one of the foremost software development company. We have a group of the best developers who are highly proficient in providing the best software development services, along with unique designing services. If we talk about the construction industry then this industry is also investing in digitalizing the services as it helps in increasing the customer base easily.",
    ans2: "Are you planning to launch a Construction Industry software?",
    ans3: "If yes, then this is the best time for you to make an investment in Construction software development services. We have a team of highly skilled developers as well as designers who are proficient in offering the best construction app. An online platform can be very helpful to manage the data as well as get more user attentions. For more details, feel free to connect with us and get a free quotation.",
  },
  {
    id: 7,
    images: IT,
    que: "IT industry",
    ans: "The App Ideas is one of the leading web and app development company. We have a team of highly efficient developers who are experienced in providing the best software solutions. As IT service providers are also converting their business into the online platform to make the service more accessible for the users as well as for the service providers. It is worth making an investment in digitizing the IT industry.",
    ans2: "Are you planning to launch an IT Industry Software?",
    ans3: "If yes, then this is the best time for you to access or collaborate with us for software development services. We are highly skilled in providing the best services which can help in increasing the growth of the business. We follow the simple procedure of gathering information, analyzing it, developing the software and deploying it at the best rates and on time.",
  },
  {
    id: 8,
    images: Healthcare,
    que: "Healthcare Industry",
    ans: "The App Ideas is one of the best software development company. We are highly skilled in providing the best solution for mobile app, web app and website development company. Like all businesses, Healthcare services are also launching online platforms as it makes the process faster and easier to access. Users are more inclined towards online platforms.",
    ans2: "Are you planning to launch a Healthcare`Industry Software?",
    ans3: "If yes, then feel free to connect with us and get a free quote for the healthcare industry. Nowadays, healthcare industry owners are developing software solutions because this helps in saving thousands of records easily and accessing the data whenever required. We have worked on similar some similar kinds of software solutions, so without taking much time, feel free to connect with us and get a free quotation.",
  },
  {
    id: 9,
    images: Entertainment,
    que: "Entertainment Industry",
    ans: "The App Ideas is one of the foremost web and app development company. We have years of experience who are providing the best solution for mobile app development, web app development and website development services for all kinds of business categories. Similarly, we are also proficient in delivering software solutions for the entertainment industry.",
    ans2: "Are you planning to launch an Entertainment`Industry Software?",
    ans3: "If yes, then let me tell you, this is probably the best time to make an investment in entertainment software development services. This solution can help you to easily understand the process in a much better manner as everything can be easily managed through a single online system. If you are planning to launch an entertainment software solution then feel free to reach e and get a free quote.",
  },
];

const SoftwareDev = () => {
  const [activeService, setActiveService] = useState("desktop_application");
  const [activeServe, setActiveServe] = useState("academic_education");
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
      <Helmet title="Software Development Services in India | The App ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Software development company"
        des="We at The App Ideas has a group of experienced developers as well as designers who are proficient in developing software that can be helpful for the employees, customers and business owners. We have worked on various software development services like developing CRM, software management and also in custom software development services which can be very obliging for the users. For more details, feel free to connect with us and get a free quotation for a victorious Software service."
        list1="7+ Years of experience in Software Development"
        list2="Best Software Development Company"
        list3="Dedicated team for your Software Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Software Development"
        service2="Custom Softwrare Development"
        service3="Software Developer"
        image1={SoftwareDevelopment}
        image2={Custom}
        image3={SoftwareDeveloper}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Services we provide</h3>
            <p>
              Software Development is one of the most demanding online platforms
              in the market. For most businesses, owners are launching software
              development services that can make the work more efficient for the
              users. It is advantageous to have a Software solution that can
              help manage the data easily as well as track the services which
              can save a lot of time. A software service platform can be used as
              a B2B business and can be also useful for B2C Services.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("desktop_application")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "desktop_application" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={DesktopApplication}
                      alt="Desktop-Application"
                      className="img-fluid"
                    />
                    <p>Desktop Application</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("web_application")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "web_application" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={WebApplication}
                      alt="Web-Application"
                      className="img-fluid"
                    />
                    <p>
                      Web <br />
                      Application
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("crm_solution")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "crm_solution" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={CRM} alt="CRM-Solution" className="img-fluid" />
                    <p>
                      CRM <br />
                      Solution
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("erp_solution")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "erp_solution" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={ERP} alt="ERP-Solution" className="img-fluid" />
                    <p>
                      ERP <br />
                      Solution
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("hrms_system")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "hrms_system" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={HRMS} alt="HRMS-System" className="img-fluid" />
                    <p>
                      HRMS <br />
                      System
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("software_maintanance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "software_maintanance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={SoftwareMaintenance}
                      alt="Software-Maintenance-Support"
                      className="img-fluid"
                    />
                    <p>
                      Software Maintenance <br />
                      Support
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("software_integration")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "software_integration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={SoftwareIntegration}
                      alt="Software-Integration"
                      className="img-fluid"
                    />
                    <p>
                      Software <br />
                      Integration
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("software_ui_ux")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "software_ui_ux" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={SoftwareUIUX}
                      alt="Software-UI/UX-Designing Services"
                      className="img-fluid"
                    />
                    <p>
                      Software UI/UX <br />
                      Designing Services
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("software_consulting")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "software_consulting" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={SoftwareConsulting}
                      alt="Software-Consulting"
                      className="img-fluid"
                    />
                    <p>
                      Software <br />
                      Consulting
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "desktop_application" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Desktop Application</h3>
                    <p className="Title_para">
                      The desktop application is a software program that can be
                      used in computers or on standalone machines for performing
                      different tasks by an end-user. Desktop applications can
                      be consist of game applications, media players, word
                      editors and more. Users can easily download the desktop
                      application so if you are planning to launch a software
                      solution like a desktop application
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Desktop Applications
                      Services?
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading
                      software development company. We are highly skilled in
                      developing the best mobile app, web app, website app and
                      software solution. We are highly skilled in providing the
                      custom software development services like Desktop
                      Applications services. Feel Free to connect with us and
                      get a free quotation for a desktop application service.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "web_application" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web Application</h3>
                    <p className="Title_para">
                      Web Applications are a type of application software that
                      is probably developed to run on a web server. Web
                      Application programs are run on the operating system of
                      the device. Users need to have a good network connection,
                      so they can access the web application from the server. If
                      you are running a business then it is important to invest
                      in web application development services.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Web Application services?
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the leading
                      web and app development company. We have a team of highly
                      skilled developers as well as designers, who are
                      proficient in developing the best web application for all
                      kinds of business categories. For a business, it is quite
                      important to have a web application as users can easily
                      access it from the browser. For more details, feel free to
                      connect with us and get a free quotation for your web
                      application.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "crm_solution" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">CRM Solution</h3>
                    <p className="Title_para">
                      CRM (Customer Relationship Management) Software is an
                      online tool that is designed for your business to help
                      your customers and offer them a unique as well as a
                      seamless experience. CRM also helps in building better
                      relationships with the customers by providing an overall
                      detail of the customer’s interactions, keeping track of
                      sales and prioritizing the customers and all. Having a CRM
                      for your business can be very beneficial for you.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best CRM Solutions Services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have years of experience in providing the best
                      online platform development as well as designing services
                      at the best rates. We have also worked on CRM development
                      platforms and offers the best system by integrating
                      advanced features and unique design. If you want to
                      develop a CRM for your business then feel free to connect
                      with me and get a free quotation for that.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "erp_solution" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">ERP Solution</h3>
                    <p className="Title_para">
                      ERP Solution or which is also known as Enterprise Resource
                      Planning is a type of software that businesses useless to
                      manage daily activities which include accounting, project
                      management, risk management, supply chain operation,
                      compliances, procurement and more. It is more important to
                      have ERP solutions, so you can easily manage the details
                      of your business in a single software platform.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best ERP Solutions Services?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are at The App Ideas, which is one of
                      the popular software development company. We have a team
                      of highly skilled developers and designers who are
                      proficient in providing the best ERP solution for all
                      kinds of business categories at the best rates. For more
                      details on this, feel free to connect with us and schedule
                      a call, so we can provide you with the best cost for your
                      ERP solution.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "hrms_system" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">HRMS System</h3>
                    <p className="Title_para">
                      HRMS is also known as the Human Resources Management
                      system. This software is mainly designed to help the human
                      resources team easily manage all the tasks or internal
                      functions. As you probably have an idea, that the task of
                      HR is more complex as they need to manage the employee
                      information. If your team is facing such kinds of problems
                      then it is highly recommended to have an HRM to make the
                      work more smooth for the HR team.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best HRMS Solutions service?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with me and get a free
                      quotation for the HRMs software development services, We
                      have a team of highly skilled developers as well as
                      designers who are proficient in offering the best solution
                      at the best rates. For custom HRMs development, you can
                      directly connect with us and get an approximate costing.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "software_maintanance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Software Maintenance Support
                    </h3>
                    <p className="Title_para">
                      Nowadays, the demand for a software solution is increasing
                      day by day in the market. Many businesses are using
                      software solutions for different purposes or tasks. The
                      software can make the work easier for the team as you can
                      save as well as retrieve the data whenever required. But
                      sometimes, maintenance is must require in software so it
                      can work efficiently in new operating systems.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Software maintenance support
                      solutions service?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. We are highly
                      experienced and skilled software developers who are
                      proficient in developing a software solution for all kinds
                      of business categories like CRM, HRMs, ERP and more. We
                      are also providing maintenance services as well for all
                      kinds of software platforms. Feel free to connect with us
                      and get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "software_integration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Software integration</h3>
                    <p className="Title_para">
                      As many businesses are using a software solution to make
                      the work easier. Some of the businesses also hire software
                      service providers for the software integration service.
                      Software integration is a process of collecting together
                      the different kinds of subsystems to develop a single
                      unified single software system. Joining the software can
                      make the process much easier. If you are planning for a
                      software integration service then feel free to reach us.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Software Integration solution
                      service?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the right time for you to
                      integrate different software and have a single platform
                      for it. We have a team of leading software developers who
                      is efficient in providing the best software development
                      services for all kinds of business niches. Along with that
                      our developers are also skilled in software integration
                      services. Feel free to connect with us, share your
                      requirements and get a free quotation for software
                      integration services.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "software_ui_ux" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Software UI/UX designing services
                    </h3>
                    <p className="Title_para">
                      As we can clearly observe that, digitization is taking
                      place in various kinds of fields and categories.
                      Similarly, businesses are implementing software solutions
                      to make the work easier for employers or for users.
                      Designing plays a vital role in the success of software
                      solutions. If you are planning to develop a software
                      solution then feel free to connect with us. As with the
                      development, we are also offering the best designing
                      services as per the business needs.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Software Designing solution
                      service?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly experienced in
                      providing the best online platform services like mobile
                      app, web app, websites as well as software development
                      services as per the client’s needs. We have years of
                      experience in providing the best software development as
                      well as designing services at the best possible rates. For
                      more details, feel free to connect with us and get a
                      quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "software_consulting" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Software consulting</h3>
                    <p className="Title_para">
                      Presently, many businesses, as well as startups, are
                      investing in developing software to make their work more
                      efficient and effective. Having a software solution can
                      make the process faster as well as time-saving. If you are
                      facing issues related to management in your business then
                      this is probably the time for you to take a software
                      consultation and launch a perfect software to make work
                      easier.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Software Consulting services?
                    </p>
                    <p className="Title_para">
                      If yes then here we are just a text away. The App Ideas is
                      one of the leading web and app development company. We
                      have a team of highly skilled developers as well as
                      designers, who are experts in providing the best software
                      solutions. Our Software development experts have a strong
                      understanding of all kinds of software and can recommend
                      the best custom features to add as per your business
                      requirements. Feel free to connect with us and get a free
                      quotation.
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
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
              <div
                data-aos="flip-left"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Software development/Technologies/asp.net_.png")}
                  alt="Asp.Net"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Asp.Net</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
              <div
                data-aos="flip-right"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Software development/Technologies/dnn.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>DotNetNuke</h2>
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
                  onClick={() => setActiveServe("academic_education")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "academic_education" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Academic}
                      alt="Academic-Education"
                      className="img-fluid"
                    />
                    <p>
                      Academic And <br />
                      Education
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("fintech")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "fintech" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Fintech}
                      alt="Fintech-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Fintech <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("real_estate")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "real_estate" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={Real} alt="Real-Estate" className="img-fluid" />
                    <p>
                      Real Estate <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("restaurant_business")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "restaurant_business" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Restaurant}
                      alt="Restaurant-Business"
                      className="img-fluid"
                    />
                    <p>
                      Restaurant <br />
                      Business
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("travel_tourism")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "travel_tourism" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Travel}
                      alt="Travel-Tourism"
                      className="img-fluid"
                    />
                    <p>
                      Travel And <br />
                      Tourism
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("construction")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "construction" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Construction}
                      alt="Construction-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Construction <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("IT_industry")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "IT_industry" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={IT} alt="IT-Industry" className="img-fluid" />
                    <p>
                      IT <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("healthcare")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "healthcare" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Healthcare}
                      alt="Healthcare-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Healthcare <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("entertainment")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "entertainment" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Entertainment}
                      alt="Entertainment-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Entertainment <br />
                      Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeServe === "academic_education" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Academic and Education</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      providing the best software solution for all kinds of the
                      industry including the academic and education industry.
                      Currently, we can clearly observe that the educational
                      industries are digitalizing to offer online courses to
                      students.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Academic and Education
                      Industry Software?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you. We
                      have years of experience in providing the best solution
                      for mobile apps, web apps, websites as well as software
                      solutions for the education or the Academic industry. If
                      you are running an education industry or an
                      academic-industry then this is probably the time for you
                      to launch a software solution to manage the data properly.
                      Hire us and check our expertise.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "fintech" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fintech Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a group of people who are highly skilled
                      in developing successful software solutions for all kinds
                      of businesses. Fintech businesses are also investing in
                      developing software solutions that can help them in saving
                      the data and using it. Having a software solution for a
                      fintech can make the process briskly.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Fintech Industry Software?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      launch software for your Fintech industry. We are highly
                      experienced in developing software solutions for all kinds
                      of industries at the best possible rates. If you are into
                      the fintech industry then feel free to connect with us,
                      discuss your requirements for fintech software development
                      and get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "real_estate" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Real Estate industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have skilled software developers who are
                      providing unique designing and advanced features services
                      for all kinds of software development services. If we talk
                      about the Real Estate industry then a software solution
                      can make the process much easier for them by digitalizing
                      the platform.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Real Estate Industry
                      Software?
                    </p>
                    <p className="Title_para">
                      If yes, then without wasting much feel free to connect
                      with us and get a free quotation for your real estate
                      software development services. We are highly experts in
                      providing the best services like mobile app development,
                      web app development and website development. We are just a
                      click away, feel free to connect with us, share your
                      requirements and get the best quotation for real estate
                      software development.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "restaurant_business" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Restaurant business</h3>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular software
                      development company. We have years of experience in
                      providing the best solution for all kinds of business
                      categories like Hotel management, food court services and
                      restaurant business. We have also worked on various online
                      platform development services related to the restaurant
                      industry. Having an online platform can make the work
                      easier for your restaurant business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Restaurant Industry software?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      develop a Restaurant app or web app. Restaurant businesses
                      are now converting their services into online business
                      because by this method they can easily connect with the
                      customers through the internet methods. If you want to
                      digitalize your restaurant business then this is probably
                      the best time for you to launch an online solution at the
                      best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "travel_tourism" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Travel and Tourism</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers, who are proficient in
                      providing the best solution for all types of business
                      categories. If we talk about the travel and tourism
                      industry then it is also investing in digitalizing its
                      services to enhance the user experience and to manage all
                      the details easily from a single platform.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Travel and Tourism Industry
                      software?
                    </p>
                    <p className="Title_para">
                      If yes then you are on the right page because here we
                      provide the best online platforms services for all kinds
                      of business niches including the Travel and tourism
                      industry. Having an online platform for the travel and
                      tourism industry can be very beneficial for you as it can
                      help you to get more users attention. Feel free to connect
                      with us and get a free quotation for a Travel and tourism
                      app.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "construction" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Construction Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a group of the best developers who are
                      highly proficient in providing the best software
                      development services, along with unique designing
                      services. If we talk about the construction industry then
                      this industry is also investing in digitalizing the
                      services as it helps in increasing the customer base
                      easily.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Construction Industry
                      software?
                    </p>
                    <p className="Title_para">
                      If yes, then this is the best time for you to make an
                      investment in Construction software development services.
                      We have a team of highly skilled developers as well as
                      designers who are proficient in offering the best
                      construction app. An online platform can be very helpful
                      to manage the data as well as get more user attentions.
                      For more details, feel free to connect with us and get a
                      free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "IT_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">IT industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly efficient
                      developers who are experienced in providing the best
                      software solutions. As IT service providers are also
                      converting their business into the online platform to make
                      the service more accessible for the users as well as for
                      the service providers. It is worth making an investment in
                      digitizing the IT industry.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an IT Industry Software?
                    </p>
                    <p className="Title_para">
                      If yes, then this is the best time for you to access or
                      collaborate with us for software development services. We
                      are highly skilled in providing the best services which
                      can help in increasing the growth of the business. We
                      follow the simple procedure of gathering information,
                      analyzing it, developing the software and deploying it at
                      the best rates and on time.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "healthcare" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Healthcare Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the best software development
                      company. We are highly skilled in providing the best
                      solution for mobile app, web app and website development
                      company. Like all businesses, Healthcare services are also
                      launching online platforms as it makes the process faster
                      and easier to access. Users are more inclined towards
                      online platforms.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Healthcare`Industry Software?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us and get a free
                      quote for the healthcare industry. Nowadays, healthcare
                      industry owners are developing software solutions because
                      this helps in saving thousands of records easily and
                      accessing the data whenever required. We have worked on
                      similar some similar kinds of software solutions, so
                      without taking much time, feel free to connect with us and
                      get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "entertainment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Entertainment Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web and app
                      development company. We have years of experience who are
                      providing the best solution for mobile app development,
                      web app development and website development services for
                      all kinds of business categories. Similarly, we are also
                      proficient in delivering software solutions for the
                      entertainment industry.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Entertainment`Industry
                      Software?
                    </p>
                    <p className="Title_para">
                      If yes, then let me tell you, this is probably the best
                      time to make an investment in entertainment software
                      development services. This solution can help you to easily
                      understand the process in a much better manner as
                      everything can be easily managed through a single online
                      system. If you are planning to launch an entertainment
                      software solution then feel free to reach e and get a free
                      quote.
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
      <Work />
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
      <FAQ />
      <ContactUs question="Are you looking for the best Software development Agency?" />
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

export default SoftwareDev;
