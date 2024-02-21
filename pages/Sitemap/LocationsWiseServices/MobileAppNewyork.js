import { React, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import '../../../components/Workdone/work.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import HeroSection from '../../../components/HeroSection'
import ContactUs from '../../../components/ContactUs'
import FAQ from '../../../components/FAQ'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import { Helmet } from 'react-helmet'

import Company from '../../../public/assets/images/sitemap/adelaide/Wordpress-Developer.png'
import Development from '../../../public/assets/images/sitemap/adelaide/Build-Taxi-App.png'
import Native from '../../../public/assets/images/sitemap/adelaide/Top-Mobile-Game-App-Developers.webp'
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'
const MobileAppNewyork = () => {
  const [activeService, setactiveService] = useState('Newyork_mobile')
  const [activeWhyChoose, setActiveWhyChoose] = useState('Solid_Portfolio')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet title="Best Mobile App Development Companies In New York" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development New York"
        des="It is the mobile app which is considered to be the prima facie of mobile presence instead of the mobile web. In fact, without a mobile app, and the branding and marketing effort of any business is incomplete now. Mobile apps opened the horizon of real-time and always-on access to a broad spectrum of services and contents. The App Ideas as a leading development company has made many businesses in New York proud with most value-driven custom mobile apps."
        list1="7+ Years of experience in Mobile App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Mobile App Development Company New York"
        service2="App Development Company New York"
        service3="App Development New York"
        image1={Company}
        image2={Development}
        image3={Native}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Your Best Mobile App Development Company New York</h3>
            <p>
              At App Ideas, we deliver a whole array of{' '}
              <strong> Mobile App Development Company New York </strong>,
              businesses need. We conceptualize, design, prototype and build
              future-ready, most advanced, scalable, and unique mobile apps that
              give a business audience-engagement and conversion rate it really
              deserves.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Newyork_mobile')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'Newyork_mobile' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/icons8-iphone-x-72-1.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Custom Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Exceptional')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'Exceptional' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Group-235.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>Exceptional UI/UX</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Cross_Platform')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Cross_Platform' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Cross-platform-Mobile-Apps.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Beta_Testing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Beta_Testing' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/mobile-app-testing.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>QA And Beta Testing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('App_Marketing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'App_Marketing' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Branding-And-Marketing.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>App Marketing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Support_Maintenance')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Support_Maintenance' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Mask-Group.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === 'Newyork_mobile' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom Mobile Apps</h3>
                    <p className="Title_para">
                      The popularity of connected cars are getting popular day
                      by We build innovative custom mobile apps for different
                      categories and business niches to make sure they
                      consistently deliver business conversion through steady
                      user engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Exceptional' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Exceptional UI/UX</h3>
                    <p className="Title_para">
                      We design, prototype, and build an attention-grabbing and
                      engaging user interface (UI) and effortlessly smooth User
                      Experience (UX) for apps of different categories and
                      niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Cross_Platform' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Cross-Platform Mobile Apps
                    </h3>
                    <p className="Title_para">
                      We develop cross-platform mobile apps for both iOS and
                      Android platforms while ensuring absolutely native user
                      experience for the users.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Beta_Testing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">QA and Beta Testing</h3>
                    <p className="Title_para">
                      We have an expertise-driven QA and Beta testing and
                      evaluation process to find out the performance glitches
                      and shortcomings of mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'App_Marketing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Marketings</h3>
                    <p className="Title_para">
                      We also undertake app marketing tasks and responsibilities
                      to ensure continuous acquisition, retention, business
                      conversion, and growth.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Support_Maintenance' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance</h3>
                    <p className="Title_para">
                      We offer full support and maintenance service for the
                      entire lifecycle of the app and provide updates with
                      required enhancements from time to time.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                    <Image
                      src={require('../../../public/assets/images/work/2.webp')}
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
                    <p>
                      It’s an On Demand Psychologist OR Doctor Hiring App. It
                      has been very useful app in the current scenario of the
                      world where everyone is facing depression, anxiety and
                      mental health issues.
                    </p>
                    <p>
                      This project has three main modules, Patient App,
                      Psychologist / Doctor App, and Admin Panel.
                    </p>

                    <p>
                      Patient can able to create and manage their medical
                      profile, find the best available Psychologist / Doctors,
                      Check their profiles, availability, ratings and reviews,
                      Book them online, make a payment, give ratings and
                      reviews.
                    </p>
                    <p>
                      Psychologist OR Doctor can able to register themselves,
                      create their specialist profile, manage availability,
                      patient, booking, payment and other stuffs.
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
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image
                      src={require('../../../public/assets/images/work/bolt-app.webp')}
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
                    <p>
                      It’s a Food Ordering & Food Delivery App. We have created
                      a User app, Restaurant App, Driver App, and Admin panel.
                    </p>
                    <p>
                      User can able to search, filter, check food details, place
                      an online order, make payment, track their orders, give
                      ratings and reviews.
                    </p>

                    <p>
                      Restaurant can able to register themselves, list and
                      manage their food items, manage orders, track drivers and
                      orders.
                    </p>
                    <p>
                      Driver can able to register, manage their availabilities,
                      deliver the food items to the users.
                    </p>
                    <p>
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
                    <Image
                      src={require('../../../public/assets/images/work/service-my-car.webp')}
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

                    <p>
                      User can able to check out all the services packages
                      offered by a service center, check in details and compare
                      them, choose the service package and book online, pay
                      online, they can also choose pickup and drop off point,
                      check and approve extra repair cost, check their car 360°
                      inspections on their app, provide ratings and reviews of
                      the services.
                    </p>
                    <p>
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
            <h3>Why Choose The App Ideas?</h3>
            <p>
              <strong> Mobile App Development Company New York</strong>, service
              provider are mostly known for their industry-acclaimed
              professional output. But we always cut ourselves out from these
              companies because of our excellent track record and exceptional
              output through several successful apps. Let us have a look at the
              key reasons to choose us for all mobile app development needs in
              the city.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Solid_Portfolio')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'Solid_Portfolio' &&
                      `service__provide_tab_active`
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/robust-portfolio.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>
                      Solid <br /> Portfolio
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Future_Ready')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'Future_Ready' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/Advanced-Technology-1.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>Future-Ready Solutions</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Advanced_Technology')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'Advanced_Technology' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/latest-technology.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Advanced Technology</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Agile_Development')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'Agile_Development' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/Agile-Development-1.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Transparent_Development')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'Transparent_Development' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/transperent-process.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>Transparent Development Process</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Competitive_Pricing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'Competitive_Pricing' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/competitive-pricing.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'Solid_Portfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Solid Portfolio</h3>
                    <p className="Title_para">
                      We boast of a great portfolio of a range of most
                      successful and acclaimed mobile apps built for businesses
                      and firms across New York City.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Future_Ready' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Future-ready Solutions</h3>
                    <p className="Title_para">
                      Thanks to a highly talented team of experienced developers
                      with industry-acclaimed expertise we can develop most
                      challenging mobile apps for business niches of all types.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Advanced_Technology' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Advanced Technology</h3>
                    <p className="Title_para">
                      We boast of exceptional command and skilled expertise with
                      the cutting-edge technologies and development tools used
                      for mobile apps of the future.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Agile_Development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      We use agile development methodology for faster
                      development while guaranteeing uncompromising app
                      performance through concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Transparent_Development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Transparent Development Process
                    </h3>
                    <p className="Title_para">
                      We boast of a transparent app development process where
                      clients can freely intervene and iterate with suggestions
                      and value additions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Competitive_Pricing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      We offer highly competitive pricing against mobile app
                      development services to make sure that startups and small
                      businesses can opt for our services.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <ContactUs
        question="Do you want to grab more details about our mobile app
                  development services in New York? Let us tell you how we can
                  make unique value additions to your business with our
                  development service. Just free to drop us a message and let us
                  get back to you."
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
  )
}

export default MobileAppNewyork
