import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
import iphonecompany from "../../public/assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Company.png";
import iphoneservice from "../../public/assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Service.png";
import iphonedevelopment from "../../public/assets/images/MobileAppDev/IPhone App/IPhone-Application-Development.png";

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
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png"),
    que: "Custom iPhone app development",
    ans: "The popularity of the custom mobile app is getting increase day by day. Similarly, iPhone users are also liking the customize features in the mobile apps because by this they get the customize features and functionality as per the requirements. Nowadays, As per the depend many business owners and entrepreneurs are now planning to launch the custom mobile app in the market.",
    ans2: "The App Ideas is one of the leading web and app Development Company.We have a team of highly skilled iPhone app developers who are experts in developing custom iPhone app for all types of consumers niches, enterprises and diverse categories.",
  },
  {
    id: 2,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png"),
    que: "iPhone UI/UX design",
    ans: "Not only iPhone but if we talk about any other services then designing software development services plays a vital role in the success of any business or startup. The designing of the iPhone mobile app helps in attracting more users towards the services and convert them into leads or consumers.",
    ans2: "The App Ideas is a leading web and app development company. Along with development, we have a team of expert designers who are experienced in providing the best designing services for different business categories. We provide sophisticated UI/UX design services for iPhone apps and ensure following the latest design and development trends.",
  },
  {
    id: 3,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png"),
    que: "iPhone App Redesign",
    ans: "iPhone App redesign is one of the best and popular services in this present time. Many business owners and entrepreneurs avoid these services which sometimes impact badly into their business. It is very important to focus on the redesigning of the mobile app from time to time as per the modern trend to increase user engagement.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are experienced in redesigning the iPhone app services. For all existing iPhone apps, we provide a highly user-centric app redesign service to boost engagement and business conversion.",
  },
  {
    id: 4,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png"),
    que: "iPhone App migration",
    ans: "iPhone mobile apps are getting highly popular in the market because the number of IOS users are increasing day by day. This is the main reason why business owners and startups are getting into the iPhone app development and some of the businesses are also converting their services from different operating systems to IOS operating systems.",
    ans2: "The App Ideas is one of the best software development company. We have a team of highly skilled iPhone app developers who provide the successful migration of the iPhone app. We help to migrate your existing website and the Android app to the iPhone app while ensuring a user experience optimised for the iPhone platform.",
  },
  {
    id: 5,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png"),
    que: "iPhone Game Development",
    ans: "We are from The App Ideas which is a leading web and app development company. We offer the best mobile app development services for both the operating system including the Android and IOS mobile app development services for the growth of the business or startups. iPhone mobile app solutions are highly popular in this present time.",
    ans2: "Similarly, if we talk about game app development then iPhone game app services are getting popular day by day. iPhone game app services are platforms that are compatible with mobile apps as well as other IOS devices. We have a team of highly skilled developers who are experts in building highly addictive iPhone games that can consistently generate revenue by offering an immersive gaming experience.",
  },
  {
    id: 6,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png"),
    que: "Support And Maintenance",
    ans: "Every IOS system or iPhone mobile app service requires support and maintenance services over time. As we can clearly observe that we can see the updates in the technology with the time period. New features and functionality are introducing as per the demands as well as the requirement of the users. Due to the newly introduced features in the technology, it is very important for you to keep maintaining your mobile app to keep the user engagement of the users.",
    ans2: "The App Ideas is one of the most popular web and app development company. We have a team of highly skilled IOS developers who will also offer the best support and maintenance services to our clients. For all our iPhone apps we offer full lifecycle support right from the development phase to the launch and marketing.",
  },
];

const IndustriesData = [
  {
    id: 1,
    images: Experience,
    que: "Experience and Expertise.",
    ans: "The App Ideas is one of the leading app and web development. We have a team of high experts and experienced iPhone app developers which helps in the growth of your business or startups. Many startups and businesses are shifting towards mobile app development or IOS platforms to increase user engagement.",
    ans2: "The App Ideas has a group of a skilled and dedicated team of IOS developers with years of experience. We boast of a robust team of experienced iPhone app developers having proven expertise across multiple niches.",
  },
  {
    id: 2,
    images: Robust,
    que: "Robust portfolio",
    ans: "It is very important for you to check the portfolio of the software development services you are about to hire for development. It is very important for you to have a look at the past projects because this will help you to get a clear idea about their experience in iPhone mobile app development.",
    ans2: "The App Ideas is one of the popular software development company. We have a team of a highly expert team of developers who will offer the best solution for all types of business categories. We boast a portfolio of several successful iPhone apps across diverse niches and categories.",
  },
  {
    id: 3,
    images: Lifecycle,
    que: "Unique UI/UX",
    ans: "If we talk about designing then this is one of the most important factors behind the success of any software solution including web and mobile apps Along with the development services, we also offer the best designing services for iPhone mobile apps.",
    ans2: "A proper design of your iPhone mobile app plays a very vital role in its success because designing can help you to increase the engagement of the users towards your services. The App Ideas offer the unique design of the software development. With each of our iPhone apps, we deliver a highly unique and user optimised user interface and user experience.",
  },
  {
    id: 4,
    images: Agile,
    que: "Agile Development",
    ans: "The demand for the iPhone mobile app is increasing because it offers the convenience of using the services as per comfort. More than half of the population are using smartphones this is the main reason behind the shifting of business owners towards online platforms.",
    ans2: "We are from The App Ideas which is a leading web and app development. We strictly follow the agile app development methodology to ensure faster development without compromising on quality.",
  },
  {
    id: 5,
    images: Fast,
    que: "Meet Deadlines and Milestones",
    ans: "The App Ideas is one of the software development services which offers the best web and app services for different categories. We mainly follow the deadlines and milestones for the deployment of the software development services.",
    ans2: "We divide the whole project into milestones, so we can work on the small parts of the project, ask for the client’s confirmation and then move to the other part of the project development. Without iPhone app development services, we strictly ensure meeting deadlines and project milestones.",
  },
  {
    id: 6,
    images: Competitive,
    que: "Competitive Pricing",
    ans: "If you are thinking of launching an iPhone mobile app solution in the market for your business or startups then this is the right time for making an investment. The best iPhone mobile app can help you to stand out differently among the competition and increase user engagement towards the business.",
    ans2: "The App Ideas is one of the leading software development company. We have a team of highly skilled app and web developers who offer successful solutions at the best price. We offer highly competitive pricing for our iPhone app development services that remind affordable for every scale industry.",
  },
];

