import React, { useState } from "react";
import Image from "next/image";
import service from "../../../public/assets/images/SERVICES/Digital Marketing Agency/social_media/Social-Media-Marketing.webp";
import Specialist from "../../../public/assets/images/SERVICES/Digital Marketing Agency/social_media/Social-Media-Marketing-Services.webp";
import optimization from "../../../public/assets/images/SERVICES/Digital Marketing Agency/social_media/Social-Media-Marketing-Agency.webp";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "../../../components/Header/Header";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
import ContactUs from "../../../components/ContactUs";
import FAQ from "../../../components/FAQ";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import Whatsapp from "../../../components/Whatsapp";
import GetAQuoteModal from "../../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png"),
    que: "Social Media Strategy",
    ans: "Companies seeking online traffic must use social media. Leads and visibility increase with traffic. Many business owners generate high-quality leads on social media.",
    ans2: "App Ideas, a top web and app developer, now offers social media marketing. We personalize startup and business owner social media marketing to each smartphone OS. Our expertise helps organizations increase traffic, leads, and online presence via social media.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png"),
    que: "Social Branding",
    ans: "App Ideas, a popular online and app development company, offers social media and digital marketing services. We assist businesses increase brand recognition and social media engagement. Strategic Social Media campaigns boost brand awareness, consumer engagement, and business growth. Our digital marketing knowledge lets us tailor our services to each client's needs and objectives for optimum impact and ROI. Let us increase your brand's online presence and success.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png"),
    que: "Social Engagement",
    ans: "In this digital era, it is very important to have a knowledge of current marketing trends. Here I am talking about social media marketing. If you own a business or planning for a startup then it is very important for you to plan a perfect social marketing strategy to promote your services.",
    ans2: "We are at The App Ideas which is one of the leading web and app development company. We have years of experience in offering the best digital marketing services at the best possible rates. We help business brands to drive optimum engagement with their audience on all the intended social channels through regular posts and conversations.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png"),
    que: "Social Monitoring",
    ans: "The demand for online platforms like web app and mobile app is increased. Many business owners and entrepreneurs are shifting their offline stores to online stores. An online store can be helpful for your business growth because through this you can promote your services to a high number of users.",
    ans2: "We are at The App Ideas which is a leading web and app development company. We have a team of highly skilled digital marketers who are experts in offers the best social media marketing services. We use state of the art social media monitoring and analytics tools and evaluate trends to cater to the social media audience.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png"),
    que: "Social Media Paid Campaigns",
    ans: "Currently, the demand for online platforms like websites, web apps and mobile apps are getting popular day by day. Many entrepreneurs and startups are now shifting towards online platforms. After launching the software, you also need to work on promoting the services to attracting more customers.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers and digital marketers who will offer the best solution at the best rates. We also help business brands running social media paid campaigns and advertisements to boost steady business conversion and sales.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png"),
    que: "Social PR",
    ans: "Do you own a business or planning to launch an online business? If yes then this is probably the best time to make an investment in developing the future-ready product. And if we talk about the current trend then social media marketing plays a vital role in the success of the software.",
    ans2: "The App Ideas is one of the leading software development company. We have years of experience in offering the best social media marketing services. Here at The App Ideas, we also boast of a strong PR team to help business brands with frequent PR campaigns for branding and business conversion.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png"),
    que: "Experience",
    ans: "Planning of hiring social media marketing services for your business success? If yes then this is probably the best time for you to search and hire the experienced and expert agency that can provide you with the best social Media Marketing services at the best possible rates.",
    ans2: "Here we are at The App Ideas, Which is one of the leading web and app development company. We have a team of a highly skilled team of social media marketing who will offer the best solutions. We have more than a decade of consistent experience in social media marketing with a variety of campaigns across the niches.",
  },
  {
    id: 2,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png"),
    que: "Expertise",
    ans: "The popularity of the online platform is increasing day by day because it helps in increasing the engagement of the users or attract a high number of people towards your services. Social media marketing is one of the best methods of increasing the user base of your business or services as well as promote it.",
    ans2: "The App Ideas is one of the most popular social media marketing services. Along with the software development services we also offer the best digital marketing services. Our expertise in social media channels spans a wide variety of social content, social promotion, ads and conversation techniques.",
  },
  {
    id: 3,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png"),
    que: "Robust Portfolio",
    ans: "Having an online business in this present time is one of the best things because people are more inclined towards the online platform as it saves time as well as sometimes it is cost-effective. Before hiring any services it is very important for you to check their past services or portfolio for understanding the services.",
    ans2: "The App Ideas is one of the most popular software development company. We have a talented pool of social media marketing team who are experienced in offering the best services. We boast a robust portfolio of social media campaigns for a variety of business brands across diverse niches, sizes and audience types.",
  },
  {
    id: 4,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png"),
    que: "Sophisticated Tools",
    ans: "Websites, web apps and mobile apps are considered advantages for the business owners as well as for the users. Having an online platform can make the process much easier for business owners to manage the services very easily. On the other side, if we talk about the users then they are also liking the online platforms.",
    ans2: "We are from The App Ideas, which is one of the leading web and app development company. We have years of experience in offering the best social media marketing services. When driving social media campaigns we utilize the most sophisticated and advanced marketing, content creation, content promotion and analytics tools.",
  },
  {
    id: 5,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png"),
    que: "Timebound and Result-Driven",
    ans: "Nowadays, the demand for online platforms like websites, web apps and mobile app development is increasing because of the advancement in technology. Many of the business owners are now shifting towards the online platform to promote their services and reach a high number of the peoples.",
    ans2: "The App Ideas is one of the most popular software development company. We have a team of highly skilled social media marketing services who will promote the services and increase the customer’s databases. We create timebound and result-driven social media campaigns and ensure delivering the measurable output within a stipulated time frame.",
  },
  {
    id: 6,
    images: require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png"),
    que: "Competitive Pricing",
    ans: "If you are also planning on launching an online platform in the market for your business then without taking much time take the action of making an investment. It is very important for you to research and hire the best digital marketing agency which offers the best services at the best price.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled digital marketing service providers. We offer social media marketing campaigns and services at a very competitive price to make our services available for business brands across different sizes.",
  },
];

