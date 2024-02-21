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
import Development from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Grocery-App-Development.png";
import Services from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Grocery-Delivery-App-Development.png";
import developer from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Grocery-App-Development-Company.png";

//  Customer App
import search from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/search foods online.svg";
import Check from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Coustmer App/Check order history.svg";
import Orderonline from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Coustmer App/Order online.svg";
import payonline from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Coustmer App/Pay online.svg";
import Reviews from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Reviews and ratings.svg";
import Get from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Get cashback.svg";
import Login from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Avail offers view offers.svg";
import View from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check order history.svg";
import Live from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Live tracking.svg";

// Vender App and Panel
import ProfileManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Profile Management.svg";
import GroceryCategoryManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Food Category Management.svg";
import Grocerylistingmanagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Food Listing Management.svg";
import OrderManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Order Management.svg";
import DriverManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Driver Management.svg";
import Usermanagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/User management.svg";
import DriverTracking from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Driver Tracking.svg";
import Reviewmanagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Review management.svg";
import Loyaltymanagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Loyalty management.svg";

// Driver Tracking App
import Setavailability from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Set availability.svg";
import GetNotify from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Get Notify.svg";
import Customerandroutedetails from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Order Route _ Customer Details.svg";
import Tracktheroute from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Driver Track the route.svg";
import Getacustomerfeedback from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/User Get a customer feedback.svg";

// Admin Panel
import SubscriptionManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Subscription Management.svg";
import PaymentManagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Payment Management.svg";
import GroceryStoremanagement from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Grocery Store Management.svg";
import Reports from "../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Reports.svg";


