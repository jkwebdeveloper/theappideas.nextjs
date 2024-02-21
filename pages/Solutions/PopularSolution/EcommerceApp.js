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
import Development from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/eCommerce-App-Development.png";
import Services from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/eCommerce-Mobile-App-Development.png";
import developer from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/eCommerce-Application-Development-Company.png";

//  Customer App
import search from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Search-Products.svg";
import View from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/View-Products-Categories-Wise.svg";
import Cart from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Cart-Management.svg";
import Wish from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Wish-Products.svg";
import AvailOffers from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Avail-Offers.svg";
import Purchase from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Purchase-Online.svg";
import give from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Rating _ Reviews.svg";
import order from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Check-Order-History.svg";

// Admin Penal
import Vendor from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Vendor-Management.svg";
import UserManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/User-Management.svg";
import Payment from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Payment Management.svg";
import Featured from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Featured-Profiles-Management.svg";
import complaint from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/User-Complaint-Management.svg";
import Seller from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Seller complaint management.svg";

// Seller-Panel
import Profile from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/profile-management.svg";
import Product from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Product-Management.svg";
import Category from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Category-Management.svg";
import Management from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Order Management.svg";
import Paymentmanagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Payment-Management-1.svg";
import OfferManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Offer-Management.svg";
import ShippingManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Shipping-Management.svg";
import Inventory from "../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Inventory Management.svg";


