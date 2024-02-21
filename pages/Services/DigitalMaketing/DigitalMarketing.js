import React, { useState, useEffect } from "react";
import Work from "../../../components/Workdone/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import mobileweb from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Web Development.svg";
import mobileaap from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Web Development Services.svg";
import webapp from "../../../public/assets/images/SERVICES/WEB DEVELOPMENT/Website Development Company.svg";

// Service section image
import SEO from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/SEO Consultancy.svg";
import Keyword from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Keyword and Market Research.svg";
import Onsite from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Onsite and Technical SEO.svg";
import Off from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Off-page SEO.svg";
import Guest from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Guest Blogging.svg";
import Social from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Social Media Marketing.svg";
import Pay from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Pay per Click (PPC).svg";
import AppStore from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/App Store Optimization (ASO).svg";
import Content from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Services we provide/Content Marketing.svg";

// service provide section images
import Real from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Real Estate Industry.svg";
import Small from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Small Industry.svg";
import Restaurant from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Restaurant Industry.svg";
import Apparel from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Apparel Industry.svg";
import Finance from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Finance Industry.svg";
import Sports from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Sports Industry.svg";
import Arts from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Arts and Entertainment Industry.svg";
import Marketplace from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Marketplace Industry.svg";
import Beauty from "../../../public/assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Beauty Industry.svg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import HeroSection from "../../../components/HeroSection";
import { Helmet } from "react-helmet";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: SEO,
    que: "SEO Consultancy",
    ans: "Nowadays, the popularity of the online platform is reaching its peak because this provides an easy way of reaching people and increasing the profit rates. SEO(Search Engine Optimization) can help you to rank on the search engine and catch the eye of the customers. Along with the development of the software development solutions, it is also important to focus on the SEO of the websites which will help you to reach a high number of users.",
    ans2: "Are you looking for the Best SEO Consultancy Services?",
    ans3: "The App Ideas is one of the leading Software development company and Digital marketing services. We offer expert SEO consultancy to business websites and help them to chase achievable and realistic search ranking goals and guide them in creating a content and SEO strategy for short and long term results.",
  },
  {
    id: 2,
    images: Keyword,
    que: "Keyword and Market Research",
    ans: "Digital Marketing services is one of the most important factors for making any kind of business successful. Digital marketing involves SEO as well as Keyword and Market research. Keyword and Market research can help you to understand the users and their search patterns. Many of the services are now integrating these services into their online platforms.",
    ans2: "Are you looking for the Best Keyword and Market Research Services?",
    ans3: "We are from The App Ideas, which is one of the leading web and app development company. We boast of a robust and expertise-driven keyword and market research apparatus and professionals who can help you focus on the most relevant and useful low-competition keywords for the best SEO results. For more details on keyword and market research, feel free to reach us and discuss all your requirements After this we will offer the best rates.",
  },
  {
    id: 3,
    images: Onsite,
    que: "Onsite and Technical SEO",
    ans: "A software solution like websites, mobile apps and web apps popularity is increasing as per the increasing number of the users. The users are liking the online platforms because it is time-saving as well as cost-effective. In this digital era, businesses are now launching their online platforms to increase sales of the business. If you are planning to launch any software solution then this is probably the best time to do that.",
    ans2: "Are you looking for the Best Onsite and Technical SEO Services?",
    ans3: "The App Ideas is one of the most popular software development company. We have a team of highly skilled digital marketing who will offer the best Onsite and Technical SEO services. We undertake on-site and technical SEO responsibilities for websites and help them boost site performance, loading speed, design elements and various aspects that help search engine crawlers to find content easily.",
  },
  {
    id: 4,
    images: Off,
    que: "Off-page SEO",
    ans: "Nowadays, Software solutions like mobile app, web app and website development services. If we talk about digital marketing services then Off-page SEO is also getting highly demanding in this present time. Off-Page SEO mainly works outside of your website to improve search engine rankings. This mainly refers to working on the article, blog, podcast, video, content, business listings, classified listing and more.",
    ans2: "Are you looking for the Best Off-Page SEO Services?",
    ans3: "The App Ideas is one of the highly popular web and app development company. We have a team of highly skilled team of expert people who are proficient in offering digital marketing services. We are also experienced in providing the best off-page services to our clients which can be very helpful for your business success. Feel free to connect with us and get a quote.",
  },
  {
    id: 5,
    images: Guest,
    que: "Guest Blogging",
    ans: "Guest Blogging is one of the most popular digital marketing services in this present time. Guest blogging is also known as guest posting which means writing blogs for another person or company. As people are launching their website or mobile app in the market, they also need to work on digital marketing. Digital marketing like guest blogging can help you to get your sales target by targeting the right audience.",
    ans2: "Are you looking for the Best Guest Blogging Services?",
    ans3: "The App Ideas is one of the foremost software development company. We have a team of highly expert designers as well as developers who are proficient in providing the best IT services at the best rates. We are also experienced with digital marketing services. If you are looking for software development services, then feel free to connect with us and get a free quotation for the same.",
  },
  {
    id: 6,
    images: Social,
    que: "Social Media Marketing",
    ans: "Social Media Marketing is one of the trending methods which can be very helpful for business owners as well as for startups. Nowadays, people are using social media a lot and this can be an advantage for business owners. Many business owners and startup owners are now working on social media marketing as it helps in increasing the sales rates or we can say it is more effective.",
    ans2: "Are you looking for the Best Social Media Marketing Services?",
    ans3: "We are at The App Ideas, which is one of the leading Digital marketing services. We have a team of highly experienced and skilled people who are proficient in providing the best social media marketing services at the best rates Feel free to connect with us, discuss your requirements and get a free quote for your service.",
  },
  {
    id: 7,
    images: Pay,
    que: "Pay per Click (PPC)",
    ans: "Pay Per click is one of the most crucial services of digital marketing. Pay Per Click (PPC) advertising method is accessible for Short as well as for the long-term digital marketing strategy to get your online platform at the top of the search engine. Sometimes you will get instant results by using the PPC methods. If you own a digital business then you can think of integrating PPC.",
    ans2: "Are you looking for the Best Pay Per Click Services?",
    ans3: "We are at The App Ideas, which is one of the most popular software development company. We are proficient in offering various one platform development services like mobile app, web app and website development. Along with the development, we also offer designing and digital marketing services to the client. For more details feel free to connect with us and get a free quote.",
  },
  {
    id: 8,
    images: AppStore,
    que: "App Store Optimization (ASO)",
    ans: "App Store optimization is very important for business owners as this helps in optimizing the rank of the app in the specific store. App Store Optimization is the process of increasing the visibility of the app and growing its organic downloads. This service can help you to easily increase the number of users for your services. If you own online platforms then this is the best time for you to integrate the ASO service.",
    ans2: "Are you looking for the best App Store Optimization services?",
    ans3: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers and designers who are experts in providing the best services. Along with this we also offer digital marketing services to our clients to increase customer’s userbase. For more details, you can feel free to connect with us and get a free quotation for the best App Store Optimization service.",
  },
  {
    id: 9,
    images: Content,
    que: "Content Marketing",
    ans: "If we talk about the current trend then content marketing is one of the most important factors for making any business more successful in the market. If we talk about today’s trend then the content is demanding because this will help in increasing the number of the targeted users. If you own a website or a mobile app, then this is the time for you to hire the best content marketing service provided to increase your profits.",
    ans2: "Are you looking for the best Content Marketing services?",
    ans3: "The App Ideas is one of the leading web and app development company. Along with software development, we also offer the best services for digital marketing services. We boost your websites’ SEO prospects by helping you with quality content publishing and marketing at contents across highly credible and reputed websites access niches. For more details, connect with us and get a free quote for a content marketing service.",
  },
];

