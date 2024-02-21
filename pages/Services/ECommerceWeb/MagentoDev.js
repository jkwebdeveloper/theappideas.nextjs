import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import mobileweb from "../../../public/assets/images/SERVICES/E-Commerce Website/ShopifyDev/Shopify-Website-Development.webp";
import mobileaap from "../../../public/assets/images/SERVICES/E-Commerce Website/ShopifyDev/Shopify-Custom-Theme-Developmen.webp";
import Experts from "../../../public/assets/images/SERVICES/E-Commerce Website/ShopifyDev/Shopify-Experts.webp";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import HeroSection from "../../../components/HeroSection";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Website-Development.png"),
    que: "Magento Website Development",
    ans: "Magento is one of the most popular Website platform development services at the present time. If we observe the market then there are a high number of users who are now accepting the online platform because it offers the convenience of accessing the services at any time and from any place.",
    ans2: "The App Ideas is one of the leading web and app developing company. We have years of experience in developing the successful Magento website for all kinds of business categories. We develop high-performance business websites using Magento CMS.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/icons8-magento-100-1.png"),
    que: "Magento E-commerce Development",
    ans: "The demand for online platforms is increasing along with time and competition. If we talk about the users then they are more inclined towards the website platforms or online system because it is convenient to use from any place and time saving as well. People can check the items, add them to the cart and make the delivery to their doorstep without visiting the stores.",
    ans2: "The App Ideas is one of the most popular E-commerce platform development company. We have a team of highly skilled and experienced Magento developers who are experts in offering the best software solutions for all kinds of business categories. Using Magento we develop versatile and powerful e-commerce stores complete with all e-commerce features.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Theme.png"),
    que: "Magento Theme Development",
    ans: "There are many E-commerce technology solutions are available in the market. Many store owners and business owners are shifting towards digital platforms because this offers convenience as well as time-saving methods. If you are also planning on launching an E-commerce platform them Magento offers various themes options for developing a successful store for your business or startup.",
    ans2: "The App Ideas is one of the successful Magento development company. We have a team of experienced Magento developers who will deploy a successful Magento E-commerce platform for all business categories. We build custom Magento modules and themes to provide e-commerce stores and business websites appropriate custom look and feel.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Shopping-Cart-Development.png"),
    que: "Magento Shopping Cart Development",
    ans: "E-commerce platforms are considered as one of the best innovations in the field of digitalization. Magento is one of the most popular and demanding E-commerce platforms at this present time. If you are planning to launch your own E-commerce stores then this is probably the best time to make an investment in developing your E-commerce platform.",
    ans2: "The App Ideas is one of the leading software development company. We have a team of highly skilled and experienced developers who are experts in offering the best Magento E-commerce platforms. Using Magento we also develop a shopping cart for business websites to deliver smooth checkout and payment solutions.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Plugins-And-Extensions.png"),
    que: "Magento Plugins and extensions",
    ans: "As we know, nowadays, the demand of the online platform or digital solutions are increasing day by day. The high number of users are now shifting towards the online platform, so this is probably the right time for you and your business to make an investment in E-commerce platform development using the Magento framework.",
    ans2: "Magento is one of the most popular E-commerce platforms development frameworks. This provides all kinds of features and functionality to develop a successful E-commerce platform for all kinds of businesses and categories. We develop custom plugins and extensions for business and E-commerce websites and ensure custom web users as well as a shopping experience.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Mask-Group.png"),
    que: "Support and Maintenance",
    ans: "Are you planning to launch online platforms or digitalizing your store? If yes then this is probably the best time to move further. If we talk about the market then users are more inclined towards digital solutions for accessing all kinds of services including different Shopping sites.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a team of highly skilled and experienced Magento developers who have years of experience in developing future-ready Magento E-commerce platforms as per the current trend. We provide full optimization, support and maintenance services to Magento websites and help them come with regular updates.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/Expert-Developers.png"),
    que: "Experience Developers",
    ans: "We are from The App Ideas, which is one of the popular software development company. We have years of experience in providing the best software development services for mobile app development, web app development and website app development at the best possible rates.",
    ans2: "We are also proficient in offering the best Magento E-commerce platforms for increasing the profit rates of the business. We boast of a huge team of experienced Magento developers having doled track record across a variety of projects.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png"),
    que: "Robust Portfolio",
    ans: "If you check the market then you can probably see that there are hundreds of E-commerce platforms available in the market but users are still looking for the best solution which can offer all kinds of functionality and satisfy customers needs. If you are planning of launching an E-commerce platform then it is required to check the portfolio.",
    ans2: "We are from The App Ideas, which is one of the leading app and web development company. We have a talented pool of Magento developers who are proficient in offering the future-ready Magento developers which help in increasing the profit rates of the business. We boast a robust portfolio of business websites and e-commerce stores built using Magento CMS.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/competitive-pricing.png"),
    que: "Competitive Value",
    ans: "This time is probably known as the digital era because all the services are now moving towards online platforms. This is why each and every business is making investments in E-commerce platform development. Because of this, the competitions are high in the market, there are thousands of E-commerce platform available in the market.",
    ans2: "We at The App Ideas offers the best software development Services including E-commerce platform development. We have a team of highly skilled Magento developers who are experts in offering the victorious e-commerce solution for the business. We continuously deliver competitive value to clients by offering our own custom-built themes and plugins.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/Time-Bound-Development..png"),
    que: "Project Deadlines",
    ans: "Planning of digitalizing your offline stores or thinking of making an investment in an E-commerce store is one of the best ideas in this present time. The demands, as well as the online users, are increasing day by day, people are loving the digital platforms. It is very important for you to hire the Magento developers company who deliver the project on time.",
    ans2: "We are from The App Ideas, which is one of the leading software development company. We have a team of Magento developers who have years of expertise in offering successful Magento E-commerce platforms on time. We strictly adhere to the project deadline and milestones.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/Agile-Development-1.png"),
    que: "Agile Development",
    ans: "The demand for Magento E-commerce platforms is highly increasing in the market. The Magento E-commerce platform offers the comfort and convenience of accessing the services through the online platforms by saving time as well as saving money. If you own a store then this is probably the best time of digitizing your store platforms.",
    ans2: "The App Ideas is one of the leading software development company. We have an expert team of Magento developers who strictly follow the agile methodology for all kinds of software development. We follow the Agile development method to ensure concurrent testing and continuous value-addition from the clients.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/icons8-value-72.png"),
    que: "Competitive Pricing",
    ans: "If you are planning on initiating an E-commerce business for your stores then this is probably the best time for you to making an investment. The Magento technology for your E-commerce business can help you and your business to stand out different in the competition.",
    ans2: "The App Ideas is one of the leading software development company. We offer the software development services like mobile app, web app and website development. We have a team of highly skilled Magento developers who offer the services at the best rates. We offer the most competitive pricing for every Magento development project.",
  },
];

