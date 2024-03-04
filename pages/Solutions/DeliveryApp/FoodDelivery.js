import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Image from 'next/image';
// Banner
import Development from "../../../public/assets/images/HIRE US/IPhone-App-Development-Company.png";
import Services from "../../../public/assets/images/HIRE US/IPhone-App-Development-Service.png";
import developer from "../../../public/assets/images/HIRE US/IPhone-Application-Development.png";

//  Customer App
import search from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/search foods online.svg";
import Check from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check details.svg";
import Orderonline from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Order online.svg";
import payonline from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Pay online.svg";
import Reviews from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Reviews and ratings.svg";
import Get from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Get cashback.svg";
import Avail from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Avail offers view offers.svg";
import Checkorder from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check order history.svg";
import Live from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Live tracking.svg";

// Restaurant App
import Profile from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Profile Management.svg";
import Food from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Grocery Category Management.svg";
import Listing from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Grocery listing management.svg";
import Order from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Order Management.svg";
import Driver from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Driver Management.svg";
import User from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/User management.svg";
import Tracking from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Driver Tracking.svg";
import Reviewmanagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Review management.svg";
import Loyalty from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Loyalty management.svg";

// Driver Tracking App
import ProfileManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Profile Management.svg";
import Set from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Set availability.svg";
import pickup from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Get the pickup notification.svg";
import Route from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Order Route _ Customer Details.svg";
import Track from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Driver Track the route.svg";
import Getcustomer from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/User Get a customer feedback.svg";

// Super Admin App
import profile from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Profile Management.svg";
import DriverManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Driver Management.svg";
import Subscription from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Subscription Management.svg";
import Payment from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Payment Management.svg";
import Restaurant from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Restaurant Management.svg";
import Reports from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Reports.svg";

import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";