const IndustriesData = [
  {
    id: 1,
    images: Real,
    que: "Real Estate Industry",
    ans: "If yes, then feel free to reach us and get a free quotation for your Real Estate app development services. We have years of experience in providing the best developers and designers who are efficient in providing the best real estate industry app solution which can help you to increase the customer base easily.",
    ans2: "Are you planning to launch a Real Estate Industry app?",
    ans3: "If yes, then feel free to reach us and get a free quotation for your Real Estate app development services. We have years of experience in providing the best developers and designers who are efficient in providing the best real estate industry app solution which can help you to increase the customer base easily.",
  },
  {
    id: 2,
    images: Small,
    que: "Small Industry",
    ans: "The App Ideas is one of the foremost software development company. We offer the services like mobile app development, web app development, Website development, Game app development as well as Digital Marketing service. We are also providing unique designing services for the small industry which can help to get more users attentions which can increase the sales of the business.",
    ans2: "Are you planning to launch a Small Industry app?",
    ans3: "If yes, then feel free to connect with us and let’s have a quick discussion about your requirements. We have a team of highly skilled developers as well as designers who have years of experience in providing the best solution for the small industry. The demand of the small industry is getting popular. If you are planning to launch an Online app platform then connect with us now.",
  },
  {
    id: 3,
    images: Restaurant,
    que: "Restaurant Industry",
    ans: "The App Ideas is one of the leading web and app development company. We have a group of experienced and skilful developers as well as designers who are experts in providing the best services at the best rates. We have also worked on various food and restaurant projects and provided the best solution which can drive their business to the top. If you own a restaurant then this is the time for you to digitize your business.",
    ans2: "Are you planning to launch a Restaurant Industry app?",
    ans3: "If yes, then this is probably the time for you to connect with us, discuss your requirements and get a free quotation for your restaurant app. We have a team of the highly skilled team who are productive in providing unique services for a restaurant industry app or web solutions. The demand of the restaurant industry is increasing, so if you are thinking then feel free to connect with us and get a free quote.",
  },
  {
    id: 4,
    images: Apparel,
    que: "Apparel Industry",
    ans: "The App Ideas is one of the highly popular software development company. We have a group of highly experienced developers, designers as well a digital marketing team who are proficient in offering the best solution for the Apparel industry. Nowadays, Apparel Industries are now converting its services into online platforms to increase sales rates of the business. If you own an apparel industry then launch your mobile app.",
    ans2: "Are you planning to launch a Apparel Industry app?",
    ans3: "If yes, then here we are, feel free to reach us, discuss your requirements and get a free quote for your business. You can clearly observe that people are more inclined towards the online platforms for all kinds of services because it is easy to access. Running an Apparel industry, then it is highly recommended to have an online platform that can make the work easier for the business owners.",
  },
  {
    id: 5,
    images: Finance,
    que: "Finance Industry",
    ans: "The App Ideas is one of the foremost software development company. We are highly experienced in providing the best services for mobile app, web app and website development. We are also offering designing services along with marketing services. If you own a finance industry or planning to invest in the finance industry then it is highly recommended to have an online platform for a finance industry to easily manage everything.",
    ans2: "Are you planning to launch a finance Industry app?",
    ans3: "If yes, then you are at the right place. We offer all kinds of software development services along with the finance industry. In the finance industry, it is very important to have an online platform because it makes the work easier for the business owners as well as for the users. For more details, feel free to reach us and get a free quotation for your finance industry app at the best rates.",
    ans4: "",
  },
  {
    id: 6,
    images: Sports,
    que: "Sports Industry",
    ans: "The App Ideas is a highly advanced web and app development company. We have a team of highly skilled and experienced developers who are proficient in developing the best online platform solution which can be very beneficial for all kinds of business niches. This thing is also applicable for the sports industry, as this industry is also moving towards the online platform to enhance the user experience.",
    ans2: "Are you planning to launch a Sports Industry app?",
    ans3: "If yes, then this is probably the best time for you to reach us and discuss your requirements. We are experts and experienced in offering the best Sports Industry mobile app solution at the best rates. If you are planning to launch a Sports mobile app then it is very important for you to launch a better solution. You can check our expertise by hiring us for a Sports Industry app development.",
    ans4: "",
  },
  {
    id: 7,
    images: Arts,
    que: "Arts and Entertainment Industry",
    ans: "The App Ideas is one of the best web and app development company. We have years of experience in providing the top solution for all kinds of business niches including the arts and entertainment industry. Nowadays, as we can clearly observe that people are more inclined towards online platforms because it is easier to access the services online easily and effectively.",
    ans2: "Are you planning to launch a Arts and Entertainment Industry app?",
    ans3: "If yes, then feel free to connect with us at any time and discuss your requirements to get a free quotation. The Arts and Entertainment industries are now achieving success by digitizing their business. Users can easily check out your services and access them at any time as well as at any place. Please check out the market and plan to develop a unique app idea that can provide different Entertainment elements to the users.",
  },
  {
    id: 8,
    images: Marketplace,
    que: "Marketplace Industry",
    ans: "The App Ideas is one of the leading software development company. We have a team of highly skilled developers as well as designers who are experts in providing the best marketplace solutions. We offer marketplace Industry solutions like web app development, mobile app development, website development and more. Nowadays, people are more inclined towards online marketplace platforms because it offers the convenience of accessing the services.",
    ans2: "Are you planning to launch a Marketplace Industry app?",
    ans3: "If yes, this is probably the time for you to plan and launch an online platform to get more attention from the users. The marketplace Industry is getting highly popular because it offers an online platform to access the services from any place and at any time easily. Feel free to connect with us and get a free quotation for your Marketplace service at the best rates.",
  },
  {
    id: 9,
    images: Beauty,
    que: "Beauty Industry",
    ans: "The App Ideas is one of the most popular software development services. We are highly proficient in providing the best solution for web app development, mobile app development and website development. Every industry is now launching its online platforms including the beauty industry. Nowadays, the beauty industries are moving towards digitization to increase sales.",
    ans2: "Are you planning to launch a Beauty Industry app?",
    ans3: "If yes, then here you are at the right place. We have provided the best solution for all of business niches. If you are planning to make an investment in the beauty industry or running a beauty industry then this is probably the time for you to choose us and launch your own beauty industry. Feel free to reach us, send your requirement and get the best quotation for launching a beauty industry.",
  },
];

