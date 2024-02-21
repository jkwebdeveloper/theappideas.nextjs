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
import Development from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Taxi-Booking-App-Development.png";
import Services from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Build-Taxi-App.png";
import developer from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Taxi-Booking-App-Development-Company.png";

//  Passenger App
import SignUp from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/signup.svg";
import Pickup from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Pick up Location.svg";
import Drop from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Drop off location.svg";
import BookingTypes from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Booking Types.svg";
import Chat from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Chat.svg";
import OnlinePayment from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Online payment.svg";
import Ratings from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Rating _ Reviews.svg";
import Order from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Order History.svg";
import AvailOffers from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Avail offer.svg";
import Payvia from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Pay with Wallet.svg";

// On-Demand-Driver-App
import Flexible from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Flexible-ride-choice.svg";
import Driverchat from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Driver chat option.svg";
import Finding from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Finding the available drivers.svg";
import approaching from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Driver approaching scenarios.svg";
import Boarding from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Boarding process.svg";
import cancellation from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Ride cancellation scenarios.svg";
import During from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/During the ride features.svg";
import Accepting from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Accepting and not accepting rides.svg";
import passenger from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Rating _ Reviews.svg";

// Backend
import Driverstatus from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Driver status and reports.svg";
import Userstatus from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/User status and reports.svg";
import Trip from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Trip status and reports.svg";
import Revenue from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Revenue earning status and reports.svg";
import Currentlyactive from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Currently active drivers.svg";
import Currently from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Currently ongoing trips.svg";
import Complaints from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Complaints against driver.svg";
import Disciplinary from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Disciplinary actions on drivers and passengers.svg";
import Liveevents from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Live feed.svg";
import Notificationclients from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Notification to all clients.svg";
import Weekly from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Weekly monthly payment invoicing.svg";
import Email from "../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Email system.svg";
import ContactUs from "../../../components/ContactUs";
import HeroSection from "../../../components/HeroSection";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const TaxiBooking = () => {
  const [activeSection, setActiveSection] = useState("passenger_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("smart_commute");
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
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Website-Redesign.png"),
      que: "Smart commute",
      ans: "On Demand Taxi Booking App Development just make the right choice for the smart commuters in today’s market by allowing advanced and hi-tech solutions to book a ride.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-235.png"),
      que: "Increasing demand",
      ans: "As the demands of such services are skyrocketing because of the convenience, there is no possible downside in terms of growth opportunity.",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/icons8-smart-watch-100-1.png"),
      que: "Connected transport ecosystem",
      ans: "Smart transport ecosystem with connected technologies is already a reality and many commuters all over the world are habituated to it.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-53.png"),
      que: "Win-win business model",
      ans: "Taxi booking apps offer a complete win-win business model for every stakeholder including the commuters, transporters and the business running the app.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-184.png"),
      que: "Fuel efficiency",
      ans: "Smart and app connected vehicles are irreversible as they also play an important role in reducing fuel consumption.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Mask-Group.png"),
      que: "Employment opportunity",
      ans: "Smart taxi booking apps will also create a lot of employment opportunities for many individuals.",
    },
  ];

  const TaxiBookingData = [
    {
      id: 1,
      category: "passenger_app",
      image: SignUp,
      title: "Sign Up",
      des: "Users need to register or sign up with the app.",
    },
    {
      id: 2,
      category: "passenger_app",
      image: Pickup,
      title: "Pick up Location",
      des: "Users need to choose their exact locations on a GPS enabled map.",
    },
    {
      id: 3,
      category: "passenger_app",
      image: Drop,
      title: "Drop off Location",
      des: "Users need to choose their preferred drop-off location or destination on the GPS map.",
    },
    {
      id: 4,
      category: "passenger_app",
      image: BookingTypes,
      title: "Booking Types",
      des: "Users need to choose one booking type from all the available types of booking.",
    },
    {
      id: 5,
      category: "passenger_app",
      image: Chat,
      title: "Chat",
      des: "Users is allowed to chat with the drivers or the admin whenever needed.",
    },
    {
      id: 6,
      category: "passenger_app",
      image: OnlinePayment,
      title: "Online Payment",
      des: "Users can pay their fare online by using any of the available payment methods.",
    },
    {
      id: 7,
      category: "passenger_app",
      image: Ratings,
      title: "Ratings Reviews",
      des: "Users can give rating to the driver and the app and post reviews on the basis of their feedback.",
    },
    {
      id: 8,
      category: "passenger_app",
      image: Order,
      title: "Order History",
      des: "Users can access their order history to have a detailed look at the rides availed by them through the app.",
    },
    {
      id: 9,
      category: "passenger_app",
      image: AvailOffers,
      title: "Avail Offers",
      des: "Users can avail various promotional offers and discount coupons that from time to time are sent through notifications.",
    },
    {
      id: 10,
      category: "passenger_app",
      image: Payvia,
      title: "Pay via wallet money",
      des: "Users can also pay for their ride by using a digital wallet app.",
    },
    {
      id: 11,
      category: "on_demand_driver_app",
      image: Flexible,
      title: "Flexible ride choice",
      des: "Driver can select his visibility area and can make him available unavailable.",
    },
    {
      id: 12,
      category: "on_demand_driver_app",
      image: Driverchat,
      title: "Driver chat option",
      des: "Driver can spot the nearby drivers on the map and can chat with them.",
    },
    {
      id: 13,
      category: "on_demand_driver_app",
      image: Finding,
      title: "Finding the available drivers.",
      des: "The driver app also helps finding all the available drivers nearby.",
    },
    {
      id: 14,
      category: "on_demand_driver_app",
      image: approaching,
      title: "Driver approaching scenarios.",
      des: "The driver app also shows on the GPS map the various on-road scenarios when the vehicle approaches.",
    },
    {
      id: 15,
      category: "on_demand_driver_app",
      image: Boarding,
      title: "Boarding process.",
      des: "The driver app also guides the driver through the entire boarding process.",
    },
    {
      id: 16,
      category: "on_demand_driver_app",
      image: cancellation,
      title: "Ride cancellation scenarios",
      des: "The driver app also allows cancelling rides with some statutory fines and actions against them.",
    },
    {
      id: 17,
      category: "on_demand_driver_app",
      image: During,
      title: "During the ride features",
      des: "The driver app also offers a gamut of on-the-ride features including GPS based route guidance.",
    },
    {
      id: 18,
      category: "on_demand_driver_app",
      image: Accepting,
      title: "Accepting and not accepting rides",
      des: "After the driver is called by the passenger, based upon the distance, rate, pick-up and drop-off location, he can accept or reject the ride.",
    },
    {
      id: 19,
      category: "on_demand_driver_app",
      image: passenger,
      title: "Driver and passenger review and rating system.",
      des: "The driver app allows the driver to rate the passenger and review the experience while showing the same from passengers. ",
    },
    {
      id: 20,
      category: "backend",
      image: Driverstatus,
      title: "Driver status and reports",
      des: "",
    },
    {
      id: 21,
      category: "backend",
      image: Userstatus,
      title: "User status and reports",
      des: "",
    },
    {
      id: 22,
      category: "backend",
      image: Trip,
      title: "Trip status and reports",
      des: "",
    },
    {
      id: 23,
      category: "backend",
      image: Revenue,
      title: "Revenue earning status and reports",
      des: "",
    },
    {
      id: 24,
      category: "backend",
      image: Currentlyactive,
      title: "Currently active drivers",
      des: "",
    },
    {
      id: 25,
      category: "backend",
      image: Currently,
      title: "Currently ongoing trips",
      des: "",
    },
    {
      id: 26,
      category: "backend",
      image: Complaints,
      title: "Complaints against driver",
      des: "",
    },
    {
      id: 27,
      category: "backend",
      image: Disciplinary,
      title: "Disciplinary actions on drivers and passengers",
      des: "",
    },
    {
      id: 28,
      category: "backend",
      image: Liveevents,
      title: "Live feed of events",
      des: "",
    },
    {
      id: 29,
      category: "backend",
      image: Notificationclients,
      title: "Notification to all clients",
      des: "",
    },
    {
      id: 30,
      category: "backend",
      image: Weekly,
      title: "Weekly/monthly payment invoicing",
      des: "",
    },
    {
      id: 31,
      category: "backend",
      image: Email,
      title: "Email system",
      des: "",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = TaxiBookingData.filter((curElem) => {
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
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="Taxi Booking App"
        des="On Demand Taxi Booking App Development like Uber literally changed the lifestyle of urban men more than anything else. But compared to the huge market demands, still, such apps have limited access for most commuters. Every new taxi booking app has an equal opportunity to grow with this market demand. We at the App Ideas build most sophisticated, custom-featured and unique taxi booking apps that can promise a better booking experience compared all other apps in this category as of now."
        list1="7+ Years of experience in App Development"
        list2="Best Taxi Booking App Development Company"
        list3="Dedicated team for your Taxi Booking App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Taxi Booking App Development"
        service2="Build Taxi App"
        service3="Taxi Booking App Development Company"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}

      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of Taxi Booking App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "passenger_app" && "active"
                  }`}
                  id="Passenger-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Passenger-App"
                  type="button"
                  role="tab"
                  aria-controls="Passenger-App"
                  aria-selected="true"
                  onClick={() => setActiveSection("passenger_app")}
                  style={{ cursor: "pointer" }}
                >
                  Passenger App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "on_demand_driver_app" && "active"
                  }`}
                  id="On-Demand-Driver-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#On-Demand-Driver"
                  type="button"
                  role="tab"
                  aria-controls="On-Demand-Driver"
                  aria-selected="false"
                  onClick={() => setActiveSection("on_demand_driver_app")}
                  style={{ cursor: "pointer" }}
                >
                  On Demand Driver App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "user_app" && "active"
                  }`}
                  id="Backend-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Backend"
                  type="button"
                  role="tab"
                  aria-controls="Backend"
                  aria-selected="false"
                  onClick={() => setActiveSection("backend")}
                  style={{ cursor: "pointer" }}
                >
                  Backend
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
                    const { id, image, des, title } = elem;
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
                            style={{ height: "60px  " }}
                          />
                          <h4>{title}</h4>
                          <p>{des}</p>
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
                    src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/slider/Demand-Taxi-Booking-App.webp")}
                    alt=""
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image width={1110} height={628}
                    src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/slider/kukaa.webp")}
                    alt="kukaa"
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
            <h3>
              Why should you take the Grocery Store App Solutions from us?
            </h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("smart_commute")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "smart_commute" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Website-Redesign.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Smart commute</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("increasing_demand")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "increasing_demand" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-235.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Increasing demand</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() =>
                    setActiveWhyShould("connected_transport_ecosystem")
                  }
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "connected_transport_ecosystem" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/icons8-smart-watch-100-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Connected transport ecosystem</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("win_win_business")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "win_win_business" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-53.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Win-win business model</p>
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
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-184.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Fuel efficiency</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("employment_opportunity")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "employment_opportunity" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Mask-Group.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Employment opportunity</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "smart_commute" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Smart commute</h3>
                    <p className="Title_para">
                      On Demand Taxi Booking App Development just make the right
                      choice for the smart commuters in today’s market by
                      allowing advanced and hi-tech solutions to book a ride.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "increasing_demand" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Increasing demand</h3>
                    <p className="Title_para">
                      As the demands of such services are skyrocketing because
                      of the convenience, there is no possible downside in terms
                      of growth opportunity.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "connected_transport_ecosystem" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Connected transport ecosystem
                    </h3>
                    <p className="Title_para">
                      Smart transport ecosystem with connected technologies is
                      already a reality and many commuters all over the world
                      are habituated to it.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "win_win_business" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Win-win business model</h3>
                    <p className="Title_para">
                      Taxi booking apps offer a complete win-win business model
                      for every stakeholder including the commuters,
                      transporters and the business running the app.
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
                      Smart and app connected vehicles are irreversible as they
                      also play an important role in reducing fuel consumption.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "employment_opportunity" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Employment opportunity</h3>
                    <p className="Title_para">
                      Smart taxi booking apps will also create a lot of
                      employment opportunities for many individuals.
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
                      <Image width={60} height={60}
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
      <ContactUs question="Would you like to make a on demand taxi booking app?" />
      {/* Contact Section End */}
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />

      <Footer />
    </>
  );
};

export default TaxiBooking;
