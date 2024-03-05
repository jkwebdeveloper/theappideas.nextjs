import React, { useEffect, useState } from "react";
import Work from "../../../components/Workdone/Work";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
// Service section image
import MobileAppDesigning from "../../../public/assets/images/SERVICES/Designing/Services we provide/Mobile app designing.svg";
import WebAppDesigning from "../../../public/assets/images/SERVICES/Designing/Services we provide/Web app designing.svg";
import Graphic from "../../../public/assets/images/SERVICES/Designing/Services we provide/Graphic designing.svg";

import { Helmet } from "react-helmet";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import { useFormik } from "formik";
// import { getFreeQuoteSchema } from "../public/pages/schemas";
import ReCAPTCHA from "react-google-recaptcha";
import { Country } from "country-state-city";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
// import { getFreeQuoteSchema } from "../../schemas";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";
import { getFreeQuoteSchema } from "../../../components/schemas";
import banner from "../../../public/assets/images/MobileAppDev/bg.png";
import contact from "../../../public/assets/images/MobileAppDev/contact-bg.png";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Designing/Services we provide/banner-design.png"),
    que: "Banner designing",
    ans: "The App Ideas is one of the foremost web and app development company. Along with the best online platform development, we are also expertise in developing designing services for all kinds of business categories. In designing, we have years of experience in delivering the best designs for all kinds of business niches at the best rates. For more details, feel free to reach us.",
    ans2: "Are you looking for the best Banner designing services?",
    ans3: "If yes, then you are at the right place for designing services. We provide designing services for mobile app, web app or website services. If you are looking for banner designing services for your business then here we have a team of experts who are proficient in designing an attractive banner for your business. Connect with us to discuss your requirements and get the best services at a competitive rate.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Designing/Services we provide/logo-design.png"),
    que: "Logo designing",
    ans: "The App Ideas is one of the leading software development company. We offer the best development services for all kinds of online platforms like mobile app, web app, websites, software platforms and more. Along with the best development services , we are also offering the designing services like Logo for all kinds of business categories. The logo of your business must be unique because it represents your business services.",
    ans2: "Are you looking for the best Logo Designing services?",
    ans3: "If yes, then this is probably the best time for you to connect with us and get the best logo designing service. Logo plays a vital role in representing the business services through a single symbol. If you are a startup owner or a business owner then this is probably the best time for you to launch the best logo. For more details on this, please feel free to connect with us and get a free quote.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Designing/Services we provide/template-design.png"),
    que: "Custom template designing",
    ans: "The App Ideas is one of the most popular web and app development company. We have a team of highly skilled and expert developers who are highly experienced in developing custom template designing services. Along with the development, we are also efficient in offering the best designing services for all kinds of business niches. Along with the theme templates, we also offer the best custom template designing services at the best rates.",
    ans2: "Are you looking for the best Custom Template Designing services?",
    ans3: "If yes, then here we are with the modern designing tools for all kinds of business categories. If you are planning to launch a startup or business then having a custom template can provide you with the best user experience and user interface. For any type of custom designing, feel free to connect with us, discuss your requirements and get a free quotation for your online platforms designing.",
  },
  {
    id: 4,
    images: MobileAppDesigning,
    que: "Mobile app designing",
    ans: "The App Ideas is one of the best web and app designing services. We have a talented pool of developers, who are highly proficient in providing the best mobile app development services along with unique designing services. If you are a business owner or planning to transfer your business from website to mobile app, then this is probably the best time for it. Mobile app design can be an important part as it represents your business in front of your customers.",
    ans2: "Are you looking for the best Mobile app designing services?",
    ans3: "If yes, then you are at the right place. We have years of experience in providing the best design services for all kinds of mobile app. We have achieved expertise in developing the best mobile app with advanced features, along with that development we also offer the best designing services. You can check our expertise in our portfolio section. For more details, feel free to connect with us and get a free quotation.",
  },
  {
    id: 5,
    images: WebAppDesigning,
    que: "Web app designing",
    ans: "The App Ideas is one of the leading software development services. We are proficient in providing the best development services like mobile app development, web app development, website development and more. Along with the development, we are also offering the best and unique design for all kinds of web apps. We have experience in providing the foremost designing services for all kinds of web app services.",
    ans2: "Are you looking for the best Web app designing services?",
    ans3: "If yes, then feel free to connect with us and get the best quotation for web app designing services. We have years of experience in providing the best design templates for all kinds of the web app. If we talk about our experienced, then you can check our portfolio section. If you are looking for web designing services, then feel free to reach us and get a free quotation.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Designing/Services we provide/redesign.png"),
    que: "Re-designing services",
    ans: "The App Ideas is one of the foremost web and app development company. We have a team of highly skilled developers as well as designers who are experts in providing the best development and design services at the best possible rates. Many businesses are now investing in online methods and for that, they need to have the best designing services which can attract more users.",
    ans2: "Are you looking for the best Re-designing Services?",
    ans3: "If yes, then feel free to connect with us and get a free quotation for it. We have a group of talented designers who are proficient in providing the best design services for all kinds of business categories. We are also offering the services of redesigning the website as well as a mobile app for integrating the new design into the platform. Feel free to connect with us and get a free quote for redesigning your online platforms.",
  },
  {
    id: 7,
    images: require("../../../public/assets/images/SERVICES/Designing/Services we provide/brochure-design.png"),
    que: "Brochure designing",
    ans: "The App Ideas is one of the most popular IT service company. We offer various IT related services like mobile app development, web app development, website development, software development, digital marketing and designing services. People are nowadays also investing in online marketing methods like Brochure designing. If you are new to the business owners then a brochure will be beneficial for you.",
    ans2: "Are you looking for the best Brochure designing services?",
    ans3: "If yes, then you are at the right place. Here at App Ideas, we offer the best design for all kinds of services including brochure designing. For a startup or business owner who wants to grow their business then they need to reach their target audience in some better way. For the best brochure designing services, feel free to connect with us at any time and get a free quotation.",
  },
  {
    id: 8,
    images: require("../../../public/assets/images/SERVICES/Designing/Services we provide/psd-html.png"),
    que: "PSD to HTML",
    ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers who are experts in providing the best services at the best rates. Along with providing the best designing templates, we are also offering the services like converting PSD files to HTML. You can connect with us and discuss your requirements at your time.",
    ans2: "Are you looking for the best PSD to HTML designing services?",
    ans3: "If yes, then this is probably the best time to connect with us and get the best deals for designing services. We have years of experience in providing the best services for designing services. So without taking much time, connect with us, share your requirements, Get a quotation and hire us for your designing service. We promise to deliver the best results to you which helps in the growth of the business.",
  },
  {
    id: 9,
    images: Graphic,
    que: "Graphic designing",
    ans: "The App Ideas is one of the foremost software development company. We have a pool of talented developers and designers who are best at providing proficient graphic designing at the best possible rates. Graphic designing plays a vital role in the success of any web app, website or mobile app solution. To stand out differently among competition it is very important to integrate unique designing.",
    ans2: "Are you looking for the best Graphic designing services?",
    ans3: "If yes, then you are at the right place, here we offer the best graphic designing services for all kinds of business categories. We have years of expertise in offering the best services for development as well as designing for all kinds of business niches. Feel free to connect with us, discuss your requirements, get a quotation and hire us for the best graphic designing services at a competitive price.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/security-guard.png"),
    que: "Security Guard Industry",
    ans: "The App Ideas is one of the most popular software development company. We have years of experience in providing the best solution for all kinds of IT services like development and designing. We have worked on graphic design services for all kinds of business niches including the security guard industry. As we can see, this industry is also digitalizing its platforms to enhance the user experience.",
    ans2: "Are you planning to launch a Security Guard Industry?",
    ans3: "If yes, then you are at the right place for graphic designing services. We have a team of highly skilled developers as well as designers who are proficient in offering the best service for mobile app, web app, websites and software along with designing. If you Planning to make an investment in a security guard app then feel free to reach us, as we have already made a solution for a Security guard app.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/fashion-ind.png"),
    que: "Fashion industry",
    ans: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as designers, who are proficient in providing the best services for all kinds of business categories at the best rates. Along with the industry like e-commerce and food, the fashion industry is also moving towards online platforms to enhance the user experience.",
    ans2: "Are you planning to launch a Fashion Industry?",
    ans3: "If yes, then this is probably the best time for you to digitalize your fashion industry at an affordable cost. We are highly experienced in providing the best kinds of solutions which can increase the sales rate of the business with a high margin. If you are from the fashion industry or planning to make an investment in this field, then feel free to reach us and get a free quotation for your fashion industry online solutions.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/ecommerce-ind.png"),
    que: "E-commerce Industry",
    ans: "The App Ideas is one of the foremost software development company. We have a talented team of developers who are experts in developing the best mobile app and web app solutions for all kinds of business categories including the e-commerce business. Many entrepreneurs or startup owners are now making a high investment in the development of E-commerce platforms for the success of the business.",
    ans2: "Are you planning to launch an E-commerce Industry?",
    ans3: "If yes, then this is probably the time to convert your offline store into an online store by launching an E-commerce Industry. We have years of experience in providing the best solutions for all kinds of services including the E-commerce business. Nowadays, this is probably the time to convert the store into an online store and attract more users to increase the profit rates. Feel free to connect with us and get a free quote.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/restaurant-business.png"),
    que: "Restaurant business",
    ans: "The App Ideas is one of the best web and app development company. We have a team of highly skilled developers as well as designers who are proficient in providing the best services at the best rates. Along with the proper development, designing also plays a vital role in the success of the business niches. If we talk about the restaurant business, then it is also moving towards digitization.",
    ans2: "Are you planning to launch a Restaurant Business?",
    ans3: "If yes, then this is probably the best time for you to convert your restaurant business into an online food ordering and food delivery service. This is the time for you to think and invest in an online restaurant business as it is observed that people are more inclined towards the online platform. For more details, feel free to connect with us, discuss your requirements and get a free quotation.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/academic-education.png"),
    que: "Education Industry",
    ans: "The App Ideas is one of the most popular web and app development company. We are highly experienced designers as well as developers who are best in providing services for the Education industry. Education Industry is also digitalizing because it enhances the experience of the users and it is very easy to access online courses through online platforms like mobile app or web apps.",
    ans2: "Are you planning to launch an E-learning Solution?",
    ans3: "If yes, then this is probably the best time for you to launch an E-learning app solution in the market. Many entrepreneurs or startup owners are not developing E-learning platforms but the design is one factor that makes it easier to stand out differently in the market. If you are planning to develop an E-learning platform then feel free to connect with us and get free quotes.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/entertainment.png"),
    que: "Entertainment Industry",
    ans: "The App Ideas is one of the leading web and app development company. We are highly proficient in providing the best IT services for mobile app, web app, websites, digital marketing as well as Online platform designing services at the best possible rates. If we talk about the entertainment industry then it is also moving towards digitization to offer the best services to the users as well as the business owners.",
    ans2: "Are you planning to launch an Entertainment Industry?",
    ans3: "If yes, then feel free to connect with us and get a free quotation for an Entertainment Industry. If you are also planning to make an investment in the development of an Entertainment online platform then this is probably the time for you to plan and hire us for the best designing services. Like Development, designing also plays a vital role in the success, so try out our services at the best rates.",
  },
  {
    id: 7,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/finance-ind.png"),
    que: "Finance Industry",
    ans: "The App Ideas is one of the most popular software development company. We have years of experience in providing the best online platform development services like mobile app, web app and websites at the best rates. Nowadays, every industry is now moving towards digitalization because this helps in easily managing the services and users can also access the services conveniently.",
    ans2: "Are you planning to make an investment in a Finance Industry?",
    ans3: "If yes, then this is probably the best time for you to make an investment in an online business. Currently, every business is now moving towards online platforms because it helps in enhancing the overall service. To launch a top mobile app, design plays a vital role. If you are looking for the best design agency then feel free to connect with us and get a free quotation.",
  },
  {
    id: 8,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/healthcare.png"),
    que: "Healthcare Industry",
    ans: "The App Ideas is one of the foremost web and app development company. We have a team of highly skilled developers and designers who are proficient in providing the best services for all kinds of niches. Like all the other industries, the healthcare industry is also moving towards online platforms because it makes the process much easier for the management panel as well as for the users.",
    ans2: "Are you planning to launch a Healthcare Industry?",
    ans3: "If Yes, then here we are at The App Ideas. We have years of experience in developing the best software services by integrating advanced features and functionality into the solution. Along with that, we are also skilled in providing the best UI/UX designing services at the best possible rates for the Healthcare Industry. For more details, feel free to connect with us and discuss your requirements with us.",
  },
  {
    id: 9,
    images: require("../../../public/assets/images/SERVICES/Designing/Industries/logistic-ind.png"),
    que: "Logistics Industry",
    ans: "The App Ideas is one of the highly demanding web and app development agency. We have years of experience in providing the best services for website development and mobile app development along with designing at the best possible rate. Presently, a number of people are investing in software development like Logistics Industry to increase the rate of profit.",
    ans2: "Are you planning to Launch a Logistics Industry?",
    ans3: "If yes, then this is probably the best time for you to connect with us and launch the best logistics Industry online platform in the market. If you are planning to launch an online platform or startup then along with the development, you also need to take care of the design, as it plays a vital role. For the best design service, feel free to connect with us and get free quotes.",
  },
];

