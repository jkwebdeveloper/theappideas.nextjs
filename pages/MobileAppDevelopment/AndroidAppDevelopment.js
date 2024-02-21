import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';

import mobileAppdevelopment from "../../public/assets/images/MobileAppDev/Mobile App Development Company/Mobile App Development.svg";
import mobileApplication from "../../public/assets/images/MobileAppDev/Mobile App Development Company/Mobile Application Development Company.svg";
import mobileappdeveloper from "../../public/assets/images/MobileAppDev/Mobile App Development Company/mobile app developer.svg";

import Experience from "../../public/assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Experience and Expertise.svg";
import Robust from "../../public/assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Robust Portfolio.svg";
import Lifecycle from "../../public/assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Full Lifecycle support.svg";
import Agile from "../../public/assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Agile Development.svg";
import Fast from "../../public/assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Fast-paced development.svg";
import Competitive from "../../public/assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Competitive price.svg";

import TestiMonial from "../../components/Testimonial/TestiMonial";
import FAQ from "../../components/FAQ";

import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/HeroSection";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";
// import WorkHand from "../../components/WorkHand";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png"),
    que: "Android Support And Maintenance",
    ans: "The App Ideas is one of the popular web and app development company. We offer the best Android app development services with unique design as well as best features integration which will be helpful in business growth. We have a pool of talented Android developers who are experts in offering the best app solutions. We offer Android app development services which help in attracting a high number of users to your online services.",
    ans2: "We are highly expert in developing custom Android Mobile apps for a variety of business categories and niches. Along with single-user platform development. We are also experienced in developing Multiservice platforms or On-demand platforms for every business including the food industry, the grocery industry, E-commerce and shopping industry, Healthcare industry and more.",
  },
  {
    id: 2,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png"),
    que: "Android Enterprise App Development",
    ans: "The App Ideas is a leading mobile app development company. We offer the best Android enterprise mobile app development services for the internal facing employee as well as for the customer-facing apps. Along with the digitalization of the business, enterprise apps are also getting highly demanding in this present time. Many of the businesses are launching and shifting towards the enterprise app.",
    ans2: "Here we offer sophisticated as well as future-ready Android apps to address the typical requirements of modern enterprises. We have a team of talented Android developers who offers the customized services to enterprises based on your requirements like an end to end development, project management and team extension. We are experts in native as well as cross-platform app development.",
  },
  {
    id: 3,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png"),
    que: "Android wearable app development",
    ans: "The App Ideas is one of the most popular web and app development company. Along with the mobile app development, we are also experts in developing the successful Android wearable app. Nowadays, as per the research, it is seen that users and business owners are now more inclined towards wearable devices. Due to the increasing demand for Android wearable devices, the demands of the Android wearable apps also increasing.",
    ans2: "The App Ideas has a team of dedicated Android developers who will provide the best Android wearable app development services for various business categories. We offer the future-ready app solution as per the current trend. We develop a wide array of Android wearable apps for Android smartwatches and smart wearable health trackers and bands.",
  },
  {
    id: 4,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png"),
    que: "Android Game app development",
    ans: "We are from The App Ideas, a leading software development company. The Android operating system is one of the most popular mobile app platforms which provide supports to more than 70% of smart devices like smartphones, tablets and all the other devices. Android mobile apps services demands grow with every minute. Similarly, Android game app development is highly demanding in this present time.",
    ans2: "Android games development is one of the expert services which we offer to the clients as per their requirements. If we talk about Android Games then this type of gaming application is compatible with a mobile app as well as other devices. We have a team of highly skilled android app developers who provide the best android game app services at the best rates.",
  },
  {
    id: 5,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png"),
    que: "Android App Redesign",
    ans: "Android App Redesign is one of the most popular services in this present time. It is very important for business owners or startups to make the Android app up to date as per the current trends. Many of the Android app owners launch the app in the market then forget to update it or modify it as per the user demands and current trends to increase the user engagement easily.",
    ans2: "The App Ideas is one of the leading web and app development company. We are highly expert in providing the best Android app solution for every business category with the best design at the best rates. Along with the development, we also offer the redesigning services of the Android app. For Old android apps, we provide state of an art redesign service to boost business audience engagement.",
  },
  {
    id: 6,
    images: require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png"),
    que: "Android Support and Maintenance",
    ans: "Every Android Mobile app requires Support and Maintenance services after some period. Nowadays, as we can see technology keeps updating with time. New features and functionality are updated as per the demands. Due to the update in technology, the mobile app must keep maintaining as per the demand to keep as well as increase the engagement of the users.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled Android developers who provides support as well as maintenance services to our clients. Our expert team of developers provides full support and maintenance services to all Android apps and ensure their success in the Android marketplace.",
  },
];