const DigitalMarketing = () => {
  const [activeService, setActiveService] = useState("seo");
  const [activeServe, setActiveServe] = useState("real_estate");
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
      <Helmet title="#1 Digital Marketing Agency in India, USA | The app Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Digital Marketing Agency"
        des="Digital marketing demand is getting demanding in the market because these services can help the business to promote their services and increase the profit rates of the business. Along with launching a mobile app or web app in the market, you also have to work on marketing strategies to make the platform successful in the market. We are from The App Ideas is one of the popular Digital Marketing Agency. We have a team of a highly skilled team for digital marketing who provides the best services at the best rates."
        list1="7+ Years of experience in Digital Marketing"
        list2="Best Digital Marketing Company"
        list3="Dedicated team for your Digital Marketing Agency"
        list4="Complete Guidance from Designing to Deployment"
        service1="Digital Marketing Company"
        service2="Digital Marketing Strategy"
        service3="Digital Marketing Specialist"
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
              Digital Marketing is the skill-based service that helps your
              website gain visibility in the search engine ranking with relevant
              and unique content sought after by your intended audience. At The
              App Ideas, we have web and SEO experts to help your website
              contents rank in search engine listings through keyword-optimized
              unique content. We are a white Digital Marketing Agency with a
              consistent focus on boosting organic traffic for your website
              through search engine ranks.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("seo")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "seo" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={SEO}
                      alt="SEO-Consultancy"
                      className="img-fluid"
                    />
                    <p>
                      SEO <br />
                      Consultancy
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("keyword")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "keyword" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Keyword}
                      alt="Keyword-And-Market-Research"
                      className="img-fluid"
                    />
                    <p>
                      Keyword And <br />
                      Market Research
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("onsite_technical")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "onsite_technical" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Onsite}
                      alt="Onsite-Technical SEO"
                      className="img-fluid"
                    />
                    <p>
                      Onsite And <br />
                      Technical SEO
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("off_page")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "off_page" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image src={Off} alt="Off-Page-SEO" className="img-fluid" />
                    <p>
                      Off-Page <br />
                      SEO
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("guest_blogging")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "guest_blogging" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Guest}
                      alt="Guest-Blogging"
                      className="img-fluid"
                    />
                    <p>
                      Guest <br />
                      Blogging
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("social_marketing")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "social_marketing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Social}
                      alt="Social-Media-Marketing"
                      className="img-fluid"
                    />
                    <p>
                      Social Media <br />
                      Marketing
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("pay_per_click")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "pay_per_click" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Pay}
                      alt="Pay-Per-Click-PPC"
                      className="img-fluid"
                    />
                    <p>
                      Pay Per Click <br />
                      (PPC)
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_store")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "app_store" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={AppStore}
                      alt="App-Store-Optimization"
                      className="img-fluid"
                    />
                    <p>
                      App Store <br />
                      Optimization (ASO)
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("content_marketing")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "content_marketing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Content}
                      alt="Content-Marketing"
                      className="img-fluid"
                    />
                    <p>
                      Content <br />
                      Marketing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "seo" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">SEO Consultancy</h3>
                    <p className="Title_para">
                      Nowadays, the popularity of the online platform is
                      reaching its peak because this provides an easy way of
                      reaching people and increasing the profit rates.
                      SEO(Search Engine Optimization) can help you to rank on
                      the search engine and catch the eye of the customers.
                      Along with the development of the software development
                      solutions, it is also important to focus on the SEO of the
                      websites which will help you to reach a high number of
                      users.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best SEO Consultancy Services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading Software development
                      company and Digital marketing services. We offer expert
                      SEO consultancy to business websites and help them to
                      chase achievable and realistic search ranking goals and
                      guide them in creating a content and SEO strategy for
                      short and long term results.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "keyword" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Keyword and Market Research
                    </h3>
                    <p className="Title_para">
                      Digital Marketing services is one of the most important
                      factors for making any kind of business successful.
                      Digital marketing involves SEO as well as Keyword and
                      Market research. Keyword and Market research can help you
                      to understand the users and their search patterns. Many of
                      the services are now integrating these services into their
                      online platforms.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Keyword and Market Research
                      Services?
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We boast of a robust and
                      expertise-driven keyword and market research apparatus and
                      professionals who can help you focus on the most relevant
                      and useful low-competition keywords for the best SEO
                      results. For more details on keyword and market research,
                      feel free to reach us and discuss all your requirements
                      After this we will offer the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "onsite_technical" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Onsite and Technical SEO</h3>
                    <p className="Title_para">
                      A software solution like websites, mobile apps and web
                      apps popularity is increasing as per the increasing number
                      of the users. The users are liking the online platforms
                      because it is time-saving as well as cost-effective. In
                      this digital era, businesses are now launching their
                      online platforms to increase sales of the business. If you
                      are planning to launch any software solution then this is
                      probably the best time to do that.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Onsite and Technical SEO
                      Services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of highly skilled
                      digital marketing who will offer the best Onsite and
                      Technical SEO services. We undertake on-site and technical
                      SEO responsibilities for websites and help them boost site
                      performance, loading speed, design elements and various
                      aspects that help search engine crawlers to find content
                      easily.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "off_page" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Off-page SEO</h3>
                    <p className="Title_para">
                      Nowadays, Software solutions like mobile app, web app and
                      website development services. If we talk about digital
                      marketing services then Off-page SEO is also getting
                      highly demanding in this present time. Off-Page SEO mainly
                      works outside of your website to improve search engine
                      rankings. This mainly refers to working on the article,
                      blog, podcast, video, content, business listings,
                      classified listing and more.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Off-Page SEO Services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular web and app
                      development company. We have a team of highly skilled team
                      of expert people who are proficient in offering digital
                      marketing services. We are also experienced in providing
                      the best off-page services to our clients which can be
                      very helpful for your business success. Feel free to
                      connect with us and get a quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "guest_blogging" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Guest Blogging</h3>
                    <p className="Title_para">
                      Guest Blogging is one of the most popular digital
                      marketing services in this present time. Guest blogging is
                      also known as guest posting which means writing blogs for
                      another person or company. As people are launching their
                      website or mobile app in the market, they also need to
                      work on digital marketing. Digital marketing like guest
                      blogging can help you to get your sales target by
                      targeting the right audience.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Guest Blogging Services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a team of highly expert designers as well
                      as developers who are proficient in providing the best IT
                      services at the best rates. We are also experienced with
                      digital marketing services. If you are looking for
                      software development services, then feel free to connect
                      with us and get a free quotation for the same.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "social_marketing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social Media Marketing</h3>
                    <p className="Title_para">
                      Social Media Marketing is one of the trending methods
                      which can be very helpful for business owners as well as
                      for startups. Nowadays, people are using social media a
                      lot and this can be an advantage for business owners. Many
                      business owners and startup owners are now working on
                      social media marketing as it helps in increasing the sales
                      rates or we can say it is more effective.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Social Media Marketing
                      Services?
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is one of the leading
                      Digital marketing services. We have a team of highly
                      experienced and skilled people who are proficient in
                      providing the best social media marketing services at the
                      best rates Feel free to connect with us, discuss your
                      requirements and get a free quote for your service.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "pay_per_click" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Pay per Click (PPC)</h3>
                    <p className="Title_para">
                      Pay Per click is one of the most crucial services of
                      digital marketing. Pay Per Click (PPC) advertising method
                      is accessible for Short as well as for the long-term
                      digital marketing strategy to get your online platform at
                      the top of the search engine. Sometimes you will get
                      instant results by using the PPC methods. If you own a
                      digital business then you can think of integrating PPC.
                    </p>
                    <p className="Title_para">
                      Are you looking for the Best Pay Per Click Services?
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is one of the most popular
                      software development company. We are proficient in
                      offering various one platform development services like
                      mobile app, web app and website development. Along with
                      the development, we also offer designing and digital
                      marketing services to the client. For more details feel
                      free to connect with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "app_store" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      App Store Optimization (ASO)
                    </h3>
                    <p className="Title_para">
                      App Store optimization is very important for business
                      owners as this helps in optimizing the rank of the app in
                      the specific store. App Store Optimization is the process
                      of increasing the visibility of the app and growing its
                      organic downloads. This service can help you to easily
                      increase the number of users for your services. If you own
                      online platforms then this is the best time for you to
                      integrate the ASO service.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best App Store Optimization
                      services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers and designers who are experts in providing the
                      best services. Along with this we also offer digital
                      marketing services to our clients to increase customer’s
                      userbase. For more details, you can feel free to connect
                      with us and get a free quotation for the best App Store
                      Optimization service.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "content_marketing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Content Marketing </h3>
                    <p className="Title_para">
                      If we talk about the current trend then content marketing
                      is one of the most important factors for making any
                      business more successful in the market. If we talk about
                      today’s trend then the content is demanding because this
                      will help in increasing the number of the targeted users.
                      If you own a website or a mobile app, then this is the
                      time for you to hire the best content marketing service
                      provided to increase your profits.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Content Marketing services?
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with software development, we
                      also offer the best services for digital marketing
                      services. We boost your websites’ SEO prospects by helping
                      you with quality content publishing and marketing at
                      contents across highly credible and reputed websites
                      access niches. For more details, connect with us and get a
                      free quote for a content marketing service.
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
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/Technologies/SEO.webp")}
                  alt="SEO"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>SEO</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                data-aos="flip-right"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/Technologies/digital-marketing.webp")}
                  alt="digital-marketing"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Social Media Marketing</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/Technologies/ASO.webp")}
                  alt="ASO"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>ASO</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                data-aos="flip-right"
                data-aos-duration="1000"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/Technologies/guest-blogging.webp")}
                  alt="guest-blogging"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Guest Blogging</h2>
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
                  onClick={() => setActiveServe("small_industry")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "small_industry" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Small}
                      alt="Small-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Small <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("restaurant")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "restaurant" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Restaurant}
                      alt="Restaurant-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Restaurant <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("apparel")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "apparel" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Apparel}
                      alt="Apparel-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Apparel <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("finance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "finance" && "service__provide_tab_active"
                    }`}
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
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("sports")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "sports" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Sports}
                      alt="Sports-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Sports <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("arts_entertainment")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "arts_entertainment" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Arts}
                      alt="Arts-And-Entertainment"
                      className="img-fluid"
                    />
                    <p>
                      Arts And Entertainment <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("marketplace")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "marketplace" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Marketplace}
                      alt="Marketplace-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Marketplace <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveServe("beauty")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeServe === "beauty" && "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Beauty}
                      alt="Beauty-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Beauty <br />
                      Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeServe === "real_estate" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Real Estate Industry</h3>
                    <p className="Title_para">
                      If yes, then feel free to reach us and get a free
                      quotation for your Real Estate app development services.
                      We have years of experience in providing the best
                      developers and designers who are efficient in providing
                      the best real estate industry app solution which can help
                      you to increase the customer base easily.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Real Estate Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to reach us and get a free
                      quotation for your Real Estate app development services.
                      We have years of experience in providing the best
                      developers and designers who are efficient in providing
                      the best real estate industry app solution which can help
                      you to increase the customer base easily.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeServe === "small_industry" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Small Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We offer the services like mobile app
                      development, web app development, Website development,
                      Game app development as well as Digital Marketing service.
                      We are also providing unique designing services for the
                      small industry which can help to get more users attentions
                      which can increase the sales of the business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Small Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us and let’s have a
                      quick discussion about your requirements. We have a team
                      of highly skilled developers as well as designers who have
                      years of experience in providing the best solution for the
                      small industry. The demand of the small industry is
                      getting popular. If you are planning to launch an Online
                      app platform then connect with us now.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "restaurant" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Restaurant Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a group of experienced and
                      skilful developers as well as designers who are experts in
                      providing the best services at the best rates. We have
                      also worked on various food and restaurant projects and
                      provided the best solution which can drive their business
                      to the top. If you own a restaurant then this is the time
                      for you to digitize your business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Restaurant Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the time for you to connect
                      with us, discuss your requirements and get a free
                      quotation for your restaurant app. We have a team of the
                      highly skilled team who are productive in providing unique
                      services for a restaurant industry app or web solutions.
                      The demand of the restaurant industry is increasing, so if
                      you are thinking then feel free to connect with us and get
                      a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "apparel" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Apparel Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular software
                      development company. We have a group of highly experienced
                      developers, designers as well a digital marketing team who
                      are proficient in offering the best solution for the
                      Apparel industry. Nowadays, Apparel Industries are now
                      converting its services into online platforms to increase
                      sales rates of the business. If you own an apparel
                      industry then launch your mobile app.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Apparel Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are, feel free to reach us, discuss
                      your requirements and get a free quote for your business.
                      You can clearly observe that people are more inclined
                      towards the online platforms for all kinds of services
                      because it is easy to access. Running an Apparel industry,
                      then it is highly recommended to have an online platform
                      that can make the work easier for the business owners.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "finance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Finance Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We are highly experienced in providing the best
                      services for mobile app, web app and website development.
                      We are also offering designing services along with
                      marketing services. If you own a finance industry or
                      planning to invest in the finance industry then it is
                      highly recommended to have an online platform for a
                      finance industry to easily manage everything.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a finance Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. We offer all
                      kinds of software development services along with the
                      finance industry. In the finance industry, it is very
                      important to have an online platform because it makes the
                      work easier for the business owners as well as for the
                      users. For more details, feel free to reach us and get a
                      free quotation for your finance industry app at the best
                      rates.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "sports" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Sports Industry</h3>
                    <p className="Title_para">
                      The App Ideas is a highly advanced web and app development
                      company. We have a team of highly skilled and experienced
                      developers who are proficient in developing the best
                      online platform solution which can be very beneficial for
                      all kinds of business niches. This thing is also
                      applicable for the sports industry, as this industry is
                      also moving towards the online platform to enhance the
                      user experience.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Sports Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      reach us and discuss your requirements. We are experts and
                      experienced in offering the best Sports Industry mobile
                      app solution at the best rates. If you are planning to
                      launch a Sports mobile app then it is very important for
                      you to launch a better solution. You can check our
                      expertise by hiring us for a Sports Industry app
                      development.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "arts_entertainment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Arts and Entertainment Industry
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the best web and app development
                      company. We have years of experience in providing the top
                      solution for all kinds of business niches including the
                      arts and entertainment industry. Nowadays, as we can
                      clearly observe that people are more inclined towards
                      online platforms because it is easier to access the
                      services online easily and effectively.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Arts and Entertainment
                      Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us at any time and
                      discuss your requirements to get a free quotation. The
                      Arts and Entertainment industries are now achieving
                      success by digitizing their business. Users can easily
                      check out your services and access them at any time as
                      well as at any place. Please check out the market and plan
                      to develop a unique app idea that can provide different
                      Entertainment elements to the users.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "marketplace" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Marketplace Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a team of highly skilled developers as
                      well as designers who are experts in providing the best
                      marketplace solutions. We offer marketplace Industry
                      solutions like web app development, mobile app
                      development, website development and more. Nowadays,
                      people are more inclined towards online marketplace
                      platforms because it offers the convenience of accessing
                      the services.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Marketplace Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, this is probably the time for you to plan and
                      launch an online platform to get more attention from the
                      users. The marketplace Industry is getting highly popular
                      because it offers an online platform to access the
                      services from any place and at any time easily. Feel free
                      to connect with us and get a free quotation for your
                      Marketplace service at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeServe === "beauty" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Beauty Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We are highly proficient in
                      providing the best solution for web app development,
                      mobile app development and website development. Every
                      industry is now launching its online platforms including
                      the beauty industry. Nowadays, the beauty industries are
                      moving towards digitization to increase sales.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Beauty Industry app?
                    </p>
                    <p className="Title_para">
                      If yes, then here you are at the right place. We have
                      provided the best solution for all of business niches. If
                      you are planning to make an investment in the beauty
                      industry or running a beauty industry then this is
                      probably the time for you to choose us and launch your own
                      beauty industry. Feel free to reach us, send your
                      requirement and get the best quotation for launching a
                      beauty industry.
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
      <ContactUs question="Are you looking for the best Digital Marketing Agency?" />
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

export default DigitalMarketing;