// Industries  section images
const initialValues = {
  name: "",
  email: "",
  country: "",
  phoneNumber: "",
  projectReq: "",
};
const Designing = () => {
  const [activeService, setActiveService] = useState("banner_designing");
  const [activeWeServe, setActiveWeServe] = useState("security_gaurd");
  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [openIndustries, SetOpenIndustries] = useState(false);

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recaptchavalue, SetRecaptchaValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onChange = (value) => {
    SetRecaptchaValue(value);
    console.log(value, "recaptcha");
  };

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

  const handlePost = (values) => {
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/contact", {
      method: "post",
      data: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        skypeId: values.skypeId,
        budget: values.budget,
        country: values.country,
        projectRequirement: values.projectReq,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: getFreeQuoteSchema,
      onSubmit: (values, action) => {
        handlePost(values);
        console.log(values);
        // action.resetForm();
      },
    });
  return (
    <>
      <Helmet title="designing services - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <section
        className="common__banner__section"
        style={{
          backgroundImage: `url(${banner.src})`,
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundPosition: "center",
          paddingTop: "140px",
          paddingBottom: "180px",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Designing</h2>
                <p>
                  Adding a mobile app, online app, software, or internet service
                  may boost its value. Digital platforms' design and
                  functionality impact your online business's initial
                  impression. Businesses need well-designed, successful
                  websites. Due to strong competition, your website building
                  services must have distinctive and specialized design
                  elements. This draws customers and differentiates your
                  platform. Thus, unique design is essential to your online
                  presence's success and competitiveness in a crowded digital
                  environment.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div
                className="banner__contact__box"
                style={{
                  backgroundImage: `url(${contact.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundPosition: "center",
                  borderRadius: "15px",
                  maxWidth: "480px",
                  padding: "10px",
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="contact_header">
                  <h4>Request a FREE Quote</h4>
                  <p>Guaranteed Response within One Business Day!</p>
                </div>
                <div className="contact__body">
                  <div className="contact__form">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-sm-12 my-3">
                          <input
                            type="name"
                            name="name"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name*"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          >
                            {errors.name}
                          </span>
                          {errors.name && touched.name ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "red",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            aria-label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          >
                            {errors.email}
                          </span>
                          {errors.email && touched.email ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "red",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 h-100 select__country my-3">
                          <select
                            className="select2 w-100 h-100"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option label="country"></option>
                            {countries.map((country) => (
                              <option key={country.name} value={country.name}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                          <span
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          >
                            {errors.country}
                          </span>
                          {errors.country && touched.country ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "red",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 my-3">
                          <input
                            type="number"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Phone Number*"
                            aria-label="Phone Number"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          >
                            {errors.phoneNumber}
                          </span>
                          {errors.phoneNumber && touched.phoneNumber ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "red",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            name="projectReq"
                            placeholder="Project Requirement*"
                            defaultValue={""}
                            value={values.projectReq}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          >
                            {errors.projectReq}
                          </span>
                          {errors.projectReq && touched.projectReq ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "red",
                              }}
                            />
                          ) : null}
                        </div>
                        <ReCAPTCHA
                          style={{ padding: "15px 15px" }}
                          sitekey="Your Client site key"
                          onChange={onChange}
                        />
                        <div className="col-sm-12 text-center my-3">
                          <button type="submit" className="request__btn">
                            {loading ? "loading..." : "Request a FREE Quote"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contact__footer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Services we provide</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("banner_designing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "banner_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Services we provide/banner-design.png")}
                      alt="Banner-Designing"
                      className="img-fluid"
                    />
                    <p>
                      Banner <br />
                      Designing
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("logo_designing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "logo_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Services we provide/logo-design.png")}
                      alt="Logo-Designing"
                      className="img-fluid"
                    />
                    <p>
                      Logo <br />
                      Designing
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("custom_template_designing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "custom_template_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Services we provide/template-design.png")}
                      alt="Custom-Template-Designing"
                      className="img-fluid"
                    />
                    <p>Custom Template Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_designing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "mobile_app_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={MobileAppDesigning}
                      alt="Mobile-App-Designing"
                      className="img-fluid"
                    />
                    <p>Mobile App Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("web_app")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "web_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={WebAppDesigning}
                      alt="Web-App-Designing"
                      className="img-fluid"
                    />
                    <p>Web App Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("redesigning")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "redesigning" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Services we provide/redesign.png")}
                      alt="Re-Designing-Services"
                      className="img-fluid"
                    />
                    <p>Re-Designing Services</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("brouchure_designing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "brouchure_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Services we provide/brochure-design.png")}
                      alt="Brochure-Designing"
                      className="img-fluid"
                    />
                    <p>Brochure Designing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("psd_html")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "psd_html" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Services we provide/psd-html.png")}
                      alt="PSD-to-Html"
                      className="img-fluid"
                    />
                    <p>
                      PSD To <br />
                      HTML
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("graphic_desinging")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === "graphic_desinging" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Graphic}
                      alt="Graphic-Designing"
                      className="img-fluid"
                    />
                    <p>Graphic Designing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "banner_designing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Banner designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web and app
                      development company. Along with the best online platform
                      development, we are also expertise in developing designing
                      services for all kinds of business categories. In
                      designing, we have years of experience in delivering the
                      best designs for all kinds of business niches at the best
                      rates. For more details, feel free to reach us.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Banner designing services?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place for designing
                      services. We provide designing services for mobile app,
                      web app or website services. If you are looking for banner
                      designing services for your business then here we have a
                      team of experts who are proficient in designing an
                      attractive banner for your business. Connect with us to
                      discuss your requirements and get the best services at a
                      competitive rate.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "logo_designing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Logo designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We offer the best development services for all
                      kinds of online platforms like mobile app, web app,
                      websites, software platforms and more. Along with the best
                      development services , we are also offering the designing
                      services like Logo for all kinds of business categories.
                      The logo of your business must be unique because it
                      represents your business services.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Logo Designing services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      connect with us and get the best logo designing service.
                      Logo plays a vital role in representing the business
                      services through a single symbol. If you are a startup
                      owner or a business owner then this is probably the best
                      time for you to launch the best logo. For more details on
                      this, please feel free to connect with us and get a free
                      quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "custom_template_designing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom template designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have a team of highly skilled and
                      expert developers who are highly experienced in developing
                      custom template designing services. Along with the
                      development, we are also efficient in offering the best
                      designing services for all kinds of business niches. Along
                      with the theme templates, we also offer the best custom
                      template designing services at the best rates.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Custom Template Designing
                      services?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are with the modern designing tools
                      for all kinds of business categories. If you are planning
                      to launch a startup or business then having a custom
                      template can provide you with the best user experience and
                      user interface. For any type of custom designing, feel
                      free to connect with us, discuss your requirements and get
                      a free quotation for your online platforms designing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_designing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile app designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the best web and app designing
                      services. We have a talented pool of developers, who are
                      highly proficient in providing the best mobile app
                      development services along with unique designing services.
                      If you are a business owner or planning to transfer your
                      business from website to mobile app, then this is probably
                      the best time for it. Mobile app design can be an
                      important part as it represents your business in front of
                      your customers.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Mobile app designing
                      services?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. We have years of
                      experience in providing the best design services for all
                      kinds of mobile app. We have achieved expertise in
                      developing the best mobile app with advanced features,
                      along with that development we also offer the best
                      designing services. You can check our expertise in our
                      portfolio section. For more details, feel free to connect
                      with us and get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "web_app" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web app designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      services. We are proficient in providing the best
                      development services like mobile app development, web app
                      development, website development and more. Along with the
                      development, we are also offering the best and unique
                      design for all kinds of web apps. We have experience in
                      providing the foremost designing services for all kinds of
                      web app services.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Web app designing services?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us and get the best
                      quotation for web app designing services. We have years of
                      experience in providing the best design templates for all
                      kinds of the web app. If we talk about our experienced,
                      then you can check our portfolio section. If you are
                      looking for web designing services, then feel free to
                      reach us and get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "redesigning" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Re-designing services</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best development and design services at the
                      best possible rates. Many businesses are now investing in
                      online methods and for that, they need to have the best
                      designing services which can attract more users.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Re-designing Services?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us and get a free
                      quotation for it. We have a group of talented designers
                      who are proficient in providing the best design services
                      for all kinds of business categories. We are also offering
                      the services of redesigning the website as well as a
                      mobile app for integrating the new design into the
                      platform. Feel free to connect with us and get a free
                      quote for redesigning your online platforms.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "brouchure_designing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Brochure designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular IT service
                      company. We offer various IT related services like mobile
                      app development, web app development, website development,
                      software development, digital marketing and designing
                      services. People are nowadays also investing in online
                      marketing methods like Brochure designing. If you are new
                      to the business owners then a brochure will be beneficial
                      for you.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Brochure designing services?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. Here at App
                      Ideas, we offer the best design for all kinds of services
                      including brochure designing. For a startup or business
                      owner who wants to grow their business then they need to
                      reach their target audience in some better way. For the
                      best brochure designing services, feel free to connect
                      with us at any time and get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "psd_html" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">PSD to HTML</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best services at the best rates. Along with
                      providing the best designing templates, we are also
                      offering the services like converting PSD files to HTML.
                      You can connect with us and discuss your requirements at
                      your time.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best PSD to HTML designing
                      services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time to connect
                      with us and get the best deals for designing services. We
                      have years of experience in providing the best services
                      for designing services. So without taking much time,
                      connect with us, share your requirements, Get a quotation
                      and hire us for your designing service. We promise to
                      deliver the best results to you which helps in the growth
                      of the business.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "graphic_desinging" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Graphic designing</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a pool of talented developers and
                      designers who are best at providing proficient graphic
                      designing at the best possible rates. Graphic designing
                      plays a vital role in the success of any web app, website
                      or mobile app solution. To stand out differently among
                      competition it is very important to integrate unique
                      designing.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Graphic designing services?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place, here we offer the
                      best graphic designing services for all kinds of business
                      categories. We have years of expertise in offering the
                      best services for development as well as designing for all
                      kinds of business niches. Feel free to connect with us,
                      discuss your requirements, get a quotation and hire us for
                      the best graphic designing services at a competitive
                      price.
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
                      <Image
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
                        <p>{item.ans3}</p>
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
      {/* Technologies Section Start */}
      <section className="technologies__section py-5">
        <div className="container">
          <div className="Title__White mb-4">
            <h3>Technologies we use</h3>
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div
                data-aos="flip-left"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Designing/Technologies/photoshop.png")}
                  alt="Asp.Net"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Photoshop</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div
                data-aos="flip-right"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Designing/Technologies/Illustrator.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Illustrator</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div
                data-aos="flip-left"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Designing/Technologies/Figma.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Figma</h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div
                data-aos="flip-right"
                className="technologies_box text-center"
              >
                <Image
                  src={require("../../../public/assets/images/SERVICES/Designing/Technologies/Adobe-XD.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Adobe XD</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Industries We Serve</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("security_gaurd")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "security_gaurd" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/security-guard.png")}
                      alt="Academic-Education"
                      className="img-fluid"
                    />
                    <p>Security Guard Industry</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("fashion")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "fashion" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/fashion-ind.png")}
                      alt="Fintech-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Fashion <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("e_comm")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "e_comm" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/ecommerce-ind.png")}
                      alt="Real-Estate"
                      className="img-fluid"
                    />
                    <p>E-Commerce Industry</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("restaurant")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "restaurant" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/restaurant-business.png")}
                      alt="Restaurant-Business"
                      className="img-fluid"
                    />
                    <p>Restaurant Business</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("education")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "education" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/academic-education.png")}
                      alt="Travel-Tourism"
                      className="img-fluid"
                    />
                    <p>Education Industry</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("entertainment")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "entertainment" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/entertainment.png")}
                      alt="Construction-Industry"
                      className="img-fluid"
                    />
                    <p>Entertainment Industry</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("finance")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "finance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/finance-ind.png")}
                      alt="IT-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Finance <br />
                      Industry
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("healthcare")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "healthcare" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/healthcare.png")}
                      alt="Healthcare-Industry"
                      className="img-fluid"
                    />
                    <p>Healthcare Industry</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeServe("logistics")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWeServe === "logistics" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={require("../../../public/assets/images/SERVICES/Designing/Industries/logistic-ind.png")}
                      alt="Entertainment-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Logistics <br />
                      Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeServe === "security_gaurd" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Security Guard Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have years of experience in
                      providing the best solution for all kinds of IT services
                      like development and designing. We have worked on graphic
                      design services for all kinds of business niches including
                      the security guard industry. As we can see, this industry
                      is also digitalizing its platforms to enhance the user
                      experience.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Security Guard Industry?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place for graphic
                      designing services. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      offering the best service for mobile app, web app,
                      websites and software along with designing. If you
                      Planning to make an investment in a security guard app
                      then feel free to reach us, as we have already made a
                      solution for a Security guard app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeServe === "fashion" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fashion industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers, who are proficient in
                      providing the best services for all kinds of business
                      categories at the best rates. Along with the industry like
                      e-commerce and food, the fashion industry is also moving
                      towards online platforms to enhance the user experience.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Fashion Industry?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      digitalize your fashion industry at an affordable cost. We
                      are highly experienced in providing the best kinds of
                      solutions which can increase the sales rate of the
                      business with a high margin. If you are from the fashion
                      industry or planning to make an investment in this field,
                      then feel free to reach us and get a free quotation for
                      your fashion industry online solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "e_comm" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">E-commerce Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a talented team of developers who are
                      experts in developing the best mobile app and web app
                      solutions for all kinds of business categories including
                      the e-commerce business. Many entrepreneurs or startup
                      owners are now making a high investment in the development
                      of E-commerce platforms for the success of the business.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an E-commerce Industry?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the time to convert your
                      offline store into an online store by launching an
                      E-commerce Industry. We have years of experience in
                      providing the best solutions for all kinds of services
                      including the E-commerce business. Nowadays, this is
                      probably the time to convert the store into an online
                      store and attract more users to increase the profit rates.
                      Feel free to connect with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "education" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Education Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We are highly experienced designers
                      as well as developers who are best in providing services
                      for the Education industry. Education Industry is also
                      digitalizing because it enhances the experience of the
                      users and it is very easy to access online courses through
                      online platforms like mobile app or web apps.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an E-learning Solution?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      launch an E-learning app solution in the market. Many
                      entrepreneurs or startup owners are not developing
                      E-learning platforms but the design is one factor that
                      makes it easier to stand out differently in the market. If
                      you are planning to develop an E-learning platform then
                      feel free to connect with us and get free quotes.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "entertainment" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Entertainment Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly proficient in providing
                      the best IT services for mobile app, web app, websites,
                      digital marketing as well as Online platform designing
                      services at the best possible rates. If we talk about the
                      entertainment industry then it is also moving towards
                      digitization to offer the best services to the users as
                      well as the business owners.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch an Entertainment Industry?
                    </p>
                    <p className="Title_para">
                      If yes, then feel free to connect with us and get a free
                      quotation for an Entertainment Industry. If you are also
                      planning to make an investment in the development of an
                      Entertainment online platform then this is probably the
                      time for you to plan and hire us for the best designing
                      services. Like Development, designing also plays a vital
                      role in the success, so try out our services at the best
                      rates.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "finance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Finance Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have years of experience in
                      providing the best online platform development services
                      like mobile app, web app and websites at the best rates.
                      Nowadays, every industry is now moving towards
                      digitalization because this helps in easily managing the
                      services and users can also access the services
                      conveniently.
                    </p>
                    <p className="Title_para">
                      Are you planning to make an investment in a Finance
                      Industry?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      make an investment in an online business. Currently, every
                      business is now moving towards online platforms because it
                      helps in enhancing the overall service. To launch a top
                      mobile app, design plays a vital role. If you are looking
                      for the best design agency then feel free to connect with
                      us and get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "healthcare" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Healthcare Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web and app
                      development company. We have a team of highly skilled
                      developers and designers who are proficient in providing
                      the best services for all kinds of niches. Like all the
                      other industries, the healthcare industry is also moving
                      towards online platforms because it makes the process much
                      easier for the management panel as well as for the users.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Healthcare Industry?
                    </p>
                    <p className="Title_para">
                      If Yes, then here we are at The App Ideas. We have years
                      of experience in developing the best software services by
                      integrating advanced features and functionality into the
                      solution. Along with that, we are also skilled in
                      providing the best UI/UX designing services at the best
                      possible rates for the Healthcare Industry. For more
                      details, feel free to connect with us and discuss your
                      requirements with us.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "logistics" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Logistics Industry</h3>
                    <p className="Title_para">
                      The App Ideas is one of the highly demanding web and app
                      development agency. We have years of experience in
                      providing the best services for website development and
                      mobile app development along with designing at the best
                      possible rate. Presently, a number of people are investing
                      in software development like Logistics Industry to
                      increase the rate of profit.
                    </p>
                    <p className="Title_para">
                      Are you planning to Launch a Logistics Industry?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      connect with us and launch the best logistics Industry
                      online platform in the market. If you are planning to
                      launch an online platform or startup then along with the
                      development, you also need to take care of the design, as
                      it plays a vital role. For the best design service, feel
                      free to connect with us and get free quotes.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeServe === "restaurant" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Restaurant business</h3>
                    <p className="Title_para">
                      The App Ideas is one of the best web and app development
                      company. We have a team of highly skilled developers as
                      well as designers who are proficient in providing the best
                      services at the best rates. Along with the proper
                      development, designing also plays a vital role in the
                      success of the business niches. If we talk about the
                      restaurant business, then it is also moving towards
                      digitization.
                    </p>
                    <p className="Title_para">
                      Are you planning to launch a Restaurant Business?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      convert your restaurant business into an online food
                      ordering and food delivery service. This is the time for
                      you to think and invest in an online restaurant business
                      as it is observed that people are more inclined towards
                      the online platform. For more details, feel free to
                      connect with us, discuss your requirements and get a free
                      quotation.
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
                      <Image
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
                        <p>{item.ans3}</p>
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
      {/* <!-- Work Slider Start --> */}
      <Work />
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
      <FAQ />
      <ContactUs question="Are you looking for the best Designing Agency?" />
      <Whatsapp />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer />
    </>
  );
};

export default Designing;
