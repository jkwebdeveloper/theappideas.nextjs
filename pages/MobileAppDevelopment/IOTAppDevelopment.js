import { React, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import Link from 'next/link';
import Image from 'next/image';
import '../../components/Workdone/work.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import TestiMonial from '../../components/Testimonial/TestiMonial'
import FAQ from '../../components/FAQ'

import ContactUs from '../../components/ContactUs'
import HeroSection from '../../components/HeroSection'

import mobileAppdevelopment from '../../public/assets/images/MobileAppDev/Mobile App Development Company/Mobile App Development.svg'
import mobileApplication from '../../public/assets/images/MobileAppDev/Mobile App Development Company/Mobile Application Development Company.svg'
import mobileappdeveloper from '../../public/assets/images/MobileAppDev/Mobile App Development Company/mobile app developer.svg'
import { Helmet } from 'react-helmet'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Whatsapp from '../../components/Whatsapp';
import GetAQuoteModal from '../../components/GetAQuoteModal';

const ServiceProvideData = [
  {
    id: 1,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Connected-Cars.png'),
    que: 'Connected cars',
    ans:
      'The popularity of connected cars are getting popular day by day, Nowadays many of the people are converting their car into smart cars to access the advanced features which smart cars are offering in this present time. Using such services can make the services more convenient and easy to use.',
    ans2:
      'Here we are at The App Ideas which is one of the most popular software development company. We are also offering the best IoT app development services at the best possible rates. Our developers can be skilled to deliver the best-connected car app based on the current trends.',
  },
  {
    id: 2,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png'),
    que: 'Industrial Internet',
    ans:
      'If we talk about the Industrial Internat services then it is also in high demand in the market. Many people are now inclined towards industrial internet services for making life much easier and simpler. This type of service can make accessing the services easier and helpful for the people.',
    ans2:
      'The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers and designers who are experts in developing the best software solution for every business categories including the Industrial Internet at the best rates.',
  },
  {
    id: 3,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Smart-Cities.png'),
    que: 'Smart Cities',
    ans:
      'Currently, technologies are trending in the market. Each and every service is now converting their business into online services by utilising the advanced technology features. If we talk about the users then they are also liking the digital services because this will save their time as well as sometimes costs.',
    ans2:
      'We are at The App Ideas which is one of the leading web and app development. We have high expertise in offering the best software solution to our clients. If we talk about smart cities then many people are accepting this technology, so this is the time for you to launch your own IoT app in the market.',
  },
  {
    id: 4,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/IoT-In-Agriculture.png'),
    que: 'IoT in Agriculture',
    ans:
      'Nowadays, the whole service market is digitilizing its services for making the process much easier and convenient to access by the users. If we talk about the users then they are also loving the digital services because it is convenient to use. And as per the increasing demand, entrepreneurs are now making investments in digital solutions.',
    ans2:
      'The App Ideas is one of the leading web and app development. We have a team of highly skilled developers who are experts in offering the best IoT app development services. This technology is also now integrated into the agricultural services to make the services more convenient to access by the agriculture owners and staff members. We also offer services for the Agriculture industry.',
  },
  {
    id: 5,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Smart-Retail.png'),
    que: 'Smart Retail',
    ans:
      'This era is as highly popular as the digital era because every service is now converting into digital platforms by launching a specific mobile app and web app development. Due to the advancement in technology, the services are getting digitalize because it is easy for users to access the services easily as well as it is also convenient for the business owners to manage the services conveniently.',
    ans2:
      'We are at The App Ideas which is a leading web and app development company. We have a team of highly experienced developers who are experts in offering the best development as well as designing services. We are providing IoT app development services like Smart retail services for the enhancement of the user experience.',
  },
  {
    id: 6,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Mask-Group.png'),
    que: 'IOT in healthcare',
    ans:
      'Every business owner including the healthcare industry is now shifting towards the digital platform to offer more convenient services to their users. The advancement in technology has also affected the services platforms. Now it is very easy for converting everything online and access it easily at any time for any place.',
    ans2:
      'We are from The App Ideas, which is one of the most popular software development company. We have a team of highly skilled designers and developers who are proficient in developing IoT mobile app development for every industry including the healthcare industry.',
  },
]
const IndustriesData = [
  {
    id: 1,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/Expert-Developers.png'),
    que: 'Expert developers',
    ans:
      'The demand for the IoT devices or we can say smart devices are getting popular day by day. Many people are now accepting technology and implementing it into day to day life. The demand for smart devices, as well as smart applications, are also raising because this will provide the proper comfort and convenience of accessing all the services.',
    ans2:
      'The App Ideas is one of the most popular software development company. We have a group of highly talented people who are experts in offering the online platform’s solutions like Mobile app development, web app development, website development and IoT app development at the best rates. An experienced, skilled and creative team of developers and designers with a proven track record in building award-winning mobile apps for both IOS and Android.',
  },
  {
    id: 2,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/robust-portfolio.png'),
    que: 'Great Portfolio',
    ans:
      'Nowadays, a high number of people are using digital solutions for accessing all kinds of services like food delivery services, E-commerce services and more. Due to the increasing demand for software solutions the service owners, business owners, startups and entrepreneurs are making investments in developing smart devices.',
    ans2:
      'The App Ideas is one of the leading web and app development. We have a talented pool of developers who are highly experienced and expert in offering the best software solution based on the specific niches. We have built mobile apps for a wide variety of niches. We make sure to address business concerns with custom development and design.',
  },
  {
    id: 3,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/Performance-Driven..png'),
    que: 'Performance Driven',
    ans:
      'If we look in the market then we can clearly observe that there are thousands of mobile app solutions available in the market which offer similar kinds of services. To make a place in the market, it is very important for you to offer something unique and innovative IoT mobile app in the market.',
    ans2:
      'The App Ideas is one of the leading web and app development company. We are highly experienced in providing the best smart devices app development services like IoT app development which can help you in the growth of your business. Unmatched ease of use and glitch-free performance are two areas of strength for our IoT apps.',
  },
  {
    id: 4,
    images: require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/Strong-Support.png'),
    que: 'Strong Support',
    ans:
      'We are from The App Ideas which is one of the most popular Software development company. Our services include the services like web app development, mobile app development services, website development and IoT app development. We have delivers the exact solutions to the clients as per their expectations.',
    ans2:
      'We highly follow the agile methodology for every software development service. We divide the project into milestones too easily developing every milestone with client approval. After deployment of the project, we also offer support and maintenance. We are always awake to hear about your concerns. We have a robust post-development support and maintenance team ready to address your concerns over E-mail, telephone, Skype, Web chat etc.',
  },
]

const IOTAppDev = () => {
  const [activeService, setactiveService] = useState('connected_cars')
  const [activeWhyChoose, setActiveWhyChoose] = useState('expert_developers')

  const [openServicesProvide, SetOpenServicesProvide] = useState(false)
  const [openIndustries, SetOpenIndustries] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false)
    }
    SetOpenServicesProvide(i)
  }

  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return SetOpenIndustries(null)
    }
    SetOpenIndustries(i)
  }

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <Helmet title="IoT App Dvelopment Company | Internet of Things Application" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Internet of things (IOT) App Development"
        des="We are at The App Ideas, which is one of the leading web and app development company. We have a group of people who are experts in offering the best software solution for each kind of category. We are skilled in offering the best IoT app development services as per the client’s requirements and with advanced features integration along with unique designing services."
        list1="7+ Years of experience in App Development"
        list2="Best Internet Of Things App Development Company"
        list3="Dedicated team for your Internet Of Things App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="IoT App Development"
        service2="IoT App Development Company"
        service3="IoT Application Development Services"
        image1={mobileAppdevelopment}
        image2={mobileApplication}
        image3={mobileappdeveloper}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Internet Of Things (IoT) App Development Company India</h3>
            <p>
              As connected gadgets are continuously making our life simple
              whether, at home or workplace, mobile apps meant to connect these
              devices are increasingly becoming popular. A smart home app to
              control your home appliances hugs many of our phone screens now.
              The demand for IoT devices is getting popular day by day, many
              people are now integrating the smart devices services into their
              homes, offices and more.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('connected_cars')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'connected_cars' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Connected-Cars.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>
                      Connected <br />
                      Cars
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('industrial_internet')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'industrial_internet' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>
                      Industrial <br />
                      Internet
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('smart_cities')}
                >
                  <div

                    className={`service__provide_tab ${
                      activeService === 'smart_cities' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Smart-Cities.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>
                      Smart <br />
                      Cities
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('iot_agriculture')}
                >
                  <div
                    href="/"
                    className={`service__provide_tab ${
                      activeService === 'iot_agriculture' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/IoT-In-Agriculture.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>
                      IoT In <br />
                      Agriculture
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('smart_retail')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'smart_retail' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Smart-Retail.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>
                      Smart <br />
                      Retail
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('iot_healthcare')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'iot_healthcare' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Internet Of Things/Mask-Group.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>
                      IoT In <br />
                      Healthcare
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === 'connected_cars' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Connected cars</h3>
                    <p className="Title_para">
                      The popularity of connected cars are getting popular day
                      by day, Nowadays many of the people are converting their
                      car into smart cars to access the advanced features which
                      smart cars are offering in this present time. Using such
                      services can make the services more convenient and easy to
                      use.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the most
                      popular software development company. We are also offering
                      the best IoT app development services at the best possible
                      rates. Our developers can be skilled to deliver the
                      best-connected car app based on the current trends.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'industrial_internet' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Industrial Internet</h3>
                    <p className="Title_para">
                      If we talk about the Industrial Internat services then it
                      is also in high demand in the market. Many people are now
                      inclined towards industrial internet services for making
                      life much easier and simpler. This type of service can
                      make accessing the services easier and helpful for the
                      people.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers and designers who are experts in developing the
                      best software solution for every business categories
                      including the Industrial Internet at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'smart_cities' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Smart Cities</h3>
                    <p className="Title_para">
                      Currently, technologies are trending in the market. Each
                      and every service is now converting their business into
                      online services by utilising the advanced technology
                      features. If we talk about the users then they are also
                      liking the digital services because this will save their
                      time as well as sometimes costs.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas which is one of the leading web
                      and app development. We have high expertise in offering
                      the best software solution to our clients. If we talk
                      about smart cities then many people are accepting this
                      technology, so this is the time for you to launch your own
                      IoT app in the market.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'iot_agriculture' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">IoT in Agriculture</h3>
                    <p className="Title_para">
                      Nowadays, the whole service market is digitilizing its
                      services for making the process much easier and convenient
                      to access by the users. If we talk about the users then
                      they are also loving the digital services because it is
                      convenient to use. And as per the increasing demand,
                      entrepreneurs are now making investments in digital
                      solutions.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development. We have a team of highly skilled developers
                      who are experts in offering the best IoT app development
                      services. This technology is also now integrated into the
                      agricultural services to make the services more convenient
                      to access by the agriculture owners and staff members. We
                      also offer services for the Agriculture industry.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'smart_retail' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Smart Retail</h3>
                    <p className="Title_para">
                      This era is as highly popular as the digital era because
                      every service is now converting into digital platforms by
                      launching a specific mobile app and web app development.
                      Due to the advancement in technology, the services are
                      getting digitalize because it is easy for users to access
                      the services easily as well as it is also convenient for
                      the business owners to manage the services conveniently.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas which is a leading web and app
                      development company. We have a team of highly experienced
                      developers who are experts in offering the best
                      development as well as designing services. We are
                      providing IoT app development services like Smart retail
                      services for the enhancement of the user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'iot_healthcare' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">IOT in healthcare</h3>
                    <p className="Title_para">
                      Every business owner including the healthcare industry is
                      now shifting towards the digital platform to offer more
                      convenient services to their users. The advancement in
                      technology has also affected the services platforms. Now
                      it is very easy for converting everything online and
                      access it easily at any time for any place.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the most
                      popular software development company. We have a team of
                      highly skilled designers and developers who are proficient
                      in developing IoT mobile app development for every
                      industry including the healthcare industry.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {ServiceProvideData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: '20px', cursor: 'pointer' }}
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
                    ''
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
            direction={'horizontal'}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current

                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            style={{ padding: '2.5rem 0' }}
          >
            <SwiperSlide>
              <Link
                href="https://play.google.com/store/apps/details?id=com.app.mindwheel"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image width={445} height={353}
                      src={require('../../public/assets/images/work/2.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">
                      Mindweel - On Demand Psychologist Hiring App
                    </div>
                    <p style={{ textAlign: 'justify' }}>
                      It’s an On Demand Psychologist OR Doctor Hiring App. It
                      has been very useful app in the current scenario of the
                      world where everyone is facing depression, anxiety and
                      mental health issues.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      This project has three main modules, Patient App,
                      Psychologist / Doctor App, and Admin Panel.
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                      Patient can able to create and manage their medical
                      profile, find the best available Psychologist / Doctors,
                      Check their profiles, availability, ratings and reviews,
                      Book them online, make a payment, give ratings and
                      reviews.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Psychologist OR Doctor can able to register themselves,
                      create their specialist profile, manage availability,
                      patient, booking, payment and other stuffs.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
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
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image width={445} height={353}
                      src={require('../../public/assets/images/work/bolt-app.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">Bold Delivery</div>
                    <p style={{ textAlign: 'justify' }}>
                      It’s a Food Ordering & Food Delivery App. We have created
                      a User app, Restaurant App, Driver App, and Admin panel.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      User can able to search, filter, check food details, place
                      an online order, make payment, track their orders, give
                      ratings and reviews.
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                      Restaurant can able to register themselves, list and
                      manage their food items, manage orders, track drivers and
                      orders.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Driver can able to register, manage their availabilities,
                      deliver the food items to the users.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Admin can able to manage users, food category & sub
                      category, restaurants, drivers, payment and other things.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="https://play.google.com/store/apps/details?id=com.servicemycar.android"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image width={445} height={353}
                      src={require('../../public/assets/images/work/service-my-car.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">Service my car</div>
                    <p>
                      It’s an On Demand Car Servicing App, It has 2 main
                      modules.
                    </p>
                    <p>
                      1) User App <br />
                      2) Admin Web Backend
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                      User can able to check out all the services packages
                      offered by a service center, check in details and compare
                      them, choose the service package and book online, pay
                      online, they can also choose pickup and drop off point,
                      check and approve extra repair cost, check their car 360°
                      inspections on their app, provide ratings and reviews of
                      the services.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Admin can able to list down all the services packages,
                      manage booking, extra repair services, payment, content of
                      an app, offers and other stuffs
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* <!-- Work Slider End --> */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose us for IoT app development?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('expert_developers')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === 'expert_developers' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/Expert-Developers.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Expert developers</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('great_portfolio')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === 'great_portfolio' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/robust-portfolio.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>
                      Great <br />
                      Portfolio
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('performance_driven')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === 'performance_driven' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/Performance-Driven..png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Performance Driven.</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('strong_support')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === 'strong_support' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image width={60} height={60}
                      src={require('../../public/assets/images/MobileAppDev/IOT App/Why Choose/Strong-Support.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>
                      Strong <br />
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'expert_developers' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expert developers</h3>
                    <p className="Title_para">
                      The demand for the IoT devices or we can say smart devices
                      are getting popular day by day. Many people are now
                      accepting technology and implementing it into day to day
                      life. The demand for smart devices, as well as smart
                      applications, are also raising because this will provide
                      the proper comfort and convenience of accessing all the
                      services.{' '}
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a group of highly talented
                      people who are experts in offering the online platform’s
                      solutions like Mobile app development, web app
                      development, website development and IoT app development
                      at the best rates. An experienced, skilled and creative
                      team of developers and designers with a proven track
                      record in building award-winning mobile apps for both IOS
                      and Android.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'great_portfolio' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Great Portfolio</h3>
                    <p className="Title_para">
                      Nowadays, a high number of people are using digital
                      solutions for accessing all kinds of services like food
                      delivery services, E-commerce services and more. Due to
                      the increasing demand for software solutions the service
                      owners, business owners, startups and entrepreneurs are
                      making investments in developing smart devices.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development. We have a talented pool of developers who are
                      highly experienced and expert in offering the best
                      software solution based on the specific niches. We have
                      built mobile apps for a wide variety of niches. We make
                      sure to address business concerns with custom development
                      and design.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'performance_driven' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Performance Driven</h3>
                    <p className="Title_para">
                      If we look in the market then we can clearly observe that
                      there are thousands of mobile app solutions available in
                      the market which offer similar kinds of services. To make
                      a place in the market, it is very important for you to
                      offer something unique and innovative IoT mobile app in
                      the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly experienced in
                      providing the best smart devices app development services
                      like IoT app development which can help you in the growth
                      of your business. Unmatched ease of use and glitch-free
                      performance are two areas of strength for our IoT apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'strong_support' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Strong Support</h3>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the most popular
                      Software development company. Our services include the
                      services like web app development, mobile app development
                      services, website development and IoT app development. We
                      have delivers the exact solutions to the clients as per
                      their expectations.
                    </p>
                    <p className="Title_para">
                      We highly follow the agile methodology for every software
                      development service. We divide the project into milestones
                      too easily developing every milestone with client
                      approval. After deployment of the project, we also offer
                      support and maintenance. We are always awake to hear about
                      your concerns. We have a robust post-development support
                      and maintenance team ready to address your concerns over
                      E-mail, telephone, Skype, Web chat etc.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {IndustriesData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: '20px', cursor: 'pointer' }}
                onClick={() => industriesOpen(i)}
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
                    ''
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
      <ContactUs question="Are you planning to launch a Successful IoT Mobile app in the market?" />
      {/* Contact Section End */}
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer/>
    </>
  )
}

export default IOTAppDev
