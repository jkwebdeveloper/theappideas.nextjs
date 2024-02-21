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
import Development from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Dating-App.png";
import Services from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Create-A-Dating-App.png";
import developer from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Dating-App-Developer.png";

//  Customer App
import Social from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Social Media Login.svg";
import ProfileManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/profile-manage-4.svg";
import Find from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Find-Nearby-Dates.svg";
import Swipe from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Swipe feature for showing interest not interested.svg";
import Create from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Create-And-Share-Post.svg";
import Like from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Like-Dislike-Comment.svg";
import Match from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Match-With-The-Right-Date.svg";
import Chat from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Chat, Audio and Video Call feature.svg";

// Admin Features
import User from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/User-Management-1.svg";
import Payment from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Payment-Management-1.svg";
import Black from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Black-List-User.svg";
import Featured from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Featured-Profiles-Management.svg";
import customizable from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Bad-words.svg";

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const DatingApp = () => {
  const [activeSection, setActiveSection] = useState("user_dating");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("knowing_new_people");
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
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Knowing-New-People.png"),
      que: "Knowing new people",
      ans: "A dating app allowing people to know and mingle with new people extends the social space.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Meeting-Like-Minded-People.png"),
      que: "Meeting like-minded people",
      ans: "Thanks to dating apps one can always find like-minded people or people having similar interests in life.",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Branding-And-Marketing.png"),
      que: "Branding and marketing",
      ans: "Dating apps also allow brands position and reposition their products in context to people’s interest and conversation.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Finding-Travel-Buddies.png"),
      que: "Finding travel buddies",
      ans: "A dating app also helps people finding travel buddies with similar interests.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/An-Entertaining-Social-Space.png"),
      que: "An entertaining social space",
      ans: "Dating apps also serve as an entertaining social space to help users find relief in browsing attractive profiles or chatting.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/A-Market-Research-Opportunity.png"),
      que: "A market research opportunity",
      ans: "Dating apps accommodating intimate conversation of people from all walks of life also opens up market research opportunities.",
    },
  ];

  const DatingData = [
    {
      id: 1,
      category: "user_dating",
      image: Social,
      title: "Social Media Login",
      des: "User can login and start using the app just by using their social media credentials.",
    },
    {
      id: 2,
      category: "user_dating",
      image: ProfileManagement,
      title: "Profile Management",
      des: "User can manage their profiles that include their photos, personal information and contact details.",
    },
    {
      id: 3,
      category: "user_dating",
      image: Find,
      title: "Find nearby dates",
      des: "Users can see a variety of nearby dates and exercise their choice.",
    },
    {
      id: 4,
      category: "user_dating",
      image: Swipe,
      title: "Swipe feature for showing interest / not interested",
      des: "Users can express their liking or disliking for any available dates just by swiping left or right.",
    },
    {
      id: 5,
      category: "user_dating",
      image: Create,
      title: "Create and share post",
      des: "Users can make fresh content posts and share those posts for other users to reach out.",
    },
    {
      id: 6,
      category: "user_dating",
      image: Like,
      title: "Like, dislike, comment",
      des: "Users can like, dislike and comment on various posts and profiles.",
    },
    {
      id: 7,
      category: "user_dating",
      image: Match,
      title: "Match with the right date",
      des: "Users can find the match with their right date and can engage with them.",
    },
    {
      id: 8,
      category: "user_dating",
      image: Chat,
      title: "Chat, Audio and Video Call feature",
      des: "Users can use chat messaging, audio and video calling feature to connect to dates and other profiles.",
    },
    {
      id: 9,
      category: "admin_features",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The admin is able to manage all user profiles registered with the app.",
    },
    {
      id: 10,
      category: "admin_features",
      image: User,
      title: "User Management",
      des: "The admin can manage all the app users as per the rules and the standard practices.",
    },
    {
      id: 11,
      category: "admin_features",
      image: Payment,
      title: "Payment Management",
      des: "Admin panel takes care of origin easing and managing payments made by the user through different payment methods and gateways.",
    },
    {
      id: 12,
      category: "admin_features",
      image: Black,
      title: "Black list User",
      des: "Admin can also black-list some users with records of abuses and malpractices.",
    },
    {
      id: 13,
      category: "admin_features",
      image: Featured,
      title: "Featured profiles management",
      des: "The admin will also choose some users for featured profiles.",
    },
    {
      id: 14,
      category: "admin_features",
      image: customizable,
      title: "“Bad words” customizable filter",
      des: "The admin to make the platform clean and civic will use a custom filter to stop the use of abusive words.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = DatingData.filter((curElem) => {
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
      <Helmet title="Dating App Development Company India | Dating App Developers India" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="Dating App Development Company"
        des="Love is no longer in the air but it is now visible and accessible right on the mobile screen thanks to the Dating App Development india. The dating apps are no longer meant for Generation Y but for people across all age groups. Every new dating app now focuses on catering to lovebirds of specific preferences or age groups or orientations. The kind of popular dating app market faces, there are enough rooms for new dating apps to get popular. Would you like to create a dating app?"
        list1="7+ Years of experience in App Development"
        list2="Best Dating App Development Company"
        list3="Dedicated team for your Dating App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Dating App Development"
        service2="Create A Dating App"
        service3="Dating App Developer"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of Dating App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "user_dating" && "active"
                  }`}
                  id="User-Dating-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User-Dating"
                  type="button"
                  role="tab"
                  aria-controls="User-Dating"
                  aria-selected="true"
                  onClick={() => setActiveSection("user_dating")}
                  style={{ cursor: "pointer" }}
                >
                  User Dating App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "admin_features" && "active"
                  }`}
                  id="Admin-Features-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-Features"
                  type="button"
                  role="tab"
                  aria-controls="Admin-Features"
                  aria-selected="false"
                  onClick={() => setActiveSection("admin_features")}
                  style={{ cursor: "pointer" }}
                >
                  Admin Features of Dating App
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
                    const { id, image, title, des } = elem;
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
            <h3>
              Why should you create a Dating Apps Development Company India?
            </h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("knowing_new_people")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "knowing_new_people" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Knowing-New-People.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Knowing New People</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("meeting_like")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "meeting_like" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Meeting-Like-Minded-People.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Meeting Like- Minded People</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("branding_marketing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "branding_marketing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Branding-And-Marketing.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Branding And Marketing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("finding_travel")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "finding_travel" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Finding-Travel-Buddies.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Finding Travel Buddies</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("an_entretaining")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "an_entretaining" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/An-Entertaining-Social-Space.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>An Entertaining Social Space</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("a_market_research")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "a_market_research" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/A-Market-Research-Opportunity.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>A Market Research Opportunity</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "knowing_new_people" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Knowing new people</h3>
                    <p className="Title_para">
                      A dating app allowing people to know and mingle with new
                      people extends the social space.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "meeting_like" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Meeting like-minded people
                    </h3>
                    <p className="Title_para">
                      Thanks to dating apps one can always find like-minded
                      people or people having similar interests in life.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "branding_marketing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Branding and marketing</h3>
                    <p className="Title_para">
                      Dating apps also allow brands position and reposition
                      their products in context to people’s interest and
                      conversation.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "finding_travel" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Finding travel buddies</h3>
                    <p className="Title_para">
                      A dating app also helps people finding travel buddies with
                      similar interests.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "an_entretaining" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      An entertaining social space
                    </h3>
                    <p className="Title_para">
                      Dating apps also serve as an entertaining social space to
                      help users find relief in browsing attractive profiles or
                      chatting.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "a_market_research" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      A market research opportunity{" "}
                    </h3>
                    <p className="Title_para">
                      Dating apps accommodating intimate conversation of people
                      from all walks of life also opens up market research
                      opportunities.
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
      <ContactUs question="Would you like to create an On Demand Dating App?" />
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

export default DatingApp;
