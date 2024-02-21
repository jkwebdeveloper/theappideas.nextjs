import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
// Banner
import Development from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver-Tracking-App.png";
import Services from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver-Tracking-2.png";
import developer from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/On-Demand-Driver-Tracking-App-Development.png";

//  Passenger App
import Social from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Social Login.svg";
import ProfileManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/profile-management.svg";
import Current from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Current Booking.svg";
import Live from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Live-Driver-Tracking.svg";
import LiveChat from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Live Chat.svg";
import Call from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Call with driver.svg";
import Ratings from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Rating _ Reviews.svg";
import Give from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Give-A-Tip.svg";
import Pay from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Pay-Online.svg";
import Requestt from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/User-Get-The-.svg";
import card from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/card management.svg";

//  Driver Tracking App
import Register from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Login_Register.svg";
import First from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/First use checkup list.svg";
import Booking from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Booking Details.svg";
import Route from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Route-Information.svg";
import Start from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Start _ End Journey.svg";
import Callwith from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Call with Passenger.svg";
import Panic from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Panic-Button.svg";
import receive from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Receive-Tip.svg";
import Historyy from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/History of trips.svg";

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";


const DriverTrackingApp = () => {
  const [activeSection, setActiveSection] = useState("passenger_driver");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("driver_productivity");
  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false);
    }
    SetOpenServicesProvide(i);
  };

  const ServiceProvideData = [
    {
      id: 1,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Driver-Productivity1.png"),
      que: "Driver productivity",
      ans: "The driver tracking app will help to boost the productivity of drivers by keeping in constant touch.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Reaching-Destination-Faster1.png"),
      que: "Reaching destination faster",
      ans: "With the tracking app, real-time suggestions and advice can be delivered to help him reach the destination faster and safer.",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Fuel-Efficiency1.png"),
      que: "Fuel efficiency",
      ans: "Real-time tracking of the vehicle will help to prevent misuses and unnecessary errands to boost fuel efficiency.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/On-Road-Security1.png"),
      que: "On-road security",
      ans: "Thanks to such an app in real-time any security issue or challenge can be known and accordingly on-road traffic can be reached for help.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Better-Vehicle-Maintenance1.png"),
      que: "Better vehicle maintenance",
      ans: "Real-time tracking of the vehicles will also help better maintenance and look-after of the vehicle.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Real-Time-Communication1.png"),
      que: "Real-time communication",
      ans: "A driver tracking app will also help a business keeping in constant communication with the driver allowing them to give any instruction.",
    },
  ];

  const DriverTrackData = [
    {
      id: 1,
      category: "passenger_driver",
      image: Social,
      title: "Social Logins",
    },
    {
      id: 2,
      category: "passenger_driver",
      image: ProfileManagement,
      title: "login type (leading Passenger or Travelling Passenger)",
    },
    {
      id: 3,
      category: "passenger_driver",
      image: ProfileManagement,
      title: "Profile Management",
    },
    {
      id: 4,
      category: "passenger_driver",
      image: Current,
      title: "Current Booking Details",
    },
    {
      id: 5,
      category: "passenger_driver",
      image: Live,
      title: "Live Driver Tracking",
    },
    {
      id: 6,
      category: "passenger_driver",
      image: LiveChat,
      title: "Live Chat",
    },
    {
      id: 7,
      category: "passenger_driver",
      image: Call,
      title: "Call with driver",
    },
    {
      id: 8,
      category: "passenger_driver",
      image: Ratings,
      title: "Ratings & Reviews",
    },
    {
      id: 9,
      category: "passenger_driver",
      image: Give,
      title: "Give a tip to the driver",
    },
    {
      id: 10,
      category: "passenger_driver",
      image: Pay,
      title: "Pay online",
    },
    {
      id: 11,
      category: "passenger_driver",
      image: Requestt,
      title: "Request for instant quote",
    },
    {
      id: 12,
      category: "passenger_driver",
      image: card,
      title: "card management",
    },
    {
      id: 13,
      category: "driver_tracking",
      image: Register,
      title: "Login/ Register as CH4U Driver or Contractor Driver",
    },
    {
      id: 14,
      category: "driver_tracking",
      image: ProfileManagement,
      title: "Profile Management",
    },
    {
      id: 15,
      category: "driver_tracking",
      image: First,
      title: "First use checkup list",
    },
    {
      id: 16,
      category: "driver_tracking",
      image: Booking,
      title: "Booking Details",
    },
    {
      id: 17,
      category: "driver_tracking",
      image: Route,
      title: "Route information",
    },
    {
      id: 18,
      category: "driver_tracking",
      image: Start,
      title: "“Start & End Journey",
    },
    {
      id: 19,
      category: "driver_tracking",
      image: LiveChat,
      title: "Live Chat",
    },
    {
      id: 20,
      category: "driver_tracking",
      image: Callwith,
      title: "Call with Passenger",
    },
    {
      id: 21,
      category: "driver_tracking",
      image: Panic,
      title: "Panic Button",
    },
    {
      id: 22,
      category: "driver_tracking",
      image: Ratings,
      title: "Ratings & Reviews",
    },
    {
      id: 23,
      category: "driver_tracking",
      image: receive,
      title: "receive Tip",
    },
    {
      id: 24,
      category: "driver_tracking",
      image: Historyy,
      title: "History of trips",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = DriverTrackData.filter((curElem) => {
      return curElem.category === activeSection;
    });
    setData(updateItems);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // run when activesection changes
  useEffect(() => {
    filterItem();
  }, [activeSection]);

  return (
    <>
      <Helmet title="On-Demand Driver Tracking App Development | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="On Demand Driver Tracking App"
        des="Real-time tracking of on-road vehicles and drivers offers immense opportunity to boost the efficiency of manpower, fuel and the vehicle. This is why driver tracking apps with real-time tracking feature are getting so popular. We at the App Ideas build most advanced driver tracking apps with cutting-edge tracking technology to help GPS Tracking App driver and vehicle whereabouts precisely."
        list1="7+ Years of experience in App Development"
        list2="Best Dating App Development Company"
        list3="Dedicated team for your Driver Tracking App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Driver Tracking App"
        service2="Delivery Driver Tracking App"
        service3="On-Demand Driver Tracking App Development"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of Driver Tracking App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "passenger_driver" && "active"
                  }`}
                  id="Passenger-Driver-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Passenger-Driver"
                  type="button"
                  role="tab"
                  aria-controls="Passenger-Driver"
                  aria-selected="true"
                  onClick={() => setActiveSection("passenger_driver")}
                  style={{ cursor: "pointer" }}
                >
                  Passenger Driver Tracking App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "driver_tracking" && "active"
                  }`}
                  id="Driver-Tracking-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Driver-Tracking"
                  type="button"
                  role="tab"
                  aria-controls="Driver-Tracking"
                  aria-selected="false"
                  onClick={() => setActiveSection("driver_tracking")}
                  style={{ cursor: "pointer" }}
                >
                  Driver Tracking App
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="Customer-App"
                role="tabpanel"
                aria-labelledby="Customer-App-Tab"
              >
                <div className="row">
                  {data.map((elem) => {
                    const { id, image, title } = elem;
                    return (
                      <div
                        key={id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4"
                      >
                        <div className="food__delivery__box">
                          <Image width={60} height={60}
                            src={image}
                            alt="search-food-icon"
                            className="img-fluid"
                            style={{ height: "60px" }}
                          />
                          <h4>{title}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Delivery App Section End */}
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
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
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
            speed={500}
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
            //   style={{ padding: "2.5rem 0" }}
          >
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image width={1110} height={628}
                    alt="food"
                    src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/food1.webp")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why should you create a Driver Tracking App?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("driver_productivity")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "driver_productivity" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Driver-Productivity1.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Driver Productivity</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("destination_faster")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "destination_faster" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Reaching-Destination-Faster1.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Destination Faster</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("fuel_efficiency")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "fuel_efficiency" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Fuel-Efficiency1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Fuel Efficiency</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("on_road")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "on_road" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/On-Road-Security1.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>On-Road Security</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("better_vehicle")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "better_vehicle" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Better-Vehicle-Maintenance1.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Better Vehicle Maintenance</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("real_time")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "real_time" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Real-Time-Communication1.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Real-Time Communication</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "driver_productivity" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Driver productivity</h3>
                    <p className="Title_para">
                      The driver tracking app will help to boost the
                      productivity of drivers by keeping in constant touch.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "destination_faster" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Reaching destination faster
                    </h3>
                    <p className="Title_para">
                      With the tracking app, real-time suggestions and advice
                      can be delivered to help him reach the destination faster
                      and safer.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "fuel_efficiency" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fuel efficiency</h3>
                    <p className="Title_para">
                      Real-time tracking of the vehicle will help to prevent
                      misuses and unnecessary errands to boost fuel efficiency.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "on_road" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">On-road security</h3>
                    <p className="Title_para">
                      Thanks to such an app in real-time any security issue or
                      challenge can be known and accordingly on-road traffic can
                      be reached for help.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "better_vehicle" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Better vehicle maintenance
                    </h3>
                    <p className="Title_para">
                      Real-time tracking of the vehicles will also help better
                      maintenance and look-after of the vehicle.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "real_time" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Real-time communication</h3>
                    <p className="Title_para">
                      A driver tracking app will also help a business keeping in
                      constant communication with the driver allowing them to
                      give any instruction.
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
      <ContactUs question="Would you like to create a Driver tracking App?" />
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

export default DriverTrackingApp;