import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const EcommerceApp = () => {
  const [activeSection, setActiveSection] = useState("user_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("mobile_shopping");
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
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Mobile-Shopping-Made-Simple.png"),
      que: "Mobile shopping made simple",
      ans: "As most users now access contents and online stores on their mobile app screen, an eCommerce App Development for mobile is a natural value proposition.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Open-Storefront.png"),
      que: "Always open storefront",
      ans: "A mobile online store helps to keep a store always open and accessible just a simple finger tap away on the screen.",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Accessible-Customer-Support.png"),
      que: "Always accessible customer support",
      ans: "An eCommerce App Development can reach out to customers to provide easy support whether they are active or inactive with the app.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Open-Storefront.png"),
      que: "Sophisticated shopping experience",
      ans: "By integrating sophisticated features and design elements a mobile commerce store can deliver a more sophisticated shopping experience than its desktop counterpart.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Easier-Product-Promotions.png"),
      que: "Easier product promotions",
      ans: "An eCommerce App Development allows more lucrative and easily accessible promotional campaigns for products and services.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Higher-ROI-Growth.png"),
      que: "Higher ROI growth",
      ans: "Thanks to the scope of continuous and relentless engagement a mobile commerce app ensures the optimum scope of business conversion and ROI growth.",
    },
  ];

  const EcommerceData = [
    {
      id: 1,
      category: "user_app",
      image: search,
      title: "Search products",
      des: "User can search for products by using a variety of filters.",
    },
    {
      id: 2,
      category: "user_app",
      image: View,
      title: "View products categories wise",
      des: "Users can view and search for products across different categories.",
    },
    {
      id: 3,
      category: "user_app",
      image: Cart,
      title: "Cart management",
      des: "Users can search and see lists of available courses.",
    },
    {
      id: 4,
      category: "user_app",
      image: Wish,
      title: "Wish Products",
      des: "Users are also allowed to keep their chosen products under wish-list for future purchases.",
    },
    {
      id: 5,
      category: "user_app",
      image: AvailOffers,
      title: "Avail Offers",
      des: "The user app also shows various offers available for the users.",
    },
    {
      id: 6,
      category: "user_app",
      image: Purchase,
      title: "Purchase Online",
      des: "Through the user panel the user can make online purchases.",
    },
    {
      id: 7,
      category: "user_app",
      image: give,
      title: "give ratings and reviews",
      des: "Users can write reviews and give ratings on the basis of their satisfaction with the products.",
    },
    {
      id: 8,
      category: "user_app",
      image: order,
      title: "check order history",
      des: "Can see course details and fix the zoom meeting.",
    },
    {
      id: 9,
      category: "admin_panel",
      image: Vendor,
      title: "Vendor Management",
      des: "App admin is allowed to take full control of the management of the vendors.",
    },
    {
      id: 10,
      category: "admin_panel",
      image: UserManagement,
      title: "User Management",
      des: "App admin can easily manage user profiles right from the admin panel.",
    },
    {
      id: 11,
      category: "admin_panel",
      image: Payment,
      title: "Payment Management",
      des: "The app admin can manage all payment gateways and payment procedures.",
    },
    {
      id: 12,
      category: "admin_panel",
      image: Featured,
      title: "Featured profile management",
      des: "The app admin panel also allows handling a section relating to some chosen customer profiles.",
    },
    {
      id: 13,
      category: "admin_panel",
      image: complaint,
      title: "User complaint management",
      des: "Through the admin panel the app admin can take cognisance if complaints and grievances and address them.",
    },
    {
      id: 14,
      category: "admin_panel",
      image: Seller,
      title: "Seller complaint management",
      des: "Through the admin panel, the app admin can also take note of all the seller complaints in order to address them.",
    },
    {
      id: 15,
      category: "seller_panel",
      image: Profile,
      title: "Profile Management",
      des: "The seller panel allows sellers to maintain and manage their own seller profiles equipped with business credentials and contact details.",
    },
    {
      id: 16,
      category: "seller_panel",
      image: Product,
      title: "Product Management",
      des: "The seller through the seller panel can manage their products and decide to make a feature list and categories as applicable.",
    },
    {
      id: 17,
      category: "seller_panel",
      image: Category,
      title: "Category management",
      des: "The seller panel allows creating product categories and denominations to help easy search and viewing.",
    },
    {
      id: 18,
      category: "seller_panel",
      image: Management,
      title: "Order Management",
      des: "The seller panel also allows managing all customer orders.",
    },
    {
      id: 19,
      category: "seller_panel",
      image: Paymentmanagement,
      title: "Payment management",
      des: "Through seller panel the seller can manage customer payment.",
    },
    {
      id: 20,
      category: "seller_panel",
      image: OfferManagement,
      title: "Offer Management",
      des: "The seller panel also allows the seller to manage offers and promotions.",
    },
    {
      id: 21,
      category: "seller_panel",
      image: ShippingManagement,
      title: "Shipping Management",
      des: "Through the seller panel, the seller can also manage the shipping of products.",
    },
    {
      id: 22,
      category: "user_app",
      image: Inventory,
      title: "Inventory management",
      des: "The seller panel also comes with an inventory management suite to take control of the entire process.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {

    const updateItems = EcommerceData.filter((curElem) => {

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
      <Helmet title="eCommerce App Development Company In India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="E-Commerce App Store"
        des="As most businesses are coming onto the digital space to stay competitive, there is a boom in the eCommerce App Development stores. Ecommerce stores offering a level-playing field for businesses of all sizes and niches are opening the next big growth opportunity. We build robust ecommerce stores with cutting edge technologies and the latest design protocols to help business brands take on the growth opportunities in the online marketplace."
        list1="7+ Years of experience in App Development"
        list2="Best E-Commerce App Development Company"
        list3="Dedicated team for your E-Commerce App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="eCommerce App Development"
        service2="eCommerce Mobile App Development"
        service3="eCommerce Application Development Company"
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
                    activeSection === "user_app" && "active"
                  }`}
                  id="User-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User-App"
                  type="button"
                  role="tab"
                  aria-controls="User-App"
                  aria-selected="true"
                  onClick={() => setActiveSection("user_app")}
                  style={{ cursor: "pointer" }}
                >
                  User App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "passenger_app" && "active"
                  }`}
                  id="Admin-Panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-Panel"
                  type="button"
                  role="tab"
                  aria-controls="Admin-Panel"
                  aria-selected="false"
                  onClick={() => setActiveSection("admin_panel")}
                  style={{ cursor: "pointer" }}
                >
                  Admin Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "passenger_app" && "active"
                  }`}
                  id="Seller-Panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Seller-Panel"
                  type="button"
                  role="tab"
                  aria-controls="Seller-Panel"
                  aria-selected="false"
                  onClick={() => setActiveSection("seller_panel")}
                  style={{ cursor: "pointer" }}
                >
                  Seller Panel
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="User-App"
                role="tabpanel"
                aria-labelledby="User-App-Tab"
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
            <h3>Why should you create an eCommerce App?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("mobile_shopping")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "mobile_shopping" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Mobile-Shopping-Made-Simple.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Mobile Shopping Made Simple</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("always_open")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "always_open" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Open-Storefront.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Always Open Storefront</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("always_accessible")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "always_accessible" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Accessible-Customer-Support.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Always Accessible Customer Support</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("sophisticated_experience")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "sophisticated_experience" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Open-Storefront.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Sophisticated Experience</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("easier_product")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "easier_product" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Easier-Product-Promotions.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Easier Product Promotions</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("higher_roi")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "higher_roi" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Higher-ROI-Growth.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Higher ROI Growth</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "mobile_shopping" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Mobile shopping made simple
                    </h3>
                    <p className="Title_para">
                      As most users now access contents and online stores on
                      their{" "}
                      <div
                        className="Title_Color"
                        style={{ color: "#d6aa0b" }}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <b> mobile app</b>
                      </div>{" "}
                      screen, an eCommerce App Development for mobile is a
                      natural value proposition.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "always_open" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Always open storefront </h3>
                    <p className="Title_para">
                      A mobile online store helps to keep a store always open
                      and accessible just a simple finger tap away on the
                      screen.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "always_accessible" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Always accessible customer support
                    </h3>
                    <p className="Title_para">
                      An eCommerce App Development can reach out to customers to
                      provide easy support whether they are active or inactive
                      with the app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "sophisticated_experience" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Sophisticated shopping experience{" "}
                    </h3>
                    <p className="Title_para">
                      By integrating sophisticated features and design elements
                      a mobile commerce store can deliver a more sophisticated
                      shopping experience than its desktop counterpart.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "easier_product" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Easier product promotions{" "}
                    </h3>
                    <p className="Title_para">
                      An eCommerce App Development allows more lucrative and
                      easily accessible promotional campaigns for products and
                      services.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "higher_roi" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Higher ROI growth </h3>
                    <p className="Title_para">
                      Thanks to the scope of continuous and relentless
                      engagement a mobile commerce app ensures the optimum scope
                      of business conversion and ROI growth.
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
      <ContactUs question="Would you like to create an E-Commerce App?" />
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

export default EcommerceApp;
