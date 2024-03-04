import { React, useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "../../components/Workdone/Work";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

import TestiMonial from "../../components/Testimonial/TestiMonial";
// import mobileApp from "../../public/assets/images/MobileAppDev/Mobile App Development Company/Mobile App Development.svg";

import mobileApp from "../../public/assets/images/SERVICES/Mobile-App-dev/Mobile App Development.svg";
import Application from "../../public/assets/images/SERVICES/Mobile-App-dev/Mobile Application Development Company.svg";
import Mobileapplication from "../../public/assets/images/SERVICES/Mobile-App-dev/mobile app developer.svg";

// Services we provide
import IPhoneapp from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/IPhone App Development.svg";
import Ipadeapp from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/IPad Mobile app development.svg";
import Androidapp from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Android Mobile app development.svg";
import Androidtablet from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Android Tablet app development.svg";
import Reskinning from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile App Reskinning.svg";
import Redesigning from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile App Redesigning.svg";
import Upgradation from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile App Upgradation.svg";
import Mobileappsupport from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Mobile app Support and maintenance.svg";
import Crossplatform from "../../public/assets/images/SERVICES/Mobile-App-dev/Services we provide/Cross-platform Mobile Apps.svg";

// Industries We Serve
import Shopping from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Shopping _ E-Commerce.svg";
import Education from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Education and E-Learning.svg";
import Banking from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Banking and finance.svg";
import Travel from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Travel and Tourism.svg";
import Food from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Food and Drink.svg";
import SocialNetworking from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Social Networking.svg";
import lifestyle from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Lifestyle.svg";
import Real from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Real Estate.svg";
import health from "../../public/assets/images/SERVICES/Mobile-App-dev/Industries We Serve/Health and Fitness.svg";

import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/HeroSection";
import { Helmet } from "react-helmet";
import FAQ from "../../components/FAQ";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";

const ServiceProvideData = [
  {
    id: 1,
    images: IPhoneapp,
    que: "IPhone App Development",
    ans: "App Ideas is a leader in business app creation for websites and mobile apps on both platforms. We know how to develop great Android and iOS apps. We serve both types of smart gadgets.Our iOS app writers are extremely skilled and can create iPhone apps. With our knowledge, we can ensure our iPhone mobile app development satisfies customer needs.",
    ans2: "Are you looking for the best iPhone App Development services?",
    ans3: "Certainly! If 'yes' connect instantly. We're thrilled to help you build a lucrative iPhone app. We offer a seamless idea-to-realization process with our rigorous methodology. We carefully gather your requirements to understand your vision in the initial step. We then thoroughly review your specifications. We schedule meetings to address your questions because we value good communication and leave no stone unturned. To keep things transparent and match your needs, we stage the project. We ask for your permission at every crucial moment to collaborate and incorporate your thoughts. We provide app development projects on time because we understand timing. We want to exceed your expectations and produce a complete and successful iPhone app that shows our shared vision and unwavering dedication.",
  },
  {
    id: 2,
    images: Ipadeapp,
    que: "Ipad App Development",
    ans: "The App Ideas is a pioneer in iPad app creation, helping startups and companies get online. Our skilled developers build industry-leading mobile apps. View our project triumphs in our portfolio. Our iPad app developers customize mobile applications for different industries. We gather and analyze consumer demands via rigorous customer interactions. We do projects at reasonable pricing after significant ideation and mutual agreement. Our agile mobile, web, and iPad app development method is efficient and flexible.",
    ans2: "Are you looking for the best iPad Mobile App Development Firm? If Yes, then feel free to reach us.",
  },
  {
    id: 3,
    images: Androidapp,
    que: "Android app development",
    ans: "App Ideas, a leading Android app developer, helps businesses and startups modernize and compete. Every Android mobile app project gets reliable, configurable, and forward-thinking applications from our skilled developers. Our expertise in several industries lets us satisfy distinct consumer demands. We discuss and improve the project after gathering consumer needs. Collaboration results in competitive project completion and high value. Agile breaks projects into manageable milestones and allows client input at each stage. This technique boosts productivity and ensures client satisfaction in Android mobile app development, providing industry-leading and future-proof solutions.",
    ans2: "Are you looking for the best Android Mobile App Development Firm? If Yes, then feel free to reach us.",
    // ans3: "Are you looking for the best iPad Mobile App Development Firm? If Yes, then feel free to reach us. Are you looking for the best Android Mobile App Development Firm? If Yes, then feel free to reach us.",
  },
  {
    id: 4,
    images: Androidtablet,
    que: "Android app Tablet development",
    ans: "Leading Android Tablet app developer The App Ideas develops apps. Different-sized devices are becoming more popular for convenience. The App Ideas creates online and mobile apps to fulfill the rising demand for Android apps on tablets and other devices. Android devices have increased demand for Android Tablet apps. Companies and startups are developing Android Tablet apps to grow digitally. App Ideas, an experienced developer, thoroughly collects, evaluates, and analyzes client requirements before creation. A rigorous assessment explains project objectives and scope.",
    ans2: "Our seasoned team at The App Ideas provides insights and ideas beyond implementation. They believe future trends should inform strategic project modifications. This forward-thinking approach ensures the Android Tablet app meets current needs and adapts to new technologies. App Ideas' commitment to high-quality, affordable services strengthens its Android Tablet app development relationship. The company can handle development details and bespoke solutions for present and future Android ecosystem demands.",
    ans3: "Are you looking for services for successful Android Tablet app Development? If yes, then feel free to reach and discuss further.",
  },
  {
    id: 5,
    images: Reskinning,
    que: "Mobile App Reskinning",
    ans: "Current industries e-commerce and shopping are growing. These companies are rapidly adopting websites, web applications, and mobile apps owing to the digital revolution. This shift is a deliberate response to digital client expectations, not a trend. Digital platforms are the most convenient, efficient, and cost-effective. Online shopping and E-commerce are growing. To capitalize on this trend, many new business owners and entrepreneurs are investing extensively in E-commerce sites. Rise in demand for these services highlights how digital has impacted consumer behavior and industry approaches.",
    ans2: "Internet-based e-commerce and shopping platforms let consumers buy and sell goods and services and easily move data and money. This dynamic market encompasses business-to-business, consumer-to-consumer, and consumer-to-business transactions. E-commerce now encompasses internet banking, auctions, tickets, and payment gateways, indicating its versatility and expansion.",
    ans3: "Are you thinking of launching any Shopping and E-commerce digital solutions in the market?",
  },
  {
    id: 6,
    images: Redesigning,
    que: "Mobile App Redesigning",
    ans: "Technology has made mobile app updating popular. For client feedback, many forward-thinking business owners provide beta versions of their mobile apps. User input improves app functioning and experience. Mobile app owners must adapt to user and market demands. Success depends on App Ideas' creative designers' expertise. These specialists provide the best mobile app redesigning services, ensuring industry compliance. The App Ideas creates stylish and successful mobile apps using creativity and technology to keep current. Customers can trust The App Ideas to increase mobile app functionality, attractiveness, and trendiness.",
    ans2: "Are you looking for the best Mobile app Redesigning? If Yes, then feel free to reach us.",
  },
  {
    id: 7,
    images: Upgradation,
    que: "Mobile App Upgradation",
    ans: "Mobile app owners must regularly upgrade their apps. Mobile apps must adapt to company demands in the ever-changing digital landscape. This proactive approach is key to market competitiveness. App updates make adding features and functionality easy. OS updates are regular, thus staying updated is key. The App Ideas provides affordable mobile app upgradation since this procedure is crucial.",
    ans2: "Our team simplifies app improvements for user experience and industry standards. Our upgrade approach emphasizes keeping the mobile app's core while adding business and user-requested additions. By upgrading their mobile applications with us, businesses can stay flexible, adaptable, and market-ready.",
    ans3: "Are you looking for the best Mobile App upgradation? If Yes, then feel free to reach us.",
  },
  {
    id: 8,
    images: Mobileappsupport,
    que: "Mobile app Support and Service",
    ans: "The App Ideas creates, supports, and maintains mobile and online apps. A company or internet enterprise needs these services to succeed. Some company owners neglect mobile app support and maintenance, causing failure. App code is updated with software updates and innovations during regular maintenance to ensure its functioning and relevance. The App Ideas offers substantial client support beyond development. We know mobile app longevity depends on support and maintenance. Our team excels in online and mobile app development and UI/UX design, ensuring customer satisfaction. We provide dedicated support and maintenance after project launch to maintain app performance and adaptability.",
    ans2: "To keep up with innovation, App Ideas trains its staff on new technologies and code improvements. This proactive approach ensures that our support and maintenance services prevent and fix app performance problems. Look no farther for reliable Mobile App Support and Maintenance. Your trusted partner, App Ideas, can improve your mobile app's longevity and efficacy with a variety of services. Contact us to see how our expertise can aid your digital projects.",
  },
  {
    id: 9,
    images: Crossplatform,
    que: "Cross-platform Mobile Apps",
    ans: "Nowadays, Cross-platform technology is getting popular day by day because there is a huge range of mobile devices and platforms are available in the market. Mobile app flexibility is very important in this present time if you are targeting a huge number of users. If you are planning to launch a single mobile app platform that can be compatible with various operating systems then Cross-platform technology is one of the best options for your business mobile app development.",
    ans2: "Along with the best web app and mobile app development, The App Ideas also provide the services like cross platforms app development. Cross-platform technology helps in developing mobile apps for multiple devices as well as multiple platforms. Cross-platform technology provides the flexibility and easy to use mobile app solution for a successful business. The App Ideas strictly follow the agile methodology for the development of the software services. We offer cross-platform technology with unique design and the best possible rates.",
    ans3: "Are you looking for the best cross-platform technology? If Yes, then feel free to reach us.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: Shopping,
    que: "Shopping & E-Commerce",
    ans: "With extensive expertise, we provide top-tier software development services targeted to each specialty, including bespoke design and development solutions at reasonable prices. Our talented engineers and designers work hard to understand each client's needs. Today, many company owners are moving their services online, including websites, web applications, and mobile apps. This change simplifies business and user activities in many ways.",
    ans2: "Businesses may simplify, improve accessibility, and expand their audience by using online platforms. Digital transformation has several benefits, including faster transactions, better customer interaction, and better processes. We help organizations make this transformation by using cutting-edge technology and new solutions to build powerful, user-centric online experiences. We work with our customers from idea to execution to ensure their online presence meets their strategic objectives and yields results.",
    ans3: "Are you planning to launch a Shopping and E-commerce Store in the market?",
    ans4: "Contact us if interested. Quick call to discuss your needs. Meeting to review project estimate, resource allocation, and team assignment after thorough requirements collection and analysis. We report progress daily or weekly. Finally, we deploy projects seamlessly for a pleasant experience.",
  },
  {
    id: 2,
    images: health,
    que: "Health and Fitness",
    ans: "Web and app development leader App Ideas' expert developers and designers provide top-notch software development. We combine cutting-edge technology with unique design to develop bespoke websites, online, and mobile applications in many fields. Even the health and fitness industry is digitizing to benefit on digital opportunities. Due to the benefits, more local business owners are going online. This modification makes service management and user accessibility easier than before.",
    ans2: "Digital platforms may help health and fitness organizations adapt to client preferences, enhance service, and reach more people. We help companies prosper in the digital age with our software development expertise.",
    ans3: "Are you planning to launch Health and Fitness online platform?",
    ans4: "Contact us for a free Health & Fitness software development quotation. Our method involves discovering your requirements, analyzing them, and proposing solutions. We then provide specific ideas for your evaluation before finishing the task. We provide a project manager to oversee development and ensure smooth implementation after approval. The work will be completed on time and at the best price. Our systematic approach encourages transparency, teamwork, and client pleasure throughout growth. Contact us now to start developing your health and fitness app and realize your vision.",
  },
  {
    id: 3,
    images: Education,
    que: "Education and E-Learning",
    ans: "App Ideas is a leading software development service provider known for its competence in custom design and development solutions for many business segments. Business owners, entrepreneurs, and startups are investing more in online platform development in today's dynamic business environment. Educational institutions understand the need of a strong internet presence. Web and mobile app development is crucial for educational institutions to remain competitive.",
    ans2: "Educational institutions get several advantages from e-learning platforms. Such systems provide unmatched accessibility, engagement, and efficiency in educational material delivery. E-learning websites and mobile applications allow schools to reach more students, accommodate different learning styles, and adapt to changing student and instructor demands.",
    ans3: "The App Ideas understands educational institutions' particular needs and provides customized solutions. Our professionals create innovative and easy-to-use e-learning solutions that allow educators and students to succeed in the digital era.",
    ans4: "Yes? Why wait? Call briefly to discuss your requirements. First, we gather your needs, assess them, and quote competitively. We meet to finalize project details before commencing. We provide daily or weekly project updates. Our prompt project deployment assures your satisfaction.",
  },
  {
    id: 4,
    images: Banking,
    que: "Banking and finance",
    ans: "The App Ideas is a top website, web, and mobile app developer and UI/UX designer. Custom software for food, e-commerce, finance, and banking is our specialty. Businesses digitize processes to enhance data management and accessibility in the digital era. Banking and finance are spearheading this digital transformation by providing seamless access to resources and services via internet, online, and mobile apps.",
    ans2: "Digital platforms improve resource management, consumer experiences, and competitiveness in fast-changing industries. Digitalization simplifies online transactions, boosts user engagement, and provides customized services. We understand digital transformation challenges and opportunities across industries at The App Ideas. Our experts design innovative solutions to help digital firms grow, enhance efficiency, and please consumers.",
    ans3: "Are you planning to launch a successful solution for your Business and Finance?",
    ans4: "Ready to proceed? Contact us. Call us to discuss your requirements quickly. Thorough requirements collecting before analysis. We assign a project manager to oversee development after submitting a detailed feature list. To promote openness and collaboration, your project manager will inform you daily or weekly. We provide the job on time and at a fair price to ensure your satisfaction.",
  },
  {
    id: 5,
    images: Travel,
    que: "Travel and Tourism",
    ans: "The App Ideas, a leading online and app development firm, offers affordable website development, web and mobile app manufacturing, and unique UI/UX designs. Technologically successful travel and tourism solutions are our expertise. Smartphones simplify transit and accommodation bookings. Online platform development by travel and tourism organizations shows digital solutions' rising appeal and success.",
    ans2: "Phone technology lets travelers plan and book trips, get real-time information, and utilize travel services. Digital platforms have enhanced user experience and provided firms new opportunities to reach and engage their target audience. The App Ideas understands the evolving travel and tourist sector and provides innovative web solutions to help organizations prosper. We leverage our expertise to improve travel industry development, efficiency, and customer enjoyment, from simple booking systems to immersive travel experiences.",
    ans3: "Are you planning to take the first step towards launching a Successful Travel and Tourism Software in the market?",
    ans4: "Request a free quotation on your idea. Our process involves collecting requirements, thoroughly assessing them, receiving client confirmation on the proposal, assigning a dedicated project manager who will keep you informed, guaranteeing smooth communication, and completing the project on schedule. This methodical approach ensures transparency, accountability, and client satisfaction throughout development. Contact us to achieve your idea.",
  },
  {
    id: 6,
    images: Food,
    que: "Food and Drink",
    ans: "We provide cutting-edge food and drink software with extensive expertise. Our vast project portfolio offers restaurant businesses full solutions. Examples include e-menu systems, food delivery applications, ordering platforms, kitchen management systems, and waiter call apps. Today's customers, business owners, and entrepreneurs choose websites and mobile apps. Food and restaurant operators should digitize now. Digital platforms may help your food business prosper by introducing capabilities that enhance customer experience and streamline operations.",
    ans2: "The digital era is full with invention. Digital technologies for online ordering, kitchen optimization, and customer contact may assist food firms. We customize solutions to the Food and Drink industry's needs to flourish in the digital market.",
    ans3: "Are you planning to launch a new Food business online platform?",
    ans4: "Contact us if interested. Our effective process begins with thorough requirements collecting and analysis. To ensure project alignment and clarity, we interact with clients throughout. Our proposal is finalized when requirements are defined. After your acceptance, a project manager monitors progress and provides weekly updates. We value timely and cost-effective project completion. This systematic approach fosters openness, teamwork, and client pleasure throughout the project. Contact us now to achieve your objective.",
  },
  {
    id: 7,
    images: SocialNetworking,
    que: "Social Networking",
    ans: "Website construction, mobile app development, web app development, and E-commerce platform development are among App Ideas' top software solutions. Our expert engineers and designers provide optimal solutions for startup and corporate development.",
    ans2: "Social media is popular nowadays. Most smartphone users use social media. These services are popular because they connect individuals across boundaries and foster genuine relationships. Social media improves global communication and collaboration by connecting friends, family, and communities. Our experience of social media platforms helps us create innovative solutions for consumers and businesses at App Ideas.",
    ans3: "Are you planning to launch a Social Networking platform?",
    ans4: "Why delay when ready? Get a free quote on developing a lucrative social network. We create software utilizing agile approaches for efficiency and flexibility. Customer demands are analyzed and suggestions are made. Project ideas are finalized with thorough client conversations. We create projects using client input and prioritize speed after approval. Contact us now to start your Social Networking site project and realize your vision.",
  },
  {
    id: 8,
    images: lifestyle,
    que: "Lifestyle & Mobility",
    ans: "App Ideas is a top web and app development firm with expert developers and designers that produce unique and high-quality software for businesses. Website, web app, mobile app, and E-commerce platform development are our specializations. We also provide entire design to enhance user experience. Digital lifestyle software is gaining in popularity. Lifestyle software is popular as more people utilize online platforms to access and manage services. Fashion, health, journalism, culture, travel, beauty, and more are covered here. As demand rises, our team creates bespoke solutions for lifestyle brands and consumers.",
    ans2: "Are you planning to launch a lifestyle software solution?",
    ans3: "If you're ready to proceed, get a free Lifestyle web and mobile app development quotation. After gathering your requests, we thoroughly examine them and meet to finish the project. We start the job following agreement, ensuring prompt delivery to your satisfaction. Contact us to develop your lifestyle app.",
  },
  {
    id: 9,
    images: Real,
    que: "Real Estate",
    ans: "The App Ideas is a top online and mobile app developer that delivers economical software. Our professional developers and designers build top-notch online, mobile, E-commerce, and website development. We assist startups and enterprises create effective web solutions that increase user base and digital awareness. Digitally, real estate is one of the most competitive industries. Real estate businesses are adopting internet channels to attract consumers owing to increased demand. Consumers prefer online real estate research, showing the industry's digital shift.",
    ans2: "At The App Ideas, we value market adaption. Our internet and mobile app development talents assist real estate firms achieve digital success, reach their target audience, and compete. Make your real estate business digitally successful with us.",
    ans3: "Are you planning to launch a Real Estate software solution?",
    ans4: "Want a free real estate software quote? Contact us. Many sectors, including real estate, benefit from our platform. Systematic software development comprises requirement gathering, extensive analysis, client meetings for project completion, and timely deployment. Discuss your real estate software idea with us.",
  },
];
const MobileAppDev = () => {
  const [selected, setSelected] = useState(null);
  const [activeService, setActiveService] = useState("iphone_app");
  const [activeServe, setActiveServe] = useState("shopping");
  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // const toggle = (i) => {
  //   if (selected === i) {
  //     return setSelected(null);
  //   }
  //   setSelected(i);
  // };
  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false);
    }
    SetOpenServicesProvide(i);
  };
  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return setOpenIndustries(null);
    }
    setOpenIndustries(i);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Top Mobile App Development Company India & USA - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development Company"
        des="App Ideas, a prominent online and on-demand app developer, believes it can make unique mobile applications. Since business owners and entrepreneurs invest extensively in mobile apps to enhance revenue, App Ideas provides several digital solutions. Their experts provide cutting-edge native, cross-platform, and hybrid platform solutions at cheap prices. Since they know consumers' finances, App Ideas' expert developers provide inexpensive services. Businesses may finance high-quality app development using this strategy. App Ideas' focus on innovation and customer care makes them a valued partner for organizations wishing to grow with mobile applications. App Ideas is a top native, cross-platform, and hybrid mobile app developer due to their expertise and affordability."
        list1="7+ Years of experience in App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Mobile App Development"
        service2="Mobile Application Development Company"
        service3="Mobile Application Developer"
        image1={mobileApp}
        image2={Application}
        image3={Mobileapplication}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Services we provide</h3>
            <p>
              Over the years, we've developed theme-based and unique mobile
              apps. All of these apps were created by our talented, creative
              mobile app writers and UI/UX designers. Your organization benefits
              most from these solutions. We help our customers provide the
              finest customer experiences by providing cutting-edge concepts and
              unique designs.
            </p>
          </div>
          <div className="row">
            <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("iphone_app")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "iphone_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={IPhoneapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      IPhone App <br /> Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("iphone_mobile")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "iphone_mobile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Ipadeapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Ipad App <br />
                      Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("android_app")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "android_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Androidapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Android App <br /> Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("android_tablet")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "android_tablet" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Androidtablet}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Android tablet <br />
                      App Development
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Reskinning}
                      alt="smart-watch"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Reskinning
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_redesign")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app_redesign" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Redesigning}
                      alt="Mobile-App-Redesigning"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Redesigning
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_upgrade")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app_upgrade" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Upgradation}
                      alt="Mobile-App-Upgradation"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Upgradation
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("mobile_app_support")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "mobile_app_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Mobileappsupport}
                      alt="service-icon"
                      className="img-fluid"
                    />
                    <p>
                      Mobile app support <br /> and service
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("crossplatform")}
                >
                  <div
                    className={`service__provide_tab  ${
                      activeService === "crossplatform" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <Image
                      src={Crossplatform}
                      alt="Cross-platform-Mobile-Apps"
                      className="img-fluid"
                    />
                    <p>
                      Cross-platform <br /> mobile App
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === "iphone_app" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">IPhone App Development</h3>
                    <p className="Title_para">
                      App Ideas is a leader in business app creation for
                      websites and mobile apps on both platforms. We know how to
                      develop great Android and iOS apps. We serve both types of
                      smart gadgets.Our iOS app writers are extremely skilled
                      and can create iPhone apps. With our knowledge, we can
                      ensure our iPhone mobile app development satisfies
                      customer needs.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best iPhone App Development
                      services?
                    </p>
                    <p className="Title_para">
                      Certainly! If "Yes," connect instantly. We're thrilled to
                      help you build a lucrative iPhone app. We offer a seamless
                      idea-to-realization process with our rigorous methodology.
                      We carefully gather your requirements to understand your
                      vision in the initial step. We then thoroughly review your
                      specifications. We schedule meetings to address your
                      questions because we value good communication and leave no
                      stone unturned. To keep things transparent and match your
                      needs, we stage the project. We ask for your permission at
                      every crucial moment to collaborate and incorporate your
                      thoughts. We provide app development projects on time
                      because we understand timing. We want to exceed your
                      expectations and produce a complete and successful iPhone
                      app that shows our shared vision and unwavering
                      dedication.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "iphone_mobile" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      IPad Mobile app development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is a pioneer in iPad app creation, helping
                      startups and companies get online. Our skilled developers
                      build industry-leading mobile apps. View our project
                      triumphs in our portfolio. Our iPad app developers
                      customize mobile applications for different industries. We
                      gather and analyze consumer demands via rigorous customer
                      interactions. We do projects at reasonable pricing after
                      significant ideation and mutual agreement. Our agile
                      mobile, web, and iPad app development method is efficient
                      and flexible.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best iPad Mobile App Development
                      Firm? If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_app" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Mobile app development{" "}
                    </h3>
                    <p className="Title_para">
                      App Ideas, a leading Android app developer, helps
                      businesses and startups modernize and compete. Every
                      Android mobile app project gets reliable, configurable,
                      and forward-thinking applications from our skilled
                      developers. Our expertise in several industries lets us
                      satisfy distinct consumer demands. We discuss and improve
                      the project after gathering consumer needs. Collaboration
                      results in competitive project completion and high value.
                      Agile breaks projects into manageable milestones and
                      allows client input at each stage. This technique boosts
                      productivity and ensures client satisfaction in Android
                      mobile app development, providing industry-leading and
                      future-proof solutions.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Android Mobile App
                      Development Firm? If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_tablet" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Tablet app development{" "}
                    </h3>
                    <p className="Title_para">
                      Leading Android Tablet app developer The App Ideas
                      develops apps. Different-sized devices are becoming more
                      popular for convenience. The App Ideas creates online and
                      mobile apps to fulfill the rising demand for Android apps
                      on tablets and other devices. Android devices have
                      increased demand for Android Tablet apps. Companies and
                      startups are developing Android Tablet apps to grow
                      digitally. App Ideas, an experienced developer, thoroughly
                      collects, evaluates, and analyzes client requirements
                      before creation. A rigorous assessment explains project
                      objectives and scope.
                    </p>
                    <p className="Title_para">
                      Our seasoned team at The App Ideas provides insights and
                      ideas beyond implementation. They believe future trends
                      should inform strategic project modifications. This
                      forward-thinking approach ensures the Android Tablet app
                      meets current needs and adapts to new technologies. App
                      Ideas' commitment to high-quality, affordable services
                      strengthens its Android Tablet app development
                      relationship. The company can handle development details
                      and bespoke solutions for present and future Android
                      ecosystem demands.
                    </p>
                    <p className="Title_para">
                      Are you looking for services for successful Android Tablet
                      app Development? If yes, then feel free to reach and
                      discuss further.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Reskinning </h3>
                    <p className="Title_para">
                      Current industries e-commerce and shopping are growing.
                      These companies are rapidly adopting websites, web
                      applications, and mobile apps owing to the digital
                      revolution. This shift is a deliberate response to digital
                      client expectations, not a trend. Digital platforms are
                      the most convenient, efficient, and cost-effective. Online
                      shopping and E-commerce are growing. To capitalize on this
                      trend, many new business owners and entrepreneurs are
                      investing extensively in E-commerce sites. Rise in demand
                      for these services highlights how digital has impacted
                      consumer behavior and industry approaches.
                    </p>
                    <p className="Title_para">
                      Internet-based e-commerce and shopping platforms let
                      consumers buy and sell goods and services and easily move
                      data and money. This dynamic market encompasses
                      business-to-business, consumer-to-consumer, and
                      consumer-to-business transactions. E-commerce now
                      encompasses internet banking, auctions, tickets, and
                      payment gateways, indicating its versatility and
                      expansion.
                    </p>
                    <p className="Title_para">
                      Are you thinking of launching any Shopping and E-commerce
                      digital solutions in the market?
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_redesign" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Redesigning</h3>
                    <p className="Title_para">
                      Technology has made mobile app updating popular. For
                      client feedback, many forward-thinking business owners
                      provide beta versions of their mobile apps. User input
                      improves app functioning and experience. Mobile app owners
                      must adapt to user and market demands. Success depends on
                      App Ideas' creative designers' expertise. These
                      specialists provide the best mobile app redesigning
                      services, ensuring industry compliance. The App Ideas
                      creates stylish and successful mobile apps using
                      creativity and technology to keep current. Customers can
                      trust The App Ideas to increase mobile app functionality,
                      attractiveness, and trendiness.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Mobile app Redesigning? If
                      Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_upgrade" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Upgradation</h3>
                    <p className="Title_para">
                      Mobile app owners must regularly upgrade their apps.
                      Mobile apps must adapt to company demands in the
                      ever-changing digital landscape. This proactive approach
                      is key to market competitiveness. App updates make adding
                      features and functionality easy. OS updates are regular,
                      thus staying updated is key. The App Ideas provides
                      affordable mobile app upgradation since this procedure is
                      crucial.
                    </p>
                    <p className="Title_para">
                      Our team simplifies app improvements for user experience
                      and industry standards. Our upgrade approach emphasizes
                      keeping the mobile app's core while adding business and
                      user-requested additions. By upgrading their mobile
                      applications with us, businesses can stay flexible,
                      adaptable, and market-ready.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Mobile App upgradation?
                      <br />
                      If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "mobile_app_support" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Mobile app Support and maintenance
                    </h3>
                    <p className="Title_para">
                      The App Ideas creates, supports, and maintains mobile and
                      online apps. A company or internet enterprise needs these
                      services to succeed. Some company owners neglect mobile
                      app support and maintenance, causing failure. App code is
                      updated with software updates and innovations during
                      regular maintenance to ensure its functioning and
                      relevance. The App Ideas offers substantial client support
                      beyond development. We know mobile app longevity depends
                      on support and maintenance. Our team excels in online and
                      mobile app development and UI/UX design, ensuring customer
                      satisfaction. We provide dedicated support and maintenance
                      after project launch to maintain app performance and
                      adaptability.
                    </p>
                    <p className="Title_para">
                      To keep up with innovation, App Ideas trains its staff on
                      new technologies and code improvements. This proactive
                      approach ensures that our support and maintenance services
                      prevent and fix app performance problems. Look no farther
                      for reliable Mobile App Support and Maintenance. Your
                      trusted partner, App Ideas, can improve your mobile app's
                      longevity and efficacy with a variety of services. Contact
                      us to see how our expertise can aid your digital projects.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "crossplatform" && (
              <div className="service_desk_view col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Cross-platform Mobile Apps
                    </h3>
                    <p className="Title_para">
                      Cross-platform technology is popular because mobile
                      devices and platforms are so diverse. Companies targeting
                      a large audience must alter their mobile apps more than
                      before. If your company wishes to launch a single mobile
                      app across OS, use cross-platform technologies. In
                      addition to top online and mobile app services, The App
                      Ideas offers cross-platform app development. This unique
                      technology allows developers construct cross-platform
                      mobile applications. Cross-platform technology enables
                      organizations agility and accessibility to compete.
                    </p>
                    <p className="Title_para">
                      We provide agile, accurate, and cross-platform software
                      development. Using unique design components and unmatched
                      expertise, our team creates cross-platform solutions with
                      the best quality and user experience. Companies may obtain
                      cutting-edge services at the greatest costs with us.
                      Choose The App Ideas for cross-platform app development
                      and start a partnership that will help your business
                      prosper in the ever-changing mobile technology sector.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best cross-platform technology?{" "}
                      <br />
                      If Yes, then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* ========================= Mobile View =========================== */}
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
            {/* ========================= Mobile View =========================== */}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <>
        {/* Technologies Section Start */}
        <section className="technologies__section py-5">
          <div className="container">
            <div className="Title__White mb-4">
              <h3>Technologies we use</h3>
            </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/obj-c-icon.png")}
                    alt="obj-c-icon"
                    className="img-fluid"
                  />
                  <h2>Objective C</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/swift-icon.png")}
                    alt="swift-icon"
                    className="img-fluid"
                  />
                  <h2>Swift</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/java.png")}
                    alt="Java"
                    className="img-fluid"
                  />
                  <h2>Java</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/kotlin.png")}
                    alt="kotlin"
                    className="img-fluid"
                  />
                  <h2>Kotlin</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/react-native.png")}
                    alt="react-native"
                    className="img-fluid"
                  />
                  <h2>React Native</h2>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="technologies_box text-center"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={require("../../public/assets/images/MobileAppDev/technogies-img/flutter.png")}
                    alt="flutter"
                    className="img-fluid"
                  />
                  <h2>Flutter</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section End */}
        <>
          {/* Service Section Start */}
          <section className="service__provide__section py-5">
            <div className="container">
              <div className="Title">
                <h3>Industries We Serve</h3>
                <p>
                  Through mobile app development, we've assisted organizations
                  in numerous industries. Our experience has assisted Finance,
                  Government, Real Estate, Retail, Healthcare, Travel, and
                  others. Our history shows our commitment to unique solutions
                  for each area. We specialize in designing creative
                  applications for financial institutions to optimize
                  operations, user-friendly solutions for government
                  organizations to increase citizen involvement, and immersive
                  real estate and retail experiences.
                </p>
                <p>
                  We quickly and efficiently achieve project objectives from
                  concept to execution using cutting-edge technology and
                  industry best practices. We help organizations leverage mobile
                  technology to grow, enhance, and please consumers by
                  understanding their industry's difficulties and possibilities.
                </p>
              </div>
              <div className="row mt-5">
                <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <div className="row">
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("shopping")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "shopping" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Shopping}
                          alt="shopping-1"
                          className="img-fluid"
                        />
                        <p>Shopping &amp; E-Commerce</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("health")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "health" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={health}
                          alt="health-and-fitness-1"
                          className="img-fluid"
                        />
                        <p>Health &amp; Fitness</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("education")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "education" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Education}
                          alt="smartphone-tablet"
                          className="img-fluid"
                        />
                        <p>Education &amp; E-Learning</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("banking")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "banking" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Banking}
                          alt="banking-1"
                          className="img-fluid"
                        />
                        <p>Banking &amp; Finance</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("travel")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "travel" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Travel}
                          alt="travel"
                          className="img-fluid"
                        />
                        <p>Travel &amp; Tourism</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("food")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "food" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Food}
                          alt="food-1-1"
                          className="img-fluid"
                        />
                        <p>Food &amp; Drink</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("socila_networking")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "socila_networking" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={SocialNetworking}
                          alt="Social-Networking"
                          className="img-fluid"
                        />
                        <p>Social Networking</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("lifestyle")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "lifestyle" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={lifestyle}
                          alt="lifestyle"
                          className="img-fluid"
                        />
                        <p>lifestyle &amp; mobility</p>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("real_estate")}
                    >
                      <div
                        className={`service__provide_tab ${
                          activeServe === "real_estate" &&
                          "service__provide_tab_active"
                        }`}
                      >
                        <Image
                          src={Real}
                          alt="Real-Estate"
                          className="img-fluid"
                        />
                        <p>
                          Real <br /> Estate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {activeServe === "shopping" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">
                          Shopping &amp; E-Commerce
                        </h3>
                        <p className="Title_para">
                          With extensive expertise, we provide top-tier software
                          development services targeted to each specialty,
                          including bespoke design and development solutions at
                          reasonable prices. Our talented engineers and
                          designers work hard to understand each client's needs.
                          Today, many company owners are moving their services
                          online, including websites, web applications, and
                          mobile apps. This change simplifies business and user
                          activities in many ways.
                        </p>
                        <p className="Title_para">
                          Businesses may simplify, improve accessibility, and
                          expand their audience by using online platforms.
                          Digital transformation has several benefits, including
                          faster transactions, better customer interaction, and
                          better processes. We help organizations make this
                          transformation by using cutting-edge technology and
                          new solutions to build powerful, user-centric online
                          experiences. We work with our customers from idea to
                          execution to ensure their online presence meets their
                          strategic objectives and yields results.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Shopping and E-commerce
                          Store in the market?
                        </p>
                        <p className="Title_para">
                          Contact us if interested. Quick call to discuss your
                          needs. Meeting to review project estimate, resource
                          allocation, and team assignment after thorough
                          requirements collection and analysis. We report
                          progress daily or weekly. Finally, we deploy projects
                          seamlessly for a pleasant experience.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "health" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Health and Fitness</h3>
                        <p className="Title_para">
                          Web and app development leader App Ideas' expert
                          developers and designers provide top-notch software
                          development. We combine cutting-edge technology with
                          unique design to develop bespoke websites, online, and
                          mobile applications in many fields. Even the health
                          and fitness industry is digitizing to benefit on
                          digital opportunities. Due to the benefits, more local
                          business owners are going online. This modification
                          makes service management and user accessibility easier
                          than before.
                        </p>
                        <p className="Title_para">
                          Digital platforms may help health and fitness
                          organizations adapt to client preferences, enhance
                          service, and reach more people. We help companies
                          prosper in the digital age with our software
                          development expertise.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch Health and Fitness online
                          platform?
                        </p>
                        <p className="Title_para">
                          Contact us for a free Health & Fitness software
                          development quotation. Our method involves discovering
                          your requirements, analyzing them, and proposing
                          solutions. We then provide specific ideas for your
                          evaluation before finishing the task. We provide a
                          project manager to oversee development and ensure
                          smooth implementation after approval. The work will be
                          completed on time and at the best price. Our
                          systematic approach encourages transparency, teamwork,
                          and client pleasure throughout growth. Contact us now
                          to start developing your health and fitness app and
                          realize your vision.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "education" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">
                          Education and E-Learning
                        </h3>
                        <p className="Title_para">
                          App Ideas is a leading software development service
                          provider known for its competence in custom design and
                          development solutions for many business segments.
                          Business owners, entrepreneurs, and startups are
                          investing more in online platform development in
                          today's dynamic business environment. Educational
                          institutions understand the need of a strong internet
                          presence. Web and mobile app development is crucial
                          for educational institutions to remain competitive.
                        </p>
                        <p className="Title_para">
                          Educational institutions get several advantages from
                          e-learning platforms. Such systems provide unmatched
                          accessibility, engagement, and efficiency in
                          educational material delivery. E-learning websites and
                          mobile applications allow schools to reach more
                          students, accommodate different learning styles, and
                          adapt to changing student and instructor demands.
                        </p>
                        <p className="Title_para">
                          The App Ideas understands educational institutions'
                          particular needs and provides customized solutions.
                          Our professionals create innovative and easy-to-use
                          e-learning solutions that allow educators and students
                          to succeed in the digital era.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch an E-learning website or
                          Mobile app in the market?
                        </p>
                        <p className="Title_para">
                          Yes? Why wait? Call briefly to discuss your
                          requirements. First, we gather your needs, assess
                          them, and quote competitively. We meet to finalize
                          project details before commencing. We provide daily or
                          weekly project updates. Our prompt project deployment
                          assures your satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "banking" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Banking and finance </h3>
                        <p className="Title_para">
                          The App Ideas is a top website, web, and mobile app
                          developer and UI/UX designer. Custom software for
                          food, e-commerce, finance, and banking is our
                          specialty. Businesses digitize processes to enhance
                          data management and accessibility in the digital era.
                          Banking and finance are spearheading this digital
                          transformation by providing seamless access to
                          resources and services via internet, online, and
                          mobile apps.
                        </p>
                        <p className="Title_para">
                          Digital platforms improve resource management,
                          consumer experiences, and competitiveness in
                          fast-changing industries. Digitalization simplifies
                          online transactions, boosts user engagement, and
                          provides customized services. We understand digital
                          transformation challenges and opportunities across
                          industries at The App Ideas. Our experts design
                          innovative solutions to help digital firms grow,
                          enhance efficiency, and please consumers.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a successful solution for
                          your Business and Finance?
                        </p>
                        <p className="Title_para">
                          Ready to proceed? Contact us. Call us to discuss your
                          requirements quickly. Thorough requirements collecting
                          before analysis. We assign a project manager to
                          oversee development after submitting a detailed
                          feature list. To promote openness and collaboration,
                          your project manager will inform you daily or weekly.
                          We provide the job on time and at a fair price to
                          ensure your satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "travel" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Travel and Tourism</h3>
                        <p className="Title_para">
                          The App Ideas, a leading online and app development
                          firm, offers affordable website development, web and
                          mobile app manufacturing, and unique UI/UX designs.
                          Technologically successful travel and tourism
                          solutions are our expertise. Smartphones simplify
                          transit and accommodation bookings. Online platform
                          development by travel and tourism organizations shows
                          digital solutions' rising appeal and success.
                        </p>
                        <p className="Title_para">
                          Phone technology lets travelers plan and book trips,
                          get real-time information, and utilize travel
                          services. Digital platforms have enhanced user
                          experience and provided firms new opportunities to
                          reach and engage their target audience. The App Ideas
                          understands the evolving travel and tourist sector and
                          provides innovative web solutions to help
                          organizations prosper. We leverage our expertise to
                          improve travel industry development, efficiency, and
                          customer enjoyment, from simple booking systems to
                          immersive travel experiences.
                        </p>
                        <p className="Title_para">
                          Are you planning to take the first step towards
                          launching a Successful Travel and Tourism Software in
                          the market?
                        </p>
                        <p className="Title_para">
                          Request a free quotation on your idea. Our process
                          involves collecting requirements, thoroughly assessing
                          them, receiving client confirmation on the proposal,
                          assigning a dedicated project manager who will keep
                          you informed, guaranteeing smooth communication, and
                          completing the project on schedule. This methodical
                          approach ensures transparency, accountability, and
                          client satisfaction throughout development. Contact us
                          to achieve your idea.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "food" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Food and Drink</h3>
                        <p className="Title_para">
                          We provide cutting-edge food and drink software with
                          extensive expertise. Our vast project portfolio offers
                          restaurant businesses full solutions. Examples include
                          e-menu systems, food delivery applications, ordering
                          platforms, kitchen management systems, and waiter call
                          apps. Today's customers, business owners, and
                          entrepreneurs choose websites and mobile apps. Food
                          and restaurant operators should digitize now. Digital
                          platforms may help your food business prosper by
                          introducing capabilities that enhance customer
                          experience and streamline operations.
                        </p>
                        <p className="Title_para">
                          The digital era is full with invention. Digital
                          technologies for online ordering, kitchen
                          optimization, and customer contact may assist food
                          firms. We customize solutions to the Food and Drink
                          industry's needs to flourish in the digital market.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a new Food business online
                          platform?
                        </p>
                        <p className="Title_para">
                          Contact us if interested. Our effective process begins
                          with thorough requirements collecting and analysis. To
                          ensure project alignment and clarity, we interact with
                          clients throughout. Our proposal is finalized when
                          requirements are defined. After your acceptance, a
                          project manager monitors progress and provides weekly
                          updates. We value timely and cost-effective project
                          completion. This systematic approach fosters openness,
                          teamwork, and client pleasure throughout the project.
                          Contact us now to achieve your objective.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "socila_networking" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Social Networking</h3>
                        <p className="Title_para">
                          Website construction, mobile app development, web app
                          development, and E-commerce platform development are
                          among App Ideas' top software solutions. Our expert
                          engineers and designers provide optimal solutions for
                          startup and corporate development.
                        </p>
                        <p className="Title_para">
                          Social media is popular nowadays. Most smartphone
                          users use social media. These services are popular
                          because they connect individuals across boundaries and
                          foster genuine relationships. Social media improves
                          global communication and collaboration by connecting
                          friends, family, and communities. Our experience of
                          social media platforms helps us create innovative
                          solutions for consumers and businesses at App Ideas.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Social Networking
                          platform?
                        </p>
                        <p className="Title_para">
                          Why delay when ready? Get a free quote on developing a
                          lucrative social network. We create software utilizing
                          agile approaches for efficiency and flexibility.
                          Customer demands are analyzed and suggestions are
                          made. Project ideas are finalized with thorough client
                          conversations. We create projects using client input
                          and prioritize speed after approval. Contact us now to
                          start your Social Networking site project and realize
                          your vision.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "lifestyle" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Lifestyle</h3>
                        <p className="Title_para">
                          App Ideas is a top web and app development firm with
                          expert developers and designers that produce unique
                          and high-quality software for businesses. Website, web
                          app, mobile app, and E-commerce platform development
                          are our specializations. We also provide entire design
                          to enhance user experience. Digital lifestyle software
                          is gaining in popularity. Lifestyle software is
                          popular as more people utilize online platforms to
                          access and manage services. Fashion, health,
                          journalism, culture, travel, beauty, and more are
                          covered here. As demand rises, our team creates
                          bespoke solutions for lifestyle brands and consumers.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a lifestyle software
                          solution?
                        </p>
                        <p className="Title_para">
                          If you're ready to proceed, get a free Lifestyle web
                          and mobile app development quotation. After gathering
                          your requests, we thoroughly examine them and meet to
                          finish the project. We start the job following
                          agreement, ensuring prompt delivery to your
                          satisfaction. Contact us to develop your lifestyle
                          app.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "real_estate" && (
                  <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Real Estate</h3>
                        <p className="Title_para">
                          The App Ideas is one of the popular web app and mobile
                          app development firms that offers the best software
                          services at the best rates. The App Ideas has a team
                          of talented developers and designers who provide the
                          best solution for Web apps, mobile app, E-commerce as
                          well as website development. We help businesses and
                          startups to launch a successful online solution that
                          increases the user base of the business.
                        </p>
                        <p className="Title_para">
                          Real Estate is one of the most demanding as well as
                          popular services in this present time. As per the
                          increasing demand of this section, the real estate
                          business owners are digitalizing their business to
                          easily reach the customer through the online paths. As
                          per the observation, it is clearly observed that
                          people are now checking real estate services online.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Real Estate software
                          solution?
                        </p>
                        <p className="Title_para">
                          If yes then feel free to reach us and get a free
                          quotation for your real estate software solution. We
                          are highly expert in providing the best software
                          solution for different business categories including
                          the real estate business. For software development, we
                          strictly follow the process like requirement
                          gathering, analyze the requirements, have a meeting
                          with the clients, finalize the project and deploy it
                          on time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* ========================= Mobile View =========================== */}
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
                            <p>{item.ans4}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
                {/* ========================= Mobile View =========================== */}
              </div>
            </div>
          </section>
          {/* Service Section End */}

          {/* <!-- Work Slider Start --> */}
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
                    spaceBetween: 20,
                  },
                  425: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
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
                speed={2000}
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
                style={{ padding: "2.5rem 0" }}
              >
                <SwiperSlide>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.app.mindwheel"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-12">
                        <Image
                          src={require("../../public/assets/images/work/2.webp")}
                          style={{
                            width: "100%",
                            boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                            borderRadius: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-md-12"
                        style={{ color: "#000" }}
                      >
                        <div className="dec">
                          Mindweel - On Demand Psychologist Hiring App
                        </div>
                        <p>
                          It’s an On Demand Psychologist OR Doctor Hiring App.
                          It has been very useful app in the current scenario of
                          the world where everyone is facing depression, anxiety
                          and mental health issues.
                        </p>
                        <p>
                          This project has three main modules, Patient App,
                          Psychologist / Doctor App, and Admin Panel.
                        </p>

                        <p>
                          Patient can able to create and manage their medical
                          profile, find the best available Psychologist /
                          Doctors, Check their profiles, availability, ratings
                          and reviews, Book them online, make a payment, give
                          ratings and reviews.
                        </p>
                        <p>
                          Psychologist OR Doctor can able to register
                          themselves, create their specialist profile, manage
                          availability, patient, booking, payment and other
                          stuffs.
                        </p>
                        <p>
                          Admin can able to manage Patients, Doctors, Payment,
                          Reports, Content and other stuffs.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.app.boltdriverapp"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-12">
                        <Image
                          src={require("../../public/assets/images/work/bolt-app.webp")}
                          style={{
                            width: "100%",
                            boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                            borderRadius: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-md-12"
                        style={{ color: "#000" }}
                      >
                        <div className="dec">Bold Delivery</div>
                        <p>
                          It’s a Food Ordering & Food Delivery App. We have
                          created a User app, Restaurant App, Driver App, and
                          Admin panel.
                        </p>
                        <p>
                          User can able to search, filter, check food details,
                          place an online order, make payment, track their
                          orders, give ratings and reviews.
                        </p>

                        <p>
                          Restaurant can able to register themselves, list and
                          manage their food items, manage orders, track drivers
                          and orders.
                        </p>
                        <p>
                          Driver can able to register, manage their
                          availabilities, deliver the food items to the users.
                        </p>
                        <p>
                          Admin can able to manage users, food category & sub
                          category, restaurants, drivers, payment and other
                          things.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.servicemycar.android"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="row">
                      <div className="col-lg-5 col-md-12">
                        <Image
                          src={require("../../public/assets/images/work/service-my-car.webp")}
                          style={{
                            width: "100%",
                            boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                            borderRadius: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-md-12"
                        style={{ color: "#000" }}
                      >
                        <div className="dec">Service my car</div>
                        <p>
                          It’s an On Demand Car Servicing App, It has 2 main
                          modules.
                        </p>
                        <p>
                          1) User App <br />
                          2) Admin Web Backend
                        </p>

                        <p>
                          User can able to check out all the services packages
                          offered by a service center, check in details and
                          compare them, choose the service package and book
                          online, pay online, they can also choose pickup and
                          drop off point, check and approve extra repair cost,
                          check their car 360° inspections on their app, provide
                          ratings and reviews of the services.
                        </p>
                        <p>
                          Admin can able to list down all the services packages,
                          manage booking, extra repair services, payment,
                          content of an app, offers and other stuffs
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          {/* <!-- Work Slider End --> */}

          {/* Client testimonial Section Start */}
          <TestiMonial />
          {/* Client testimonial Section End */}

          <>
            {/* FAQ Section Start */}
            <FAQ />
          </>

          <>
            {/* Contact Section Start */}
            <ContactUs question="Do you like to know more about our expertise in mobile app development?" />
            {/* Contact Section End */}
            <Whatsapp />
            <GetAQuoteModal
              setOpenModal={setModalOpen}
              openModal={modalOpen}
              handleCloseModal={() => setModalOpen(false)}
            />
            <Footer />
          </>
        </>
      </>
    </>
  );
};

export default MobileAppDev;