const IphoneAppDevelopment = () => {
  const [activeService, setActiveService] = useState("custom_and_development");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_expersite"
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

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="iphone App Development Company India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="IPhone App Development Company"
        des="The App Ideas is one of the leading web and app development company. We have a team of highly skilled and expert developers who will offer the best IOS mobile app and custom IOS mobile app solutions that can be very advantageous for the advancement of your business and startups at the best possible rates."
        list1="7+ Years of experience in App Development"
        list2="Best Iphone App Development Company"
        list3="Dedicated team for your Iphone App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="IPhone App Development Company"
        service2="IPhone App Development Service"
        service3="IPhone Application Development"
        image1={iphonecompany}
        image2={iphoneservice}
        image3={iphonedevelopment}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>IPhone App Development Company India</h3>
            <p>
              iPhone still remains to be the most coveted mobile device platform
              that boasts of the presence of the greatest number of mobile apps
              across multiple categories and niches. At The App Ideas, we help
              businesses generating traction among high net worth individuals
              through sophisticated iPhone apps. We have built hundreds of
              successful iPhone apps for a variety of enterprise and consumer
              niches and categories.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("custom_and_development")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "custom_and_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom App Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ui_ux")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "ui_ux" && "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>IPhone UI/UX Design</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_design")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "app_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>IPhone App Redesign</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_migration")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "app_migration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>IPhone App Migration</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("game_development")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "game_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>IPhone Game Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("support_and_maintainance")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "support_and_maintainance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "custom_and_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom iPhone app development
                    </h3>
                    <p className="Title_para">
                      The popularity of the custom mobile app is getting
                      increase day by day. Similarly, iPhone users are also
                      liking the customize features in the mobile apps because
                      by this they get the customize features and functionality
                      as per the requirements. Nowadays, As per the depend many
                      business owners and entrepreneurs are now planning to
                      launch the custom mobile app in the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and
                      <Link
                        href="/mobile-app-development"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <b> app Development Company.</b>
                      </Link>
                      We have a team of highly skilled iPhone app developers who
                      are experts in developing custom iPhone app for all types
                      of consumers niches, enterprises and diverse categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ui_ux" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPhone UI/UX design</h3>
                    <p className="Title_para">
                      Not only iPhone but if we talk about any other services
                      then designing software development services plays a vital
                      role in the success of any business or startup. The
                      designing of the iPhone mobile app helps in attracting
                      more users towards the services and convert them into
                      leads or consumers.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. Along with development, we have a team of expert
                      designers who are experienced in providing the best
                      designing services for different business categories. We
                      provide sophisticated UI/UX design services for iPhone
                      apps and ensure following the latest design and
                      development trends.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "app_design" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPhone App Redesign</h3>
                    <p className="Title_para">
                      iPhone App redesign is one of the best and popular
                      services in this present time. Many business owners and
                      entrepreneurs avoid these services which sometimes impact
                      badly into their business. It is very important to focus
                      on the redesigning of the mobile app from time to time as
                      per the modern trend to increase user engagement.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experienced in
                      redesigning the iPhone app services. For all existing
                      iPhone apps, we provide a highly user-centric app redesign
                      service to boost engagement and business conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "app_migration" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPhone App migration</h3>
                    <p className="Title_para">
                      iPhone mobile apps are getting highly popular in the
                      market because the number of IOS users are increasing day
                      by day. This is the main reason why business owners and
                      startups are getting into the iPhone app development and
                      some of the businesses are also converting their services
                      from different operating systems to IOS operating systems.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the best software development
                      company. We have a team of highly skilled iPhone app
                      developers who provide the successful migration of the
                      iPhone app. We help to migrate your existing website and
                      the Android app to the iPhone app while ensuring a user
                      experience optimised for the iPhone platform.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "game_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPhone Game Development</h3>
                    <p className="Title_para">
                      We are from The App Ideas which is a leading web and app
                      development company. We offer the best mobile app
                      development services for both the operating system
                      including the Android and IOS mobile app development
                      services for the growth of the business or startups.
                      iPhone mobile app solutions are highly popular in this
                      present time.
                    </p>
                    <p className="Title_para">
                      Similarly, if we talk about game app development then
                      iPhone game app services are getting popular day by day.
                      iPhone game app services are platforms that are compatible
                      with mobile apps as well as other IOS devices. We have a
                      team of highly skilled developers who are experts in
                      building highly addictive iPhone games that can
                      consistently generate revenue by offering an immersive
                      gaming experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "support_and_maintainance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support And Maintenance</h3>
                    <p className="Title_para">
                      Every IOS system or iPhone mobile app service requires
                      support and maintenance services over time. As we can
                      clearly observe that we can see the updates in the
                      technology with the time period. New features and
                      functionality are introducing as per the demands as well
                      as the requirement of the users. Due to the newly
                      introduced features in the technology, it is very
                      important for you to keep maintaining your mobile app to
                      keep the user engagement of the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have a team of highly skilled IOS
                      developers who will also offer the best support and
                      maintenance services to our clients. For all our iPhone
                      apps we offer full lifecycle support right from the
                      development phase to the launch and marketing.
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
            <h3>Why You Should Choose Us for iPhone App Development?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience_expersite")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience_expersite" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={Experience}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise.</p>
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
                    } `}
                  >
                    <Image width={60} height={60}
                      src={Robust}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
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
                    <Image width={60} height={60}
                      src={Lifecycle}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Unique UI/UX</p>
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
                  onClick={() => setActiveWhyChoose("deadline_milestones")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "deadline_milestones" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={Fast}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Meet Deadlines and Milestones</p>
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
            {activeWhyChoose === "experience_expersite" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and Expertise.</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading app and web
                      development. We have a team of high experts and
                      experienced iPhone app developers which helps in the
                      growth of your business or startups. Many startups and
                      businesses are shifting towards mobile app development or
                      IOS platforms to increase user engagement.
                    </p>
                    <p className="Title_para">
                      The App Ideas has a group of a skilled and dedicated team
                      of{" "}
                      <Link
                        href="/hire-ios-developer"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <b>IOS developers</b>
                      </Link>{" "}
                      with years of experience. We boast of a robust team of
                      experienced iPhone app developers having proven expertise
                      across multiple niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "robust_portfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust portfolio</h3>
                    <p className="Title_para">
                      It is very important for you to check the portfolio of the
                      software development services you are about to hire for
                      development. It is very important for you to have a look
                      at the past projects because this will help you to get a
                      clear idea about their experience in iPhone mobile app
                      development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular software development
                      company. We have a team of a highly expert team of
                      developers who will offer the best solution for all types
                      of business categories. We boast a portfolio of several
                      successful iPhone apps across diverse niches and
                      categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "ui_ux" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unique UI/UX</h3>
                    <p className="Title_para">
                      If we talk about designing then this is one of the most
                      important factors behind the success of any software
                      solution including web and mobile apps Along with the
                      development services, we also offer the best designing
                      services for iPhone mobile apps.
                    </p>
                    <p className="Title_para">
                      A proper design of your iPhone mobile app plays a very
                      vital role in its success because designing can help you
                      to increase the engagement of the users towards your
                      services. The App Ideas offer the unique design of the
                      software development. With each of our iPhone apps, we
                      deliver a highly unique and user optimised user interface
                      and user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "agile_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      The demand for the iPhone mobile app is increasing because
                      it offers the convenience of using the services as per
                      comfort. More than half of the population are using
                      smartphones this is the main reason behind the shifting of
                      business owners towards online platforms.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is a leading web and app
                      development. We strictly follow the agile app development
                      methodology to ensure faster development without
                      compromising on quality.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "deadline_milestones" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Meet Deadlines and Milestones
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the software development services
                      which offers the best web and app services for different
                      categories. We mainly follow the deadlines and milestones
                      for the deployment of the software development services.
                    </p>
                    <p className="Title_para">
                      We divide the whole project into milestones, so we can
                      work on the small parts of the project, ask for the
                      client’s confirmation and then move to the other part of
                      the project development. Without iPhone app development
                      services, we strictly ensure meeting deadlines and project
                      milestones.
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
                      If you are thinking of launching an iPhone mobile app
                      solution in the market for your business or startups then
                      this is the right time for making an investment. The best
                      iPhone mobile app can help you to stand out differently
                      among the competition and increase user engagement towards
                      the business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a team of highly skilled app and web
                      developers who offer successful solutions at the best
                      price. We offer highly competitive pricing for our iPhone
                      app development services that remind affordable for every
                      scale industry.
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
      <ContactUs question="Are you planning to launch a Successful iPhone Mobile app in the market?" />
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

export default IphoneAppDevelopment;