const FoodDelivery = () => {
  const [activeSection, setActiveSection] = useState("customer_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("best_service");
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
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/positive_customer.png"),
      que: "Best services",
      ans: "Food ordering apps offering real-time Chatbot messaging, phone calls, and live tracking services offer unmatched customer service.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/high_order.png"),
      que: "Higher order accuracy",
      ans: "Since these apps allow customers to make precise choice of foods and customise the orders, there is no chance of any dispute about incorrect orders.",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/fast_quick.png"),
      que: "Fast and quick order processing",
      ans: "Food ordering apps also offer a low-cost option to reach customers and take on the growth opportunity.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/offer_deal.png"),
      que: "Offers and deals",
      ans: "To add more value to the food ordering experience, these apps always offer lucrative offers and deals for the customers.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/gps.png"),
      que: "GPS Integration",
      ans: "Thanks to the inbuilt GPS tracking map, the customers, the restaurants, and the delivery valets can constantly remain updated about each other’s locations.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/customer_food.png"),
      que: "Customers with A Click",
      ans: "Since these apps allow customers to make precise choices of foods and customize the orders, there is no chance of any dispute about incorrect orders.",
    },
    {
      id: 7,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/business.png"),
      que: "Sales forecasting",
      ans: "Food ordering app allows the food joints, restaurants and other stakeholders in this business to predict and forecast the sales and business revenue.",
    },
    {
      id: 8,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/expand_market.png"),
      que: "Expanded market reach",
      ans: "Thanks to food ordering apps restaurants can enjoy wider market reach way beyond their physical locations and can garner optimum business presence.",
    },
    {
      id: 9,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/customer_relation.png"),
      que: "Enhance Relationship",
      ans: "Food ordering apps also allow restaurants and food businesses to build and nurture customer relationships through customer-friendly offers, promotions, and personalization.",
    },
    {
      id: 10,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/customer.png"),
      que: "Customer can book easily",
      ans: "Users are also allowed to keep their chosen products under the wish-list for future purchases.",
    },
    {
      id: 11,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/cost.png"),
      que: "Cost-Effectiveness",
      ans: "Food ordering apps also offer a low-cost option to reach customers and take on the growth opportunity.",
    },
    {
      id: 12,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/online_payment.png"),
      que: "Easy Online Payment",
      ans: "Food ordering apps makes it extremely easy for the customers to make online payment without any worry for handling cash or other means.",
    },
  ];

  const FoodData = [
    {
      id: 1,
      category: "customer_app",
      image: search,
      title: "Search Foods Online",
      des: "The customer app allows browsing and seeing the menu and all food items of various restaurants as per their location and preferred food choices.",
    },
    {
      id: 2,
      category: "customer_app",
      image: Check,
      title: "Check details",
      des: "With a food ordering app on their screen customers can easily add their preferred food in cart, provide shipping details and place the order instantly.",
    },
    {
      id: 3,
      category: "customer_app",
      image: Orderonline,
      title: "Order online",
      des: "With a food ordering app on their screen customers can easily add their preferred food in the cart, provide shipping details and place the order instantly.",
    },
    {
      id: 4,
      category: "customer_app",
      image: payonline,
      title: "Pay online",
      des: "The customer-side of the food ordering app allows customers to make payments through net banking transfer, COD, digital wallets, PayPal, and other methods.",
    },
    {
      id: 5,
      category: "customer_app",
      image: Reviews,
      title: "Reviews and ratings",
      des: "Customers can also give their honest feedback through reviews and ratings about the food quality, taste, and several other factors.",
    },
    {
      id: 6,
      category: "customer_app",
      image: Get,
      title: "Get cashback",
      des: "Users through these apps can also opt for a variety of offers, discounts, and cashback options.",
    },
    {
      id: 7,
      category: "customer_app",
      image: Avail,
      title: "Avail offers/view offers",
      des: "Users can also browse foods based on available offers and promo codes and order foods with the best price and offer.",
    },
    {
      id: 8,
      category: "customer_app",
      image: Checkorder,
      title: "Check order history",
      des: "The customer app also allows every customer to see their order history in detail along with the details for each restaurant and food item.",
    },
    {
      id: 9,
      category: "customer_app",
      image: Live,
      title: "Live tracking",
      des: "Through a GPS-enabled maps, customers can track their food delivery and can see the Estimated Time of Arrival (ETA).",
    },
    {
      id: 10,
      category: "restaurent_app",
      image: Profile,
      title: "Profile Management",
      des: "The food ordering app allows restaurants to create their profile with details like addresses, food images, and a host of other necessary details.",
    },
    {
      id: 11,
      category: "restaurent_app",
      image: Food,
      title: "Food Category Management",
      des: "The app also allows the participating restaurants to create a food menu comprising both all categories such as starter, main course, beverages, desserts veg, non-veg, etc.",
    },
    {
      id: 12,
      category: "restaurent_app",
      image: Listing,
      title: "Food Listing Management",
      des: "The seller panel allows creating product categories and denominations to help easy search and viewing.",
    },
    {
      id: 13,
      category: "restaurent_app",
      image: Order,
      title: "Order Management",
      des: "Restaurants can also enjoy a very robust order management system that allows communication through push notifications, email, and messaging.",
    },
    {
      id: 14,
      category: "restaurent_app",
      image: Driver,
      title: "Driver Management",
      des: "Restaurants can also provide the rider details, track the availability of the driver in real-time, and accordingly assign delivery jobs to riders.",
    },
    {
      id: 15,
      category: "restaurent_app",
      image: User,
      title: "User management",
      des: "Restaurants through the app can deal with the order history, preferred dishes of individual users and can send customers various offers.",
    },
    {
      id: 16,
      category: "restaurent_app",
      image: Tracking,
      title: "Driver Tracking",
      des: "Restaurants after assigning jobs to drivers can actually guide the drivers about the best and time-saving delivery route and do live tracking of driver movement.",
    },
    {
      id: 17,
      category: "restaurent_app",
      image: Reviewmanagement,
      title: "Review management",
      des: "As and when customers drop reviews, restaurants can see and respond to them and take measures to improve the quality of service.",
    },
    {
      id: 18,
      category: "restaurent_app",
      image: Loyalty,
      title: "Loyalty management",
      des: "Restaurants can also provide offers and promo codes to both new and existing customers and can boost loyalty through discounts and special offers.",
    },
    {
      id: 19,
      category: "driver_tracking",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The driver tracking app will furnish the driver profile with all driver information, get admin approval of the driver, and help to integrate as a driver for the service.",
    },
    {
      id: 20,
      category: "driver_tracking",
      image: Set,
      title: "Set availability",
      des: "Drivers can show their availability on the basis of which restaurants can actually assign delivery jobs to them.",
    },
    {
      id: 21,
      category: "driver_tracking",
      image: pickup,
      title: "Get the pickup notification",
      des: "Driver through the app receives push notifications, email, or SMS whenever a new delivery job is assigned to them. The same notification will allow them to accept or rejecting the order.",
    },
    {
      id: 22,
      category: "driver_tracking",
      image: Route,
      title: "Route & Customer Details",
      des: "Driver through the app becomes informed about the food pickup and drop location, customer details, and GPS based route to reach customer’s place at the earliest.",
    },
    {
      id: 23,
      category: "driver_tracking",
      image: Track,
      title: "Track the route",
      des: "On the way to the customer’s place, the drivers can track the route on a live map and after delivery, the real-time information is sent back to the admin.",
    },
    {
      id: 24,
      category: "driver_tracking",
      image: Getcustomer,
      title: "Get a customer feedback",
      des: "Users through these apps can also opt for a variety of offers, discounts, and cashback options.",
    },
    {
      id: 25,
      category: "super_admin",
      image: profile,
      title: "Profile Management",
      des: "Admin of the app can easily see user listing, number of users, specific user details, order history, payment details, and other important information.",
    },
    {
      id: 26,
      category: "super_admin",
      image: DriverManagement,
      title: "Driver Management",
      des: "The admin panel can check out driver profiles, individual driver information and can drop drivers from the list based on complaints.",
    },
    {
      id: 27,
      category: "super_admin",
      image: Subscription,
      title: "Subscription Management",
      des: "The admin also manages all the restaurant subscriptions on the basis of which the listing of the restaurants is decided.",
    },
    {
      id: 28,
      category: "super_admin",
      image: Payment,
      title: "Payment Management",
      des: "The Admin panel also allows total control over payment management and taking care of restaurant withdrawal requests, customer payment dispute requests, etc.",
    },
    {
      id: 29,
      category: "super_admin",
      image: Restaurant,
      title: "Restaurant Management",
      des: "The admin panel can track the restaurants in the list and various listed food items based on different categories and various details including price.",
    },
    {
      id: 30,
      category: "super_admin",
      image: Reports,
      title: "Reports",
      des: "Admin panel will provide access to different reports corresponding to orders, sales, purchases, and users.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = FoodData.filter((curElem) => {
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
      <Helmet title="On-Demand Food Delivery App Development | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="Food Delivery App Development"
        des="In our fast-paced digital culture, on-demand food delivery applications are popular. Food delivery apps compete fiercely despite their immense market potential. To compete, App Ideas creates clever, feature-rich, user-optimized food ordering apps."
        list1="7+ Years of experience in App Development"
        list2="Best Food Ordering or Food Delivery App Development Company"
        list3="Dedicated team for your Food Delivery App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Food Delivery App Development"
        service2="Food Delivery App Development Company"
        service3="On-Demand Food Delivery App Development"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}

      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of On-Demand Food Delivery App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "customer_app" && "active"
                  }`}
                  id="Customer-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="Customer-App"
                  aria-selected="true"
                  onClick={() => {
                    setActiveSection("customer_app");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Customer App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "restaurent_app" && "active"
                  }`}
                  id="Restaurent-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Restaurent-App"
                  type="button"
                  role="tab"
                  aria-controls="Restaurent-App"
                  aria-selected="false"
                  onClick={() => setActiveSection("restaurent_app")}
                  style={{ cursor: "pointer" }}
                >
                  Restaurant App &amp; Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "driver_tracking" && "active"
                  }`}
                  id="Driver-Tracking"
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
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "super_admin" && "active"
                  }`}
                  id="Super-Admin"
                  data-bs-toggle="pill"
                  data-bs-target="#Super-Admin"
                  type="button"
                  role="tab"
                  aria-controls="Super-Admin"
                  aria-selected="false"
                  onClick={() => setActiveSection("super_admin")}
                  style={{ cursor: "pointer" }}
                >
                  Super Admin Panel
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
                          <Image width={80} height={80}
                            src={image}
                            alt="search-food-icon"
                            className="img-fluid"
                            style={{ height: "80px" }}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image width={1110} height={628}
                    alt="food-2"
                    src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Food-2.webp")}
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
                    alt="food-3"
                    src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Food-3.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Food Ordering Section Start */}
      <section className="food_ordering_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why should you create a food ordering app?</h3>
          </div>

          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="swiper-container work_swiper-container food_delivery_swiper food_ordering_swiper">
                {/* swiper slides */}
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  className="swiper-wrapper h-auto"
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  speed={1000}
                  direction={"horizontal"}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide
                    className="swiper-slide d-block"
                    href="#"
                    target="_blank"
                  >
                    <div className="row">
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("best_service")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "best_service" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/positive_customer.png")}
                            alt="positive_customer"
                            className="img-fluid"
                          />
                          <p>
                            Best <br /> Service
                          </p>
                        </div>
                      </div>

                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("higher_order")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "higher_order" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/high_order.png")}
                            alt="high_order"
                            className="img-fluid"
                          />
                          <p>
                            Higher order <br />
                            accuracy
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("fast_quick")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "fast_quick" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/fast_quick.png")}
                            alt="fast_quick"
                            className="img-fluid"
                          />
                          <p>
                            Fast and <br />
                            quick order{" "}
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("offers_deals")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "offers_deals" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/offer_deal.png")}
                            alt="offer-deal"
                            className="img-fluid"
                          />
                          <p>
                            offers and <br /> Deals
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("gps")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "gps" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/gps.png")}
                            alt="gps"
                            className="img-fluid"
                          />
                          <p>
                            GPS <br /> Integration{" "}
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() =>
                          setActiveWhyShould("customer_food_with_click")
                        }
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "customer_food_with_click" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/customer_food.png")}
                            alt="customer_food"
                            className="img-fluid"
                          />
                          <p>
                            customer_food <br /> with a click
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide
                    className="swiper-slide d-block"
                    href="#"
                    target="_blank"
                  >
                    <div className="row">
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("sales")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "sales" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/business.png")}
                            alt="business"
                            className="img-fluid"
                          />
                          <p>
                            Sales <br /> forecasting
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("expanded")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "expanded" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/expand_market.png")}
                            alt="expand_market"
                            className="img-fluid"
                          />
                          <p>
                            Expanded
                            <br />
                            market reach
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() =>
                          setActiveWhyShould("enhance_relationship")
                        }
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "enhance_relationship" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/customer_relation.png")}
                            alt="customer_relation"
                            className="img-fluid"
                          />
                          <p>
                            Enhance
                            <br />
                            Relationship
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("customer_can_book")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "customer_can_book" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/customer.png")}
                            alt="offer-deal"
                            className="img-fluid"
                          />
                          <p>
                            Customer can <br /> book easily
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() => setActiveWhyShould("cost_effectivness")}
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "cost_effectivness" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/cost.png")}
                            alt="cost"
                            className="img-fluid"
                          />
                          <p>
                            Cost-
                            <br /> Effectiveness{" "}
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                        onClick={() =>
                          setActiveWhyShould("easy_online_payment")
                        }
                      >
                        <div
                          className={`service__provide_tab ${
                            activeWhyShould === "easy_online_payment" &&
                            "service__provide_tab_active"
                          }`}
                        >
                          <Image width={60} height={60}
                            src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/why-should/online_payment.png")}
                            alt="online_payment"
                            className="img-fluid"
                          />
                          <p>
                            Easy online <br /> payment
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* !swiper slides */}
                {/* pagination dots */}
                <div className="swiper-pagination" />
                {/* !pagination dots */}
              </div>
            </div>

            {activeWhyShould === "best_service" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Best services </h3>
                    <p className="Title_para">
                      Food ordering apps offering real-time Chatbot messaging,
                      phone calls, and live tracking services offer unmatched
                      customer service.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "higher_order" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Higher order accuracy </h3>
                    <p className="Title_para">
                      Since these apps allow customers to make precise choice of
                      foods and customise the orders, there is no chance of any
                      dispute about incorrect orders.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "fast_quick" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Fast and quick order processing{" "}
                    </h3>
                    <p className="Title_para">
                      Food ordering apps also offer a low-cost option to reach
                      customers and take on the growth opportunity.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "offers_deals" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Offers and deals are the main part{" "}
                    </h3>
                    <p className="Title_para">
                      To add more value to the food ordering experience, these
                      apps always offer lucrative offers and deals for the
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "gps" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      GPS enabled online food delivery system{" "}
                    </h3>
                    <p className="Title_para">
                      Thanks to the inbuilt GPS tracking map, the customers, the
                      restaurants, and the delivery valets can constantly remain
                      updated about each other’s locations.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "customer_food_with_click" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Customers can order food online with just one click{" "}
                    </h3>
                    <p className="Title_para">
                      Since these apps allow customers to make precise choices
                      of foods and customize the orders, there is no chance of
                      any dispute about incorrect orders.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "sales" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Sales forecasting </h3>
                    <p className="Title_para">
                      Food ordering app allows the food joints, restaurants and
                      other stakeholders in this business to predict and
                      forecast the sales and business revenue.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "expanded" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expanded market reach </h3>
                    <p className="Title_para">
                      Thanks to food ordering apps restaurants can enjoy wider
                      market reach way beyond their physical locations and can
                      garner optimum business presence.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "enhance_relationship" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Enhance Relationship</h3>
                    <p className="Title_para">
                      Food ordering apps also allow restaurants and food
                      businesses to build and nurture customer relationships
                      through customer-friendly offers, promotions, and
                      personalization.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "customer_can_book" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Customer can book easily </h3>
                    <p className="Title_para">
                      Users are also allowed to keep their chosen products under
                      the wish-list for future purchases.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "cost_effectivness" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Cost-Effectiveness </h3>
                    <p className="Title_para">
                      Food ordering apps also offer a low-cost option to reach
                      customers and take on the growth opportunity.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "easy_online_payment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Easy Online Payment</h3>
                    <p className="Title_para">
                      Food ordering apps makes it extremely easy for the
                      customers to make online payment without any worry for
                      handling cash or other means.
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

      {/* Food Ordering Section End */}

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Would you like to create a Food Ordering App?" />
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

export default FoodDelivery;