const IndustriesData = [
  {
    id: 1,
    images: Experience,
    que: "Experience and Expertise.",
    ans: "We are from The App Ideas is a leading web and app development company .We offer website development services as well as the best iPad App development service which will helps businesses to grow and increase the engagement of the users towards your services.",
    ans2: "Before hiring any software development company, it is very important for you to know the expertise of the team. We offer a talented pool of Ipad developers having years of experience proven expertise and great credentials.",
  },
  {
    id: 2,
    images: Robust,
    que: "Robust Portfolio",
    ans: "Before hiring any software development services, it is very important for you to check the form detail as well as their past projects. By checking their past projects, you will get a clear idea about their experience and expertise in Android Mobile app development.",
    ans2: "The App Ideas is one of the topmost software development company. We have a team of a highly experienced and expert team of Android app developers who provide the best solution for all types of business categories. As an expert Android development company, we boast a robust portfolio of the most successful android apps across the nices.",
  },
  {
    id: 3,
    images: Lifecycle,
    que: "Full Lifecycle support",
    ans: "The App Ideas is one of the leading web and app development company. Nowadays, from the current market scenario, we can clearly see the demand and the increasing popularity of Android app solutions in the market. Every business and startup is now launching their Android mobile app in the market for engaging more users.",
    ans2: "By choosing The App Ideas for your Android app development you will get various advantages. One of the advantages is Full Lifecycle support which means we offer support for the full lifecycle of the app starting from the development and launching phase to post-launch marketing.",
  },
  {
    id: 4,
    images: Agile,
    que: "Agile development",
    ans: "In this present time, the demand for Android app development is increasing because of its best convenience and comfort. More than half of the population own smartphones, so they prefer a mobile apps for accessing all kinds of services. This is the main reason why service owners are shifting towards online platforms.",
    ans2: "We are from The App Ideas, which is a leading web and app development company. For Android app development, we strictly follow the agile methodology for delivering the best output without compromising on the qualitative parameters.",
  },
  {
    id: 5,
    images: Fast,
    que: "Fast-paced development",
    ans: "In this modern or we can say digital era, everything is digitalizing as quickly as possible. Similarly, it is very easy to access all kinds of services through smartphones which are cost-saving as well as time-saving. Business owners and entrepreneur are looking for the software development company which offer the fast-paced development services.",
    ans2: "The App Ideas are one of best web and app development company. We have a team of a highly skilled and expert team of Android app developers who provide the best solution for every business niche. With our Android development process, we ensure the fastest turnaround time and shortest time to market for each and every app.",
  },
  {
    id: 6,
    images: Competitive,
    que: "Competitive price",
    ans: "If you are planning to launch an Android app solution in the market for your business then this is the right time to make the investment, The Android mobile app can help you to stand out differently among the competitions and increase the user engagement towards your business.",
    ans2: "The App Ideas is one of the leading software development company. We have a team of highly skilled web and app developers who offer the best solution at the best rates. We offer highly competitive pricing for our Android app development services that remains affordable even for small enterprises.",
  },
];
const AndroidAppDevelopment = () => {
  const [activeService, setactiveService] = useState("custom_mobile");
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

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Top Android App Development Comapny India - The app ideas" />
      <Header setOpenModal={setModalOpen}/>

      {/* Banner Section Start */}
      <HeroSection
        title="Android App Development Company"
        des="The App Ideas is one of the leading web and app development company. We have a team of highly skilled and experienced developers who will provide the best Android mobile app as well as a custom mobile app solution which will be very beneficial for the growth of your business and startups at the best rates."
        list1="7+ Years of experience in App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Android App Development"
        service2="Android Application Development"
        service3="Android App Development Company"
        image1={mobileAppdevelopment}
        image2={mobileApplication}
        image3={mobileappdeveloper}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Android App Development Company India</h3>
            <p>
              We boast of an Android app development experience that spans over
              a decade and in all these years we produced a bounty of successful
              Android apps for business niches and consumer categories of all
              types. We provide a wide spectrum of Android app development
              services. Android is the most popular mobile operating system
              platform that runs the vast majority of mobile devices around the
              globe. As mobile devices are exploding with innovations, Android
              apps constantly need to stay abreast of these innovations and
              changes. As the early starter in the Android development space, we
              have seen the entire evolution of the Android apps and their
              innovative scopes.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("custom_mobile")}
                >
                  <div
                   
                    className={`service__provide_tab ${
                      activeService === "custom_mobile" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom Mobile App Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_enterprise")}
                >
                  <div
                   
                    className={`service__provide_tab ${
                      activeService === "android_enterprise" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Android Enterprise App Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_wearable")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "android_wearable" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Android Wearable App Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_game")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "android_game" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Android Game App Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_app_redesign")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === "android_app_redesign" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Android App Redesign</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "android_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require("../../public/assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Android Support And Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "custom_mobile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Support And Maintenance
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the popular web and app
                      development company. We offer the best Android app
                      development services with unique design as well as best
                      features integration which will be helpful in business
                      growth. We have a pool of talented Android developers who
                      are experts in offering the best app solutions. We offer
                      Android app development services which help in attracting
                      a high number of users to your online services.
                    </p>
                    <p className="Title_para">
                      We are highly expert in developing custom Android Mobile
                      apps for a variety of business categories and niches.
                      Along with single-user platform development. We are also
                      experienced in developing Multiservice platforms or
                      On-demand platforms for every business including the food
                      industry, the grocery industry, E-commerce and shopping
                      industry, Healthcare industry and more.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_enterprise" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Enterprise App Development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is a leading mobile app development company.
                      We offer the best Android enterprise mobile app
                      development services for the internal facing employee as
                      well as for the customer-facing apps. Along with the
                      digitalization of the business, enterprise apps are also
                      getting highly demanding in this present time. Many of the
                      businesses are launching and shifting towards the
                      enterprise app.
                    </p>
                    <p className="Title_para">
                      Here we offer sophisticated as well as future-ready
                      Android apps to address the typical requirements of modern
                      enterprises. We have a team of talented Android developers
                      who offers the customized services to enterprises based on
                      your requirements like an end to end development, project
                      management and team extension. We are experts in native as
                      well as cross-platform app development.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_wearable" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android wearable app development{" "}
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. Along with the mobile app
                      development, we are also experts in developing the
                      successful Android wearable app. Nowadays, as per the
                      research, it is seen that users and business owners are
                      now more inclined towards wearable devices. Due to the
                      increasing demand for Android wearable devices, the
                      demands of the Android wearable apps also increasing.
                    </p>
                    <p className="Title_para">
                      The App Ideas has a team of dedicated Android developers
                      who will provide the best Android wearable app development
                      services for various business categories. We offer the
                      future-ready app solution as per the current trend. We
                      develop a wide array of Android wearable apps for Android
                      smartwatches and smart wearable health trackers and bands.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_game" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Game app development{" "}
                    </h3>
                    <p className="Title_para">
                      We are from The App Ideas, a leading software development
                      company. The Android operating system is one of the most
                      popular mobile app platforms which provide supports to
                      more than 70% of smart devices like smartphones, tablets
                      and all the other devices. Android mobile apps services
                      demands grow with every minute. Similarly, Android game
                      app development is highly demanding in this present time.
                    </p>
                    <p className="Title_para">
                      Android games development is one of the expert services
                      which we offer to the clients as per their requirements.
                      If we talk about Android Games then this type of gaming
                      application is compatible with a mobile app as well as
                      other devices. We have a team of highly skilled android
                      app developers who provide the best android game app
                      services at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_app_redesign" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Android App Redesign </h3>
                    <p className="Title_para">
                      Android App Redesign is one of the most popular services
                      in this present time. It is very important for business
                      owners or startups to make the Android app up to date as
                      per the current trends. Many of the Android app owners
                      launch the app in the market then forget to update it or
                      modify it as per the user demands and current trends to
                      increase the user engagement easily.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly expert in providing the
                      best Android app solution for every business category with
                      the best design at the best rates. Along with the
                      development, we also offer the redesigning services of the
                      Android app. For Old android apps, we provide state of an
                      art redesign service to boost business audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Support and Maintenance{" "}
                    </h3>
                    <p className="Title_para">
                      Every Android Mobile app requires Support and Maintenance
                      services after some period. Nowadays, as we can see
                      technology keeps updating with time. New features and
                      functionality are updated as per the demands. Due to the
                      update in technology, the mobile app must keep maintaining
                      as per the demand to keep as well as increase the
                      engagement of the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      Android developers who provides support as well as
                      maintenance services to our clients. Our expert team of
                      developers provides full support and maintenance services
                      to all Android apps and ensure their success in the
                      Android marketplace.
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
      {/* <WorkHand /> */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.covid2019.rchc"
                target="_blank"
              >
                <div data-aos="fade-up" className="work_head_box">
                  <div className="work_head_box_link"></div>
                  <div className="row w-100">
                    <div className="work_head_box_link"></div>
                    <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                      <div className="work_head_box_link"></div>
                      <div className="work_head_lft">
                        <div className="work_head_box_link">
                          <h2>Covid</h2>
                        </div>
                        <ul className="ps-0">
                          <div className="work_head_box_link"></div>
                          <li>
                            <div className="work_head_box_link"> </div>
                            <div className="work_head_item">Android App</div>
                          </li>
                          <li>
                            {" "}
                            <div className="work_head_item">IOS</div>
                          </li>
                          <li>
                            {" "}
                            <div className="work_head_item">
                              Mobile Application Development
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                      <div className="work_head_rht">
                        <Image width={492} height={300}
                          data-aos="fade-left"
                          src={require("../../public/assets/images/Portfolio/Device-Image-one.webp")}
                          alt="Device-Image-one"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box work_head_box_one"
              >
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Paddock </h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {" "}
                          </div>
                          <div className="work_head_item">
                            Android App
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            Flutter
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            IOS
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-left"
                        src={require("../../public/assets/images/Portfolio/Device-Image-two.webp")}
                        alt="Device-Image-two"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box work_head_box_two"
              >
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Food Wastage </h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link">
                            {" "}
                          </div>
                          <div className="work_head_item">
                            Android App
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            IOS
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image width={492} height={300}
                        data-aos="fade-left"
                        src={require("../../public/assets/images/Portfolio/Device-Image-three.webp")}
                        alt="Device-Image-three"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section End */}

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose App Ideas For Android App Development?</h3>
            <p>
              At the App Ideas over the years we built a standout reputation for
              outstanding Android app development service by producing an array
              of widely benchmarked apps flaunting sophisticated user experience
              and visually enticing UI. Our Android app development service over
              the years contributed to the commercial success of many businesses
              and helped them carve out a competitive mobile presence. Let’s
              mention the key reasons to choose us for Android app development.
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
                    <p>Robust Portfolio</p>
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
                    <p>Full Lifecycle support</p>
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
                    <p>Fast-paced development</p>
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
                      We are from The App Ideas is a leading web and{" "}
                      <div
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <b>app development company</b>
                      </div>{" "}
                      .We offer website development services as well as the best
                      iPad App development service which will helps businesses
                      to grow and increase the engagement of the users towards
                      your services.
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
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Before hiring any software development services, it is
                      very important for you to check the form detail as well as
                      their past projects. By checking their past projects, you
                      will get a clear idea about their experience and expertise
                      in Android Mobile app development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the topmost software development
                      company. We have a team of a highly experienced and expert
                      team of Android app developers who provide the best
                      solution for all types of business categories. As an
                      expert Android development company, we boast a robust
                      portfolio of the most successful android apps across the
                      nices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "full_lifestyle_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Full Lifecycle support</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Nowadays, from the current market
                      scenario, we can clearly see the demand and the increasing
                      popularity of Android app solutions in the market. Every
                      business and startup is now launching their Android mobile
                      app in the market for engaging more users.
                    </p>
                    <p className="Title_para">
                      By choosing The App Ideas for your Android app development
                      you will get various advantages. One of the advantages is
                      Full Lifecycle support which means we offer support for
                      the full lifecycle of the app starting from the
                      development and launching phase to post-launch marketing.
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
                      In this present time, the demand for Android app
                      development is increasing because of its best convenience
                      and comfort. More than half of the population own
                      smartphones, so they prefer a mobile apps for accessing
                      all kinds of services. This is the main reason why service
                      owners are shifting towards online platforms.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is a leading web and app
                      development company. For Android app development, we
                      strictly follow the agile methodology for delivering the
                      best output without compromising on the qualitative
                      parameters.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "fast_paced_development" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fast-paced development</h3>
                    <p className="Title_para">
                      In this modern or we can say digital era, everything is
                      digitalizing as quickly as possible. Similarly, it is very
                      easy to access all kinds of services through smartphones
                      which are cost-saving as well as time-saving. Business
                      owners and entrepreneur are looking for the software
                      development company which offer the fast-paced development
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas are one of best web and app development
                      company. We have a team of a highly skilled and expert
                      team of Android app developers who provide the best
                      solution for every business niche. With our Android
                      development process, we ensure the fastest turnaround time
                      and shortest time to market for each and every app.
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
                      If you are planning to launch an Android app solution in
                      the market for your business then this is the right time
                      to make the investment, The Android mobile app can help
                      you to stand out differently among the competitions and
                      increase the user engagement towards your business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a team of highly skilled web and app
                      developers who offer the best solution at the best rates.
                      We offer highly competitive pricing for our Android app
                      development services that remains affordable even for
                      small enterprises.
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
      <ContactUs
        question="Do you want to know more about our expertise in Android app development?
Do you want to know how we can make great value additions with our Android development?"
      />
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

export default AndroidAppDevelopment;