const SocialMediaMarketing = () => {
  const [activeSocialBox, setActiveSocialBox] = useState(
    "social_media_stratergy"
  );
  const [activeWhyChoose, setActiveWhyChoose] = useState("experience");

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

  return (
    <>
      <Helmet title="Social Media Marketing Agency in India, USA - The App Ideas" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Social Media Marketing"
        des="Internet usage is widespread in the digital era. Websites, mobile apps, and web apps help businesses across industries. Service promotion and audience reach need social media marketing. Also produces leads nicely. Contact us if you're considering social media marketing to increase your online presence. Our specialty is building effective social media strategies for businesses."
        list1="7+ Years of experience in Social Media marketing"
        list2="Best Social Media Marketing Development Company"
        list3="Dedicated team for your Social Media Marketing Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Social Media Marketing"
        service2="Social Media Marketing Services"
        service3="Social Media Marketing Agency"
        image1={service}
        image2={Specialist}
        image3={optimization}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Social Media Marketing Company India</h3>
            <p>
              For the vast majority of people and businesses, social media is
              the primary platform to engage and build an opinion. The App Ideas
              is one of the leading digital and social media marketing companies
              with a robust portfolio of successful marketing campaigns run by
              us. Driving favourable user opinion, boosting brand visibility and
              driving sales and business conversion are the key strengths of our
              social media marketing.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveSocialBox("social_media_stratergy")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeSocialBox === "social_media_stratergy" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png")}
                      alt="Social Media Strategy"
                      className="img-fluid"
                    />
                    <p>Social Media Strategy</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveSocialBox("social_branding")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeSocialBox === "social_branding" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png")}
                      alt="Social Branding"
                      className="img-fluid"
                    />
                    <p>Social Branding</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveSocialBox("social_engagement")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeSocialBox === "social_engagement" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png")}
                      alt="Social Engagement"
                      className="img-fluid"
                    />
                    <p>Social Engagement</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveSocialBox("social_monitoring")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeSocialBox === "social_monitoring" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png")}
                      alt="Social Monitoring"
                      className="img-fluid"
                    />
                    <p>Social Monitoring</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveSocialBox("social_media_paid")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeSocialBox === "social_media_paid" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png")}
                      alt="Social Media Paid Campaigns"
                      className="img-fluid"
                    />
                    <p>Social Media Paid Campaigns</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveSocialBox("social_pr")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeSocialBox === "social_pr" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png")}
                      alt="Social PR"
                      className="img-fluid"
                    />
                    <p>Social PR</p>
                  </div>
                </div>
              </div>
            </div>
            {activeSocialBox === "social_media_stratergy" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social Media Strategy</h3>
                    <p className="Title_para">
                      Companies seeking online traffic must use social media.
                      Leads and visibility increase with traffic. Many business
                      owners generate high-quality leads on social media.
                    </p>
                    <p className="Title_para">
                      App Ideas, a top web and app developer, now offers social
                      media marketing. We personalize startup and business owner
                      social media marketing to each smartphone OS. Our
                      expertise helps organizations increase traffic, leads, and
                      online presence via social media.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeSocialBox === "social_branding" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social Branding</h3>
                    <p className="Title_para">
                      App Ideas, a popular online and app development company,
                      offers social media and digital marketing services. We
                      assist businesses increase brand recognition and social
                      media engagement. Strategic Social Media campaigns boost
                      brand awareness, consumer engagement, and business growth.
                      Our digital marketing knowledge lets us tailor our
                      services to each client's needs and objectives for optimum
                      impact and ROI. Let us increase your brand's online
                      presence and success.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeSocialBox === "social_engagement" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social Engagement</h3>
                    <p className="Title_para">
                      In this digital era, it is very important to have a
                      knowledge of current marketing trends. Here I am talking
                      about social media marketing. If you own a business or
                      planning for a startup then it is very important for you
                      to plan a perfect social marketing strategy to promote
                      your services.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas which is one of the leading web
                      and app development company. We have years of experience
                      in offering the best digital marketing services at the
                      best possible rates. We help business brands to drive
                      optimum engagement with their audience on all the intended
                      social channels through regular posts and conversations.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeSocialBox === "social_monitoring" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social Monitoring</h3>
                    <p className="Title_para">
                      The demand for online platforms like web app and mobile
                      app is increased. Many business owners and entrepreneurs
                      are shifting their offline stores to online stores. An
                      online store can be helpful for your business growth
                      because through this you can promote your services to a
                      high number of users.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas which is a leading web and app
                      development company. We have a team of highly skilled
                      digital marketers who are experts in offers the best
                      social media marketing services. We use state of the art
                      social media monitoring and analytics tools and evaluate
                      trends to cater to the social media audience.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeSocialBox === "social_media_paid" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Social Media Paid Campaigns
                    </h3>
                    <p className="Title_para">
                      Currently, the demand for online platforms like websites,
                      web apps and mobile apps are getting popular day by day.
                      Many entrepreneurs and startups are now shifting towards
                      online platforms. After launching the software, you also
                      need to work on promoting the services to attracting more
                      customers.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers and digital marketers who will offer the best
                      solution at the best rates. We also help business brands
                      running social media paid campaigns and advertisements to
                      boost steady business conversion and sales.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeSocialBox === "social_pr" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social PR</h3>
                    <p className="Title_para">
                      Do you own a business or planning to launch an online
                      business? If yes then this is probably the best time to
                      make an investment in developing the future-ready product.
                      And if we talk about the current trend then social media
                      marketing plays a vital role in the success of the
                      software.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have years of experience in offering the best
                      social media marketing services. Here at The App Ideas, we
                      also boast of a strong PR team to help business brands
                      with frequent PR campaigns for branding and business
                      conversion.
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
                        width={50}
                        height={50}
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
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose App Ideas for Social Media Marketing?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png")}
                      alt="Experience"
                      className="img-fluid"
                    />
                    <p>Experience</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("expertise")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "expertise" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png")}
                      alt="Expertise"
                      className="img-fluid"
                    />
                    <p>Expertise</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust_portfolio")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png")}
                      alt="Robust"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("sophisticated_tools")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "sophisticated_tools" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png")}
                      alt="Sophisticated"
                      className="img-fluid"
                    />
                    <p>Sophisticated Tools</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("result_driven")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "result_driven" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png")}
                      alt="Timebound And"
                      className="img-fluid"
                    />
                    <p>Timebound and Result-Driven</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("pricing")}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === "pricing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={require("../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png")}
                      alt="Competitive"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience</h3>
                    <p className="Title_para">
                      Planning of hiring social media marketing services for
                      your business success? If yes then this is probably the
                      best time for you to search and hire the experienced and
                      expert agency that can provide you with the best social
                      Media Marketing services at the best possible rates.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, Which is one of the leading
                      web and app development company. We have a team of a
                      highly skilled team of social media marketing who will
                      offer the best solutions. We have more than a decade of
                      consistent experience in social media marketing with a
                      variety of campaigns across the niches.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "expertise" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expertise</h3>
                    <p className="Title_para">
                      The popularity of the online platform is increasing day by
                      day because it helps in increasing the engagement of the
                      users or attract a high number of people towards your
                      services. Social media marketing is one of the best
                      methods of increasing the user base of your business or
                      services as well as promote it.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular social media
                      marketing services. Along with the software development
                      services we also offer the best digital marketing
                      services. Our expertise in social media channels spans a
                      wide variety of social content, social promotion, ads and
                      conversation techniques.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "robust_portfolio" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Having an online business in this present time is one of
                      the best things because people are more inclined towards
                      the online platform as it saves time as well as sometimes
                      it is cost-effective. Before hiring any services it is
                      very important for you to check their past services or
                      portfolio for understanding the services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a talented pool of social
                      media marketing team who are experienced in offering the
                      best services. We boast a robust portfolio of social media
                      campaigns for a variety of business brands across diverse
                      niches, sizes and audience types.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "sophisticated_tools" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Sophisticated Tools</h3>
                    <p className="Title_para">
                      Websites, web apps and mobile apps are considered
                      advantages for the business owners as well as for the
                      users. Having an online platform can make the process much
                      easier for business owners to manage the services very
                      easily. On the other side, if we talk about the users then
                      they are also liking the online platforms.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have years of experience
                      in offering the best social media marketing services. When
                      driving social media campaigns we utilize the most
                      sophisticated and advanced marketing, content creation,
                      content promotion and analytics tools.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "result_driven" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Timebound and Result-Driven
                    </h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms like websites,
                      web apps and mobile app development is increasing because
                      of the advancement in technology. Many of the business
                      owners are now shifting towards the online platform to
                      promote their services and reach a high number of the
                      peoples.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of highly skilled
                      social media marketing services who will promote the
                      services and increase the customer’s databases. We create
                      timebound and result-driven social media campaigns and
                      ensure delivering the measurable output within a
                      stipulated time frame.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      If you are also planning on launching an online platform
                      in the market for your business then without taking much
                      time take the action of making an investment. It is very
                      important for you to research and hire the best digital
                      marketing agency which offers the best services at the
                      best price.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      digital marketing service providers. We offer social media
                      marketing campaigns and services at a very competitive
                      price to make our services available for business brands
                      across different sizes.
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
                        width={50}
                        height={50}
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
      <ContactUs question="Are you planning to Launch Successful Social Media Marketing in the market?" />
      {/* Contact Section End */}
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

export default SocialMediaMarketing;
