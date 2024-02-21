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
import Development from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Security-Guard-App-Development-Services.png";
import Services from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/On-Demand-Security-Guard-App-Development.png";
import developer from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Security-Guard-App-Development.png";

//  Contractor App
import ProfileManagement from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/profile-manage-4.svg";
import Agency from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Agency-Role.svg";
import Chatwith from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Chat-With-The-Client.svg";
import GetOffers from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Get offers.svg";
import TimeManagement from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Time-Management-Tracking.svg";
import GetPaid from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Get-Paid-Online.svg";
import Rating from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Rating _ Reviews.svg";
import News from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/news.svg";
import Community from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/community.svg";

// Client-App
import JobPosting from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Job-Posting.svg";
import Contractor from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Search for Contractor Agency.svg";
import LiveChat from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Live Chat.svg";
import Hire from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/hire.svg";
import PayOnline from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Pay-Online.svg";
import TimeTracking from "../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Time-Management-Tracking.svg";

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";


const SecurityApp = () => {
  const [activeSection, setActiveSection] = useState("contractor_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("advanced_technology");
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
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Advanced-Technology-1.png"),
      que: "Advanced technology",
      ans: "Unlike the ready-to-use security solutions, on-demand security apps are built with cutting edge technologies."
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Custom-Security-Solution-1.png"),
      que: "Custom security solution",
      ans: "These apps incorporate custom security solutions specific to the needs of the clients."
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Context-Aware-Security-Solution-1.png"),
      que: "Context-aware security solution",
      ans: "On-demand security apps are built keeping the context and use cases of the clients in mind."
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Seamless-Integration-1.png"),
      que: "Seamless integration",
      ans: "Thanks to such an app in real-time any security issue or challenge can be known and accordingly on-road traffic can be reached for help."
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Scalable-Security-1.png"),
      que: "Scalable security",
      ans: "On-demand security apps, unlike readymade security solutions, remain scalable to increasing uses and traffic."
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Continuous-Support-1.png"),
      que: "Continuous support",
      ans: "On-demand security apps continuous and consistent support from the developers."
    },
  ]

  const SecurityData = [
    {
      id: 1,
      category: "contractor_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The Contractor/ Agency can register, login, create & manage his/her profile.",
    },
    {
      id: 2,
      category: "contractor_app",
      image: Agency,
      title: "Agency Role",
      des: "The agency can add multiple contractors under them.",
    },
    {
      id: 3,
      category: "contractor_app",
      image: Chatwith,
      title: "Chat with the Client",
      des: "Once the client approves contractors interest then they can chat with each other.",
    },
    {
      id: 4,
      category: "contractor_app",
      image: GetOffers,
      title: "Get Offers",
      des: "Contractor gets offers, view offers and decide to accept or reject it.",
    },
    {
      id: 5,
      category: "contractor_app",
      image: TimeManagement,
      title: "Time Management & Tracking",
      des: "Contractor login his in time, out time, view and manage timesheet and get approved by the client.",
    },
    {
      id: 6,
      category: "contractor_app",
      image: GetPaid,
      title: "Get Paid Online",
      des: "The contractor sends withdraw the request and get paid.",
    },
    {
      id: 7,
      category: "contractor_app",
      image: Rating,
      title: "Rating & Reviews",
      des: "After completion of the job, the contractor can drop his/her feedback.",
    },
    {
      id: 8,
      category: "contractor_app",
      image: News,
      title: "News",
      des: "Admin post some news and contractors can view that news.",
    },
    {
      id: 9,
      category: "contractor_app",
      image: Community,
      title: "Community",
      des: "Contractors, participate in communities. ask questions and give answers and become engaged with each other.",
    },
    {
      id: 10,
      category: "client_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The client can register, login, create & manage his/her profile.",
    },
    {
      id: 11,
      category: "client_app",
      image: JobPosting,
      title: "Job Posting",
      des: "The client can post job/ jobs as per the need, the customer can specify the job type.",
    },
    {
      id: 12,
      category: "client_app",
      image: Contractor,
      title: "Search for Contractor/Agency",
      des: "The client can search for a suitable contractor or agency as per the need.",
    },
    {
      id: 13,
      category: "client_app",
      image: LiveChat,
      title: "Live Chat",
      des: "The client can view the profile of a contractor and able to chat with the contractor/ agency.",
    },
    {
      id: 14,
      category: "client_app",
      image: Hire,
      title: "Hire",
      des: "The client can hire a contractor for a specific period.",
    },
    {
      id: 15,
      category: "client_app",
      image: PayOnline,
      title: "Pay Online",
      des: "The client can pay online via stripe.",
    },
    {
      id: 16,
      category: "client_app",
      image: TimeTracking,
      title: "Time Management & Tracking",
      des: "Contractor in time, out time, the timesheet will be approved by the customer.",
    },
    {
      id: 17,
      category: "client_app",
      image: Rating,
      title: "Rating & Reviews",
      des: "After completion of the job, the client can drop his feedback.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = SecurityData.filter((curElem) => {
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
      <Helmet title="On Demand Security Guard App In India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="On Demand Security Guard App"
        des="As the digital space and a whole array of connected gadgets are penetrating into the remote recesses of personal life, the demand for advanced and custom security solutions are steadily increasing. Our On Demand Security App Development processes take care of such varied security needs in different contexts. We built most sophisticated on-demand security apps to deal with a variety of security challenges and loopholes."
        list1="7+ Years of experience in App Development"
        list2="Best Security Guard App Development Company"
        list3="Dedicated team for your Security Guard App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Security Guard App Development Services"
        service2="Security Guard App Development"
        service3="On-Demand Security Guard App Development"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of On Demand Security Guard App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "contractor_app" && "active"
                  }`}
                  id="Contractor-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Contractor-App"
                  type="button"
                  role="tab"
                  aria-controls="Contractor-App"
                  aria-selected="true"
                  onClick={() => setActiveSection("contractor_app")}
                  style={{ cursor: "pointer" }}
                >
                  Contractor App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "client_app" && "active"
                  }`}
                  id="Client-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Client-App"
                  type="button"
                  role="tab"
                  aria-controls="Client-App"
                  aria-selected="false"
                  onClick={() => setActiveSection("client_app")}
                  style={{ cursor: "pointer" }}
                >
                  Client App
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
                            style={{ height: "60px" }}
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
                    src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/slider/security.webp")}
                    alt="security"
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
                  onClick={() => setActiveWhyShould("advanced_technology")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "advanced_technology" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Advanced-Technology-1.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Advanced technology</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("custom_security")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "custom_security" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Custom-Security-Solution-1.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom security solution</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("context_aware")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "context_aware" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Context-Aware-Security-Solution-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Context-aware security solution</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("seamless")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "seamless" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Seamless-Integration-1.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Seamless integration</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("scalable")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "scalable" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Scalable-Security-1.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Scalable security</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("continuous_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "continuous_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Continuous-Support-1.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Continuous support</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "advanced_technology" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Advanced technology</h3>
                    <p className="Title_para">
                      Unlike the ready-to-use security solutions, on-demand
                      security apps are built with cutting edge technologies.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "custom_security" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom security solution</h3>
                    <p className="Title_para">
                      These apps incorporate custom security solutions specific
                      to the needs of the clients.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "context_aware" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Context-aware security solution
                    </h3>
                    <p className="Title_para">
                      On-demand security apps are built keeping the context and
                      use cases of the clients in mind.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "seamless" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Seamless integration</h3>
                    <p className="Title_para">
                      Thanks to such an app in real-time any security issue or
                      challenge can be known and accordingly on-road traffic can
                      be reached for help.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "scalable" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Scalable security</h3>
                    <p className="Title_para">
                      On-demand security apps, unlike readymade security
                      solutions, remain scalable to increasing uses and traffic.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "continuous_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Continuous support</h3>
                    <p className="Title_para">
                      On-demand security apps continuous and consistent support
                      from the developers.
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
      <ContactUs question="Would you like to create an On Demand Security Guard App?" />
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

export default SecurityApp;