import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const GroceryApp = () => {
  const [activeSection, setActiveSection] = useState("user_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("highly_scalable");
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
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/1high_scale.png"),
      que: "Highly Scalable",
      ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled website and mobile app developers who will offer the best services at the best rates. We have years of experience in offering the best and advanced Grocery Store app development services.",
      ans2: "Along with the best design and advanced feature integration, we offer a highly scalable grocery store app solution. A highly scalable grocery store can be useful for you as they have easy availability, maintenance, better performance and more. If you are planning of launching the foremost grocery store app then feel free to reach us and get a free quote.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/2fully_customize.png"),
      que: "Fully Customizable",
      ans: "The App Ideas is one of the foremost software development company. We have years of experience in offering the best web and mobile app solutions at the best rates. Along with development, we also offer the best designing services based on the client’s requirements as well as unique which help in stand out differences among the competition.",
      ans2: "We offer a fully customizable grocery store app development. We have years of experience in developing the best Grocery store app with unique design services. A customizable grocery store can help you to easily integrate all the features you want to add. Feel free to reach us and get a free quote",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/3time_cost.png"),
      que: "Time and Cost-effective",
      ans: "The App Ideas is one of the leading web and app development company. Along with the best development and designing services, we are proficient in deploying the project on time and with the best development cost. We try to deliver the best services at the best rate and the best costing as well as also offer a maintenance after deployment.",
      ans2: "Are you planning of launching a Grocery Store app? If yes then this is probably the time for you to launch in the market. Firstly, you have to research the market. Secondly, search for the best Grocery Store app development company which delivers the app at the least time and best rates. Feel free to connect with us and discuss our requirements.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/4multi_support (1).png"),
      que: "Multi-Lingual Support",
      ans: "The App Ideas is one of the best software development company. We have years of experience in offering the best web and mobile app services at the best possible rates. We have a team of highly experienced developers who will offer the best Grocery Store app with multi-lingual support.",
      ans2: "Planning on launching a successful Grocery store app? If yes, then for offering personalised services, it is very important for you to integrate multilingual support to the grocery store app. We can help you to add up to 2 or more languages in your app solution for easy accessibility.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/5multi_currency.png"),
      que: "Multi-Currency Support",
      ans: "Planning of launching a big Grocery store app in the market? If yes, then you are at the right place. The App Ideas is one of the leading web and app development company. We have years of experience in deploying the best solution for all kinds of business categories including the grocery store or online grocery store app solutions.",
      ans2: "If you are planning of targeting high areas or a high number of users then you must have to launch a large grocery store app with various vendors support like Walmart. Along with the multi-language support, you also have to integrate multi-currency support, so that customers can easily access the services without searching for third-party apps. We got you cover to add all the advanced features at the best rates.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/6user_freindly.png"),
      que: "User-Friendly Design",
      ans: "The App Ideas is one of the best and Unique Mobile app designing services. Along with the mobile app development services, we have a team of highly skilled graphic designers who are experts in offering User-friendly design at the best possible rates. A user-friendly app can help you to get more user attention, which leads to higher sales rates.",
      ans2: "If you are planning on launching a Grocery store app then it is very important for you that along with the features, you also have to focus on the design. It is very important for you to offer User-Friendly design services to catch more eyes towards your platform. Feel free to reach us and get a free quote for a grocery store app.",
    },
    {
      id: 7,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/7offer_customize.png"),
      que: "Offering a customizable design",
      ans: "The App Ideas is one of the most popular software development company. We are experts in offering website development services, mobile app development web app development at the best possible rates. Along with development, we also offer the foremost customizable designing services based on the current trend.",
      ans2: "The grocery store app is one of the most demanding services in the present time. There is high competition in the market for grocery store app but if you launch a customizable design app then it will be very easy for you to update as per the current trend. If you are planning on launching a grocery store app then feel free to connect with us.",
    },
    {
      id: 8,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/8third_party.png"),
      que: "Third-Party Integration",
      ans: "The App Ideas is one of the leading web and app development company. We have years of expertise in offering the best app development solution as well as designing services. We are also experienced in integrating third-party services if required. We have a ready-made solution for the grocery store app with the best rate possible.",
      ans2: "Are you planning of launching a successful Grocery store app by integrating third-party services? If yes then this is probably the time for you to hire us and launch a foremost Grocery store app with integrating third-party services at the best possible rates. This is probably the time for you to connect with us and get a free quotation for your Mobile app solutions.",
    },
    {
      id: 9,
      images: require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/4multi_support (1).png"),
      que: "Great Support",
      ans: "The App Ideas is one of the most popular software development company. We offer the best development services for website development, mobile app development and web app development along with designing services. Along with the development services, we also offer great support and maintenance to our clients.",
      ans2: "Planning of launching a Grocery Store owner? If yes, then this is probably the time for you to launch your grocery store app. After deployment of the software solution, we also offer support and maintenance services to our clients which is free for three months. For a successful Grocery store app development, feel free to reach us and get a free quote.",
    },
  ];

  const GroceryData = [
    {
      id: 1,
      category: "user_app",
      image: search,
      title: "Search Grocery Online",
      des: "The custom app grants users to browse and check the grocery item list of the various grocery stores. This functionality works based on the location of the customers.",
    },
    {
      id: 2,
      category: "user_app",
      image: Check,
      title: "Check details",
      des: "Customers can easily get the details of the grocery item. They can easily check the grocery store details like cost of the item, shipping details and more.",
    },
    {
      id: 3,
      category: "user_app",
      image: Orderonline,
      title: "Order Online",
      des: "On a Grocery store app, customers can easily add the product to the cart. They can add up the quantity as per preference and place an order.",
    },
    {
      id: 4,
      category: "user_app",
      image: payonline,
      title: "Create/ Update orders",
      des: "This Grocery store app can allow users to make an online payment using the net banking transfer, COD, Paypal, digital wallets and many other methods.",
    },
    {
      id: 5,
      category: "user_app",
      image: Reviews,
      title: "Reviews and ratings",
      des: "Grocery store apps can grant customers to give their honest feedback through ratings and reviews about the services and other factors.",
    },
    {
      id: 6,
      category: "user_app",
      image: Get,
      title: "Get cashback",
      des: "The customer panel is also consist of some of the additional features like seasonal offers, discounts and cashback options.",
    },
    {
      id: 7,
      category: "user_app",
      image: Login,
      title: "Login",
      des: "Customers can easily check or browse grocery items based on the available offers and the discount code to take advantage of the discounts.",
    },
    {
      id: 8,
      category: "user_app",
      image: View,
      title: "View Order History",
      des: "The customer app can allow the users of the app to view their order history along with the details for each grocery and item.",
    },
    {
      id: 9,
      category: "user_app",
      image: Live,
      title: "Live tracking",
      des: "GPS is also integrated into the mobile app. Customers can track the grocery item delivery and can also check the Estimated Time of Arrival(ETA).",
    },
    {
      id: 10,
      category: "vendor_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "A Vendor app can allow customers to create their profile by adding up the details like the store addresses, grocery items, price and all the other details.",
    },
    {
      id: 11,
      category: "vendor_app",
      image: GroceryCategoryManagement,
      title: "Grocery Category Management",
      des: "The grocery store app can allow the participating grocery store to create their product list. This list can be further classified into the categories like fruits, vegetables and more.",
    },
    {
      id: 12,
      category: "vendor_app",
      image: Grocerylistingmanagement,
      title: "Grocery listing management",
      des: "The Vendor panel grants to develop product categories and denominations to help easy search and viewing.",
    },
    {
      id: 13,
      category: "vendor_app",
      image: OrderManagement,
      title: "Order Management",
      des: "The grocery store can also enjoy a best order management system that allows communication through email, messaging and push notification.    ",
    },
    {
      id: 14,
      category: "vendor_app",
      image: DriverManagement,
      title: "Driver Management",
      des: "Vendors can assign the jobs to the drives as well as guide the drivers to deliver the product on time. They can easily do the live tracking of the driver.",
    },
    {
      id: 15,
      category: "vendor_app",
      image: Usermanagement,
      title: "User management",
      des: "Grocery Vendors can easily deal with the orders history, the grocery list of the users as well as can send the offers to the customers.",
    },
    {
      id: 16,
      category: "vendor_app",
      image: DriverTracking,
      title: "LoDriver Trackinggin",
      des: "Vendors can assign the jobs to the drives as well as guide the drivers to deliver the product on time. They can easily do the live tracking of the driver.",
    },
    {
      id: 17,
      category: "vendor_app",
      image: Reviewmanagement,
      title: "Review management",
      des: "Whenever customers can prove the reviews, the grocery store owners can see and respond to them. Feedback can help them to improve the quality of services.",
    },
    {
      id: 18,
      category: "vendor_app",
      image: Loyaltymanagement,
      title: "Loyalty management",
      des: "Grocery store owners can also add up some of the promo codes and discounts for the customers which can boost loyalty through the special offers.",
    },
    {
      id: 19,
      category: "driver_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The driver tracking app panel is consist of all the driver information, admin approval features of the driver and many features related to the driver’s profile.",
    },
    {
      id: 20,
      category: "driver_app",
      image: Setavailability,
      title: "Set availability",
      des: "Drivers can provide their availability time so that the grocery store owners can assign the delivery as per the availability f the driver.",
    },
    {
      id: 21,
      category: "driver_app",
      image: GetNotify,
      title: "Get Notify",
      des: "Drivers can easily get notified by app push notification, SMS or E-mail whenever a job is assigned to them. Drivers can easily accept and reject the order.",
    },
    {
      id: 22,
      category: "driver_app",
      image: Customerandroutedetails,
      title: "Customer and route details",
      des: "Drivers can get the details of the grocery store address or pick up point and drop location along with the customer’s details. Access to the GPS for easy route access.",
    },
    {
      id: 23,
      category: "driver_app",
      image: Tracktheroute,
      title: "Track the route",
      des: "Due to the GPS integration, the drivers can easily track the route to deliver the services on time and this can be also checked by the admin.",
    },
    {
      id: 24,
      category: "driver_app",
      image: Getacustomerfeedback,
      title: "Get a customer feedback",
      des: "In a driver app panel, the driver can also check the customer’s feedback and reviews. This can help them to improve the quality of their services.",
    },
    {
      id: 25,
      category: "admin_panel",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The driver tracking app panel is consist of all the driver information, admin approval features of the driver and many features related to the driver’s profile.",
    },
    {
      id: 26,
      category: "admin_panel",
      image: DriverManagement,
      title: "Driver Management",
      des: "A Grocery admin panel can be useful for checking the driver’s profiles or information and can also remove drivers based on their complaints.",
    },
    {
      id: 27,
      category: "admin_panel",
      image: SubscriptionManagement,
      title: "Subscription Management",
      des: "Drivers can easily get notified by app push notification, SMS or E-mail whenever a job is assigned to them. Drivers can easily accept and reject the order.",
    },
    {
      id: 28,
      category: "admin_panel",
      image: PaymentManagement,
      title: "Payment Management",
      des: "Admin panel can have the overall control of overpayment management and taking care of groceries tore withdrawal requests, customer payment disputes and more.",
    },
    {
      id: 29,
      category: "admin_panel",
      image: GroceryStoremanagement,
      title: "Grocery Store management",
      des: "Admin panel can help to easily track all the grocery store owners on the list and list grocery items based on the different categories.",
    },
    {
      id: 30,
      category: "admin_panel",
      image: Reports,
      title: "Get a customer feedback",
      des: "Admin Panel will offer access to different reports corresponding to orders, purchases, users as well as sales.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = (cateItem) => {
    const updateItems = GroceryData.filter((curElem) => {
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
      <Helmet title="Grocery Store App Development Company | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="Grocery Store App"
        des="Here we are at The App Ideas, which is one of the foremost Grocery Store App Development company. We have a team of highly skilled as well as experienced mobile app developers and designers who will offer the best Grocery app development services at the best rates. Feel free to connect with us and get a free quote for developing a Grocery Store app."
        list1="7+ Years of experience in App Development"
        list2="Best Grocery App Development Company"
        list3="Dedicated team for your Grocery App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Grocery App Development"
        service2="Grocery Delivery App Development"
        service3="Grocery App Development Company"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}

      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of Grocery Store App</h3>
            <p>
              Are you planning on launching a fortunate Grocery Store App? Or
              Planning of digitalizing your Grocery store? If Yes, then this is
              probably the time for you to launch a successful Grocery app in
              the market. The demand for online grocery stores is increasing
              drastically in the market. People are more inclined towards the
              digital platforms because it offers the convenience of accessing
              the services, easy to use at any place as well as at any time and
              sometimes it is cost-effective and time-saving.
            </p>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "user_app" && "active"
                  }`}
                  id="Customer-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="Customer-App"
                  aria-selected="true"
                  onClick={() => setActiveSection("user_app")}
                  style={{ cursor: "pointer" }}
                >
                  Customer App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "vendor_app" && "active"
                  }`}
                  id="Restaurent-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Restaurent-App"
                  type="button"
                  role="tab"
                  aria-controls="Restaurent-App"
                  aria-selected="false"
                  onClick={() => setActiveSection("vendor_app")}
                  style={{ cursor: "pointer" }}
                >
                  Vendor App &amp; Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "driver_app" && "active"
                  }`}
                  id="Driver-Tracking-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Driver-Tracking"
                  type="button"
                  role="tab"
                  aria-controls="Driver-Tracking"
                  aria-selected="false"
                  onClick={() => setActiveSection("driver_app")}
                  style={{ cursor: "pointer" }}
                >
                  Driver Tracking App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "admin_panel" && "active"
                  }`}
                  id="Super-Admin-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Super-Admin"
                  type="button"
                  role="tab"
                  aria-controls="Super-Admin"
                  aria-selected="false"
                  onClick={() => setActiveSection("admin_panel")}
                  style={{ cursor: "pointer" }}
                >
                  Admin Panel
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
                          <Image width={70} height={70}
                            src={image}
                            alt="search-food-icon"
                            className="img-fluid"
                            style={{ height: "70px" }}
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
                    src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/food1.webp")}
                    alt="food1"
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
                    src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Food-2.webp")}
                    alt="food1"
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
                    src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Food-3.webp")}
                    alt="food1"
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
                  onClick={() => setActiveWhyShould("highly_scalable")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "highly_scalable" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/1high_scale.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Highly Scalable</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("fully_customizable")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "fully_customizable" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/2fully_customize.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Fully Customizable</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("time_cost")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "time_cost" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/3time_cost.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Time And Cost-Effective</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("multi_lingual")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "multi_lingual" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/4multi_support (1).png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Multi-Lingual Support</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("multi_currency")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "multi_currency" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/5multi_currency.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Multi-Currency Support</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("user_friendly")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "user_friendly" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/6user_freindly.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>User-Friendly Design</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("customize_design")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "customize_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/7offer_customize.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Customize Design</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("third_party")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "third_party" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/8third_party.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Third-Party Integration</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("great_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "great_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/4multi_support (1).png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Great Support</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "highly_scalable" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Highly Scalable</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      website and mobile app developers who will offer the best
                      services at the best rates. We have years of experience in
                      offering the best and advanced Grocery Store app
                      development services.
                    </p>
                    <p className="Title_para">
                      Along with the best design and advanced feature
                      integration, we offer a highly scalable grocery store app
                      solution. A highly scalable grocery store can be useful
                      for you as they have easy availability, maintenance,
                      better performance and more. If you are planning of
                      launching the foremost grocery store app then feel free to
                      reach us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "fully_customizable" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fully Customizable</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have years of experience in offering the best
                      web and mobile app solutions at the best rates. Along with
                      development, we also offer the best designing services
                      based on the client’s requirements as well as unique which
                      help in stand out differences among the competition.
                    </p>
                    <p className="Title_para">
                      We offer a fully customizable grocery store app
                      development. We have years of experience in developing the
                      best Grocery store app with unique design services. A
                      customizable grocery store can help you to easily
                      integrate all the features you want to add. Feel free to
                      reach us and get a free quote
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "time_cost" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Time and Cost-effective</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with the best development and
                      designing services, we are proficient in deploying the
                      project on time and with the best development cost. We try
                      to deliver the best services at the best rate and the best
                      costing as well as also offer a maintenance after
                      deployment.
                    </p>
                    <p className="Title_para">
                      Are you planning of launching a Grocery Store app? If yes
                      then this is probably the time for you to launch in the
                      market. Firstly, you have to research the market.
                      Secondly, search for the best Grocery Store app
                      development company which delivers the app at the least
                      time and best rates. Feel free to connect with us and
                      discuss our requirements.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "multi_lingual" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Multi-Lingual Support</h3>
                    <p className="Title_para">
                      The App Ideas is one of the best software development
                      company. We have years of experience in offering the best
                      web and mobile app services at the best possible rates. We
                      have a team of highly experienced developers who will
                      offer the best Grocery Store app with multi-lingual
                      support.
                    </p>
                    <p className="Title_para">
                      Planning on launching a successful Grocery store app? If
                      yes, then for offering personalised services, it is very
                      important for you to integrate multilingual support to the
                      grocery store app. We can help you to add up to 2 or more
                      languages in your app solution for easy accessibility.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "multi_currency" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Multi-Currency Support</h3>
                    <p className="Title_para">
                      Planning of launching a big Grocery store app in the
                      market? If yes, then you are at the right place. The App
                      Ideas is one of the leading web and app development
                      company. We have years of experience in deploying the best
                      solution for all kinds of business categories including
                      the grocery store or online grocery store app solutions.
                    </p>
                    <p className="Title_para">
                      If you are planning of targeting high areas or a high
                      number of users then you must have to launch a large
                      grocery store app with various vendors support like
                      Walmart. Along with the multi-language support, you also
                      have to integrate multi-currency support, so that
                      customers can easily access the services without searching
                      for third-party apps. We got you cover to add all the
                      advanced features at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "user_friendly" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">User-Friendly Design</h3>
                    <p className="Title_para">
                      The App Ideas is one of the best and Unique Mobile app
                      designing services. Along with the mobile app development
                      services, we have a team of highly skilled graphic
                      designers who are experts in offering User-friendly design
                      at the best possible rates. A user-friendly app can help
                      you to get more user attention, which leads to higher
                      sales rates.
                    </p>
                    <p className="Title_para">
                      If you are planning on launching a Grocery store app then
                      it is very important for you that along with the features,
                      you also have to focus on the design. It is very important
                      for you to offer User-Friendly design services to catch
                      more eyes towards your platform. Feel free to reach us and
                      get a free quote for a grocery store app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "customize_design" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Offering a customizable design
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We are experts in offering website
                      development services, mobile app development web app
                      development at the best possible rates. Along with
                      development, we also offer the foremost customizable
                      designing services based on the current trend.
                    </p>
                    <p className="Title_para">
                      The grocery store app is one of the most demanding
                      services in the present time. There is high competition in
                      the market for grocery store app but if you launch a
                      customizable design app then it will be very easy for you
                      to update as per the current trend. If you are planning on
                      launching a grocery store app then feel free to connect
                      with us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "third_party" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Third-Party Integration </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have years of expertise in
                      offering the best app development solution as well as
                      designing services. We are also experienced in integrating
                      third-party services if required. We have a ready-made
                      solution for the grocery store app with the best rate
                      possible.
                    </p>
                    <p className="Title_para">
                      Are you planning of launching a successful Grocery store
                      app by integrating third-party services? If yes then this
                      is probably the time for you to hire us and launch a
                      foremost Grocery store app with integrating third-party
                      services at the best possible rates. This is probably the
                      time for you to connect with us and get a free quotation
                      for your Mobile app solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "great_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Great Support</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We offer the best development
                      services for website development, mobile app development
                      and web app development along with designing services.
                      Along with the development services, we also offer great
                      support and maintenance to our clients.
                    </p>
                    <p className="Title_para">
                      Planning of launching a Grocery Store owner? If yes, then
                      this is probably the time for you to launch your grocery
                      store app. After deployment of the software solution, we
                      also offer support and maintenance services to our clients
                      which is free for three months. For a successful Grocery
                      store app development, feel free to reach us and get a
                      free quote.
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

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs
        question="Are you planning to launch a Successful Grocery Store App in
                  the market?"
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

export default GroceryApp;
