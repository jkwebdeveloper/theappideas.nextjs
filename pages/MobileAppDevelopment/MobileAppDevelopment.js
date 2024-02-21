import { React, useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "../../components/Workdone/Work";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';

import TestiMonial from "../../components/Testimonial/TestiMonial";
// import mobileApp from "../../public/assets/images/MobileAppDev/Mobile App Development Company/Mobile App Development.svg";

import mobileApp from "../../public/assets/images/SERVICES/Mobile-App-dev/Mobile App Development.svg";
import Application from "../../public/assets/images/SERVICES/Mobile-App-dev/Mobile Application Development Company.svg";
import Mobileapplication from "../../public/assets/images/SERVICES/Mobile-App-dev/mobile app developer.svg";

// Services we provide
import IPhoneapp from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/IPhone App Development.svg";
import Ipadeapp from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/IPad Mobile app development.svg";
import Androidapp from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Android Mobile app development.svg";
import Androidtablet from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Android Tablet app development.svg";
import Reskinning from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile App Reskinning.svg";
import Redesigning from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile App Redesigning.svg";
import Upgradation from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile App Upgradation.svg";
import Mobileappsupport from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile app Support and maintenance.svg";
import Crossplatform from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Cross-platform Mobile Apps.svg";

// Industries We Serve
import Shopping from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Shopping _ E-Commerce.svg";
import Education from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Education and E-Learning.svg";
import Banking from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Banking and finance.svg";
import Travel from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Travel and Tourism.svg";
import Food from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Food and Drink.svg";
import SocialNetworking from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Social Networking.svg";
import lifestyle from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Lifestyle.svg";
import Real from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Real Estate.svg";
import health from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Health and Fitness.svg";

import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/HeroSection";
import { Helmet } from "react-helmet";
import FAQ from "../../components/FAQ";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: IPhoneapp,
    que: "IPhone App Development",
    ans: "The App Ideas is one of the leading web as well as mobile app development company. We are highly experienced in providing the best Mobile app services for Android devices as well as for IOS devices. We have a team of highly skilled IOS app developers who are efficient in providing successful iPhone app development services. We are highly expert in deploying successful iPhone Mobile app development as per the client’s requirements.",
    ans2: "Are you looking for the best iPhone App Development services?",
    ans3: "If Yes, then without taking much time, let’s get connected. We are happy to help you to launch a successful iPhone Mobile app services which will be very profitable for your business. We mainly follow the steps like initially, we gather the requirements, analyze the client’s requirements, have a meeting for clearing all the doubt of the clients, divide the overall project into milestones, take clients approval in every stage and deliver the project on time.",
  },
  {
    id: 2,
    images: Ipadeapp,
    que: "Ipad App Development",
    ans: "The App Ideas is one of the leading iPad mobile app development. We offer the best mobile app development services that assist various startups and businesses in converting their offline business to online business. We have a team of highly skilled and experienced developers in designing and developing mobile app solution which is stable, customize and can be future of the industry.",
    ans2: "In our portfolio section, you can check our past projects. Our iPad app developers are proficient in providing the best mobile app services for different niches and categories of the business. We first gather the overall requirements from the clients, analyze the requirements, arrange a meeting with the clients, provide a proposal and then after clearly everything finalizes the project at the best rates. For every mobile app and web app development including iPad app development, we strictly follow the agile methodology.",
    ans3: "Are you looking for the best iPad Mobile App Development Firm? If Yes, then feel free to reach us.",
  },
  {
    id: 3,
    images: Androidapp,
    que: "Android app development",
    ans: "The App Ideas is one of the top Android Mobile app development. We offer Mobile app development services that help various businesses and startups to digitalize their services and make them successful in the market. We have a team of highly skilled Android Mobile app developers who have years of experience in developing Mobile applications that are Stable, customize, future of the industry as well as a fully functional solution for an Android Mobile App.",
    ans2: "We have experience in developing Android Mobile app development for various niches and categories of the business. We initially gather the requirements from our clients, analyze them, discuss them further with the clients and finalize the project at the best rates. We mainly work on the agile methodology in which we divide projects into small milestones, start working on the projects and takes clients confirmation at every step.",
    ans3: "Are you looking for the best iPad Mobile App Development Firm? If Yes, then feel free to reach us. Are you looking for the best Android Mobile App Development Firm? If Yes, then feel free to reach us.",
  },
  {
    id: 4,
    images: Androidtablet,
    que: "Android app Tablet development",
    ans: "The App Ideas is one of the leading software development company which offers Android Tablet app development services. Nowadays, along with the web and mobile app development, users are also more inclined towards the different sizes of devices for convenience. Due to the increasing popularity of Android devices, the demand for the Android app is also increased for different devices.",
    ans2: "Many of the businesses or startups are also making investments in the development of the Android Tablet app. We can initially gather, understand and analyze the requirements in a proper way. After that, our experts also suggest some of the changes to the requirements by keeping the future as a reference and then finalize the project at the best rates.",
    ans3: "Are you looking for services for successful Android Tablet app Development? If yes, then feel free to reach and discuss further.",
  },
  {
    id: 5,
    images: Reskinning,
    que: "Mobile App Reskinning",
    ans: "Currently, the field like Shopping and E-commerce business is booming in the market. Along with all the digital services, the E-commerce business, as well as Shopping markets, are converting their services into online platforms like websites, web apps and mobile apps in the market. In this digital era, many users are shifting towards the digital platform because it offers the convenience of services, time-saving and cost-effective for the people. Many of the new business owners and entrepreneurs are making high investments in an E-commerce store because the demand for these services is increasing day by day.",
    ans2: "E-commerce(Electronic Commerce) and Shopping is an online platform that helps in buying and selling goods as well as the services, transmitting of data and funds and the major requirement is the Internet. This business transaction occurs in business to business, consumer to consumer, business to consumer and consumer to business. E-commerce also encompasses other activities including internet banking, online auctions, online ticketing and payment gateways.",
    ans3: "Are you thinking of launching any Shopping and E-commerce digital solutions in the market? If Yes then feel free to reach us and get a free quote.",
  },
  {
    id: 6,
    images: Redesigning,
    que: "Mobile App Redesigning",
    ans: "Mobile app redesigning is one of the most popular services in the current trends. Some of the business owners launched the beta version before launching the final product in the market to gets user feedback. After gathering get feedback, sometimes mobile app owner has to redesign their mobile app before launching it into the market. Mobile App redesigning is a very important service because from time to time mobile app needs to be redesign to make them better as well as attractive as per the trend.",
    ans2: "The App Ideas is one of the leading web and app development company. Along with the best development services, we also offer the best mobile app designing and redesigning services at the best rates. We first gather the client’s requirements, understand as well as analyze them and then start the process. We have a team of highly skilled designers who will provide the best Mobile app redesigning services at the best rates.",
    ans3: "Are you looking for the best Mobile app Redesigning? If Yes, then feel free to reach us.",
  },
  {
    id: 7,
    images: Upgradation,
    que: "Mobile App Upgradation",
    ans: "Mobile App upgradation is very important for business owners who have a mobile application or who are running their business through a mobile app. With the timings, things need to change or upgrade like a mobile app to keep it relevant with the current business. To stay ahead with the competitors it is very important for you to upgrade your mobile app from time to time.",
    ans2: "Mobile app upgradation helps business owners to integrate newly introduced features and functionality into the app. If you observe the current trend then you can Clearly observe that an operating system updates in a short time period. Along with the mobile app development, The App Ideas also offer the services of Mobile app upgradation at the best possible price without changing the concept of the mobile app.",
    ans3: "Are you looking for the best Mobile App upgradation? If Yes, then feel free to reach us.",
  },
  {
    id: 8,
    images: Mobileappsupport,
    que: "Mobile app Support and Service",
    ans: "Along with the mobile app and web app development, The App Ideas also offers the services like Mobile app Support and maintenance. The services and maintenance of the mobile app play a crucial role in the success of the business or an online business. Many of the business owners avoid these support and maintenance services which lead to the failure of the mobile app after some period because it is very important to maintain the code from time to time to make it compatible with the newly introduced software updates.",
    ans2: "The App Ideas offers the services of web and mobile app development, the UI/UX designing of the software as well as also offers the support and maintenance services after deploying the projects to the clients. We keep our team updated with the newly introduced technology and updates in the codes.",
    ans3: "If you are looking for Mobile app support and maintenance services then feel free to reach us.",
  },
  {
    id: 9,
    images: Crossplatform,
    que: "Cross-platform Mobile Apps",
    ans: "Nowadays, Cross-platform technology is getting popular day by day because there is a huge range of mobile devices and platforms are available in the market. Mobile app flexibility is very important in this present time if you are targeting a huge number of users. If you are planning to launch a single mobile app platform that can be compatible with various operating systems then Cross-platform technology is one of the best options for your business mobile app development.",
    ans2: "Along with the best web app and mobile app development, The App Ideas also provide the services like cross platforms app development. Cross-platform technology helps in developing mobile apps for multiple devices as well as multiple platforms. Cross-platform technology provides the flexibility and easy to use mobile app solution for a successful business. The App Ideas strictly follow the agile methodology for the development of the software services. We offer cross-platform technology with unique design and the best possible rates.",
    ans3: "Are you looking for the best cross-platform technology? If Yes, then feel free to reach us.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: Shopping,
    que: "Shopping & E-Commerce",
    ans: "We are highly experienced in providing the best software development services to each niche with unique designing and development services as well as at the best costing. We have a team of highly skilled developers as well as designers who initially try to understand the client’s requirements.",
    ans2: "Currently, many business owners are shifting their services into online platforms like websites, web apps or mobile apps. It is beneficial to convert your business into online platforms because this makes the work easier for you as well as for your users.",
    ans3: "Are you planning to launch a Shopping and E-commerce Store in the market?",
    ans4: "If Yes, then feel free to connect with us. Let’s have a quick call to discuss your requirements in detail. Our Process starts from Requirements Gathering and Analysis, The meeting for clearing out the questions, Project Estimation and Proposal, Resources and team allocation, Daily/Weekly updates and the deployment of the projects",
  },
  {
    id: 2,
    images: health,
    que: "Health and Fitness",
    ans: "The App Ideas is one of the leading web and app development companies. We have a team of proficient developers and designers who are skilled to offer the best software development services. We offer software development like website development, web and mobile app development for various niches by integrating the best functionality with the unique designing components.",
    ans2: "The App Ideas is one of the leading web and app development companies. We have a team of proficient developers and designers who are skilled to offer the best software development services. We offer software development like website development, web and mobile app development for various niches by integrating the best functionality with the unique designing components.",
    ans3: "Are you planning to launch Health and Fitness online platform?",
    ans4: "If the answer is yes, then without taking much time reach out and get a free quotation for a Heath and Fitness software development. Our working model is based on gathering the requirements of the clients, analyzing, offer them relevant suggestions, prepare proposals and finalize the project by allocating a project manager and deploy the project on the timeline with the best prices.",
  },
  {
    id: 3,
    images: Education,
    que: "Education and E-Learning",
    ans: "The App Ideas is one of the leading and best Software development service firms. We are highly expert and experiences in providing unique design and development services for different niches or categories of the business.",
    ans2: "Nowadays, we can clearly observe that many business owners, entrepreneurs and startups are making high investments in online platform development. Like all the other services, Educational institutes are also developing their web and mobile app to build their online presence in the market. Having an E-learning website or mobile app can be very beneficial if you are involved in the Educational industry.",
    ans3: "Are you planning to launch an E-learning website or Mobile app in the market?",
    ans4: "If yes, then What are you waiting for? Let’s have a quick call to discuss your requirements in detail. We initially start by gathering the requirements from the clients, analyze the requirements, prepare a proposal with the best costing, have a meeting, finalize the project and start working. After starting the projects, we provide daily/ weekly updates to our clients and deploy the project in time.",
  },
  {
    id: 4,
    images: Banking,
    que: "Banking and finance",
    ans: "The App Ideas is one of the leading web and app development company that offers the best website, web and mobile app development with unique UI/UX designing services. We also offer the best software development services to various industries like Food Industry, E-commerce industry also including finance and Baking services.",
    ans2: "In this present time, many of the services are now digitalizing their business to make it easily accessible for users as well as to manage the user’s data conveniently. Businesses like banking and finances are now shifting towards the website, web and mobile app platform for offering easily manageable resources.",
    ans3: "Are you planning to launch a successful solution for your Business and Finance?",
    ans4: "If yes, then without thinking much ping us. Let’s connect and have a quick call to discuss your requirements in more detail. Our process includes the requirements gathering from the clients, analyze the overall requirements, send them the feature list, allocate a project manager who provides daily/weekly updates to the clients and deploy the project at the best possible rates.",
  },
  {
    id: 5,
    images: Travel,
    que: "Travel and Tourism",
    ans: "The App Ideas is one of the leading web and app development. We are highly experienced in providing the best software development like website development, web and mobile app development with unique UI/UX designing at the best rates. We are highly capable to offer successful technology-driven solutions for the Travel and Tourism Industry.",
    ans2: "Nowadays, it is very easy for people to directly check the transportation to accommodation facilities on their smartphones. There are a number of Travel and Tourism startups that had an investment in online platforms development are highly popular as well as successful now.",
    ans3: "Are you planning to take the first step towards launching a Successful Travel and Tourism Software in the market?",
    ans4: "If Yes, then feel free to reach out and get a free quotation for your Idea. Our working model is based on the steps like requirements gathering, analyzing requirements, take the client confirmation on the proposal, allocate a project manager who will provide the daily/ weekly update to the client, work on the projects with confirming everything with the client and deliver the project at the deadline.",
  },
  {
    id: 6,
    images: Food,
    que: "Food and Drink",
    ans: "We are highly experienced in providing the best software solution for the Food and Drink industry or we can also say that we have worked on various projects and offer the overall restaurant business solution including the E-menu, Food Delivery app, Food Ordering app, kitchen management system, Waiter call app and much more.",
    ans2: "This era is mainly popular as a digital era because everyone including business owners, entrepreneurs and customers are now preferring websites or mobile apps for their services. If you are running a food industry or restaurant business the this is the time to take a step forwards and digitalize your business. Make your food business successful by integrating updated features.",
    ans3: "Are you planning to launch a new Food business online platform?",
    ans4: "If Yes, then feel free to connect with us. Our process includes the requirements gathering, understanding and analyzing the requirements, Discuss everything with the clients, provide the proposal, finalize the project by allocating a project manager who provides weekly updates to the client and at the end deliver the project at an estimated time at the best cost.",
  },
  {
    id: 7,
    images: SocialNetworking,
    que: "Social Networking",
    ans: "The App Ideas is a leading web and app development company. We are highly experienced in providing the best software solution like website development, mobile app development, web app development and E-commerce platforms development. We have a team of skilled as well as expert developers and designers who will provide the best solution which helps businesses and startups in growth.",
    ans2: "Social Networking sites or platforms are one of the most popular services in this present time. It is highly observed that every smartphone users uses at least one social networking site. Social Networking site is very popular because it helps users to stay connected with each other and which completely remove the distance barrier between the users.",
    ans3: "Are you planning to launch a Social Networking platform?",
    ans4: "If Yes then what are you waiting for? Connect with us and get a free quote for launching a successful Social networking site in the market. We strictly follow the agile methodology for software development. At the initial time, we gather the overall requirements of the clients, analyze as well as finalize the ideas by sending the proposal to the client, have a meeting for further discussion about the projects, start the project by taking client approval and deliver it on time.",
  },
  {
    id: 8,
    images: lifestyle,
    que: "Lifestyle & Mobility",
    ans: "The App Ideas is one of the leading web and app development services. We have a pool of talented developers and designers who provide unique as well as the best software solution for the business. We provide the software development services like website development, web app development, mobile app development and E-commerce platform development. Along with development, we also offer designing services to the customers.",
    ans2: "Lifestyle software solutions are getting popular day by day. As we know, people are more inclined toward online platforms for accessing the services as well as managing the services. Lifestyle software is also one of the demanding industries in this present time. This service includes fashion, health, news, culture, travel, beauty and more.A",
    ans3: "Are you planning to launch a lifestyle software solution?",
    ans4: "If yes then this is the right time to move further by connecting with us and get a free quotation for your Lifestyle web and mobile app development. We initially get the clients requirements, analyze them, have a meeting to finalize the project, start working on the project and deploy the project on time.",
  },
  {
    id: 9,
    images: Real,
    que: "Real Estate",
    ans: "The App Ideas is one of the popular web app and mobile app development firms that offers the best software services at the best rates. The App Ideas has a team of talented developers and designers who provide the best solution for Web apps, mobile app, E-commerce as well as website development. We help businesses and startups to launch a successful online solution that increases the user base of the business.",
    ans2: "Real Estate is one of the most demanding as well as popular services in this present time. As per the increasing demand of this section, the real estate business owners are digitalizing their business to easily reach the customer through the online paths. As per the observation, it is clearly observed that people are now checking real estate services online.",
    ans3: "Are you planning to launch a Real Estate software solution?",
    ans4: "If yes then feel free to reach us and get a free quotation for your real estate software solution. We are highly expert in providing the best software solution for different business categories including the real estate business. For software development, we strictly follow the process like requirement gathering, analyze the requirements, have a meeting with the clients, finalize the project and deploy it on time.",
  },
];
const MobileAppDev = () => {
  const [selected, setSelected] = useState(null);
  const [activeService, setActiveService] = useState("iphone_app");
  const [activeServe, setActiveServe] = useState("shopping");
  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // const toggle = (i) => {
  //   if (selected === i) {
  //     return setSelected(null);
  //   }
  //   setSelected(i);
  // };
  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false);
    }
    SetOpenServicesProvide(i);
  };
  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return setOpenIndustries(null);
    }
    setOpenIndustries(i);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Top Mobile App Development Company India & USA - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development Company"
        des="Mobile App development is considered as the expertise field of The App Ideas. The App Ideas is a leading web and mobile app development Company. Due to the high demand for a digital solution, many business owners and entrepreneurs are making a high investment in the mobile application for increasing profit rates. The App Ideas has a team of experts who provide the foremost native, cross platforms and Hybrid platforms solutions at the best rates. Hire our developers and take advantages of our services at an affordable price."
        list1="7+ Years of experience in App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Mobile App Development"
        service2="Mobile Application Development Company"
        service3="Mobile Application Developer"
        image1={mobileApp}
        image2={Application}
        image3={Mobileapplication}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Services we provide</h3>
            <p>
              Over the years, with a team of Experienced, Skilled and Creative
              bunch of the &nbsp;
              <Link
                href="/hire-us"
                className="text-decoration-none"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });

                }}
              >
                <b>Mobile app developers</b>&nbsp;
              </Link>
              and UI/UX designer, We have worked on various themes based as well
              as customized mobile app solution which will be best for your
              Business. We help our clients with innovative ideas and unique
              designs which helps in providing the best user experiences to the
              business.
            </p>
          </div>
          <div className="row">
            <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("iphone_app")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "iphone_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={IPhoneapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      IPhone App <br /> Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("iphone_mobile")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "iphone_mobile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Ipadeapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Ipad App <br />
                      Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("android_app")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "android_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Androidapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Android App <br /> Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("android_tablet")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "android_tablet" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Androidtablet}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Android tablet <br />
                      App Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Reskinning}
                      alt="smart-watch"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Reskinning
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_redesign")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app_redesign" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Redesigning}
                      alt="Mobile-App-Redesigning"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Redesigning
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_upgrade")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app_upgrade" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Upgradation}
                      alt="Mobile-App-Upgradation"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Upgradation
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_support")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Mobileappsupport}
                      alt="service-icon"
                      className="img-fluid"
                    />
                    <p>
                      Mobile app support <br /> and service
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("crossplatform")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "crossplatform" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Crossplatform}
                      alt="Cross-platform-Mobile-Apps"
                      className="img-fluid"
                    />
                    <p>
                      Cross-platform <br /> mobile App
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "iphone_app" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">IPhone App Development</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web as well as mobile
                      app development company. We are highly experienced in
                      providing the best Mobile app services for Android devices
                      as well as for IOS devices. We have a team of highly
                      skilled IOS app developers who are efficient in providing
                      successful iPhone app development services. We are highly
                      expert in deploying successful iPhone Mobile app
                      development as per the client’s requirements.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best iPhone App Development
                      services?
                    </p>
                    <p className="Title_para">
                      If Yes, then without taking much time, let’s get
                      connected. We are happy to help you to launch a successful
                      iPhone Mobile app services which will be very profitable
                      for your business. We mainly follow the steps like
                      initially, we gather the requirements, analyze the
                      client’s requirements, have a meeting for clearing all the
                      doubt of the clients, divide the overall project into
                      milestones, take clients approval in every stage and
                      deliver the project on time.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "iphone_mobile" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      IPad Mobile app development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading iPad mobile app
                      development. We offer the best mobile app development
                      services that assist various startups and businesses in
                      converting their offline business to online business. We
                      have a team of highly skilled and experienced developers
                      in designing and developing mobile app solution which is
                      stable, customize and can be future of the industry.
                    </p>
                    <p className="Title_para">
                      In our portfolio section, you can check our past projects.
                      Our iPad app developers are proficient in providing the
                      best mobile app services for different niches and
                      categories of the business. We first gather the overall
                      requirements from the clients, analyze the requirements,
                      arrange a meeting with the clients, provide a proposal and
                      then after clearly everything finalizes the project at the
                      best rates. For every mobile app and web app development
                      including iPad app development, we strictly follow the
                      agile methodology.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best iPad Mobile App Development
                      Firm? <br /> If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_app" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Mobile app development{" "}
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the top Android Mobile app
                      development. We offer Mobile app development services that
                      help various businesses and startups to digitalize their
                      services and make them successful in the market. We have a
                      team of highly skilled Android Mobile app developers who
                      have years of experience in developing Mobile applications
                      that are Stable, customize, future of the industry as well
                      as a fully functional solution for an Android Mobile App.
                    </p>
                    <p className="Title_para">
                      We have experience in developing Android Mobile app
                      development for various niches and categories of the
                      business. We initially gather the requirements from our
                      clients, analyze them, discuss them further with the
                      clients and finalize the project at the best rates. We
                      mainly work on the agile methodology in which we divide
                      projects into small milestones, start working on the
                      projects and takes clients confirmation at every step.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Android Mobile App
                      Development Firm? <br /> If Yes, then feel free to reach
                      us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_tablet" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Tablet app development{" "}
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company which offers Android Tablet app development
                      services. Nowadays, along with the web and mobile app
                      development, users are also more inclined towards the
                      different sizes of devices for convenience. Due to the
                      increasing popularity of Android devices, the demand for
                      the Android app is also increased for different devices.
                    </p>
                    <p className="Title_para">
                      Many of the businesses or startups are also making
                      investments in the development of the Android Tablet app.
                      We can initially gather, understand and analyze the
                      requirements in a proper way. After that, our experts also
                      suggest some of the changes to the requirements by keeping
                      the future as a reference and then finalize the project at
                      the best rates.
                    </p>
                    <p className="Title_para">
                      Are you looking for services for successful Android Tablet
                      app Development? <br /> If yes, then feel free to reach
                      and discuss further.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Reskinning </h3>
                    <p className="Title_para">
                      Currently, the field like Shopping and E-commerce business
                      is booming in the market. Along with all the digital
                      services, the E-commerce business, as well as Shopping
                      markets, are converting their services into online
                      platforms like websites, web apps and mobile apps in the
                      market. In this digital era, many users are shifting
                      towards the digital platform because it offers the
                      convenience of services, time-saving and cost-effective
                      for the people. Many of the new business owners and
                      entrepreneurs are making high investments in an E-commerce
                      store because the demand for these services is increasing
                      day by day.
                    </p>
                    <p className="Title_para">
                      E-commerce(Electronic Commerce) and Shopping is an online
                      platform that helps in buying and selling goods as well as
                      the services, transmitting of data and funds and the major
                      requirement is the Internet. This business transaction
                      occurs in business to business, consumer to consumer,
                      business to consumer and consumer to business. E-commerce
                      also encompasses other activities including internet
                      banking, online auctions, online ticketing and payment
                      gateways.
                    </p>
                    <p className="Title_para">
                      Are you thinking of launching any Shopping and E-commerce
                      digital solutions in the market? <br /> If Yes then feel
                      free to reach us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_redesign" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Redesigning</h3>
                    <p className="Title_para">
                      Mobile app redesigning is one of the most popular services
                      in the current trends. Some of the business owners
                      launched the beta version before launching the final
                      product in the market to gets user feedback. After
                      gathering get feedback, sometimes mobile app owner has to
                      redesign their mobile app before launching it into the
                      market. Mobile App redesigning is a very important service
                      because from time to time mobile app needs to be redesign
                      to make them better as well as attractive as per the
                      trend.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with the best development
                      services, we also offer the best mobile app designing and
                      redesigning services at the best rates. We first gather
                      the client’s requirements, understand as well as analyze
                      them and then start the process. We have a team of highly
                      skilled designers who will provide the best Mobile app
                      redesigning services at the best rates.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Mobile app Redesigning?
                      <br /> If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_upgrade" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Upgradation</h3>
                    <p className="Title_para">
                      Mobile App upgradation is very important for business
                      owners who have a mobile application or who are running
                      their business through a mobile app. With the timings,
                      things need to change or upgrade like a mobile app to keep
                      it relevant with the current business. To stay ahead with
                      the competitors it is very important for you to upgrade
                      your mobile app from time to time.
                    </p>
                    <p className="Title_para">
                      Mobile app upgradation helps business owners to integrate
                      newly introduced features and functionality into the app.
                      If you observe the current trend then you can Clearly
                      observe that an operating system updates in a short time
                      period. Along with the mobile app development, The App
                      Ideas also offer the services of Mobile app upgradation at
                      the best possible price without changing the concept of
                      the mobile app.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Mobile App upgradation?
                      <br />
                      If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_support" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Mobile app Support and maintenance
                    </h3>
                    <p className="Title_para">
                      Along with the mobile app and web app development, The App
                      Ideas also offers the services like Mobile app Support and
                      maintenance. The services and maintenance of the mobile
                      app play a crucial role in the success of the business or
                      an online business. Many of the business owners avoid
                      these support and maintenance services which lead to the
                      failure of the mobile app after some period because it is
                      very important to maintain the code from time to time to
                      make it compatible with the newly introduced software
                      updates.
                    </p>
                    <p className="Title_para">
                      The App Ideas offers the services of web and mobile app
                      development, the UI/UX designing of the software as well
                      as also offers the support and maintenance services after
                      deploying the projects to the clients. We keep our team
                      updated with the newly introduced technology and updates
                      in the codes.
                    </p>
                    <p className="Title_para">
                      If you are looking for Mobile app support and maintenance
                      services then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "crossplatform" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Cross-platform Mobile Apps
                    </h3>
                    <p className="Title_para">
                      Nowadays, Cross-platform technology is getting popular day
                      by day because there is a huge range of mobile devices and
                      platforms are available in the market. Mobile app
                      flexibility is very important in this present time if you
                      are targeting a huge number of users. If you are planning
                      to launch a single mobile app platform that can be
                      compatible with various operating systems then
                      Cross-platform technology is one of the best options for
                      your business mobile app development.
                    </p>
                    <p className="Title_para">
                      Along with the best web app and mobile app development,
                      The App Ideas also provide the services like cross
                      platforms app development. Cross-platform technology helps
                      in developing mobile apps for multiple devices as well as
                      multiple platforms. Cross-platform technology provides the
                      flexibility and easy to use mobile app solution for a
                      successful business. The App Ideas strictly follow the
                      agile methodology for the development of the software
                      services. We offer cross-platform technology with unique
                      design and the best possible rates.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best cross-platform technology?{" "}
                      <br />
                      If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* ========================= Mobile View =========================== */}
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
            {/* ========================= Mobile View =========================== */}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <>
        {/* Technologies Section Start */}
        <section className="technologies__section py-5">
          <div className="container">
            <div className="Title__White mb-4">
              <h3>Technologies we use</h3>
            </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/obj-c-icon.png")}
                    alt="obj-c-icon"
                    className="img-fluid"
                  />
                  <h2>Objective C</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/swift-icon.png")}
                    alt="swift-icon"
                    className="img-fluid"
                  />
                  <h2>Swift</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/java.png")}
                    alt="Java"
                    className="img-fluid"
                  />
                  <h2>Java</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/kotlin.png")}
                    alt="kotlin"
                    className="img-fluid"
                  />
                  <h2>Kotlin</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/react-native.png")}
                    alt="react-native"
                    className="img-fluid"
                  />
                  <h2>React Native</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/flutter.png")}
                    alt="flutter"
                    className="img-fluid"
                  />
                  <h2>Flutter</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section End */}
        <>
          {/* Service Section Start */}
          <section className="service__provide__section py-5">
            <div className="container">
              <div className="Title">
                <h3>Industries We Serve</h3>
                <p>
                  We are highly proficient in offering mobile app development
                  company services across multiple industries over the years as
                  well as we have also helped various businesses in various
                  domains. We have served a wide range of industries like
                  Finance, Government, Real Estate, Retail, Healthcare, Travel
                  and more.
                </p>
              </div>
              <div className="row mt-5">
                <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <div className="row">
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("shopping")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "shopping" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Shopping}
                          alt="shopping-1"
                          className="img-fluid"
                        />
                        <p>Shopping &amp; E-Commerce</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("health")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "health" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={health}
                          alt="health-and-fitness-1"
                          className="img-fluid"
                        />
                        <p>Health &amp; Fitness</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("education")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "education" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Education}
                          alt="smartphone-tablet"
                          className="img-fluid"
                        />
                        <p>Education &amp; E-Learning</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("banking")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "banking" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Banking}
                          alt="banking-1"
                          className="img-fluid"
                        />
                        <p>Banking &amp; Finance</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("travel")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "travel" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image src={Travel} alt="travel" className="img-fluid" />
                        <p>Travel &amp; Tourism</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("food")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "food" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image src={Food} alt="food-1-1" className="img-fluid" />
                        <p>Food &amp; Drink</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("socila_networking")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "socila_networking" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={SocialNetworking}
                          alt="Social-Networking"
                          className="img-fluid"
                        />
                        <p>Social Networking</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("lifestyle")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "lifestyle" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={lifestyle}
                          alt="lifestyle"
                          className="img-fluid"
                        />
                        <p>lifestyle &amp; mobility</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("real_estate")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "real_estate" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Real}
                          alt="Real-Estate"
                          className="img-fluid"
                        />
                        <p>
                          Real <br /> Estate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {activeServe === "shopping" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">
                          Shopping &amp; E-Commerce
                        </h3>
                        <p className="Title_para">
                          We are highly experienced in providing the best
                          software development services to each niche with
                          unique designing and development services as well as
                          at the best costing. We have a team of highly skilled
                          developers as well as designers who initially try to
                          understand the client’s requirements.
                        </p>
                        <p className="Title_para">
                          Currently, many business owners are shifting their
                          services into online platforms like websites, web apps
                          or mobile apps. It is beneficial to convert your
                          business into online platforms because this makes the
                          work easier for you as well as for your users.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Shopping and E-commerce
                          Store in the market?
                        </p>
                        <p className="Title_para">
                          If Yes, then feel free to connect with us. Let’s have
                          a quick call to discuss your requirements in detail.
                          Our Process starts from Requirements Gathering and
                          Analysis, The meeting for clearing out the questions,
                          Project Estimation and Proposal, Resources and team
                          allocation, Daily/Weekly updates and the deployment of
                          the projects
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "health" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Health and Fitness</h3>
                        <p className="Title_para">
                          The App Ideas is one of the leading web and app
                          development companies. We have a team of proficient
                          developers and designers who are skilled to offer the
                          best software development services. We offer software
                          development like website development, web and mobile
                          app development for various niches by integrating the
                          best functionality with the unique designing
                          components.
                        </p>
                        <p className="Title_para">
                          If we talk about the Health and Fitness industry then
                          this industry is also digitalizing its services to
                          make it highly popular in today’s digital era. Many
                          business owners are now shifting their services toward
                          online platforms because it offers the convenience of
                          managing the services in a much better way.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch Health and Fitness online
                          platform?
                        </p>
                        <p className="Title_para">
                          If the answer is yes, then without taking much time
                          reach out and get a free quotation for a Heath and
                          Fitness software development. Our working model is
                          based on gathering the requirements of the clients,
                          analyzing, offer them relevant suggestions, prepare
                          proposals and finalize the project by allocating a
                          project manager and deploy the project on the timeline
                          with the best prices.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "education" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">
                          Education and E-Learning
                        </h3>
                        <p className="Title_para">
                          The App Ideas is one of the leading and best Software
                          development service firms. We are highly expert and
                          experiences in providing unique design and development
                          services for different niches or categories of the
                          business.
                        </p>
                        <p className="Title_para">
                          Nowadays, we can clearly observe that many business
                          owners, entrepreneurs and startups are making high
                          investments in online platform development. Like all
                          the other services, Educational institutes are also
                          developing their web and mobile app to build their
                          online presence in the market. Having an E-learning
                          website or mobile app can be very beneficial if you
                          are involved in the Educational industry.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch an E-learning website or
                          Mobile app in the market?
                        </p>
                        <p className="Title_para">
                          If yes, then What are you waiting for? Let’s have a
                          quick call to discuss your requirements in detail. We
                          initially start by gathering the requirements from the
                          clients, analyze the requirements, prepare a proposal
                          with the best costing, have a meeting, finalize the
                          project and start working. After starting the
                          projects, we provide daily/ weekly updates to our
                          clients and deploy the project in time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "banking" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Banking and finance </h3>
                        <p className="Title_para">
                          The App Ideas is one of the leading web and app
                          development company that offers the best website, web
                          and mobile app development with unique UI/UX designing
                          services. We also offer the best software development
                          services to various industries like Food Industry,
                          E-commerce industry also including finance and Baking
                          services.
                        </p>
                        <p className="Title_para">
                          In this present time, many of the services are now
                          digitalizing their business to make it easily
                          accessible for users as well as to manage the user’s
                          data conveniently. Businesses like banking and
                          finances are now shifting towards the website, web and
                          mobile app platform for offering easily manageable
                          resources.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a successful solution for
                          your Business and Finance?
                        </p>
                        <p className="Title_para">
                          If yes, then without thinking much ping us. Let’s
                          connect and have a quick call to discuss your
                          requirements in more detail. Our process includes the
                          requirements gathering from the clients, analyze the
                          overall requirements, send them the feature list,
                          allocate a project manager who provides daily/weekly
                          updates to the clients and deploy the project at the
                          best possible rates.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "travel" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Travel and Tourism</h3>
                        <p className="Title_para">
                          The App Ideas is one of the leading web and app
                          development. We are highly experienced in providing
                          the best software development like website
                          development, web and mobile app development with
                          unique UI/UX designing at the best rates. We are
                          highly capable to offer successful technology-driven
                          solutions for the Travel and Tourism Industry.
                        </p>
                        <p className="Title_para">
                          Nowadays, it is very easy for people to directly check
                          the transportation to accommodation facilities on
                          their smartphones. There are a number of Travel and
                          Tourism startups that had an investment in online
                          platforms development are highly popular as well as
                          successful now.
                        </p>
                        <p className="Title_para">
                          Are you planning to take the first step towards
                          launching a Successful Travel and Tourism Software in
                          the market?
                        </p>
                        <p className="Title_para">
                          If Yes, then feel free to reach out and get a free
                          quotation for your Idea. Our working model is based on
                          the steps like requirements gathering, analyzing
                          requirements, take the client confirmation on the
                          proposal, allocate a project manager who will provide
                          the daily/ weekly update to the client, work on the
                          projects with confirming everything with the client
                          and deliver the project at the deadline.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "food" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Food and Drink</h3>
                        <p className="Title_para">
                          We are highly experienced in providing the best
                          software solution for the Food and Drink industry or
                          we can also say that we have worked on various
                          projects and offer the overall restaurant business
                          solution including the E-menu, Food Delivery app, Food
                          Ordering app, kitchen management system, Waiter call
                          app and much more.
                        </p>
                        <p className="Title_para">
                          This era is mainly popular as a digital era because
                          everyone including business owners, entrepreneurs and
                          customers are now preferring websites or mobile apps
                          for their services. If you are running a food industry
                          or restaurant business the this is the time to take a
                          step forwards and digitalize your business. Make your
                          food business successful by integrating updated
                          features.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a new Food business online
                          platform?
                        </p>
                        <p className="Title_para">
                          If Yes, then feel free to connect with us. Our process
                          includes the requirements gathering, understanding and
                          analyzing the requirements, Discuss everything with
                          the clients, provide the proposal, finalize the
                          project by allocating a project manager who provides
                          weekly updates to the client and at the end deliver
                          the project at an estimated time at the best cost.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "socila_networking" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Social Networking</h3>
                        <p className="Title_para">
                          The App Ideas is a leading web and app development
                          company. We are highly experienced in providing the
                          best software solution like website development,
                          mobile app development, web app development and
                          E-commerce platforms development. We have a team of
                          skilled as well as expert developers and designers who
                          will provide the best solution which helps businesses
                          and startups in growth.
                        </p>
                        <p className="Title_para">
                          Social Networking sites or platforms are one of the
                          most popular services in this present time. It is
                          highly observed that every smartphone users uses at
                          least one social networking site. Social Networking
                          site is very popular because it helps users to stay
                          connected with each other and which completely remove
                          the distance barrier between the users.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Social Networking
                          platform?
                        </p>
                        <p className="Title_para">
                          If Yes then what are you waiting for? Connect with us
                          and get a free quote for launching a successful Social
                          networking site in the market. We strictly follow the
                          agile methodology for software development. At the
                          initial time, we gather the overall requirements of
                          the clients, analyze as well as finalize the ideas by
                          sending the proposal to the client, have a meeting for
                          further discussion about the projects, start the
                          project by taking client approval and deliver it on
                          time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "lifestyle" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Lifestyle</h3>
                        <p className="Title_para">
                          The App Ideas is one of the leading web and app
                          development services. We have a pool of talented
                          developers and designers who provide unique as well as
                          the best software solution for the business. We
                          provide the software development services like website
                          development, web app development, mobile app
                          development and E-commerce platform development. Along
                          with development, we also offer designing services to
                          the customers.
                        </p>
                        <p className="Title_para">
                          Lifestyle software solutions are getting popular day
                          by day. As we know, people are more inclined toward
                          online platforms for accessing the services as well as
                          managing the services. Lifestyle software is also one
                          of the demanding industries in this present time. This
                          service includes fashion, health, news, culture,
                          travel, beauty and more.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a lifestyle software
                          solution?
                        </p>
                        <p className="Title_para">
                          If yes then this is the right time to move further by
                          connecting with us and get a free quotation for your
                          Lifestyle web and mobile app development. We initially
                          get the clients requirements, analyze them, have a
                          meeting to finalize the project, start working on the
                          project and deploy the project on time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "real_estate" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Real Estate</h3>
                        <p className="Title_para">
                          The App Ideas is one of the popular web app and mobile
                          app development firms that offers the best software
                          services at the best rates. The App Ideas has a team
                          of talented developers and designers who provide the
                          best solution for Web apps, mobile app, E-commerce as
                          well as website development. We help businesses and
                          startups to launch a successful online solution that
                          increases the user base of the business.
                        </p>
                        <p className="Title_para">
                          Real Estate is one of the most demanding as well as
                          popular services in this present time. As per the
                          increasing demand of this section, the real estate
                          business owners are digitalizing their business to
                          easily reach the customer through the online paths. As
                          per the observation, it is clearly observed that
                          people are now checking real estate services online.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Real Estate software
                          solution?
                        </p>
                        <p className="Title_para">
                          If yes then feel free to reach us and get a free
                          quotation for your real estate software solution. We
                          are highly expert in providing the best software
                          solution for different business categories including
                          the real estate business. For software development, we
                          strictly follow the process like requirement
                          gathering, analyze the requirements, have a meeting
                          with the clients, finalize the project and deploy it
                          on time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* ========================= Mobile View =========================== */}
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
                            <p>{item.ans4}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
                {/* ========================= Mobile View =========================== */}
              </div>
            </div>
          </section>
          {/* Service Section End */}

          {/* <!-- Work Slider Start --> */}
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
                    spaceBetween: 20,
                  },
                  425: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
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
                speed={2000}
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
                style={{ padding: "2.5rem 0" }}
              >
                <SwiperSlide>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.app.mindwheel"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-12">
                        <Image
                          src={require("../../public/assets/images/work/2.webp")}
                          style={{
                            width: "100%",
                            boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                            borderRadius: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-md-12"
                        style={{ color: "#000" }}
                      >
                        <div className="dec">
                          Mindweel - On Demand Psychologist Hiring App
                        </div>
                        <p>
                          It’s an On Demand Psychologist OR Doctor Hiring App.
                          It has been very useful app in the current scenario of
                          the world where everyone is facing depression, anxiety
                          and mental health issues.
                        </p>
                        <p>
                          This project has three main modules, Patient App,
                          Psychologist / Doctor App, and Admin Panel.
                        </p>

                        <p>
                          Patient can able to create and manage their medical
                          profile, find the best available Psychologist /
                          Doctors, Check their profiles, availability, ratings
                          and reviews, Book them online, make a payment, give
                          ratings and reviews.
                        </p>
                        <p>
                          Psychologist OR Doctor can able to register
                          themselves, create their specialist profile, manage
                          availability, patient, booking, payment and other
                          stuffs.
                        </p>
                        <p>
                          Admin can able to manage Patients, Doctors, Payment,
                          Reports, Content and other stuffs.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.app.boltdriverapp"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-12">
                        <Image
                          src={require("../../public/assets/images/work/bolt-app.webp")}
                          style={{
                            width: "100%",
                            boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                            borderRadius: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-md-12"
                        style={{ color: "#000" }}
                      >
                        <div className="dec">Bold Delivery</div>
                        <p>
                          It’s a Food Ordering & Food Delivery App. We have
                          created a User app, Restaurant App, Driver App, and
                          Admin panel.
                        </p>
                        <p>
                          User can able to search, filter, check food details,
                          place an online order, make payment, track their
                          orders, give ratings and reviews.
                        </p>

                        <p>
                          Restaurant can able to register themselves, list and
                          manage their food items, manage orders, track drivers
                          and orders.
                        </p>
                        <p>
                          Driver can able to register, manage their
                          availabilities, deliver the food items to the users.
                        </p>
                        <p>
                          Admin can able to manage users, food category & sub
                          category, restaurants, drivers, payment and other
                          things.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.servicemycar.android"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-12">
                        <Image
                          src={require("../../public/assets/images/work/service-my-car.webp")}
                          style={{
                            width: "100%",
                            boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                            borderRadius: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-md-12"
                        style={{ color: "#000" }}
                      >
                        <div className="dec">Service my car</div>
                        <p>
                          It’s an On Demand Car Servicing App, It has 2 main
                          modules.
                        </p>
                        <p>
                          1) User App <br />
                          2) Admin Web Backend
                        </p>

                        <p>
                          User can able to check out all the services packages
                          offered by a service center, check in details and
                          compare them, choose the service package and book
                          online, pay online, they can also choose pickup and
                          drop off point, check and approve extra repair cost,
                          check their car 360° inspections on their app, provide
                          ratings and reviews of the services.
                        </p>
                        <p>
                          Admin can able to list down all the services packages,
                          manage booking, extra repair services, payment,
                          content of an app, offers and other stuffs
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          {/* <!-- Work Slider End --> */}

          {/* Client testimonial Section Start */}
          <TestiMonial />
          {/* Client testimonial Section End */}

          <>
            {/* FAQ Section Start */}
            <FAQ />
          </>

          <>
            {/* Contact Section Start */}
            <ContactUs question="Do you like to know more about our expertise in mobile app development?" />
            {/* Contact Section End */}
            <Whatsapp/>
            <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
            <Footer/>
          </>
        </>
      </>
    </>
  );
};

export default MobileAppDev;
