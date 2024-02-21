import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import FAQ from "../../../components/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
// Banner
import Development from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Salon-Booking-App-Development.png";
import Services from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Salon-App-Development.png";
import developer from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Salon-Booking-App-Development-Company.png";

//  Customer App
import Registration from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Registration and location setup.svg";
import Browse from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Browse-Salon1.svg";
import Check from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Check details.svg";
import Schedule from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Schedule an appointment.svg";
import Calendar from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/In-App-Calendar.svg";
import Interaction from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/In-App chat Interaction.svg";
import Checkorderhistory from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Check-Order-History.svg";
import Payment from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Payment-integration.svg";
import Loyalty from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Loyalty-programs.svg";
import reviews from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Driver-and-passenger-review-1.svg";
import notification from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Customer App/Push notification.svg";

// Beauty-App
import ProfileManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/profile-management.svg";
import Accept from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Accept Decline request.svg";
import Appointment from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Appointment management.svg";
import Catalogue from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/catalogue-management.svg";
import Service from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Service management.svg";
import Paymentmanagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Payment-Management-1.svg";
import discount from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Offer-Management.svg";
import Integrate from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Live Chat.svg";
import Feedback from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Beauty App/Feedback and review management.svg";

// Admin-App
import Customer from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Admin App/Customer Support.svg";
import Salon from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Admin App/Salon-management.svg";
import Subscription from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Admin App/Subscription management.svg";
import Analytics from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Admin App/Analytics and reports.svg";
import PaymentManagement from "../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/Admin App/Payment-Management-1.svg";

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const SalonApp = () => {
  const [activeSection, setActiveSection] = useState("customer_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("quality_salon");
  const [openServicesProvide, SetOpenServicesProvide] = useState(false);

  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false);
    }
    SetOpenServicesProvide(i);
  };

  const ServiceProvideData = [
    {
      id: 1,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/quality-salon.png"),
      que: "Quality Salon Solution",
      ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are proficient in offering mobile app solutions for all businesses with unique designing including the Salon app solutions. We have delivered Quality Salon App to our clients by integrating all the basic as well as advanced requirements.",
      ans2: "As we know quality is very important in this present time because it plays a vital role in the success of any kind of business. If you are planning to launch a Salon app then it is highly recommended to not compromise in quality. Our expert developers trust in offering high-quality solutions to the clients and integrating advanced features.",
    },
    {
      id: 2,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/nda-security.png"),
      que: "Sign NDA for security",
      ans: "We are from The App Ideas, which is one of the leading software development company. We are highly skilled in offering the best online platforms like mobile app, web app, E-commerce and website development. We have years of experience in offering the best services for salon app development as well as we also take care of our client’s confidentiality and personal information.",
      ans2: "We have worked on various projects and along with that, we are also ready to sign the NDA(Non-Disclosure Agreement) for clients satisfaction. We are ready to sign the NDA to protect our client’s confidential data. By signing NDA, we ensure to offer security to the client’s confidentiality and sensitive data by not leaking or giving it to the third party.",
    },
    {
      id: 3,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/cross-platform.png"),
      que: "Cross-Platform Solution",
      ans: "The App Ideas is one of the foremost software development company. Along with the development of the online platform, we also offer unique designing services to our clients to make their services platforms stand out differently in the market. The best design and good features can help you to gain more user attention.",
      ans2: "We are also proficient in using Cross-platform technology for delivering the Salon booking app for Android as well as IOS app users. If you are targeting a high number of users then it is very important to go for the cross platforms services. Here we offer all kinds of services, salon Android as well as IOS app development or hybrid app development to reach the best audiences.",
    },
    {
      id: 4,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/customize-app.png"),
      que: "Customize app solution",
      ans: "The App Ideas is one of the highly proficient web and app development company. Along with mobile app development, we are also skilled in offering website development services and graphics design services. We have a team of highly skilled designers who will offer unique and attractive designs for your Salon booking app at the best possible rates.",
      ans2: "We can offer the services to rebuild a Salon booking app by integrating the best and advanced features. We have a team of highly skilled and experienced developers who are experts in offering to customize salon app development services at the best rates. Get the Salon app rebranded with a list of advanced features and the best UI/UX.",
    },
    {
      id: 5,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/affordable-cost.png"),
      que: "Affordable Cost",
      ans: "The App Ideas is one of the most popular software development company. We have a team of highly skilled designers and developers who are efficient in offering the best app development services at the best possible rates. We have also worked on a various mobile app similar to the Salon booking app and delivered the best services to our clients.",
      ans2: "We offer all kinds of services at the best possible rates along with the best developing and designing services for a Salon Booking app. We always keep in touch with our clients during the app development and keep them updated about every module. We give all our efforts to offer a high-quality solution by integrating advanced features at a lower cost.",
    },
    {
      id: 6,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/time-delivery.png"),
      que: "On-Time App Delivery",
      ans: "The App Ideas is one of the most popular software development company. We provide the online platforms development services like mobile app development, web app development, e-commerce platforms development and website development for Salon booking app services. Along with the best costing and on-time delivery.",
      ans2: "Initially, we clearly understand our Clients requirements in a proper manner and then start developing a software solution like the Salon booking app. We have a team of talented developers who completely understand the value of time and due to that, we deploy the project as soon as possible without compromising the quality of the app.",
    },
    {
      id: 7,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/full-support.png"),
      que: "Full Support after Deployment",
      ans: "The App Ideas is one of the foremost software development company. We are highly skilled in offering the best web and app development services at the best rates. Align with the development and designing, we also offer support and maintenance services to our clients. After deployment of the projects, we provide three months of free support to our clients.",
      ans2: "At the initial stage, we complete gather all the information from our clients, understand it and then start implementing in developing a software solution as per the client s expectations. We test each and every module after development. After completing the development, we deploy the project with all the source code to our clients and offer them free support and maintenance services for three months. The problem gets easily solved with the support provided by us.",
    },
    {
      id: 8,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/user-freindly.png"),
      que: "User-friendly Design",
      ans: "The App Ideas is one of the most popular mobile app designing services. Along with the development of the mobile app, web app and website, we also offer the best as well as unique graphics designing services for all kinds of business categories. We have a highly skilled and experienced team of graphic designers who are proficient in offering the best design of Salon booking app services.",
      ans2: "We have worked on various projects, where we have stratified our customers with our unique design services. For a Salon Booking app, We can offer you the designing services which is trending in the market. The UI/UX designers design the Salon Booking app by weaning the lenses of the customer’s.",
    },
    {
      id: 9,
      images: require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/9.png"),
      que: "Multi-Language support",
      ans: "We are here at The App Ideas. The App Ideas is one of the best Salon Booking app development services. We have a team of highly skilled developers as well as designers who are experienced in offering the best salon booking app in the market. Along with the advanced functionality like multi-Languages support can also be provided by us at the best possible rates.",
      ans2: "Planning on launching a Salon Booking app? If yes then this is probably the best time for you to check the market and launch a modern salon booking app solution in the market best the best possible rates. Along with the best feature integration, we also provide multi-language support services for you. Feel free to connect with us and get a free quote.",
    },
  ];

  const SalonData = [
    {
      id: 1,
      category: "customer_app",
      image: Registration,
      title: "Registration and location setup",
      des: "Customer App can allow a customer to add up their personal details like Name, Address and more. Customers can also provide access to their location to find better results.",
    },
    {
      id: 2,
      category: "customer_app",
      image: Browse,
      title: "Browse Salon",
      des: "Customer App can easily check the list of the nearby salon or they can also browse the salon easily in a Salon Service app.",
    },
    {
      id: 3,
      category: "customer_app",
      image: Check,
      title: "Check the details",
      des: "Customer App or panel can allow the users to check the overall details of the salon services as well as the beautician list for hiring.",
    },
    {
      id: 4,
      category: "customer_app",
      image: Schedule,
      title: "Schedule an appointment",
      des: "Customers can easily access the list, check the reviews of the beautician and then easily schedule an appointment at the availability.",
    },
    {
      id: 5,
      category: "customer_app",
      image: Calendar,
      title: "In-App Calendar",
      des: "he calendar is also integrated into a customer app to conveniently manage the appointment. Customers can check the calendar and book appointments accordingly.",
    },
    {
      id: 6,
      category: "customer_app",
      image: Interaction,
      title: "In-App chat Interaction",
      des: "Customers can have access to the chat integration service. Through these features, they can easily chat for the support service.",
    },
    {
      id: 7,
      category: "customer_app",
      image: Checkorderhistory,
      title: "Check order history",
      des: "Customers can also have access to their history. They can see the past scheduled appointments with the salon name and payment history.",
    },
    {
      id: 8,
      category: "customer_app",
      image: Payment,
      title: "Payment integration",
      des: "The customer app is consist of multiple payment options by which customers can easily make the payment using various methods like Wallet, Debit/Credit and more.",
    },
    {
      id: 9,
      category: "customer_app",
      image: Loyalty,
      title: "Loyalty programs",
      des: "Customers can easily have access to loyalty programs. They can also be applied the new offers and discounts option to the services.",
    },
    {
      id: 10,
      category: "customer_app",
      image: reviews,
      title: "Add reviews and Feedback",
      des: "After receiving the salon service, customers can have access to share their experience by adding reviews and Feedback accordingly.",
    },
    {
      id: 11,
      category: "customer_app",
      image: notification,
      title: "Push notification.",
      des: "The customer app can also be integrated with such features by which they can receive alerts and notifications about the services and booking.",
    },
    {
      id: 12,
      category: "beauty_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "A Beauty Salon App owner can allow developing their profile by adding on personal details like address, beautician details, experience, price and all.",
    },
    {
      id: 13,
      category: "beauty_app",
      image: Accept,
      title: "Accept/ Decline request",
      des: "This app allows the owner to check the customer request list. As per the availability, they can accept or reject the request of the customers.",
    },
    {
      id: 14,
      category: "beauty_app",
      image: Appointment,
      title: "Appointment management",
      des: "This panel can offer access to the panel owner to add the available time slots. Salon owners or managers can also add or edit the opening hour.",
    },
    {
      id: 15,
      category: "beauty_app",
      image: Catalogue,
      title: "Catalogue management",
      des: "This app panel allows the salon owner to manage their catalogue easily. They can easily list down their services in well alphabetic order.",
    },
    {
      id: 16,
      category: "beauty_app",
      image: Service,
      title: "Service management",
      des: "This app feature can grant access to the Salon manager to edit, add or delete the services as per their requirements. They can edit any information accordingly.",
    },
    {
      id: 17,
      category: "beauty_app",
      image: Paymentmanagement,
      title: "Payment management",
      des: "An important feature allows the panel owner to manage the payment methods of the services listed in the app. They can easily customize the payment.",
    },
    {
      id: 18,
      category: "beauty_app",
      image: discount,
      title: "Offer and discount management",
      des: "Beauty Salon app owners can also have access to update the offers and discount information at their convenience.",
    },
    {
      id: 19,
      category: "beauty_app",
      image: Integrate,
      title: "Integrate Chat module",
      des: "As in the customer panel, the Chat module is also integrated into the Beauty Salon app panel. These features can be helpful for both parties.",
    },
    {
      id: 20,
      category: "beauty_app",
      image: Feedback,
      title: "Feedback and review management",
      des: "Beauty Salon app owners can have access to the feedback and reviews of the customer. They can analyze and make the improvement as per the customer feedbacks.",
    },
    {
      id: 21,
      category: "admin_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "A salon admin panel can allow the owner to check the details like customer details, beauty salon profile, payment information and all the other details.",
    },
    {
      id: 22,
      category: "admin_app",
      image: Customer,
      title: "Customer Support",
      des: "Admin panel can also have features that will directly connect with them to the customers or we can say by which they provide the customer support.",
    },
    {
      id: 23,
      category: "admin_app",
      image: Salon,
      title: "Salon management",
      des: "Admin can easily have overall access to the Salon services which are listed in the app. Admin can easily add, update or delete the Salon as well as manage the details.",
    },
    {
      id: 24,
      category: "admin_app",
      image: Subscription,
      title: "Subscription management.",
      des: "Salon app Admin app has features to manage all the salon owners subscriptions on the basis of which the listing of the salon store is decided.",
    },
    {
      id: 25,
      category: "admin_app",
      image: Analytics,
      title: "Analytics and reports",
      des: "Admin can easily analyze and generate reports based on past profits or losses. This feature can help to boost marketing to expand business with the proper planning.",
    },
    {
      id: 26,
      category: "admin_app",
      image: PaymentManagement,
      title: "Payment Management",
      des: "Admin Panel can have overall control over the payment module. Admin can also take care of the withdrawal requests, customer payment disputes and all.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = SalonData.filter((curElem) => {
      return curElem.category === activeSection;
    });
    setData(updateItems);
  };
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    AOS.init();
  }, []);

  // run when activesection changes
  useEffect(() => {
    filterItem();
  }, [activeSection]);

  return (
    <>
      <Helmet title="Salon Booking App Development Company | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="Salon Booking App Development"
        des="Here we are at The App Ideas, which is one of the leading Salon Booking app development company. We have a team of highly experienced and expert mobile app developers who will offer the best salon app development services at the best rates. Feel free to reach us and get a free quote for a Salon Booking app development service."
        list1="7+ Years of experience in App Development"
        list2="Best Salon Service App Development Company"
        list3="Dedicated team for your Salon Service App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Salon Booking App Development"
        service2="Salon App Development"
        service3="Salon Booking App Development Company"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of Salon Service App</h3>
            <p>
              Are you have thought of developing a successful Salon Booking app
              for your business? <br /> If yes, then you are at the right place
              for developing a Salon Booking app. With the right place, this is
              probably the right time for you to launch a successful salon
              booking app in the market. Many of the businesses are now planning
              of digitalizing their services to increase the profit rate of the
              business. The users or customers are also loving the concept of
              digitization because it offers the convenience of accessing the
              services from any place and at any time from a single screen app.
            </p>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "customer_app" && "active"
                  }`}
                  id="Customer-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="Customer-App"
                  aria-selected="true"
                  onClick={() => setActiveSection("customer_app")}
                  style={{ cursor: "pointer" }}
                >
                  Customer App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "beauty_app" && "active"
                  }`}
                  id="Beauty-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Beauty-App"
                  type="button"
                  role="tab"
                  aria-controls="Beauty-App"
                  aria-selected="false"
                  onClick={() => setActiveSection("beauty_app")}
                  style={{ cursor: "pointer" }}
                >
                  Beauty Salon Owner App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "admin_app" && "active"
                  }`}
                  id="Admin-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-App"
                  type="button"
                  role="tab"
                  aria-controls="Admin-App"
                  aria-selected="false"
                  onClick={() => setActiveSection("admin_app")}
                  style={{ cursor: "pointer" }}
                >
                  Admin App
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
                            alt="Check-Details-icons"
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
                    alt="food-1"
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
                  onClick={() => setActiveWhyShould("quality_salon")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "quality_salon" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/quality-salon.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Quality Salon Solution</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("sign_dna")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "sign_dna" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/nda-security.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Sign NDA For Security</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("cross_platform")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "cross_platform" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/cross-platform.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Solution</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("customize_app")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "customize_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/customize-app.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Customize App Solution</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("affordable")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "affordable" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/affordable-cost.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Affordable Cost</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("on_time_app")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "on_time_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/time-delivery.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>On-Time App Delivery</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("full_support")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "full_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/full-support.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Full Support After Deployment</p>
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
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/user-freindly.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>User-Friendly Design</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("multi_language")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyShould === "multi_language" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require("../../../public/assets/images/SOLUTIONS/Popular Solutions/Salon Booking App Development/why-should/9.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Multi-Language Support</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyShould === "quality_salon" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Quality Salon Solution</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      offering mobile app solutions for all businesses with
                      unique designing including the Salon app solutions. We
                      have delivered Quality Salon App to our clients by
                      integrating all the basic as well as advanced
                      requirements.
                    </p>
                    <p className="Title_para">
                      As we know quality is very important in this present time
                      because it plays a vital role in the success of any kind
                      of business. If you are planning to launch a Salon app
                      then it is highly recommended to not compromise in
                      quality. Our expert developers trust in offering
                      high-quality solutions to the clients and integrating
                      advanced features.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "sign_dna" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Sign NDA for security</h3>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading
                      software development company. We are highly skilled in
                      offering the best online platforms like mobile app, web
                      app, E-commerce and website development. We have years of
                      experience in offering the best services for salon app
                      development as well as we also take care of our client’s
                      confidentiality and personal information.
                    </p>
                    <p className="Title_para">
                      We have worked on various projects and along with that, we
                      are also ready to sign the NDA(Non-Disclosure Agreement)
                      for clients satisfaction. We are ready to sign the NDA to
                      protect our client’s confidential data. By signing NDA, we
                      ensure to offer security to the client’s confidentiality
                      and sensitive data by not leaking or giving it to the
                      third party. .
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "cross_platform" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Cross-Platform Solution</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. Along with the development of the online
                      platform, we also offer unique designing services to our
                      clients to make their services platforms stand out
                      differently in the market. The best design and good
                      features can help you to gain more user attention.
                    </p>
                    <p className="Title_para">
                      We are also proficient in using Cross-platform technology
                      for delivering the Salon booking app for Android as well
                      as IOS app users. If you are targeting a high number of
                      users then it is very important to go for the cross
                      platforms services. Here we offer all kinds of services,
                      salon Android as well as IOS app development or hybrid app
                      development to reach the best audiences.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "customize_app" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Customize app solution</h3>
                    <p className="Title_para">
                      The App Ideas is one of the highly proficient web and app
                      development company. Along with mobile app development, we
                      are also skilled in offering website development services
                      and graphics design services. We have a team of highly
                      skilled designers who will offer unique and attractive
                      designs for your Salon booking app at the best possible
                      rates.
                    </p>
                    <p className="Title_para">
                      We can offer the services to rebuild a Salon booking app
                      by integrating the best and advanced features. We have a
                      team of highly skilled and experienced developers who are
                      experts in offering to customize salon app development
                      services at the best rates. Get the Salon app rebranded
                      with a list of advanced features and the best UI/UX.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "affordable" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Affordable Cost</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of highly skilled
                      designers and developers who are efficient in offering the
                      best app development services at the best possible rates.
                      We have also worked on a various mobile app similar to the
                      Salon booking app and delivered the best services to our
                      clients.
                    </p>
                    <p className="Title_para">
                      We offer all kinds of services at the best possible rates
                      along with the best developing and designing services for
                      a Salon Booking app. We always keep in touch with our
                      clients during the app development and keep them updated
                      about every module. We give all our efforts to offer a
                      high-quality solution by integrating advanced features at
                      a lower cost.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "on_time_app" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">On-Time App Delivery</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We provide the online platforms
                      development services like mobile app development, web app
                      development, e-commerce platforms development and website
                      development for Salon booking app services. Along with the
                      best costing and on-time delivery.
                    </p>
                    <p className="Title_para">
                      Initially, we clearly understand our Clients requirements
                      in a proper manner and then start developing a software
                      solution like the Salon booking app. We have a team of
                      talented developers who completely understand the value of
                      time and due to that, we deploy the project as soon as
                      possible without compromising the quality of the app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "full_support" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Full Support after Deployment
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We are highly skilled in offering the best web
                      and app development services at the best rates. Align with
                      the development and designing, we also offer support and
                      maintenance services to our clients. After deployment of
                      the projects, we provide three months of free support to
                      our clients.
                    </p>
                    <p className="Title_para">
                      At the initial stage, we complete gather all the
                      information from our clients, understand it and then start
                      implementing in developing a software solution as per the
                      client s expectations. We test each and every module after
                      development. After completing the development, we deploy
                      the project with all the source code to our clients and
                      offer them free support and maintenance services for three
                      months. The problem gets easily solved with the support
                      provided by us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "user_friendly" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">User-friendly Design </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular mobile app
                      designing services. Along with the development of the
                      mobile app, web app and website, we also offer the best as
                      well as unique graphics designing services for all kinds
                      of business categories. We have a highly skilled and
                      experienced team of graphic designers who are proficient
                      in offering the best design of Salon booking app services.
                    </p>
                    <p className="Title_para">
                      We have worked on various projects, where we have
                      stratified our customers with our unique design services.
                      For a Salon Booking app, We can offer you the designing
                      services which is trending in the market. The UI/UX
                      designers design the Salon Booking app by weaning the
                      lenses of the customer’s.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "multi_language" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Multi-Language support</h3>
                    <p className="Title_para">
                      We are here at The App Ideas. The App Ideas is one of the
                      best Salon Booking app development services. We have a
                      team of highly skilled developers as well as designers who
                      are experienced in offering the best salon booking app in
                      the market. Along with the advanced functionality like
                      multi-Languages support can also be provided by us at the
                      best possible rates.
                    </p>
                    <p className="Title_para">
                      Planning on launching a Salon Booking app? If yes then
                      this is probably the best time for you to check the market
                      and launch a modern salon booking app solution in the
                      market best the best possible rates. Along with the best
                      feature integration, we also provide multi-language
                      support services for you. Feel free to connect with us and
                      get a free quote.
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

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Would you like to create a Salon booking App?" />
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

export default SalonApp;