const MagentoDev = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("magento_website");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_developers"
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

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Helmet title="Magento Development Company in India, USA, Canada - The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Magento Development company"
        des="If we check out the market then E-commerce services are getting highly demanding among the users. Many business owners and entrepreneurs are now making high investments in E-commerce platforms development for increasing the profit rates of the business. There are hundreds of solutions available in the market but people are still looking for something updated and advanced features platform. So if you are planning to launch a Magento development company then this is probably the right time."
        list1="7+ Years of experience in Magento Development"
        list2="Best Magento Development Company"
        list3="Dedicated team for your Magento Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Magento Development Services"
        service2="Magento Web Development Company"
        service3="Magento Certified Developer"
        image1={mobileweb}
        image2={mobileaap}
        image3={Experts}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we offer for Magento Development Company?</h3>
            <p>
              When it comes to e-commerce and mobile commerce websites and apps,
              Magento comes as the leading and most versatile choice among CMS
              solutions. Magento is popular for customisation options with a
              whole array of sophisticated feature sets. At The App Ideas, we
              boast a solid portfolio and experience of sophisticated Magento
              e-commerce stores for various niches.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("magento_website")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "magento_website" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Website-Development.png")}
                      alt="Magento Website Development"
                      className="img-fluid"
                    />
                    <p>Magento Website Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("magento_e_comm")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "magento_e_comm" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/icons8-magento-100-1.png")}
                      alt="Magento E-commerce Development"
                      className="img-fluid"
                    />
                    <p>Magento E-commerce Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("magento_theme")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "magento_theme" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Theme.png")}
                      alt="Magento Theme Development"
                      className="img-fluid"
                    />
                    <p>Magento Theme Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("magento_shopping_Cart")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "magento_shopping_Cart" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Shopping-Cart-Development.png")}
                      alt="Magento Shopping Cart Development"
                      className="img-fluid"
                    />
                    <p>Magento Shopping Cart Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("magento_plugins")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "magento_plugins" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Magento-Plugins-And-Extensions.png")}
                      alt="Magento Plugins and extensions"
                      className="img-fluid"
                    />
                    <p>Magento Plugins and extensions</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("support_maintanance")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeOffer === "support_maintanance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/What-do/Mask-Group.png")}
                      alt="Support and Maintenance"
                      className="img-fluid"
                    />
                    <p>Support and Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeOffer === "magento_website" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Magento Website Development
                    </h3>
                    <p className="Title_para">
                      Magento is one of the most popular Website platform
                      development services at the present time. If we observe
                      the market then there are a high number of users who are
                      now accepting the online platform because it offers the
                      convenience of accessing the services at any time and from
                      any place.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app developing
                      company. We have years of experience in developing the
                      successful Magento website for all kinds of business
                      categories. We develop high-performance business websites
                      using Magento CMS.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "magento_e_comm" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Magento E-commerce Development{" "}
                    </h3>
                    <p className="Title_para">
                      The demand for online platforms is increasing along with
                      time and competition. If we talk about the users then they
                      are more inclined towards the website platforms or online
                      system because it is convenient to use from any place and
                      time saving as well. People can check the items, add them
                      to the cart and make the delivery to their doorstep
                      without visiting the stores.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular E-commerce
                      platform development company. We have a team of highly
                      skilled and experienced Magento developers who are experts
                      in offering the best software solutions for all kinds of
                      business categories. Using Magento we develop versatile
                      and powerful e-commerce stores complete with all
                      e-commerce features.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "magento_theme" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Magento Theme Development{" "}
                    </h3>
                    <p className="Title_para">
                      There are many E-commerce technology solutions are
                      available in the market. Many store owners and business
                      owners are shifting towards digital platforms because this
                      offers convenience as well as time-saving methods. If you
                      are also planning on launching an E-commerce platform them
                      Magento offers various themes options for developing a
                      successful store for your business or startup.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the successful Magento development
                      company. We have a team of experienced Magento developers
                      who will deploy a successful Magento E-commerce platform
                      for all business categories. We build custom Magento
                      modules and themes to provide e-commerce stores and
                      business websites appropriate custom look and feel.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "magento_shopping_Cart" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Magento Shopping Cart Development{" "}
                    </h3>
                    <p className="Title_para">
                      E-commerce platforms are considered as one of the best
                      innovations in the field of digitalization. Magento is one
                      of the most popular and demanding E-commerce platforms at
                      this present time. If you are planning to launch your own
                      E-commerce stores then this is probably the best time to
                      make an investment in developing your E-commerce platform.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a team of highly skilled and experienced
                      developers who are experts in offering the best Magento
                      E-commerce platforms. Using Magento we also develop a
                      shopping cart for business websites to deliver smooth
                      checkout and payment solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "magento_plugins" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Magento Plugins and extensions{" "}
                    </h3>
                    <p className="Title_para">
                      As we know, nowadays, the demand of the online platform or
                      digital solutions are increasing day by day. The high
                      number of users are now shifting towards the online
                      platform, so this is probably the right time for you and
                      your business to make an investment in E-commerce platform
                      development using the Magento framework.
                    </p>
                    <p className="Title_para">
                      Magento is one of the most popular E-commerce platforms
                      development frameworks. This provides all kinds of
                      features and functionality to develop a successful
                      E-commerce platform for all kinds of businesses and
                      categories. We develop custom plugins and extensions for
                      business and E-commerce websites and ensure custom web
                      users as well as a shopping experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "support_maintanance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance </h3>
                    <p className="Title_para">
                      Are you planning to launch online platforms or
                      digitalizing your store? If yes then this is probably the
                      best time to move further. If we talk about the market
                      then users are more inclined towards digital solutions for
                      accessing all kinds of services including different
                      Shopping sites.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a team of highly
                      skilled and experienced Magento developers who have years
                      of experience in developing future-ready Magento
                      E-commerce platforms as per the current trend. We provide
                      full optimization, support and maintenance services to
                      Magento websites and help them come with regular updates.
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
                      <Image  width={50} height={50}
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
      {/* Work Hand Done slider start  */}
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
                  <Image  width={1110} height={628}
                    alt="Group-18"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-18.webp")}
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
                  <Image  width={1110} height={628}
                    alt="Group-19"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-19.png")}
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
                  <Image  width={1110} height={628}
                    alt="Group-20"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-20.png")}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image  width={1110} height={628}
                    alt="Group-21"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-21.png")}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image  width={1110} height={628}
                    alt="Group-22"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-22.png")}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image  width={1110} height={628}
                    alt="Group-23"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-23.png")}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image  width={1110} height={628}
                    alt="Group-24"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-24.webp")}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image  width={1110} height={628}
                    alt="Group-26"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-26.webp")}
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
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <Image  width={1110} height={628}
                    alt="Group-28"
                    src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-28.webp")}
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
      {/* Work Hand Done slider End  */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why choose us for Magento Development Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience_developers")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience_developers" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/Expert-Developers.png")}
                      alt="Experience Developers"
                      className="img-fluid"
                    />
                    <p>Experience Developers</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png")}
                      alt="Robust Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_value")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_value" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/competitive-pricing.png")}
                      alt="Competitive Value"
                      className="img-fluid"
                    />
                    <p>Competitive Value</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("project_deadlines")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "project_deadlines" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/Time-Bound-Development..png")}
                      alt="Project Deadlines"
                      className="img-fluid"
                    />
                    <p>Project Deadlines</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile")}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/Agile-Development-1.png")}
                      alt="Agile Development"
                      className="img-fluid"
                    />
                    <p>Agile Development </p>
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
                    }`}
                  >
                    <Image  width={60} height={60}
                      src={require("../../../public/assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/icons8-value-72.png")}
                      alt="Competitive Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience_developers" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience Developers</h3>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the popular
                      software development company. We have years of experience
                      in providing the best software development services for
                      mobile app development, web app development and website
                      app development at the best possible rates.
                    </p>
                    <p className="Title_para">
                      We are also proficient in offering the best Magento
                      E-commerce platforms for increasing the profit rates of
                      the business. We boast of a huge team of experienced
                      Magento developers having doled track record across a
                      variety of projects.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "robust" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      If you check the market then you can probably see that
                      there are hundreds of E-commerce platforms available in
                      the market but users are still looking for the best
                      solution which can offer all kinds of functionality and
                      satisfy customers needs. If you are planning of launching
                      an E-commerce platform then it is required to check the
                      portfolio.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading app
                      and web development company. We have a talented pool of
                      Magento developers who are proficient in offering the
                      future-ready Magento developers which help in increasing
                      the profit rates of the business. We boast a robust
                      portfolio of business websites and e-commerce stores built
                      using Magento CMS.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_value" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Value</h3>
                    <p className="Title_para">
                      This time is probably known as the digital era because all
                      the services are now moving towards online platforms. This
                      is why each and every business is making investments in
                      E-commerce platform development. Because of this, the
                      competitions are high in the market, there are thousands
                      of E-commerce platform available in the market.
                    </p>
                    <p className="Title_para">
                      We at The App Ideas offers the best software development
                      Services including E-commerce platform development. We
                      have a team of highly skilled Magento developers who are
                      experts in offering the victorious e-commerce solution for
                      the business. We continuously deliver competitive value to
                      clients by offering our own custom-built themes and
                      plugins.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "project_deadlines" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Project Deadlines</h3>
                    <p className="Title_para">
                      Planning of digitalizing your offline stores or thinking
                      of making an investment in an E-commerce store is one of
                      the best ideas in this present time. The demands, as well
                      as the online users, are increasing day by day, people are
                      loving the digital platforms. It is very important for you
                      to hire the Magento developers company who deliver the
                      project on time.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading
                      software development company. We have a team of Magento
                      developers who have years of expertise in offering
                      successful Magento E-commerce platforms on time. We
                      strictly adhere to the project deadline and milestones.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "agile" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      The demand for Magento E-commerce platforms is highly
                      increasing in the market. The Magento E-commerce platform
                      offers the comfort and convenience of accessing the
                      services through the online platforms by saving time as
                      well as saving money. If you own a store then this is
                      probably the best time of digitizing your store platforms.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have an expert team of Magento developers who
                      strictly follow the agile methodology for all kinds of
                      software development. We follow the Agile development
                      method to ensure concurrent testing and continuous
                      value-addition from the clients.
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
                      If you are planning on initiating an E-commerce business
                      for your stores then this is probably the best time for
                      you to making an investment. The Magento technology for
                      your E-commerce business can help you and your business to
                      stand out different in the competition.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We offer the software development services like
                      mobile app, web app and website development. We have a
                      team of highly skilled Magento developers who offer the
                      services at the best rates. We offer the most competitive
                      pricing for every Magento development project.
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
                      <Image  width={50} height={50}
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
      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful Magento app in the market?" />
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

export default MagentoDev;
